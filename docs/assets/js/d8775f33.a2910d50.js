"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[8953],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3077:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="terraform-plan",o={unversionedId:"actions/terraform-plan",id:"actions/terraform-plan",title:"terraform-plan",description:"Source code",source:"@site/docs/actions/terraform-plan.md",sourceDirName:"actions",slug:"/actions/terraform-plan",permalink:"/tfaction/docs/actions/terraform-plan",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/terraform-plan.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"terraform-apply",permalink:"/tfaction/docs/actions/terraform-apply"},next:{title:"test-module",permalink:"/tfaction/docs/actions/test-module"}},u=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Inputs",id:"inputs",children:[{value:"Required Inputs",id:"required-inputs",children:[],level:3},{value:"Optional Inputs",id:"optional-inputs",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terraform-plan"},"terraform-plan"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/terraform-plan"},"Source code")),(0,a.kt)("p",null,"GitHub Actions to run terraform plan"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Terraform"),(0,a.kt)("li",{parentName:"ul"},"AWS CLI or gsutil"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.conftest.dev/"},"conftest")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfcmt"},"tfcmt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-comment"},"github-comment"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- uses: suzuki-shunsuke/tfaction/terraform-plan@main\n  with:\n    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}\n")),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("h3",{id:"required-inputs"},"Required Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"environment variable"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"github_app_token"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"GitHub Access Token. ",(0,a.kt)("inlineCode",{parentName:"td"},"github.token")," can't be used because it can't invoke GitHub Actions Workflow")))),(0,a.kt)("h3",{id:"optional-inputs"},"Optional Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"environment variable"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"github_token"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"github.token")),(0,a.kt)("td",{parentName:"tr",align:null},"GitHub Access Token")))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"Nothing."))}c.isMDXComponent=!0}}]);