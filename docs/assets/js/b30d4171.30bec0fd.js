"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[114],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9689:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={},l="tfmigrate-apply",p={unversionedId:"actions/tfmigrate-apply",id:"actions/tfmigrate-apply",title:"tfmigrate-apply",description:"Source code",source:"@site/docs/actions/tfmigrate-apply.md",sourceDirName:"actions",slug:"/actions/tfmigrate-apply",permalink:"/tfaction/docs/actions/tfmigrate-apply",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/tfmigrate-apply.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"test",permalink:"/tfaction/docs/actions/test"},next:{title:"tfmigrate-plan",permalink:"/tfaction/docs/actions/tfmigrate-plan"}},o=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Inputs",id:"inputs",children:[{value:"Required Inputs",id:"required-inputs",children:[],level:3},{value:"Optional Inputs",id:"optional-inputs",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],u={toc:o};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tfmigrate-apply"},"tfmigrate-apply"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/tfmigrate-apply"},"Source code")),(0,a.kt)("p",null,"GitHub Actions to run tfmigrate apply"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/minamijoyo/tfmigrate"},"tfmigrate")),(0,a.kt)("li",{parentName:"ul"},"AWS CLI or gsutil"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cli/cli"},"GitHub CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/int128/ghcp"},"ghcp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-comment"},"github-comment"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- uses: suzuki-shunsuke/tfaction/tfmigrate-apply@main\n  with:\n    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}\n")),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("h3",{id:"required-inputs"},"Required Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"github_app_token"),(0,a.kt)("td",{parentName:"tr",align:null},"GitHub Access Token. ",(0,a.kt)("inlineCode",{parentName:"td"},"github.token")," can't be used because it can't invoke GitHub Actions Workflow")))),(0,a.kt)("h3",{id:"optional-inputs"},"Optional Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"environment variable"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"github_token"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"github.token")),(0,a.kt)("td",{parentName:"tr",align:null},"GitHub Access Token")))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"Nothing."))}c.isMDXComponent=!0}}]);