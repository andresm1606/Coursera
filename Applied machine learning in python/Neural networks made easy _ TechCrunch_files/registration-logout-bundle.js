(window.webpackJsonp_spotim_registration=window.webpackJsonp_spotim_registration||[]).push([[4],{16:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n.n(r),a=n(2),c=n.n(a),s=n(24),i=n.n(s),u=n(28),p=n(0),l=n.n(p),d=n(1),f=n.n(d),m=n(44),g=n(31),b=n(29),h=n(27),O=n(25),w=n(52);function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=i()(o.a.mark((function t(){var e,n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getAsyncToken();case 2:return e=t.sent,n=e.token,r=f.a.get("spotId"),t.next=7,l.a.getAsyncUser();case 7:if(a=t.sent,a.isRegistered){t.next=13;break}return t.abrupt("return",Promise.resolve(a));case 13:if(!O.k){t.next=17;break}return t.abrupt("return",new Promise(function(){var t=i()(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.a)("/v1.0.0/authentication/logout",{method:"POST",headers:{"x-spot-id":r}});case 2:n=t.sent,a=Object(p.parseUser)(n),l.a.set(v(v({},a),{},{isSuperAdmin:!1})),e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 17:return t.abrupt("return",new Promise((function(t){u.a.post("/me/logout",{spot_id:r},{method:"POST",headers:Object(b.a)({spotId:r,token:n})}).then(function(){var e=i()(o.a.mark((function e(a){var c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(h.b)({accessToken:a.headers[O.a],openWebAccessToken:a.headers[O.b]}),e.next=3,Object(m.a)({spotId:r,token:n});case 3:return c=e.sent,s=c.token,l.a.setToken(s),e.next=8,Object(g.a)({spotId:r});case 8:i=e.sent,l.a.set(v(v({},i),{},{isSuperAdmin:!1})),t(i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 18:case"end":return t.stop()}}),t)})))},25:function(t,e,n){"use strict";n.d(e,"n",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"m",(function(){return s})),n.d(e,"i",(function(){return i})),n.d(e,"j",(function(){return u})),n.d(e,"o",(function(){return p})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"g",(function(){return g})),n.d(e,"b",(function(){return b})),n.d(e,"f",(function(){return h})),n.d(e,"a",(function(){return O})),n.d(e,"d",(function(){return w}));var r=n(1),o=n.n(r),a=o.a.get("init_data.config.id"),c=o.a.get("init_data.config.brand_color"),s=o.a.get("init_data.config.name"),i=o.a.get("init_data.config.connect_networks"),u=o.a.get("init_data.config.ltr")?"ltr":"rtl",p=o.a.get("tenant_config.registration.use_new_sso_api",!1),l=2===o.a.get("tenant_config.authentication.version",1),d=o.a.get("tenant_config.authentication.real_user_mode",!1),f="x-spotim-page-view-id",m="x-spotim-device-uuid",g="x-spotim-token",b="x-openweb-token",h="x-spotim-spotid",O="x-access-token",w="x-spotim-device-v2"},27:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));function r(t){var e=t.accessToken,n=t.openWebAccessToken;e&&localStorage.setItem("SPOTIM_ACCESS_TOKEN",e),n&&localStorage.setItem("OPENWEB_ACCESS_TOKEN",n)}function o(){return{accessToken:localStorage.getItem("SPOTIM_ACCESS_TOKEN"),openWebAccessToken:localStorage.getItem("OPENWEB_ACCESS_TOKEN")}}},28:function(t,e,n){"use strict";var r=n(50),o=n.n(r),a=n(38),c=o.a.create({baseURL:a.a.apiURL});e.a=c},29:function(t,e,n){"use strict";var r=n(2),o=n.n(r),a=n(51),c=n(25),s=n(27);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e,n=t.token,r=t.spotId,i=Object(s.a)().openWebAccessToken;return u(u({},c.k?o()({},c.b,i):{}),{},(e={},o()(e,c.e,window.__SPOTIM_PAGE_VIEW_ID__),o()(e,c.c,Object(a.getStorageDeviceUuid)().uuid||""),o()(e,c.g,n),o()(e,c.f,r),e))}},31:function(t,e,n){"use strict";var r=n(23),o=n.n(r),a=n(24),c=n.n(a),s=n(0),i=n.n(s),u=n(28),p=n(29),l=n(27),d=n(25),f=n(52),m=n(13),g=n.n(m);function b(t){try{localStorage.setItem("SPOTIM_DEVICE_V2",t)}catch(t){g()("registration error saving device v2",t)}}e.a=function(){var t=c()(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.spotId,!d.k&&!d.l){t.next=5;break}return t.abrupt("return",new Promise(function(){var t=c()(o.a.mark((function t(e){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.a)("v1.0.0/authentication/current-user",{method:"POST",headers:{"x-spot-id":n,"x-real-user-mode":"true"}});case 2:r=t.sent,(a=Object(s.parseUser)(r)).isRegistered&&document.dispatchEvent(new CustomEvent("spot-im-post-login",{detail:{currentUser:{email:a.email||"",socialNetworks:a.socialNetworks||[],username:a.username||""}}})),e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:return t.next=7,i.a.getAsyncToken();case 7:return r=t.sent,a=r.token,t.abrupt("return",new Promise((function(t){u.a.post("/me/login",{spot_id:n},{method:"POST",headers:Object(p.a)({spotId:n,token:a})}).then((function(e){Object(l.b)({accessToken:e.headers[d.a],openWebAccessToken:e.headers[d.b]}),b(e.headers[d.d]);var n=Object(s.parseUser)(e.data);n.isRegistered&&document.dispatchEvent(new CustomEvent("spot-im-post-login",{detail:{currentUser:{email:n.email||"",socialNetworks:n.socialNetworks||[],username:n.username||""}}})),t(n)}))})));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},38:function(t,e,n){"use strict";var r={development:{apiURL:"https://v2.staging-spot.im/api",socialLoginCallbackUrl:"https://app-cdn.staging-spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.staging-spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://v2.staging-spot.im/api/social-connect"},staging:{apiURL:"https://v2.staging-spot.im/api",socialLoginCallbackUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://v2.staging-spot.im/api/social-connect"},plike:{apiURL:"https://www.spot.im/api",socialLoginCallbackUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://www.spot.im/api/social-connect'"},production:{apiURL:"https://www.spot.im/api",socialLoginCallbackUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html"),socialLoginCancelUrl:"https://app-cdn.spot.im/modules/social-login/".concat("4.0.1","/index.html?cancelled=true"),socialConnect:"https://www.spot.im/api/social-connect"}};e.a=r[window.__SPOTIMENV__||"production"]},44:function(t,e,n){"use strict";var r=n(23),o=n.n(r),a=n(24),c=n.n(a),s=n(28),i=n(0),u=n.n(i),p=n(29),l=n(27),d=n(25);e.a=function(t){var e=t.spotId,n=t.token;return new Promise(function(){var t=c()(o.a.mark((function t(r){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getAsyncToken();case 2:a=t.sent,c=a.networkId,s.a.post("/me/network-token/".concat(c),{spot_id:e},{method:"POST",headers:Object(p.a)({spotId:e,token:n})}).then((function(t){Object(l.b)({accessToken:t.headers[d.a],openWebAccessToken:t.headers[d.b]});var e=t.data,n=e.network_id,o=e.token;u.a.setToken(o,n),r({token:o})}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=registration-logout-bundle.js.map