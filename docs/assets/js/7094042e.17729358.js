"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[9183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:150},i="How to add a working directory",l={unversionedId:"config/add-working-directory",id:"config/add-working-directory",title:"How to add a working directory",description:"* Create S3 Buckets or Google Cloud Storage Buckets",source:"@site/docs/config/add-working-directory.md",sourceDirName:"config",slug:"/config/add-working-directory",permalink:"/tfaction/docs/config/add-working-directory",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/config/add-working-directory.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Set up",permalink:"/tfaction/docs/config/setup"},next:{title:"tfaction-root.yaml",permalink:"/tfaction/docs/config/tfaction-root-yaml"}},c={},s=[{value:"AWS IAM Role",id:"aws-iam-role",level:2},{value:"Required Permission",id:"required-permission",level:2},{value:"terraform_plan",id:"terraform_plan",level:3},{value:"terraform_apply",id:"terraform_apply",level:3},{value:"tfmigrate_plan",id:"tfmigrate_plan",level:3},{value:"tfmigrate_apply",id:"tfmigrate_apply",level:3},{value:"GCP",id:"gcp",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-a-working-directory"},"How to add a working directory"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create ",(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket"},"S3 Buckets")," or ",(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket"},"Google Cloud Storage Buckets"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For Terraform Plan files"),(0,a.kt)("li",{parentName:"ul"},"For tfmigrate History files"))),(0,a.kt)("li",{parentName:"ul"},"If you use AWS, Create AWS IAM Roles: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/terraform-aws-tfaction"},"https://github.com/suzuki-shunsuke/terraform-aws-tfaction")),(0,a.kt)("li",{parentName:"ul"},"If you use GCP, Create GCP Service Accounts"),(0,a.kt)("li",{parentName:"ul"},"Update ",(0,a.kt)("a",{parentName:"li",href:"/config/tfaction-root-yaml"},"tfaction-root.yaml")," if it is needed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feature/scaffold-working-dir"},"Scaffold the working directory"))),(0,a.kt)("h2",{id:"aws-iam-role"},"AWS IAM Role"),(0,a.kt)("p",null,"To access AWS, tfaction uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aws-actions/configure-aws-credentials"},"aws-actions/configure-aws-credentials"),".\ntfaction supports configuring Assume Role per working directory type and build type."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- working_directory: github/services/\n  # ...\n  terraform_plan_config:\n    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_plan\n  tfmigrate_plan_config:\n    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_plan\n  terraform_apply_config:\n    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_apply\n  tfmigrate_apply_config:\n    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_apply\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tfmigrate_plan: Assume Role for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/tfmigrate-plan"},"tfmigrate-plan")),(0,a.kt)("li",{parentName:"ul"},"tfmigrate_apply: Assume Role for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/tfmigrate-apply"},"tfmigrate-apply")),(0,a.kt)("li",{parentName:"ul"},"terraform_plan: Assume Role for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/terraform-plan"},"terraform-plan")),(0,a.kt)("li",{parentName:"ul"},"terraform_apply: Assume Role for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/terraform-apply"},"terraform-apply"))),(0,a.kt)("p",null,"We provide a Terraform Module to create these IAM Roles."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/terraform-aws-tfaction"},"https://github.com/suzuki-shunsuke/terraform-aws-tfaction")),(0,a.kt)("h2",{id:"required-permission"},"Required Permission"),(0,a.kt)("h3",{id:"terraform_plan"},"terraform_plan"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:PutObject",\n                "s3:DeleteObject"\n            ],\n            "Resource": "arn:aws:s3:::<S3 Bucket for Plan File>/*"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"terraform_apply"},"terraform_apply"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject",\n                "s3:PutObject"\n            ],\n            "Resource": "arn:aws:s3:::<S3 Bucket for Plan File>/*"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"tfmigrate_plan"},"tfmigrate_plan"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:DeleteObject"\n            ],\n            "Resource": "arn:aws:s3:::<S3 Bucket for Plan File>/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"tfmigrate_apply"},"tfmigrate_apply"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject",\n                "s3:PutObject"\n            ],\n            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>"\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"gcp"},"GCP"),(0,a.kt)("p",null,"To access GCP, tfaction uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google-github-actions/auth"},"google-github-actions/auth"),".\ntfaction supports configuring Service Accounts per working directory type and build type."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- working_directory: github/services/\n  # ...\n  terraform_plan_config:\n    gcp_service_account: terraform-plan@my-project.iam.gserviceaccount.com\n    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'\n  tfmigrate_plan_config:\n    gcp_service_account: tfmigrate-plan@my-project.iam.gserviceaccount.com\n    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'\n  terraform_apply_config:\n    gcp_service_account: terraform-apply@my-project.iam.gserviceaccount.com\n    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'\n  tfmigrate_apply_config:\n    gcp_service_account: tfmigrate-apply@my-project.iam.gserviceaccount.com\n    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'\n")))}f.isMDXComponent=!0}}]);