"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[5002],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5283:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const i={},l="list-targets",o={unversionedId:"actions/list-targets",id:"actions/list-targets",title:"list-targets",description:"Source code",source:"@site/docs/actions/list-targets.md",sourceDirName:"actions",slug:"/actions/list-targets",permalink:"/tfaction/docs/actions/list-targets",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/list-targets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"list-targets-with-changed-files",permalink:"/tfaction/docs/actions/list-targets-with-changed-files"},next:{title:"list-working-dirs",permalink:"/tfaction/docs/actions/list-working-dirs"}},s={},u=[{value:"Example",id:"example",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Required Inputs",id:"required-inputs",level:3},{value:"Optional Inputs",id:"optional-inputs",level:3},{value:"Outputs",id:"outputs",level:2}],p={toc:u},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list-targets"},"list-targets"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/list-targets"},"Source code")),(0,a.kt)("p",null,"GitHub Actions to list targets"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- uses: suzuki-shunsuke/tfaction/list-targets@main\n  id: list-targets\n")),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("h3",{id:"required-inputs"},"Required Inputs"),(0,a.kt)("p",null,"Nothing."),(0,a.kt)("h3",{id:"optional-inputs"},"Optional Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"github_token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"secrets.GITHUB_TOKEN")),(0,a.kt)("td",{parentName:"tr",align:null},"GitHub Access Token")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"github_token"),"'s required permissions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pull-requests: write"),": To post comments by github-comment")),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tfmigrate_targets"),(0,a.kt)("td",{parentName:"tr",align:null},"[]object"),(0,a.kt)("td",{parentName:"tr",align:null},"List of tfmigrate targets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"terraform_targets"),(0,a.kt)("td",{parentName:"tr",align:null},"[]object"),(0,a.kt)("td",{parentName:"tr",align:null},"List of terraform targets")))))}m.isMDXComponent=!0}}]);