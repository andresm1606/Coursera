(window.webpackJsonp_spotim_580132258=window.webpackJsonp_spotim_580132258||[]).push([[52],{1118:function(e,t,a){"use strict";var l=a(34),o=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,k.useTranslation)().t,a=[{type:"Idea",logoSelector:"ideaLogo",text:t("conversation.feedback.option.idea","Idea"),dataAttribute:"feedback-idea-button"},{type:"Problem",logoSelector:"problemLogo",text:t("conversation.feedback.option.problem","Problem"),dataAttribute:"feedback-problem-button"},{type:"Question",logoSelector:"questionLogo",text:t("conversation.feedback.option.question","Question"),dataAttribute:"feedback-question-button"}],l=t("conversation.feedback.email","Your Email"),o=t("conversation.feedback.addFeedback","Add your feedback..."),E=(0,r.useState)("Idea"),g=(0,c.default)(E,2),w=g[0],S=g[1],N=(0,r.useState)(!1),A=(0,c.default)(N,2),M=A[0],T=A[1],x=(0,r.useState)("main"),C=(0,c.default)(x,2),I=C[0],L=C[1],z=(0,r.useState)(!0),F=(0,c.default)(z,2),_=F[0],B=F[1],Z=(0,r.useState)(""),P=(0,c.default)(Z,2),W=P[0],O=P[1],q=(0,r.useState)(""),Q=(0,c.default)(q,2),j=Q[0],D=Q[1],J=(0,r.useState)(!1),$=(0,c.default)(J,2),G=$[0],R=$[1],U=(0,r.useState)(!1),Y=(0,c.default)(U,2),H=Y[0],K=Y[1];(0,r.useEffect)((function(){e.showFeedbackModal&&(L("main"),S("Idea"),O(""),D(""),R(!1),K(!1),B(!0),T(!1))}),[e.showFeedbackModal]),(0,r.useEffect)((function(){var e=setTimeout((function(){M&&(L("after"),T(!1))}),2e3);return function(){clearTimeout(e)}}),[M]),(0,r.useEffect)((function(){var e=setTimeout((function(){"after"===I&&ee()}),2e3);return function(){clearTimeout(e)}}),[I]),(0,r.useEffect)((function(){te()}),[j,W]);var V=function(){(0,v.isMobile)()&&R(!0)},X=function(e){if((0,v.isMobile)()){"mouseleave"!==e.type&&R(!1);var t=e.relatedTarget;if(t)"button"===t.type&&t.click()}},ee=function(){e.onClose()},te=function(){B(!j||!W)},ae=function(){var t=(0,d.default)(u.default.mark((function t(){var a;return u.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.postId,!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(j)){t.next=9;break}return K(!1),T(!0),t.next=7,(0,b.default)({type:w,content:W,email:j,postId:a});case 7:t.next=10;break;case 9:K(!0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),le="main"===I?t("conversation.feedback.title","Feedback"):r.default.createElement("div",{className:s.default.feedbackWrapper},t("conversation.feedback.titleAfterSend","Feedback sent!"),r.default.createElement(p.default,{selector:"faCircleCheck",className:s.default.sentIcon}));return r.default.createElement(f.Modal,{disableCustomBodyScroll:h.disableModalDefaultScroll,shadowRootCssModules:y.isUseShadowDomOnOverlays?["conversation"]:void 0,isLtr:h.isLtr,closeButton:!0,showModal:e.showFeedbackModal,className:s.default.modal,onClose:ee,modalTitle:le,size:"md"},r.default.createElement("div",{className:s.default.feedbackWrapper},r.default.createElement("div",{className:(0,i.default)(s.default.headerText,(0,n.default)({},s.default.hidden,!0===G))},"main"===I?t("conversation.feedback.message","We would love to hear what you think - any type of feedback will be highly appreciated!"):t("conversation.feedback.messageAfterSend","Thank you for your help.")),"main"===I&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:(0,i.default)(s.default.buttonArea,(0,n.default)({},s.default.hidden,!0===G))},r.default.createElement(f.Gutter,{size:"lg"},a.map((function(e,t){var a,l=(0,i.default)(s.default.button,(0,n.default)({},s.default.highlight,e.type===w));return r.default.createElement("button",{key:e.type,className:l,"data-open-web-class":e.dataAttribute,onClick:function(){return function(e){S(e)}(e.type)}},r.default.createElement(p.default,{selector:e.logoSelector,className:(0,i.default)(s.default.logo,(a={},(0,n.default)(a,s.default.ideaLogo,"Idea"===e.type),(0,n.default)(a,s.default.problemLogo,"Problem"===e.type),(0,n.default)(a,s.default.questionLogo,"Question"===e.type),a))}),r.default.createElement("span",{className:s.default.buttonText}," ",e.text))})))),r.default.createElement("div",{className:s.default.inputWrapper},r.default.createElement(f.TextInput,{className:s.default.input,placeholder:l,onChange:function(e){D(e.target.value)},onFocus:V,onBlur:X,onMouseLeave:X,hasError:H,"data-open-web-class":"email-input"})),r.default.createElement(f.Textarea,{className:s.default.textarea,onChange:function(e){O(e.target.value)},onFocus:V,onBlur:X,onMouseLeave:X,placeholder:o,"data-open-web-class":"feedback-input"}),"main"===I&&r.default.createElement("div",{className:s.default.gutterWrapper},H&&r.default.createElement("span",{className:(0,i.default)(s.default.error,(0,n.default)({},s.default.mobileError,(0,v.isMobile)()))},"Invalid Email, Try Again"),r.default.createElement("div",{className:s.default.gutter},r.default.createElement(f.Button,{mode:"secondary",onClick:ee,"data-open-web-class":"feedback-cancel-button"},t("conversation.feedback.cancel","Cancel")),r.default.createElement(f.Button,{mode:"primary",className:s.default.uiButton,onClick:ae,disabled:_,"data-open-web-class":"feedback-send-button"},M?r.default.createElement("div",{className:s.default.spinnerWrapper},r.default.createElement(m.default,null)):t("conversation.feedback.send","Send")))))))};var n=o(a(33)),u=o(a(37)),d=o(a(38)),c=o(a(49)),r=l(a(6)),s=o(a(1119)),f=a(43),i=o(a(18)),m=o(a(86)),p=o(a(56)),b=o(a(1120)),v=a(52),k=a(54),y=a(79),h=a(44)},1120:function(e,t,a){"use strict";var l=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(58));t.default=function(e){var t=e.type,a=e.content,l=e.email,n=e.postId;return(0,o.default)("v1.0.0/user/feedback",{method:"POST",postId:n,data:{type:t,email:l,content:a}})}}}]);
//# sourceMappingURL=feedback-modal-bundle.js.map