"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[6571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4748:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o="scaffold-module",i={unversionedId:"actions/scaffold-module",id:"actions/scaffold-module",title:"scaffold-module",description:"Scaffold Terraform Module pull request.",source:"@site/docs/actions/scaffold-module.md",sourceDirName:"actions",slug:"/actions/scaffold-module",permalink:"/tfaction/docs/actions/scaffold-module",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/scaffold-module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"release-module",permalink:"/tfaction/docs/actions/release-module"},next:{title:"scaffold-tfmigrate",permalink:"/tfaction/docs/actions/scaffold-tfmigrate"}},u=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Environment variables",id:"environment-variables",children:[],level:2},{value:"Inputs",id:"inputs",children:[{value:"Required Inputs",id:"required-inputs",children:[],level:3},{value:"Optional Inputs",id:"optional-inputs",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scaffold-module"},"scaffold-module"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/feature/module"},"Scaffold Terraform Module pull request"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/156072535-e9d65c62-23b8-48a1-9827-f9fce4ea191c.png",alt:"image"})),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/156072431-56345976-60ba-4874-afcd-37026ec0510a.png",alt:"image"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/scaffold-module"},"Source code")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/"},"aqua"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction-example/blob/main/.github/workflows/scaffold-module.yaml"},"Workflow")),(0,a.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TFACTION_TARGET (required)"),(0,a.kt)("li",{parentName:"ul"},"TFACTION_CONFIG (optional)")),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("h3",{id:"required-inputs"},"Required Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"github_app_token"),(0,a.kt)("td",{parentName:"tr",align:null},"GitHub Access Token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"module_path"),(0,a.kt)("td",{parentName:"tr",align:null},"file path to Module")))),(0,a.kt)("h3",{id:"optional-inputs"},"Optional Inputs"),(0,a.kt)("p",null,"Nothing."),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"Nothing."))}p.isMDXComponent=!0}}]);