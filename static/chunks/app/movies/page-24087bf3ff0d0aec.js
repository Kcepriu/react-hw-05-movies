(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{7156:function(e,t,r){Promise.resolve().then(r.bind(r,8454))},8454:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(9268),o=r(6006),s=r(6008);let a=e=>({method:e,headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTQ3ZjhjODNlODMwYmVkNzhkNGExZTExMTE4YzJkMCIsInN1YiI6IjYzYjZlZjZlZjA0ZDAxMDBjZmM5NDBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5N3NXUWVK9iECT009XdsQye9ZLaHRrEYAC8cRxenU"}}),i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r="".concat("https://api.themoviedb.org/3","/search/movie?page=").concat(t,"&query=").concat(e),n=a("GET"),o=await fetch(r,n);if(!o.ok)return console.log("Failed to fetch data"),null;let s=await o.json();return s.results};var c=r(5846),u=r.n(c),l=r(551);let f=async e=>{let{nameFilms:t}=e,r=await i(t);if(r)return(0,n.jsx)("ul",{children:r.map(e=>(0,n.jsx)("li",{children:(0,n.jsxs)(u(),{href:"".concat(l.L.movies,"/").concat(e.id),children:[" ",e.title]})},e.id))})};var m=r(1333),h=r.n(m),p=function(){let e=(0,s.useSearchParams)(),t=e.get("nameFilms")||"",r=(0,s.useRouter)(),a=(0,s.usePathname)(),i=(0,o.useCallback)((t,r)=>{let n=new URLSearchParams(e.toString());return n.set(t,r),n.toString()},[e]),c=e=>{e.preventDefault();let n=e.currentTarget,o=n.elements.searchFilm.value;if(o===t)return;let s=a+(""===o?"":"?"+i("nameFilms",o));n.reset(),r.push(s)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:h().Wrapper,children:(0,n.jsxs)("form",{onSubmit:c,className:h().FormSearch,children:[(0,n.jsx)("input",{className:h().Input,name:"searchFilm",type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search films"}),(0,n.jsx)("button",{type:"submit",className:h().Button,children:"Search"})]})}),t&&(0,n.jsx)(f,{nameFilms:t})]})}},551:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});let n={root:"/",movies:"/movies"}},1333:function(e){e.exports={Wrapper:"Movies_Wrapper__tL_0m",FormSearch:"Movies_FormSearch__HuZq9",Input:"Movies_Input__zbOkr",Button:"Movies_Button__CqFvg"}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},9268:function(e,t,r){"use strict";e.exports=r(3177)},5846:function(e,t,r){e.exports=r(414)},6008:function(e,t,r){e.exports=r(167)}},function(e){e.O(0,[414,667,139,744],function(){return e(e.s=7156)}),_N_E=e.O()}]);