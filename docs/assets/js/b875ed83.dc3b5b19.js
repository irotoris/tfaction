"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[5572],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8351:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:250},o="GitHub Access Token",l={unversionedId:"config/github-token",id:"config/github-token",title:"GitHub Access Token",description:"tfaction requires GitHub Access Token.",source:"@site/docs/config/github-token.md",sourceDirName:"config",slug:"/config/github-token",permalink:"/tfaction/docs/config/github-token",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/config/github-token.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{sidebar_position:250},sidebar:"tutorialSidebar",previous:{title:"tfaction.yaml",permalink:"/tfaction/docs/config/tfaction-yaml"},next:{title:"aqua.yaml",permalink:"/tfaction/docs/config/aqua"}},s={},u=[{value:"Required permissions of Repository&#39;s GITHUB_TOKEN",id:"required-permissions-of-repositorys-github_token",level:3},{value:"Required permissions of GitHub App",id:"required-permissions-of-github-app",level:3},{value:"Create GitHub App",id:"create-github-app",level:3}],p={toc:u},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github-access-token"},"GitHub Access Token"),(0,a.kt)("p",null,"tfaction requires GitHub Access Token."),(0,a.kt)("p",null,"Due to the restriction of the repository's GITHUB_TOKEN, tfaction requires other GitHub Access Token too."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow"},"https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When you use the repository's GITHUB_TOKEN to perform tasks, events triggered by the GITHUB_TOKEN will not create a new workflow run.")),(0,a.kt)("p",null,"We recommend using GitHub App's Token instead of Personal Access Token."),(0,a.kt)("p",null,"There are some GitHub Actions to create GitHub App's Access Token."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tibdex/github-app-token"},"https://github.com/tibdex/github-app-token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cybozu/octoken-action"},"https://github.com/cybozu/octoken-action"))),(0,a.kt)("h3",{id:"required-permissions-of-repositorys-github_token"},"Required permissions of Repository's GITHUB_TOKEN"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#permissions"},"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#permissions")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"permission"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id-token"),(0,a.kt)("td",{parentName:"tr",align:null},"write"),(0,a.kt)("td",{parentName:"tr",align:null},"For ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/aws-actions/configure-aws-credentials"},"aws-actions/configure-aws-credentials"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contents"),(0,a.kt)("td",{parentName:"tr",align:null},"read"),(0,a.kt)("td",{parentName:"tr",align:null},"Checkout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"issues"),(0,a.kt)("td",{parentName:"tr",align:null},"read"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"gh pr list"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"-l")," option requires the read permission")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pull-requests"),(0,a.kt)("td",{parentName:"tr",align:null},"write"),(0,a.kt)("td",{parentName:"tr",align:null},"pull request labels")))),(0,a.kt)("h3",{id:"required-permissions-of-github-app"},"Required permissions of GitHub App"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"permission"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contents"),(0,a.kt)("td",{parentName:"tr",align:null},"write"),(0,a.kt)("td",{parentName:"tr",align:null},"create commits and branches")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pull Requests"),(0,a.kt)("td",{parentName:"tr",align:null},"write"),(0,a.kt)("td",{parentName:"tr",align:null},"open pull requests")))),(0,a.kt)("h3",{id:"create-github-app"},"Create GitHub App"),(0,a.kt)("p",null,"Please see the official document. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app"},"https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app")))}m.isMDXComponent=!0}}]);