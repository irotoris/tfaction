(()=>{"use strict";var e,f,a,t,c,r={},b={};function d(e){var f=b[e];if(void 0!==f)return f.exports;var a=b[e]={id:e,loaded:!1,exports:{}};return r[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=r,d.c=b,e=[],d.O=(f,a,t,c)=>{if(!a){var r=1/0;for(i=0;i<e.length;i++){a=e[i][0],t=e[i][1],c=e[i][2];for(var b=!0,o=0;o<a.length;o++)(!1&c||r>=c)&&Object.keys(d.O).every((e=>d.O[e](a[o])))?a.splice(o--,1):(b=!1,c<r&&(r=c));if(b){e.splice(i--,1);var n=t();void 0!==n&&(f=n)}}return f}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[a,t,c]},d.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return d.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var c=Object.create(null);d.r(c);var r={};f=f||[null,a({}),a([]),a(a)];for(var b=2&t&&e;"object"==typeof b&&!~f.indexOf(b);b=a(b))Object.getOwnPropertyNames(b).forEach((f=>r[f]=()=>e[f]));return r.default=()=>e,d.d(c,r),c},d.d=(e,f)=>{for(var a in f)d.o(f,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((f,a)=>(d.f[a](e,f),f)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",114:"b30d4171",702:"36ce94ce",752:"12d81c20",849:"84acdc50",1372:"1db64337",1431:"2526c9f6",1532:"85fc1797",1649:"3f479b41",1784:"ee6bc0d1",1859:"c118aa88",1933:"7be14212",2080:"c7e062af",2177:"46e5cf78",2426:"e21b51a5",2566:"af08e06a",3417:"9b165e90",3423:"7b1eee54",3767:"e6119bcf",3777:"1a72fb9d",4246:"0340c85c",4387:"5618a29c",4707:"ebcc1277",4759:"427afbfa",4907:"3b04732f",5002:"2e3f1498",5362:"90bea83b",5572:"b875ed83",5764:"b96e373a",5773:"5980a864",5960:"7cb0de03",6160:"19db983f",6571:"8c0f2434",6811:"bc6b15c8",6840:"bd74bfd0",7162:"d589d3a7",7294:"ea6488c7",7412:"55137415",7588:"fd8fe323",7776:"73eb67aa",7918:"17896441",8282:"0fdf6153",8296:"486cfbf5",8337:"c6d0ff9c",8384:"3fc28dbf",8518:"3382fb32",8557:"464539fe",8894:"47361e2e",8953:"d8775f33",9183:"7094042e",9233:"84af34e6",9514:"1be78505",9849:"55922973"}[e]||e)+"."+{53:"c5df727f",114:"30bec0fd",702:"2b0c2137",752:"b1f9b346",849:"6558e36c",1372:"d7811f12",1431:"ab5a39ba",1532:"c9ad63f3",1649:"35256071",1784:"b4385c92",1859:"47253847",1933:"61311df8",2080:"6a8ddb15",2090:"f318dd65",2177:"49698661",2426:"63a9c944",2566:"5f2c8129",3417:"0503ffb7",3423:"67cf2514",3767:"52eef13b",3777:"8aca5b15",4246:"7eca9f29",4387:"44fb87b2",4608:"94e57c51",4707:"27b815e0",4759:"632657e5",4907:"d3db4e87",5002:"e8e07787",5362:"17193484",5572:"929a741f",5764:"9ba1cc48",5773:"1dc74b2c",5960:"52c6d529",6160:"e402c9af",6571:"43e12841",6780:"43807237",6811:"5d47c9f7",6840:"3a6f6df7",6945:"8b18b609",7162:"5c27d162",7294:"481bb358",7412:"1c5e113c",7588:"e8b873df",7776:"730c1dec",7918:"3306c42c",8282:"96f43602",8296:"5f064417",8337:"c5659c8e",8384:"b0ea4c49",8518:"800ab0a1",8557:"cf3b5b62",8894:"9f16339d",8953:"a2910d50",9183:"80112872",9233:"25e82685",9514:"2a90c856",9849:"18d1f08d"}[e]+".js",d.miniCssF=e=>"assets/css/styles.1b978f61.css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),t={},c="tfaction:",d.l=(e,f,a,r)=>{if(t[e])t[e].push(f);else{var b,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==c+a){b=s;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",c+a),b.src=e),t[e]=[f];var u=(f,a)=>{b.onerror=b.onload=null,clearTimeout(l);var c=t[e];if(delete t[e],b.parentNode&&b.parentNode.removeChild(b),c&&c.forEach((e=>e(a))),f)return f(a)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=u.bind(null,b.onerror),b.onload=u.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/tfaction/docs/",d.gca=function(e){return e={17896441:"7918",55137415:"7412",55922973:"9849","935f2afb":"53",b30d4171:"114","36ce94ce":"702","12d81c20":"752","84acdc50":"849","1db64337":"1372","2526c9f6":"1431","85fc1797":"1532","3f479b41":"1649",ee6bc0d1:"1784",c118aa88:"1859","7be14212":"1933",c7e062af:"2080","46e5cf78":"2177",e21b51a5:"2426",af08e06a:"2566","9b165e90":"3417","7b1eee54":"3423",e6119bcf:"3767","1a72fb9d":"3777","0340c85c":"4246","5618a29c":"4387",ebcc1277:"4707","427afbfa":"4759","3b04732f":"4907","2e3f1498":"5002","90bea83b":"5362",b875ed83:"5572",b96e373a:"5764","5980a864":"5773","7cb0de03":"5960","19db983f":"6160","8c0f2434":"6571",bc6b15c8:"6811",bd74bfd0:"6840",d589d3a7:"7162",ea6488c7:"7294",fd8fe323:"7588","73eb67aa":"7776","0fdf6153":"8282","486cfbf5":"8296",c6d0ff9c:"8337","3fc28dbf":"8384","3382fb32":"8518","464539fe":"8557","47361e2e":"8894",d8775f33:"8953","7094042e":"9183","84af34e6":"9233","1be78505":"9514"}[e]||e,d.p+d.u(e)},(()=>{var e={1303:0,532:0};d.f.j=(f,a)=>{var t=d.o(e,f)?e[f]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var c=new Promise(((a,c)=>t=e[f]=[a,c]));a.push(t[2]=c);var r=d.p+d.u(f),b=new Error;d.l(r,(a=>{if(d.o(e,f)&&(0!==(t=e[f])&&(e[f]=void 0),t)){var c=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;b.message="Loading chunk "+f+" failed.\n("+c+": "+r+")",b.name="ChunkLoadError",b.type=c,b.request=r,t[1](b)}}),"chunk-"+f,f)}},d.O.j=f=>0===e[f];var f=(f,a)=>{var t,c,r=a[0],b=a[1],o=a[2],n=0;if(r.some((f=>0!==e[f]))){for(t in b)d.o(b,t)&&(d.m[t]=b[t]);if(o)var i=o(d)}for(f&&f(a);n<r.length;n++)c=r[n],d.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return d.O(i)},a=self.webpackChunktfaction=self.webpackChunktfaction||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();