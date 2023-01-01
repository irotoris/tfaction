"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4706:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:100},i="Set up",c={unversionedId:"config/setup",id:"config/setup",title:"Set up",description:"AWS or GCP Account is required.",source:"@site/docs/config/setup.md",sourceDirName:"config",slug:"/config/setup",permalink:"/tfaction/docs/config/setup",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/config/setup.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/tfaction/docs/config/"},next:{title:"How to add a working directory",permalink:"/tfaction/docs/config/add-working-directory"}},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up"},"Set up"),(0,o.kt)("p",null,"AWS or GCP Account is required."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you use AWS, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services"},"Configure AWS Identity Provider")),(0,o.kt)("li",{parentName:"ul"},"If you use Google Cloud Platform, setup ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google-github-actions/auth#setup"},"GCP Workload Identity Federation")),(0,o.kt)("li",{parentName:"ul"},"Prepare following files",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/config/tfaction-root-yaml"},"tfaction-root.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/config/tfaction-yaml"},"tfaction.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/config/aqua"},"aqua.yaml")),(0,o.kt)("li",{parentName:"ul"},"templates of working directories"),(0,o.kt)("li",{parentName:"ul"},"Renovate configuration",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfaction-example/blob/main/renovate.json5"},"example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/"},"Document")))))),(0,o.kt)("li",{parentName:"ul"},"Create GitHub Personal Access Token or GitHub App"),(0,o.kt)("li",{parentName:"ul"},"Configure GitHub Actions Workflow using tfaction")),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/tfaction/docs/config/add-working-directory"},"How to add a working directory")," too."))}p.isMDXComponent=!0}}]);