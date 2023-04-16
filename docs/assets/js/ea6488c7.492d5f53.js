"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[7294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:n,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(3117),n=(r(7294),r(3905));const l={sidebar_position:150},o="Create a pull request automatically to handle the problem when apply failed",p={unversionedId:"feature/follow-up-pr",id:"feature/follow-up-pr",title:"Create a pull request automatically to handle the problem when apply failed",description:"Sometimes terraform apply fails even if terraform plan passed.",source:"@site/docs/feature/follow-up-pr.md",sourceDirName:"feature",slug:"/feature/follow-up-pr",permalink:"/tfaction/docs/feature/follow-up-pr",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/feature/follow-up-pr.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Update related pull requests automatically when the base branch is updated",permalink:"/tfaction/docs/feature/auto-update-related-prs"},next:{title:"Update dependencies with Renovate safely",permalink:"/tfaction/docs/feature/renovate"}},i={},u=[{value:"\ud83d\udca1 Skip creating pull requests",id:"-skip-creating-pull-requests",level:2}],c={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-pull-request-automatically-to-handle-the-problem-when-apply-failed"},"Create a pull request automatically to handle the problem when apply failed"),(0,n.kt)("p",null,"Sometimes ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply")," fails even if ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform plan")," passed.\nIn that case, tfaction automatically creates a pull request with an empty commit to fix the failure."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/151699230-1c109a57-47d1-4c3b-9c3a-4dfec786a043.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/151699142-6d19cd51-eac5-4f69-bfe5-7920df69edc6.png",alt:"image"})),(0,n.kt)("p",null,"If the problem would be solved by running ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply")," again,\nplease merge the created pull request."),(0,n.kt)("p",null,"If any code fix is needed, please add commits to the created pull request and merge it."),(0,n.kt)("p",null,"Pull Requests are created per failed job.\nFor example, if two jobs failed, two pull requests would be created."),(0,n.kt)("h2",{id:"-skip-creating-pull-requests"},"\ud83d\udca1 Skip creating pull requests"),(0,n.kt)("p",null,"If you don't want to create pull requests by GitHub App, please see ",(0,n.kt)("a",{parentName:"p",href:"/tfaction/docs/feature/skip-creating-pr"},"Support skipping creating pull requests"),"."))}f.isMDXComponent=!0}}]);