(window.webpackJsonp_spotim_registration=window.webpackJsonp_spotim_registration||[]).push([[5],{22:function(t,e,n){"use strict";n.r(e),n.d(e,"startSso",(function(){return x}));var r,o=n(23),a=n.n(o),c=n(24),s=n.n(c),i=n(13),u=n.n(i),p=n(0),l=n.n(p),d=n(31),f=n(25),g=n(1),m=n.n(g),h=n(28),b=n(29),v=n(27),w=s()(a.a.mark((function t(){var e,n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m.a.get("spotId"),t.next=3,l.a.getAsyncToken();case 3:return n=t.sent,r=n.token,t.abrupt("return",new Promise((function(t){h.a.post("/sso/start",{spot_id:e},{method:"POST",headers:Object(b.a)({spotId:e,token:r})}).then((function(e){Object(v.b)({accessToken:e.headers[f.a],openWebAccessToken:e.headers[f.b]});var n,r,o,a,c="Empty response";(null==e?void 0:e.data)&&(!0===(null==e||null===(r=e.data)||void 0===r?void 0:r.success)?(n=null===(o=e.data)||void 0===o?void 0:o.code_a,c=void 0):c=null===(a=e.data)||void 0===a?void 0:a.status);t({error:c,codeA:n})}))})));case 6:case"end":return t.stop()}}),t)}))),k=n(76),O=n(44),S=n(77),_=Object(S.a)("SSO");!function(t){t.LOGOUT="logout",t.LOGIN="login",t.SSO="SSO"}(r||(r={}));var x=function(){var t=s()(a.a.mark((function t(e){var n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.callback,o=e.onError,t.abrupt("return",new Promise(function(){var t=s()(a.a.mark((function t(e,c){var i,p,g,m,h,b,v;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_("Start SSO with arguments",n,o),"function"==typeof n){t.next=4;break}return c("Callback must be provided to start SSO process"),t.abrupt("return");case 4:return t.prev=4,_("Starting process ".concat(r.SSO)),t.next=8,l.a.getAsyncToken();case 8:if(g=t.sent,m=g.token){t.next=13;break}return t.next=13,Object(O.a)({spotId:f.n,token:m});case 13:return _("Calling login"),t.next=16,Object(d.a)({spotId:f.n});case 16:if(i=t.sent,_("Login call finished with currentUser",i),!(null===(p=i)||void 0===p?void 0:p.isRegistered)){t.next=24;break}return _("Current User is already registered"),e(i),t.abrupt("return");case 24:return _("Calling SSO endpoint"),t.next=27,w();case 27:if(h=t.sent,b=h.error,v=h.codeA,_("SSO endpoint finished with codeA or error",v,b),!b&&v){t.next=37;break}return c("Error receiving code A (".concat(b||"received empty codeA",")")),t.abrupt("return");case 37:_("Calling user callback with codeA ".concat(v)),n(v,function(){var t=s()(a.a.mark((function t(n){var o,s,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_("Running complete callback with codeB ".concat(n)),n){t.next=6;break}return c("Can't complete SSO process since codeB is empty or missing"),t.abrupt("return");case 6:return _("Calling complete endpoint with codeB ".concat(n)),t.next=9,Object(k.a)({codeB:n});case 9:if(o=t.sent,s=o.error,u=o.isSuccess,_("Complete endpoint finished with success: ".concat(u)),u){t.next=18;break}return c("Can't complete SSO process (".concat(s,")")),t.abrupt("return");case 18:return _("Calling login"),t.next=21,Object(d.a)({spotId:f.n});case 21:if(!(i=t.sent)){t.next=28;break}return l.a.set(i),e(i),t.abrupt("return");case 28:return _("SSO error"),_("Complete process ".concat(r.SSO)),c("SSO FAILED"),t.abrupt("return");case 32:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 39:t.next=47;break;case 41:t.prev=41,t.t0=t.catch(4),u()("SSO error ".concat(t.t0.toString()),new Error("[Conversation]-[SSO]")),_("SSO error ".concat(t.t0.toString())),null==o||o(t.t0),c(t.t0);case 47:case"end":return t.stop()}}),t,null,[[4,41]])})));return function(e,n){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},25:function(t,e,n){"use strict";n.d(e,"n",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"m",(function(){return s})),n.d(e,"i",(function(){return i})),n.d(e,"j",(function(){return u})),n.d(e,"o",(function(){return p})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return g})),n.d(e,"g",(function(){return m})),n.d(e,"b",(function(){return h})),n.d(e,"f",(function(){return b})),n.d(e,"a",(function(){return v})),n.d(e,"d",(function(){return w}));var r=n(1),o=n.n(r),a=o.a.get("init_data.config.id"),c=o.a.get("init_data.config.brand_color"),s=o.a.get("init_data.config.name"),i=o.a.get("init_data.config.connect_networks"),u=o.a.get("init_data.config.ltr")?"ltr":"rtl",p=o.a.get("tenant_config.registration.use_new_sso_api",!1),l=2===o.a.get("tenant_config.authentication.version",1),d=o.a.get("tenant_config.authentication.real_user_mode",!1),f="x-spotim-page-view-id",g="x-spotim-device-uuid",m="x-spotim-token",h="x-openweb-token",b="x-spotim-spotid",v="x-access-token",w="x-spotim-device-v2"},27:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));function r(t){var e=t.accessToken,n=t.openWebAccessToken;e&&localStorage.setItem("SPOTIM_ACCESS_TOKEN",e),n&&localStorage.setItem("OPENWEB_ACCESS_TOKEN",n)}function o(){return{accessToken:localStorage.getItem("SPOTIM_ACCESS_TOKEN"),openWebAccessToken:localStorage.getItem("OPENWEB_ACCESS_TOKEN")}}},28:function(t,e,n){"use strict";var r=n(50),o=n.n(r),a=n(38),c=o.a.create({baseURL:a.a.apiURL});e.a=c},29:function(t,e,n){"use strict";var r=n(2),o=n.n(r),a=n(51),c=n(25),s=n(27);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e,n=t.token,r=t.spotId,i=Object(s.a)().openWebAccessToken;return u(u({},c.k?o()({},c.b,i):{}),{},(e={},o()(e,c.e,window.__SPOTIM_PAGE_VIEW_ID__),o()(e,c.c,Object(a.getStorageDeviceUuid)().uuid||""),o()(e,c.g,n),o()(e,c.f,r),e))}},31:function(t,e,n){"use strict";var r=n(23),o=n.n(r),a=n(24),c=n.n(a),s=n(0),i=n.n(s),u=n(28),p=n(29),l=n(27),d=n(25),f=n(52),g=n(13),m=n.n(g);function h(t){try{localStorage.setItem("SPOTIM_DEVICE_V2",t)}catch(t){m()("registration error saving device v2",t)}}e.a=function(){var t=c()(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.spotId,!d.k&&!d.l){t.next=5;break}return t.abrupt("return",new Promise(function(){var t=c()(o.a.mark((function t(e){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.a)("v1.0.0/authentication/current-user",{method:"POST",headers:{"x-spot-id":n,"x-real-user-mode":"true"}});case 2:r=t.sent,(a=Object(s.parseUser)(r)).isRegistered&&document.dispatchEvent(new CustomEvent("spot-im-post-login",{detail:{currentUser:{email:a.email||"",socialNetworks:a.socialNetworks||[],username:a.username||""}}})),e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:return t.next=7,i.a.getAsyncToken();case 7:return r=t.sent,a=r.token,t.abrupt("return",new Promise((function(t){u.a.post("/me/login",{spot_id:n},{method:"POST",headers:Object(p.a)({spotId:n,token:a})}).then((function(e){Object(l.b)({accessToken:e.headers[d.a],openWebAccessToken:e.headers[d.b]}),h(e.headers[d.d]);var n=Object(s.parseUser)(e.data);n.isRegistered&&document.dispatchEvent(new CustomEvent("spot-im-post-login",{detail:{currentUser:{email:n.email||"",socialNetworks:n.socialNetworks||[],username:n.username||""}}})),t(n)}))})));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},38:function(t,e,n){"use strict";var r={development:{apiURL:"https://v2.staging-spot.im/api",socialLoginCallbackUrl:"https://app-cdn.staging-spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.staging-spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://v2.staging-spot.im/api/social-connect"},staging:{apiURL:"https://v2.staging-spot.im/api",socialLoginCallbackUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://v2.staging-spot.im/api/social-connect"},plike:{apiURL:"https://www.spot.im/api",socialLoginCallbackUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://www.spot.im/api/social-connect'"},production:{apiURL:"https://www.spot.im/api",socialLoginCallbackUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://www.spot.im/api/social-connect"}};e.a=r[window.__SPOTIMENV__||"production"]},44:function(t,e,n){"use strict";var r=n(23),o=n.n(r),a=n(24),c=n.n(a),s=n(28),i=n(0),u=n.n(i),p=n(29),l=n(27),d=n(25);e.a=function(t){var e=t.spotId,n=t.token;return new Promise(function(){var t=c()(o.a.mark((function t(r){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getAsyncToken();case 2:a=t.sent,c=a.networkId,s.a.post("/me/network-token/".concat(c),{spot_id:e},{method:"POST",headers:Object(p.a)({spotId:e,token:n})}).then((function(t){Object(l.b)({accessToken:t.headers[d.a],openWebAccessToken:t.headers[d.b]});var e=t.data,n=e.network_id,o=e.token;u.a.setToken(o,n),r({token:o})}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},76:function(t,e,n){"use strict";var r=n(23),o=n.n(r),a=n(24),c=n.n(a),s=n(0),i=n.n(s),u=n(1),p=n.n(u),l=n(28),d=n(29),f=n(27),g=n(25);e.a=function(){var t=c()(o.a.mark((function t(e){var n,r,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.codeB,t.next=3,i.a.getAsyncToken();case 3:return r=t.sent,a=r.token,c=p.a.get("spotId"),t.abrupt("return",new Promise((function(t){l.a.post("/sso/complete",{code_b:n},{method:"POST",headers:Object(d.a)({spotId:c,token:a})}).then((function(e){Object(f.b)({accessToken:e.headers[g.a],openWebAccessToken:e.headers[g.b]});var n,r,o="Empty response",a=!1;e.data&&(!0===(null==e||null===(n=e.data)||void 0===n?void 0:n.success)?(a=!0,o=void 0):o=null===(r=e.data)||void 0===r?void 0:r.error);t({error:o,isSuccess:a})}))})));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},77:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=null;function o(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=console).log.apply(e,["%cSpot.IM ".concat(t),"background: #307fe2; color: white;"].concat(r))}function a(t){var e=function(){try{if(null===r){var t=new URLSearchParams(window.location.search);if((r=t.get("SPOTIM_DEBUG_API".toLowerCase()))||(r=window.SPOTIM_DEBUG_API),!r)try{r=window.localStorage.getItem("SPOTIM_DEBUG_API")}catch(t){}r||(r=""),r=r.split(",").map((function(t){return t.toLowerCase()}))}return r}catch(t){return[]}}();return e.indexOf("*")>-1||e.indexOf(t.toLowerCase())>-1?o.bind(null,t):function(){}}}}]);
//# sourceMappingURL=registration-start-sso-bundle.js.map