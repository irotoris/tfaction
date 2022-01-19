#!/usr/bin/env bash

set -eu
set -o pipefail

TARGET=${TARGET:-${TFACTION_TARGET:-}}

curl -X POST "https://api.github.com/repos/$GITHUB_REPOSITORY/issues/${PR_NUMBER}/labels" \
	-H "Authorization: token ${GITHUB_TOKEN}" \
	-H "Accept: application/json" \
	-H "Content-type: application/json" \
	-d "[{\"name\":\"${TARGET}\"}]"

set +e
tfcmt -var "target:$TARGET" plan -- \
	terraform plan -detailed-exitcode -out tfplan.binary -input=false
code=$?
set -e

github-comment exec -- aws s3 cp tfplan.binary "s3://$S3_BUCKET_NAME_PLAN_FILE/$PR_NUMBER/$TARGET/tfplan.binary"

if [ "$code" = "1" ]; then
	exit 1
fi

github-comment exec -- terraform show -json tfplan.binary >tfplan.json
conftest -v # Install conftest in advance to exclude aqua lazy install log from github-comment's comment
github-comment exec -k conftest -- conftest test --no-color -p "$ROOT_DIR/policy/terraform" tfplan.json

if [ "$code" = "0" ]; then
	exit 0
fi

# In the pull request created by Renovate, the result of `terraform plan` must be `No change` to enable automerge safely.
# If you allow changes, please set the pull request label `renovate-change`.
if [ "$GITHUB_ACTOR" = "${RENOVATE_LOGIN:-renovate[bot]}" ]; then
	if ! grep -x renovate-change "$CI_INFO_TEMP_DIR/labels.txt" >/dev/null 2>&1; then
		github-comment post -k renovate-plan-change
		return 1
	fi
fi
