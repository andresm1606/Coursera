!function(e){function t(t){for(var n,r,i=t[0],u=t[1],c=0,f=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);f.length;)f.shift()()}var n={},o={1:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+""+({0:"main-profile-bootstrap"}[e]||e)+"-bundle.js"}(e);var s=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://static-cdn.spot.im/production/user-profile/tags/v2.30.2/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp_spotim_userProfile=window.webpackJsonp_spotim_userProfile||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;r(r.s=211)}({0:function(e,t){e.exports=window.__SPOTIM__.lib.react},110:function(e,t){e.exports=window.__SPOTIM__.lib.ReactDom},114:function(e,t){e.exports=window.__SPOTIM__.lib.request},19:function(e,t){e.exports=window.__SPOTIM__.SERVICES.configProvider},211:function(e,t,n){e.exports=n(212)},212:function(e,t,n){"use strict";var o,r;r=function(e){n.e(0).then(n.t.bind(null,240,7)).then((function(t){t.boot(e)}))},window.mountUserProfile=r,window.__SPOTIM__.initUserProfile=function(e,t){return r(t)},"function"==typeof Event?o=new Event("spot-im-user-profile-initialized"):(o=document.createEvent("Event")).initEvent("spot-im-user-profile-initialized",!0,!0),document.dispatchEvent(o)},241:function(e,t){e.exports=window.__SPOTIM__.lib.redux},242:function(e,t){e.exports=window.__SPOTIM__.lib.reduxThunk},243:function(e,t){e.exports=window.__SPOTIM__.lib.metricsReporting},39:function(e,t){e.exports=window.__SPOTIM__.lib.classnames},45:function(e,t){e.exports=window.__SPOTIM__.lib.ab},79:function(e,t){e.exports=window.__SPOTIM__.lib.currentUser},83:function(e,t){e.exports=window.__SPOTIM__.lib.errorReporting}});
//# sourceMappingURL=profile-bundle.js.map