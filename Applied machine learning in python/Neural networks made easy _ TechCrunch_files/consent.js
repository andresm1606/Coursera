/*! GUCE 1.0.86 Copyright 2018 Oath Holdings, Inc. */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=29)}([function(e,t,n){"use strict";t.__esModule=!0,function(e){e.success="success",e.fail="fail",e.missingParams="missingParams"}(t.SetSessionStatus||(t.SetSessionStatus={})),function(e){e.backgroundPost="backgroundPost",e.done="done",e.error="error",e.interaction="interaction",e.view="view"}(t.LogEventType||(t.LogEventType={})),function(e){e.contextData="contextData",e.setCookies="setCookies",e.dimensions="dimensions",e.done="done",e.log="log",e.navigate="navigate",e.redirect="redirect",e.resize="resize",e.getSession="getSession",e.setSession="setSession",e.setSessionStatus="setSessionStatus",e.getData="getData",e.invokeCTA="invokeCTA",e.frameReady="frameReady",e.frameDisplayed="frameDisplayed"}(t.MessageType||(t.MessageType={})),function(e){e.blank="blank",e.self="self"}(t.NavigationTarget||(t.NavigationTarget={}))},function(e,t,n){"use strict";t.__esModule=!0;var o=decodeURIComponent,i=/; */;function r(e,t){try{return t(e)}catch(t){return e}}t.default=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},s=t||{},a=e.split(i),u=s.decode||o,c=0;c<a.length;c++){var l=a[c],f=l.indexOf("=");if(!(f<0)){var d=l.substr(0,f).trim(),p=l.substr(++f,l.length).trim();'"'===p[0]&&(p=p.slice(1,-1)),void 0===n[d]&&(n[d]=[]),n[d].push(r(p,u))}}return n}},function(e,t,n){"use strict";t.__esModule=!0;var o=window;function i(e){var t=+new Date,n=[];for(var o in e)o&&e.hasOwnProperty(o)&&null!=e[o]&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(""+e[o]));return"https://ganon.yahoo.com/p?s=1197805870&t="+t+"&"+n.join("&")}function r(e,t){"function"==typeof o.dispatchEvent&&"function"==typeof o.CustomEvent&&o.dispatchEvent(new CustomEvent("guce-beacon",{detail:{eventType:e,params:t}}))}function s(e,t,n,o){e.addEventListener(t,n,{capture:!1,passive:o})}function a(e,t,n){var i,r,a=!1,u=function(){i=null,o.clearTimeout(r),t&&t()};if(!n&&o.navigator&&"function"==typeof o.navigator.sendBeacon)try{o.navigator.sendBeacon(e)?u():a=!0}catch(e){a=!0}else a=!0;a&&(s(i=new Image,"error",u),s(i,"load",u),s(i,"abort",u),i.src=e,r=o.setTimeout(u,1e3))}t.logEvent=function(e,t,n,s){var u=s||o.OathGUCE&&o.OathGUCE.lastDecision&&o.OathGUCE.lastDecision.normalizedOptions;if(null==e||null==t||null==u||u.reportOnly)n&&n();else{t._R=o.location.hostname,t._w=t._w?t._w:o.location.href,t.etrg=e,t.ver=t.ver,t.gm_vn="1.0.86",t.gm_beu=u.isProductEU?"1":"0",t.gm_inline=u.inlineConsent?"1":"0",t.gm_lang=u.locale;var c=u.consentHost,l=c&&c.substring(c.indexOf("guce.")+5);t.gm_np=l&&l.substring(0,l.indexOf("."));var f=t;t.ver||(t.ver="gucejs"),a(i(f),n),r(e,f)}},t.buildBeaconUrl=i,t.fireCustomEvent=r,t.fireBeacon=a},function(e,t,n){"use strict";t.__esModule=!0;var o,i=n(9),r=n(0),s=n(2),a=n(10),u=window,c=new RegExp("^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc)$");function l(e){if(e){var t=e.split("/");return t[0]+"//"+t[2]}return""}function f(e,t){return(e+"/").indexOf("/"+t+"/")>0||(e+"/").indexOf("."+t+"/")>0||(""+e).indexOf("/"+t+":")>0||(""+e).indexOf("."+t+":")>0}function d(e){var t=l(e);return 0===t.indexOf("https://")&&(f(t,"oath.com")||f(t,"yahoo.com"))}t.isInlineConsentSupported=function(e){var t=Element.prototype,n="MatchesSelector",o=t.matches||t["o"+n]||t["ms"+n]||t["moz"+n]||t["webkit"+n],i=u.postMessage,r=t.querySelector;return e?!!i:!!o&&!!i&&!!r},t.isValidCSSPropertyValue=function(e){return c.test(e)},t.getUrlOrigin=l,t.isSafeUrl=d;var p=function(){function e(e,t,n,i,r,s,a,c){e&&(this.scriptContext=s,this.redirectUri=t,this.inlineUri=e,this.initialCookies=n,this.frameUIConfigs=r,this.enableCustomController=c,this.authorizedMessageOrigin=function(e){var t=l(e),n=t;if(-1===t.indexOf("guce.")){var o=e.indexOf("?");if(-1!==o)for(var i=e.substr(o).split("&"),r=0;r<i.length;r++){var s=i[r].split("=");"redirect_uri"===s[0]&&(n=l(decodeURIComponent(s[1])))}}return n}(e),this.handlers=[],this.sessionKey=a,o=u.OathGUCE&&u.OathGUCE.perf||u.VMediaLGPD&&u.VMediaLGPD.perf||u.OathReConsent&&u.OathReConsent.perf,this.lastFocus=document.activeElement,this.lastFocus&&this.lastFocus.blur(),i&&(this.doneCallback=i),this.attachEventListeners(),c?(this.executeInlineConsent=this.customExecuteInlineConsent,this.closeFrame=this.handleCTADone):this.insertConsentIFrame(e))}return e.prototype.attachEventListeners=function(){var e=this.handlePostMessage.bind(this),t=this.handleWindowResize.bind(this);u.addEventListener("message",e),this.handlers.push({eventType:"message",eventListener:e,target:u}),u.addEventListener("resize",t),this.handlers.push({eventType:"resize",eventListener:t,target:u})},e.prototype.detachEventListeners=function(){for(var e=0;e<this.handlers.length;e+=1)this.handlers[e].target.removeEventListener(this.handlers[e].eventType,this.handlers[e].eventListener),this.handlers[e]=null;this.handlers=[]},e.prototype.handlePostMessage=function(e){if(e.origin===this.authorizedMessageOrigin||"https://guce.oath.com"===e.origin){var t;if(this.frameInitTimeout>0&&(u.clearTimeout(this.frameInitTimeout),this.frameInitTimeout=null),void 0===o.frameLoaded&&(o.frameLoaded=+new Date),e.data)try{t=JSON.parse(e.data)}catch(e){return}switch(t.messageType){case r.MessageType.redirect:this.redirectToConsentUri();break;case r.MessageType.navigate:if(d(t.url))this.logInlineConsentEvent(r.LogEventType.backgroundPost,{outcm:"iframe navigate",_w:t.url},(function(){a.default(t.url,t.target)}));else{var n="unsafe url";t.url||(n="missing url"),this.logInlineConsentEvent(r.LogEventType.backgroundPost,{outcm:"iframe navigate",etag:n})}break;case r.MessageType.setCookies:this.setCookiesIfSafe(t.cookies);break;case r.MessageType.dimensions:this.resizeFrame({width:t.width,height:t.height});break;case r.MessageType.log:this.decorateTrackingParams(t.eventType,t.trackingParams),this.logInlineConsentEvent(t.eventType,t.trackingParams);break;case r.MessageType.done:this.customMessageHandler?this.customMessageHandler(t):this.handleCTADone(t);break;default:return void(this.customMessageHandler&&this.customMessageHandler(t))}}},e.prototype.decorateTrackingParams=function(e,t){if(t)switch(e){case r.LogEventType.view:t.gm_pfd=o.frameLoaded-o.start,t.gm_pfl=o.frameLoaded-o.frameInserted;break;case r.LogEventType.interaction:case r.LogEventType.done:t.gm_pfv=+new Date-o.frameLoaded;break;default:return}},e.prototype.handleWindowResize=function(){var e={messageType:r.MessageType.resize};this.postCrossFrameMessage(e)},e.prototype.resizeFrame=function(e){this.frame.style.width="100%",this.frame.style.height=e.height+"px"},e.prototype.insertConsentIFrame=function(e,t){var n=this;this.frame=document.createElement("iframe");var i=this.frame,s=i.style,a=this.frameUIConfigs||{};i.id="guce-inline-consent-iframe",i.src=e,i.tabIndex=1,i.frameBorder="0",s.bottom=a.bottom||"0",s.height="0",s.left=a.left||"0",s.margin="0 auto",s.maxWidth=a.maxWidth||"1050px",s.position="fixed",s.right=a.right||"0",s.width="100%",s.zIndex="99999",t&&(s.visibility="hidden"),document.body.appendChild(i),void 0===o.frameInserted&&(o.frameInserted=+new Date),this.frameInitTimeout=u.setTimeout((function(){n.logInlineConsentEvent(r.LogEventType.error,{outcm:"frame init fail"}),n.cleanConsentIframe(!0)}),6e4)},e.prototype.cleanConsentIframe=function(e){this.resizeFrame({width:"0",height:"0"}),this.detachEventListeners(),this.lastFocus&&this.lastFocus.focus(),e&&this.frame&&(document.getElementById(this.frame.id)&&document.body.removeChild(this.frame),this.frame=null),this.doneCallback&&this.doneCallback()},e.prototype.redirectToConsentUri=function(){this.redirectUri&&a.default(this.redirectUri)},e.prototype.setCookiesIfSafe=function(e){if(i.default(e,this.initialCookies)){for(var t=0;t<e.length;t++)this.setCookie(e[t]);this.logInlineConsentEvent(r.LogEventType.backgroundPost,{outcm:"iframe set cookies"})}else this.logInlineConsentEvent(r.LogEventType.backgroundPost,{outcm:"iframe set cookies",etag:"failed"})},e.prototype.setCookie=function(e){document.cookie=e},e.prototype.postCrossFrameMessage=function(e){var t=JSON.stringify(e);this.frame.contentWindow.postMessage(t,this.authorizedMessageOrigin)},e.prototype.postInvokeCTAMessage=function(){var e={messageType:r.MessageType.invokeCTA};this.postCrossFrameMessage(e)},e.prototype.getContextData=function(){var e={messageType:r.MessageType.getData,sessionKey:this.sessionKey};this.postCrossFrameMessage(e)},e.prototype.setFrameSession=function(e){var t={messageType:r.MessageType.setSession,sessionKey:this.sessionKey,session:e};this.postCrossFrameMessage(t)},e.prototype.trackUserInteraction=function(){var e=document,t=this.postInvokeCTAMessage.bind(this);e.addEventListener("click",t,!0),this.handlers.push({eventType:"click",eventListener:t,target:e})},e.prototype.logInlineConsentEvent=function(e,t,n){this.scriptContext&&(t.ver=this.scriptContext),n?s.logEvent(e,t,n):s.logEvent(e,t)},e.prototype.displayFrame=function(){this.frame.style.visibility="visible",this.postCrossFrameMessage({messageType:r.MessageType.frameDisplayed})},e.prototype.hideFrame=function(){this.frame.style.visibility="hidden"},e.prototype.customExecuteInlineConsent=function(e,t){e&&(this.customMessageHandler=e),this.insertConsentIFrame(this.inlineUri,!t)},e.prototype.handleCTADone=function(e){this.decorateTrackingParams(r.LogEventType.done,e.trackingParams),this.logInlineConsentEvent(r.LogEventType.done,e.trackingParams),this.cleanConsentIframe()},e}();t.default=p},function(e,t,n){var o,i,r;!function(s){"use strict";if(null!=t&&"number"!=typeof t.nodeType)e.exports=s();else if(null!=n(12))i=[],void 0===(r="function"==typeof(o=s)?o.apply(t,i):o)||(e.exports=r);else{var a=s(),u="undefined"!=typeof self?self:$.global;"function"!=typeof u.btoa&&(u.btoa=a.btoa),"function"!=typeof u.atob&&(u.atob=a.atob)}}((function(){"use strict";var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function t(e){this.message=e}return t.prototype=new Error,t.prototype.name="InvalidCharacterError",{btoa:function(n){for(var o,i,r=String(n),s=0,a=e,u="";r.charAt(0|s)||(a="=",s%1);u+=a.charAt(63&o>>8-s%1*8)){if((i=r.charCodeAt(s+=.75))>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");o=o<<8|i}return u},atob:function(n){var o=String(n).replace(/[=]+$/,"");if(o.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,r,s=0,a=0,u="";r=o.charAt(a++);~r&&(i=s%4?64*i+r:r,s++%4)?u+=String.fromCharCode(255&i>>(-2*s&6)):0)r=e.indexOf(r);return u}}}))},function(e,t,n){"use strict";t.__esModule=!0,t.encodeUrlSafeBase64=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_")},t.decodeUrlSafeBase64=function(e){return e.replace(/-/g,"+").replace(/_/g,"/")},t.parseCookieValue=function(e){for(var t={},n=e.split("&"),o=0,i=n.length;o<i;o++){var r=n[o].split("=");if(1===r.length){if("first"in t)return;t.first=r[0]}else t[r[0]]=r[1]}return t},t.composeCookieValue=function(e){var t=[];for(var n in e)if(e.hasOwnProperty(n)&&"string"==typeof e[n]){var o=e[n];t.push(n+"="+o)}return t.join("&")},t.serializeCookie=function(e,t,n){var o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;if(!o.test(e))throw new TypeError("Cookie name is invalid");if(t&&!o.test(t))throw new TypeError("Cookie val is invalid");var i=e+"="+t;if(null!=n.maxAge){var r=n.maxAge-0;if(isNaN(r))throw new Error("maxAge should be a Number");i+="; Max-Age="+Math.floor(r)}if(n.domain){if(!o.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}return n.secure&&(i+="; Secure"),i}},function(e,t,n){"use strict";t.__esModule=!0,t.encodeUrlSafeBase64=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_")},t.decodeUrlSafeBase64=function(e){return e.replace(/-/g,"+").replace(/_/g,"/")},t.getSession=function(e){var t={value:null};return t.value=window.localStorage.getItem(e),t},t.setSession=function(e,t){window.localStorage.setItem(e,t)}},function(e,t,n){"use strict";t.__esModule=!0,t.yo="http://yo/guce-js",t.api="OathGUCE",t.version="1.0.86",t.warn=function(e,n){if(console){var o=n?"Unable to continue. Fix: "+t.yo+"-define":t.yo;console.warn(t.api+" "+t.version+": "+e+" "+o)}},t.log=function(e){console&&console.log(t.api+" "+t.version+": "+e+" "+t.yo+"-report-only")}},function(e,t,n){"use strict";t.__esModule=!0;t.default=function(e){for(var t=1,n=0,o=0,i=e.length;o<i;++o)n=(n+(t=(t+e.charCodeAt(o))%65521))%65521;return n<<16|t}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),i=n(13);t.default=function(e,t){for(var n=!0,r=o.default(document.cookie),s=0;s<e.length;s++){var a=e[s];if(!(n=i.default(a,t,r)))break}return n}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(0);t.default=function(e,t){t===o.NavigationTarget.blank?window.open(e,"_newtab"):window.location.href=e}},function(e,t,n){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
e.exports=function(){var e,t=[],n=document,o=(n.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return o||n.addEventListener("DOMContentLoaded",e=function(){for(n.removeEventListener("DOMContentLoaded",e),o=1;e=t.shift();)e()}),function(e){o?setTimeout(e,0):t.push(e)}}()},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),i=n(14);function r(e,t){return 0===e.indexOf(t)}t.default=function(e,t,n){if(!(r(e,"GUC=")||r(e,"B=")||r(e,"BX=")))return!1;var s=o.default(e);return!i.default(s,t,n)}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){var o=Object.keys(e).pop(),i=e[o][0],r=t[o],s=n[o];if(!r&&s)return!0;if(r&&s)for(var a=!0,u=0;u<r.length;u++){for(var c=0;c<s.length;c++)if(r[u]===s[c]){a=!1;break}if(a)return a}if(s&&("B"===o||"BX"===o)){for(c=0;c<s.length;c++)if(s[c]===i)return!1;return!0}return!1}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(4),i=n(5);t.default=function(e){var t=function(e){var t,n=window.crypto,o="";if(n&&n.getRandomValues&&Uint8Array)t=new Uint8Array(5),n.getRandomValues(t);else{t=[];for(var i=0;i<5;i++)t.push(255*Math.random()|0)}for(i=0;i<5;i++)o+=String.fromCharCode(t[i]);return o}(),n=String.fromCharCode(1)+t,r=i.encodeUrlSafeBase64(o.btoa(n)),s=e,a=e.indexOf("guce.");return-1!==a&&(s=e.substring(a+5)),{cookiePair:i.serializeCookie("GUCS",r,{maxAge:1800,domain:s,path:"/",secure:!0}),gcrumb:i.encodeUrlSafeBase64(o.btoa(t))}}},function(e,t,n){"use strict";t.__esModule=!0;var o;!function(e){e.coreConsent="consent",e.reConsent="additionalConsent",e.lgpdConsent="lgpdConsent"}(o=t.serviceType||(t.serviceType={})),t.default=function(e){var t=!1;switch(e){case o.reConsent:t=!1;break;case o.lgpdConsent:t=!0;break;case o.coreConsent:default:t=!1}return t}},function(e,t,n){"use strict";function o(e,t){return 0===e.indexOf(t)}t.__esModule=!0,t.isValidConsentUri=function(e,t){if(!e)return!1;for(var n=["guce.oath.com","stage.guce.oath.com","consent.yahoo.com","stage.consent.yahoo.com","accounts.huffingtonpost.com"],i=["aol","engadget","mapquest","moviefone","techcrunch","yahoo"],r=!1,s=0;s<i.length;s++)n.push("api.login."+i[s]+".com");for(var a=0;a<n.length;a++)if(o(e,"https://"+n[a]+"/")){r=!0;break}return o(e,t+"/")||o(e,"https://dev.guce.oath.com:")||o(e,"https://dev.consent.yahoo.com:")||r}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(4),i=n(6),r=n(8),s=15552e3;t.sessionConfig={currentVersion:2,currentConsentVersion:1,maxExpiry:s,minExpiry:300};function a(e){if(null!==e.B)for(var t=0;t<e.B.length;t++){var n=e.B[t].first;if(n)return n}return null}function u(e,t,n,o,i){var s=""+e+t+n+o+i;return r.default(s)}var c=function(){function e(e){this.consentVersion=e.consentVersion,this.consentStatus=e.consentStatus,this.subject=e.subject,this.expirationTime=e.expirationTime,this.version=e.version}return e.prototype.matchSubject=function(e){var t=a(e);return null!==t&&2===this.version&&1===this.consentVersion&&this.subject===u(this.version,this.consentVersion,this.consentStatus,this.expirationTime,t)},e}();function l(e){var t=e.split("");if(t.length<5)return null;var n=function(e){return parseInt(t[e],10)},o=0,i=n(o++),r=n(o++),s=n(o++),a=n(o++),u=n(4);return new c({version:i,consentVersion:r,consentStatus:s,expirationTime:a,subject:u})}function f(e){var t=(0|e)-(Date.now()/1e3|0);return t>300&&t<s}t.CookieConsent=c,t.isValidExpirationTime=f,t.default=function(e){return function(e){return!!e.value}(e)?l(o.atob(i.decodeUrlSafeBase64(e.value))):null},t.encode=function(e,t,n){var r=a(e),l=0|n;if(l>0&&!f(l)||null===r)return null;var d=function(e,t){var n=0|e,o=Date.now()/1e3|0;return n<=0&&(n=1===t?s:300),o+n}(n,t),p=u(2,1,t,d,r),h=new c({version:2,consentVersion:1,consentStatus:t,expirationTime:d,subject:p});return i.encodeUrlSafeBase64(o.btoa(function(e){var t=[];return t.push(e.version),t.push(e.consentVersion),t.push(e.consentStatus),t.push(e.expirationTime),t.push(e.subject),t.join("")}(h)))},t.isValidSessionValue=function(e,n){if(e&&"null"!==e)try{var r=l(o.atob(i.decodeUrlSafeBase64(e))),s=Date.now()/1e3|0;return!(r.expirationTime<=s)&&r.version===t.sessionConfig.currentVersion&&r.consentVersion>=t.sessionConfig.currentConsentVersion&&r.matchSubject(n)}catch(e){}return!1}},,function(e,t,n){"use strict";t.__esModule=!0;var o=n(6),i=n(1),r=n(31),s=n(18),a=n(5);function u(e){var t=null,n=[];try{var i=o.getSession("VMConsentLGPD");t=s.default(i)}catch(e){}for(var u=(e.B||[]).concat(e.BX||[]),c=0;c<u.length;c++)n.push(a.parseCookieValue(u[c]));var l={LGPDCONSENT:t,B:n};return{determination:r.default({consentCookies:l}),consentCookies:l}}t.decideWithCookie=function(e){return u(i.default(e))},t.decideWithParsedCookies=u},function(e,t,n){"use strict";t.__esModule=!0;var o=n(3),i=document;t.getOptionsFromMetaTags=function(){for(var e=i.getElementsByTagName("meta"),t={autorun:!0,beacon:!0,inlineConsent:!0,autoDisplay:!0},n={},r=0;r<e.length;r++){var s=e[r];switch(s.name){case"oath:guce:product-eu":t.isProductEU="true"===s.content;break;case"oath:guce:enable-lgpd":t.isLGPDEnabled="true"===s.content;break;case"oath:guce:report-only":t.reportOnly="true"===s.content;break;case"oath:guce:enable-callback-fn":t.enableCallbackFn="true"===s.content;break;case"oath:guce:consent-host":t.consentHost=s.content;break;case"oath:guce:locale":t.locale=s.content;break;case"oath:guce:experiment":t.experiment=s.content;break;case"oath:guce:auto-display":t.autoDisplay="false"!==s.content;break;case"oath:guce:dimension-max-width":o.isValidCSSPropertyValue(s.content)&&(n.maxWidth=s.content);break;case"oath:guce:position-left":o.isValidCSSPropertyValue(s.content)&&(n.left=s.content);break;case"oath:guce:position-right":o.isValidCSSPropertyValue(s.content)&&(n.right=s.content);break;case"oath:guce:position-bottom":o.isValidCSSPropertyValue(s.content)&&(n.bottom=s.content)}}return t.uiOptions=n,t}},,,,,,,,function(e,t,n){"use strict";t.__esModule=!0;var o=n(30),i=n(21);!function(e){var t=e;t||(t=i.getOptionsFromMetaTags()),t.isLGPDEnabled&&o.run(t)}(i.getOptionsFromMetaTags())},function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};t.__esModule=!0;var i,r=n(11),s=n(18),a=n(20),u=n(0),c=n(3),l=n(32),f=n(6),d=n(2),p=n(7),h=window;function g(e,t,n,r){var s=o({},n),a=(t.cookieResult,t.remoteResult),c=t.inlineUri,l=t.unsafeRejectedUri;t.normalizedOptions&&t.normalizedOptions.beacon&&(e&&e.message&&(s.message=e.message),a&&void 0!==a.statusCode&&(s.gm_hc=a.statusCode),c?s._w=c:l&&(s._w=l),void 0!==i.decision&&void 0!==i.start&&(s.gm_pjs=i.decision-i.start),function(e,t,n){t.ver="consentjs",d.logEvent(e,t,n,h.VMediaLGPD&&h.VMediaLGPD.lastDecision&&h.VMediaLGPD.lastDecision.normalizedOptions)}(u.LogEventType.backgroundPost,o({outcm:"lgpdConsentDecision"},s),r))}function m(e,t){var n=s.encode(e.cookieResult.consentCookies,t);return null!==n&&f.setSession("VMConsentLGPD",n),n}function v(e,t){if(t){i.decision=+new Date;try{if(h.VMediaLGPD.hasInlineBanner=!1,t.inlineUri)return void r((function(){!function(e){try{var t=e.normalizedOptions.reportOnly;if(e.executed)return void(t&&p.log("Decision has been executed already"));var n,o=new c.default(e.inlineUri,e.redirectUri,e.initialCookies,(function(){h.VMediaLGPD.isActive=!1}),e.normalizedOptions.uiOptions,"consentjs","VMConsentLGPD",!0);if(o)o.executeInlineConsent((function(t){switch(t.messageType){case u.MessageType.frameReady:o.getContextData();break;case u.MessageType.done:var i=m(e,1);o.setFrameSession(i),o.hideFrame(),n=t;break;case u.MessageType.setSessionStatus:n?o.closeFrame(n):o.cleanConsentIframe();break;case u.MessageType.contextData:var r=function(e,t){return s.isValidSessionValue(t,e.cookieResult.consentCookies)?t:null}(e,t.session);if(t.isLGPDEligible&&!r)o.displayFrame();else if(r)f.setSession("VMConsentLGPD",r);else{var a=m(e,2);o.setFrameSession(a)}break;default:return}}),!1);else g(null,e,{etag:"inline failed"})}catch(t){g(t,e,{etag:"inline failed"}),p.warn("Error during run: "+(t.message?t.message:t))}}(t)}));e?(g(e,t,{etag:"failed"}),p.warn("Error during decision: "+(e.message?e.message:e))):g(e,t)}catch(e){g(e,t,{etag:"run failed"}),p.warn("Error during run: "+(e.message?e.message:e))}}}function y(e){i.start=+new Date,l.default(e,v)}t.runWithDecision=v,t.run=y,h.VMediaLGPD||(h.VMediaLGPD={lastDecision:null,hasInlineBanner:null,isActive:!1,showBanner:null,perf:{},submit:null,run:y,decideWithCookie:a.decideWithCookie,decide:l.default,report:function(){var e=o({},h.VMediaLGPD.lastDecision);e.normalizedOptions.reportOnly=!0,v(null,e)}}),i=h.VMediaLGPD.perf},function(e,t,n){"use strict";t.__esModule=!0;var o=n(18);t.default=function(e){var t=e.consentCookies,n=t.LGPDCONSENT;if(!n)return{reason:1,action:1};var i=Date.now()/1e3|0,r=0,s=0;return n.expirationTime<=i?r=2:n.version!==o.sessionConfig.currentVersion?r=5:n.consentVersion<o.sessionConfig.currentConsentVersion?r=4:n.matchSubject(t)||(r=3),0!==r&&(s=1),{reason:r,action:s}}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),i=n(15),r=n(20),s=n(33),a=n(0),u=n(3),c=n(35),l=n(2),f=n(7),d=n(17),p=n(21),h=window,g=document;function m(e,t,n,o,i,r){var a=0;if(e)!function(e,t,n,o){var i=null,r=107;(function(e){return void 0!==e.status})(e)&&(r=e.status>0?113:107,i=e.status),n.remoteResult={outcome:r,statusCode:i,action:0,cookies:[],unsafeRejectedCookies:[]},f.warn("Consent check failure. Is "+t+" online?"),o(e,n)}(e,t,o,r);else{switch(i.action){case 2:return o.remoteResult=function(e){var t,n={},o=[],i=e.unsafeCookies;return s.default(i)?(t=2,n.expiryTime=parseInt(i,10)):(t=106,o=o.concat(i)),{action:e.action,outcome:t,cookies:[],session:n,unsafeRejectedCookies:o}}(i),void r(e,o);case 3:var c=i.trackUserInteraction,l=i.unsafeConsentInlineUri,p=u.isInlineConsentSupported(!1),h=d.isValidConsentUri(l,t);l?h?1==(a=n.inlineConsent?p?1:101:103)&&(o.inlineUri=l,o.sessionExpiry=i.sessionExpiry,o.trackUserInteraction=c):(o.unsafeRejectedUri=l,a=114):a=115;break;case 0:a=100;break;case 4:a=110;break;default:a=109}o.remoteResult={outcome:a,action:i.action,cookies:[],unsafeRejectedCookies:[]},r(e,o)}}function v(e){return!!(e&&e.consentHost&&e.isLGPDEnabled)}t.isValidOptions=v,t.default=function(e,t){function n(e,n){n.sessionStart=Date.now()/1e3|0,h.VMediaLGPD.lastDecision=n,t(e,n)}var s=e||p.getOptionsFromMetaTags(),u={normalizedOptions:s};try{if(h.VMediaLGPD.lastDecision=u,!v(s))return void function(e,t,n){f.warn(t,!0),l.logEvent(a.LogEventType.backgroundPost,{outcm:"decision",etag:"invalid config"}),n(new Error(t))}(0,"Required <meta> tags are not properly set.",t);var d,y=s.cookie;void 0===y&&(y=g.cookie),u.initialCookies=o.default(y),d=r.decideWithParsedCookies(u.initialCookies),u.cookieResult=d;var C=u;if(1===d.determination.action)return void function(e,t,n){var o="https://"+e.consentHost,r=i.default(e.consentHost);g.cookie=r.cookiePair;var s={callbackURI:h.location.href,consentBaseURI:o,experiment:e.experiment,gcrumb:r.gcrumb,isProductEU:e.isProductEU,locale:e.locale,jsVersion:f.version,referrer:document.referrer};c.default(s,(function(i,r){try{m(i,o,e,t,r,n)}catch(e){n(e,t)}}))}(s,C,n);n(null,C)}catch(e){n(e,u)}}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(34);t.default=function(e){var t=parseInt(e,10);return o.isValidExpirationTime(t)}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(4),i=n(6),r=n(8),s=5184e3;function a(e){if(null!==e.B)for(var t=0;t<e.B.length;t++){var n=e.B[t].first;if(n)return n}return null}t.sessionConfig={currentVersion:1,currentConsentVersion:1,maxExpiry:s,minExpiry:30};var u=function(){function e(e){this.consentVersion=e.consentVersion,this.subject=e.subject,this.expirationTime=e.expirationTime,this.version=e.version}return e.prototype.matchSubject=function(e){var t=a(e);if(null!==t&&1===this.version&&1===this.consentVersion){var n=this.subject,o=""+this.version+this.consentVersion+this.expirationTime+t;return n===r.default(o)}return!1},e}();function c(e){var t=e-(Date.now()/1e3|0);return t>30&&t<s}t.CookieConsent=u,t.isValidExpirationTime=c,t.default=function(e){return function(e){return!!e.value}(e)?function(e){var t=e.split("");if(t.length<4)return null;var n=function(e){return parseInt(t[e],10)},o=0,i=n(o++),r=n(o++),s=n(o++),a=n(3);return new u({version:i,consentVersion:r,expirationTime:s,subject:a})}(o.atob(i.decodeUrlSafeBase64(e.value))):null},t.encode=function(e,t){var n=a(e);if(c(t)&&null!==n){var s=r.default("11"+t+n),l=new u({version:1,consentVersion:1,expirationTime:t,subject:s});return i.encodeUrlSafeBase64(o.btoa(function(e){var t=[];return t.push(e.version),t.push(e.consentVersion),t.push(e.expirationTime),t.push(e.subject),t.join("")}(l)))}return null}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(3),i=n(16);t.default=function(e,t){if(i.default(i.serviceType.lgpdConsent)){var n=e.consentBaseURI,r=e.isProductEU,s=e.callbackURI,a=e.gcrumb,u=e.locale,c=e.jsVersion,l=e.experiment,f=e.referrer,d=n+"/br/collectConsentInline?brandType="+(r?"eu":"nonEu")+"&done="+encodeURIComponent(s)+"&gcrumb="+a;u&&(d+="&lang="+u),c&&(d+="&jsVersion="+encodeURIComponent(c)),l&&(d+="&experiment="+encodeURIComponent(l)),f&&(d+="&referer="+encodeURIComponent(f)),function(e,t,n){o.isInlineConsentSupported(!1)?function(e,t){t(null,{action:3,unsafeConsentUri:null,unsafeConsentInlineUri:e,trackUserInteraction:!1,sessionExpiry:0})}(e,n):n(null,{action:5})}(d,0,t)}else t(null,{action:0})}}]);
//# sourceMappingURL=consent.js.map