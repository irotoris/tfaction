"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[6160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5490:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},s="export-aws-secrets-manager",i={unversionedId:"actions/export-aws-secrets-manager",id:"actions/export-aws-secrets-manager",title:"export-aws-secrets-manager",description:"Source code",source:"@site/docs/actions/export-aws-secrets-manager.md",sourceDirName:"actions",slug:"/actions/export-aws-secrets-manager",permalink:"/tfaction/docs/actions/export-aws-secrets-manager",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/export-aws-secrets-manager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deploy-ssh-key",permalink:"/tfaction/docs/actions/deploy-ssh-key"},next:{title:"export-secrets",permalink:"/tfaction/docs/actions/export-secrets"}},c=[{value:"Example",id:"example",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Environment variables",id:"environment-variables",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"export-aws-secrets-manager"},"export-aws-secrets-manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/export-aws-secrets-manager"},"Source code")),(0,a.kt)("p",null,"GitHub Actions to export AWS Secrets Manager's secrets as environment variables"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- uses: suzuki-shunsuke/tfaction/export-aws-secrets-manager@main\n  with:\n    secrets: ${{ toJSON(secrets) }}\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"terraform_plan_config:\n  aws_secrets_manager:\n  - secret_id: atlas_api_key\n    envs:\n    - env_name: ATLAS_API_PUBLIC_KEY\n      secret_key: public_key\n    - env_name: ATLAS_API_PRIVATE_KEY\n      secret_key: private_key\n")),(0,a.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TFACTION_TARGET")," is required."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,"Nothing."),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"Nothing."))}p.isMDXComponent=!0}}]);