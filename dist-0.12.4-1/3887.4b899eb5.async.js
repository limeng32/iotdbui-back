(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3887],{12044:function(K,k,a){"use strict";var p=a(34155),m=typeof p!="undefined"&&p.versions!=null&&p.versions.node!=null,b=function(){return typeof window!="undefined"&&typeof window.document!="undefined"&&!m};k.Z=b},7330:function(){},24846:function(){},1917:function(){},17462:function(K,k,a){"use strict";var p=a(43673),m=a.n(p),b=a(7330),l=a.n(b)},48736:function(K,k,a){"use strict";var p=a(43673),m=a.n(p),b=a(24846),l=a.n(b)},25084:function(K,k,a){"use strict";a.d(k,{Z:function(){return Ke}});var p=a(96156),m=a(22122),b=a(28481),l=a(67294),R=a(81253),S=a(6610),$=a(5991),T=a(10379),D=a(60446),h=a(96633),J=a(28991),W=a(63349),se=a(94184),ie=a.n(se),le=a(74204),F=a(15105),y=a(98423);function I(o){return Array.isArray(o)?o:[o]}var _={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},M=Object.keys(_).filter(function(o){if(typeof document=="undefined")return!1;var v=document.getElementsByTagName("html")[0];return o in(v?v.style:{})})[0],V=_[M];function L(o,v,c,d){o.addEventListener?o.addEventListener(v,c,d):o.attachEvent&&o.attachEvent("on".concat(v),c)}function G(o,v,c,d){o.removeEventListener?o.removeEventListener(v,c,d):o.attachEvent&&o.detachEvent("on".concat(v),c)}function re(o,v){var c=typeof o=="function"?o(v):o;return Array.isArray(c)?c.length===2?c:[c[0],c[1]]:[c]}var Q=function(v){return!isNaN(parseFloat(v))&&isFinite(v)},q=!(typeof window!="undefined"&&window.document&&window.document.createElement),ce=function o(v,c,d,e){if(!c||c===document||c instanceof Document)return!1;if(c===v.parentNode)return!0;var n=Math.max(Math.abs(d),Math.abs(e))===Math.abs(e),t=Math.max(Math.abs(d),Math.abs(e))===Math.abs(d),s=c.scrollHeight-c.clientHeight,r=c.scrollWidth-c.clientWidth,i=document.defaultView.getComputedStyle(c),f=i.overflowY==="auto"||i.overflowY==="scroll",u=i.overflowX==="auto"||i.overflowX==="scroll",C=s&&f,g=r&&u;return n&&(!C||C&&(c.scrollTop>=s&&e<0||c.scrollTop<=0&&e>0))||t&&(!g||g&&(c.scrollLeft>=r&&d<0||c.scrollLeft<=0&&d>0))?o(v,c.parentNode,d,e):!1},U={},Le=function(o){(0,T.Z)(c,o);var v=(0,D.Z)(c);function c(d){var e;return(0,S.Z)(this,c),e=v.call(this,d),e.domFocus=function(){e.dom&&e.dom.focus()},e.removeStartHandler=function(n){n.touches.length>1||(e.startPos={x:n.touches[0].clientX,y:n.touches[0].clientY})},e.removeMoveHandler=function(n){if(!(n.changedTouches.length>1)){var t=n.currentTarget,s=n.changedTouches[0].clientX-e.startPos.x,r=n.changedTouches[0].clientY-e.startPos.y;(t===e.maskDom||t===e.handlerDom||t===e.contentDom&&ce(t,n.target,s,r))&&n.cancelable&&n.preventDefault()}},e.transitionEnd=function(n){var t=n.target;G(t,V,e.transitionEnd),t.style.transition=""},e.onKeyDown=function(n){if(n.keyCode===F.Z.ESC){var t=e.props.onClose;n.stopPropagation(),t&&t(n)}},e.onWrapperTransitionEnd=function(n){var t=e.props,s=t.open,r=t.afterVisibleChange;n.target===e.contentWrapper&&n.propertyName.match(/transform$/)&&(e.dom.style.transition="",!s&&e.getCurrentDrawerSome()&&(document.body.style.overflowX="",e.maskDom&&(e.maskDom.style.left="",e.maskDom.style.width="")),r&&r(!!s))},e.openLevelTransition=function(){var n=e.props,t=n.open,s=n.width,r=n.height,i=e.getHorizontalBoolAndPlacementName(),f=i.isHorizontal,u=i.placementName,C=e.contentDom?e.contentDom.getBoundingClientRect()[f?"width":"height"]:0,g=(f?s:r)||C;e.setLevelAndScrolling(t,u,g)},e.setLevelTransform=function(n,t,s,r){var i=e.props,f=i.placement,u=i.levelMove,C=i.duration,g=i.ease,E=i.showMask;e.levelDom.forEach(function(w){w.style.transition="transform ".concat(C," ").concat(g),L(w,V,e.transitionEnd);var N=n?s:0;if(u){var j=re(u,{target:w,open:n});N=n?j[0]:j[1]||0}var ee=typeof N=="number"?"".concat(N,"px"):N,x=f==="left"||f==="top"?ee:"-".concat(ee);x=E&&f==="right"&&r?"calc(".concat(x," + ").concat(r,"px)"):x,w.style.transform=N?"".concat(t,"(").concat(x,")"):""})},e.setLevelAndScrolling=function(n,t,s){var r=e.props.onChange;if(!q){var i=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?(0,le.Z)(!0):0;e.setLevelTransform(n,t,s,i),e.toggleScrollingToDrawerAndBody(i)}r&&r(n)},e.toggleScrollingToDrawerAndBody=function(n){var t=e.props,s=t.getContainer,r=t.showMask,i=t.open,f=s&&s();if(f&&f.parentNode===document.body&&r){var u=["touchstart"],C=[document.body,e.maskDom,e.handlerDom,e.contentDom];i&&document.body.style.overflow!=="hidden"?(n&&e.addScrollingEffect(n),document.body.style.touchAction="none",C.forEach(function(g,E){!g||L(g,u[E]||"touchmove",E?e.removeMoveHandler:e.removeStartHandler,e.passive)})):e.getCurrentDrawerSome()&&(document.body.style.touchAction="",n&&e.remScrollingEffect(n),C.forEach(function(g,E){!g||G(g,u[E]||"touchmove",E?e.removeMoveHandler:e.removeStartHandler,e.passive)}))}},e.addScrollingEffect=function(n){var t=e.props,s=t.placement,r=t.duration,i=t.ease,f="width ".concat(r," ").concat(i),u="transform ".concat(r," ").concat(i);switch(e.dom.style.transition="none",s){case"right":e.dom.style.transform="translateX(-".concat(n,"px)");break;case"top":case"bottom":e.dom.style.width="calc(100% - ".concat(n,"px)"),e.dom.style.transform="translateZ(0)";break;default:break}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(u,",").concat(f),e.dom.style.width="",e.dom.style.transform="")})},e.remScrollingEffect=function(n){var t=e.props,s=t.placement,r=t.duration,i=t.ease;M&&(document.body.style.overflowX="hidden"),e.dom.style.transition="none";var f,u="width ".concat(r," ").concat(i),C="transform ".concat(r," ").concat(i);switch(s){case"left":{e.dom.style.width="100%",u="width 0s ".concat(i," ").concat(r);break}case"right":{e.dom.style.transform="translateX(".concat(n,"px)"),e.dom.style.width="100%",u="width 0s ".concat(i," ").concat(r),e.maskDom&&(e.maskDom.style.left="-".concat(n,"px"),e.maskDom.style.width="calc(100% + ".concat(n,"px)"));break}case"top":case"bottom":{e.dom.style.width="calc(100% + ".concat(n,"px)"),e.dom.style.height="100%",e.dom.style.transform="translateZ(0)",f="height 0s ".concat(i," ").concat(r);break}default:break}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(C,",").concat(f?"".concat(f,","):"").concat(u),e.dom.style.transform="",e.dom.style.width="",e.dom.style.height="")})},e.getCurrentDrawerSome=function(){return!Object.keys(U).some(function(n){return U[n]})},e.getLevelDom=function(n){var t=n.level,s=n.getContainer;if(!q){var r=s&&s(),i=r?r.parentNode:null;if(e.levelDom=[],t==="all"){var f=i?Array.prototype.slice.call(i.children):[];f.forEach(function(u){u.nodeName!=="SCRIPT"&&u.nodeName!=="STYLE"&&u.nodeName!=="LINK"&&u!==r&&e.levelDom.push(u)})}else t&&I(t).forEach(function(u){document.querySelectorAll(u).forEach(function(C){e.levelDom.push(C)})})}},e.getHorizontalBoolAndPlacementName=function(){var n=e.props.placement,t=n==="left"||n==="right",s="translate".concat(t?"X":"Y");return{isHorizontal:t,placementName:s}},e.state={_self:(0,W.Z)(e)},e}return(0,$.Z)(c,[{key:"componentDidMount",value:function(){var e=this;if(!q){var n=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return n=!0,null}}))}catch(C){}this.passive=n?{passive:!1}:!1}var t=this.props,s=t.open,r=t.getContainer,i=t.showMask,f=r&&r();if(this.drawerId="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),this.getLevelDom(this.props),s&&(f&&f.parentNode===document.body&&(U[this.drawerId]=s),this.openLevelTransition(),this.forceUpdate(function(){e.domFocus()}),i)){var u;(u=this.props.scrollLocker)===null||u===void 0||u.lock()}}},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.open,s=n.getContainer,r=n.scrollLocker,i=n.showMask,f=s&&s();t!==e.open&&(f&&f.parentNode===document.body&&(U[this.drawerId]=!!t),this.openLevelTransition(),t?(this.domFocus(),i&&(r==null||r.lock())):r==null||r.unLock())}},{key:"componentWillUnmount",value:function(){var e=this.props,n=e.open,t=e.scrollLocker;delete U[this.drawerId],n&&(this.setLevelTransform(!1),document.body.style.touchAction=""),t==null||t.unLock()}},{key:"render",value:function(){var e,n=this,t=this.props,s=t.className,r=t.children,i=t.style,f=t.width,u=t.height,C=t.defaultOpen,g=t.open,E=t.prefixCls,w=t.placement,N=t.level,j=t.levelMove,ee=t.ease,x=t.duration,ve=t.getContainer,te=t.handler,Se=t.onChange,Ne=t.afterVisibleChange,O=t.showMask,me=t.maskClosable,he=t.maskStyle,Z=t.onClose,ae=t.onHandleClick,pe=t.keyboard,xe=t.getOpenCount,Te=t.scrollLocker,ne=t.contentWrapperStyle,ye=(0,R.Z)(t,["className","children","style","width","height","defaultOpen","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","handler","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","onClose","onHandleClick","keyboard","getOpenCount","scrollLocker","contentWrapperStyle"]),H=this.dom?g:!1,de=ie()(E,(e={},(0,p.Z)(e,"".concat(E,"-").concat(w),!0),(0,p.Z)(e,"".concat(E,"-open"),H),(0,p.Z)(e,s||"",!!s),(0,p.Z)(e,"no-mask",!O),e)),Ce=this.getHorizontalBoolAndPlacementName(),Ee=Ce.placementName,ge=w==="left"||w==="top"?"-100%":"100%",fe=H?"":"".concat(Ee,"(").concat(ge,")"),ue=te&&l.cloneElement(te,{onClick:function(P){te.props.onClick&&te.props.onClick(),ae&&ae(P)},ref:function(P){n.handlerDom=P}});return l.createElement("div",(0,m.Z)({},(0,y.Z)(ye,["switchScrollingEffect"]),{tabIndex:-1,className:de,style:i,ref:function(P){n.dom=P},onKeyDown:H&&pe?this.onKeyDown:void 0,onTransitionEnd:this.onWrapperTransitionEnd}),O&&l.createElement("div",{className:"".concat(E,"-mask"),onClick:me?Z:void 0,style:he,ref:function(P){n.maskDom=P}}),l.createElement("div",{className:"".concat(E,"-content-wrapper"),style:(0,J.Z)({transform:fe,msTransform:fe,width:Q(f)?"".concat(f,"px"):f,height:Q(u)?"".concat(u,"px"):u},ne),ref:function(P){n.contentWrapper=P}},l.createElement("div",{className:"".concat(E,"-content"),ref:function(P){n.contentDom=P},onTouchStart:H&&O?this.removeStartHandler:void 0,onTouchMove:H&&O?this.removeMoveHandler:void 0},r),ue))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=n.prevProps,s=n._self,r={prevProps:e};if(t!==void 0){var i=e.placement,f=e.level;i!==t.placement&&(s.contentDom=null),f!==t.level&&s.getLevelDom(e)}return r}}]),c}(l.Component),be=Le,we=function(o){(0,T.Z)(c,o);var v=(0,D.Z)(c);function c(d){var e;(0,S.Z)(this,c),e=v.call(this,d),e.onHandleClick=function(t){var s=e.props,r=s.onHandleClick,i=s.open;if(r&&r(t),typeof i=="undefined"){var f=e.state.open;e.setState({open:!f})}},e.onClose=function(t){var s=e.props,r=s.onClose,i=s.open;r&&r(t),typeof i=="undefined"&&e.setState({open:!1})};var n=typeof d.open!="undefined"?d.open:!!d.defaultOpen;return e.state={open:n},"onMaskClick"in d&&console.warn("`onMaskClick` are removed, please use `onClose` instead."),e}return(0,$.Z)(c,[{key:"render",value:function(){var e=this,n=this.props,t=n.defaultOpen,s=n.getContainer,r=n.wrapperClassName,i=n.forceRender,f=n.handler,u=(0,R.Z)(n,["defaultOpen","getContainer","wrapperClassName","forceRender","handler"]),C=this.state.open;if(!s)return l.createElement("div",{className:r,ref:function(w){e.dom=w}},l.createElement(be,(0,m.Z)({},u,{open:C,handler:f,getContainer:function(){return e.dom},onClose:this.onClose,onHandleClick:this.onHandleClick})));var g=!!f||i;return l.createElement(h.Z,{visible:C,forceRender:g,getContainer:s,wrapperClassName:r},function(E){var w=E.visible,N=E.afterClose,j=(0,R.Z)(E,["visible","afterClose"]);return l.createElement(be,(0,m.Z)({},u,j,{open:w!==void 0?w:C,afterVisibleChange:N!==void 0?N:u.afterVisibleChange,handler:f,onClose:e.onClose,onHandleClick:e.onHandleClick}))})}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=n.prevProps,s={prevProps:e};return typeof t!="undefined"&&e.open!==t.open&&(s.open=e.open),s}}]),c}(l.Component);we.defaultProps={prefixCls:"drawer",placement:"left",getContainer:"body",defaultOpen:!1,level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",onChange:function(){},afterVisibleChange:function(){},handler:l.createElement("div",{className:"drawer-handle"},l.createElement("i",{className:"drawer-handle-icon"})),showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",className:"",keyboard:!0,forceRender:!1};var Ze=we,Ie=Ze,Ae=a(54549),Be=a(65632),Ue=a(93355),He=a(57838),ze=function(o,v){var c={};for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&v.indexOf(d)<0&&(c[d]=o[d]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,d=Object.getOwnPropertySymbols(o);e<d.length;e++)v.indexOf(d[e])<0&&Object.prototype.propertyIsEnumerable.call(o,d[e])&&(c[d[e]]=o[d[e]]);return c},Oe=l.createContext(null),qe=(0,Ue.b)("top","right","bottom","left"),Pe={distance:180},Me=l.forwardRef(function(o,v){var c=o.width,d=c===void 0?256:c,e=o.height,n=e===void 0?256:e,t=o.closable,s=t===void 0?!0:t,r=o.placement,i=r===void 0?"right":r,f=o.maskClosable,u=f===void 0?!0:f,C=o.mask,g=C===void 0?!0:C,E=o.level,w=E===void 0?null:E,N=o.keyboard,j=N===void 0?!0:N,ee=o.push,x=ee===void 0?Pe:ee,ve=o.closeIcon,te=ve===void 0?l.createElement(Ae.Z,null):ve,Se=o.bodyStyle,Ne=o.drawerStyle,O=o.prefixCls,me=o.className,he=o.direction,Z=o.visible,ae=o.children,pe=o.zIndex,xe=o.destroyOnClose,Te=o.style,ne=o.title,ye=o.headerStyle,H=o.onClose,de=o.footer,Ce=o.footerStyle,Ee=ze(o,["width","height","closable","placement","maskClosable","mask","level","keyboard","push","closeIcon","bodyStyle","drawerStyle","prefixCls","className","direction","visible","children","zIndex","destroyOnClose","style","title","headerStyle","onClose","footer","footerStyle"]),ge=(0,He.Z)(),fe=l.useState(!1),ue=(0,b.Z)(fe,2),X=ue[0],P=ue[1],Y=l.useContext(Oe),_e=l.useRef(!1);l.useEffect(function(){return Z&&Y&&Y.push(),function(){Y&&Y.pull()}},[]),l.useEffect(function(){Y&&(Z?Y.push():Y.pull())},[Z]);var De=l.useMemo(function(){return{push:function(){x&&P(!0)},pull:function(){x&&P(!1)}}},[x]);l.useImperativeHandle(v,function(){return De},[De]);var Re=xe&&!Z,$e=function(){!Re||Z||(_e.current=!0,ge())},We=function(){if(!Z&&!g)return{};var B={};return i==="left"||i==="right"?B.width=d:B.height=n,B},Fe=function(){var B=function(oe){var z;if(typeof x=="boolean"?z=x?Pe.distance:0:z=x.distance,z=parseFloat(String(z||0)),oe==="left"||oe==="right")return"translateX(".concat(oe==="left"?z:-z,"px)");if(oe==="top"||oe==="bottom")return"translateY(".concat(oe==="top"?z:-z,"px)")},Qe=g?{}:We();return(0,m.Z)((0,m.Z)({zIndex:pe,transform:X?B(i):void 0},Qe),Te)};function Ve(){return s&&l.createElement("button",{type:"button",onClick:H,"aria-label":"Close",className:"".concat(O,"-close"),style:{"--scroll-bar":"".concat((0,le.Z)(),"px")}},te)}function je(){if(!ne&&!s)return null;var A=ne?"".concat(O,"-header"):"".concat(O,"-header-no-title");return l.createElement("div",{className:A,style:ye},ne&&l.createElement("div",{className:"".concat(O,"-title")},ne),s&&Ve())}function Xe(){if(!de)return null;var A="".concat(O,"-footer");return l.createElement("div",{className:A,style:Ce},de)}var Ye=function(){if(_e.current&&!Z)return null;_e.current=!1;var B={};return Re&&(B.opacity=0,B.transition="opacity .3s"),l.createElement("div",{className:"".concat(O,"-wrapper-body"),style:(0,m.Z)((0,m.Z)({},B),Ne),onTransitionEnd:$e},je(),l.createElement("div",{className:"".concat(O,"-body"),style:Se},ae),Xe())},Je=ie()((0,p.Z)({"no-mask":!g},"".concat(O,"-rtl"),he==="rtl"),me),Ge=g?We():{};return l.createElement(Oe.Provider,{value:De},l.createElement(Ie,(0,m.Z)({handler:!1},(0,m.Z)({placement:i,prefixCls:O,maskClosable:u,level:w,keyboard:j,children:ae,onClose:H},Ee),Ge,{open:Z,showMask:g,style:Fe(),className:Je}),Ye()))});Me.displayName="Drawer";var ke=l.forwardRef(function(o,v){var c=o.prefixCls,d=o.getContainer,e=l.useContext(Be.E_),n=e.getPopupContainer,t=e.getPrefixCls,s=e.direction,r=t("drawer",c),i=d===void 0&&n?function(){return n(document.body)}:d;return l.createElement(Me,(0,m.Z)({},o,{ref:v,prefixCls:r,getContainer:i,direction:s}))});ke.displayName="DrawerWrapper";var Ke=ke},57338:function(K,k,a){"use strict";var p=a(43673),m=a.n(p),b=a(1917),l=a.n(b)},4084:function(K,k,a){"use strict";var p=a(28991),m=a(6610),b=a(5991),l=a(10379),R=a(60446),S=a(67294),$=a(34203),T=a(50344),D=a(80334),h=a(42550),J=a(91033),W="rc-observer-key",se=function(ie){(0,l.Z)(F,ie);var le=(0,R.Z)(F);function F(){var y;return(0,m.Z)(this,F),y=le.apply(this,arguments),y.resizeObserver=null,y.childNode=null,y.currentElement=null,y.state={width:0,height:0,offsetHeight:0,offsetWidth:0},y.onResize=function(I){var _=y.props.onResize,M=I[0].target,V=M.getBoundingClientRect(),L=V.width,G=V.height,re=M.offsetWidth,Q=M.offsetHeight,q=Math.floor(L),ce=Math.floor(G);if(y.state.width!==q||y.state.height!==ce||y.state.offsetWidth!==re||y.state.offsetHeight!==Q){var U={width:q,height:ce,offsetWidth:re,offsetHeight:Q};y.setState(U),_&&Promise.resolve().then(function(){_((0,p.Z)((0,p.Z)({},U),{},{offsetWidth:re,offsetHeight:Q}))})}},y.setChildNode=function(I){y.childNode=I},y}return(0,b.Z)(F,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){var I=this.props.disabled;if(I){this.destroyObserver();return}var _=(0,$.Z)(this.childNode||this),M=_!==this.currentElement;M&&(this.destroyObserver(),this.currentElement=_),!this.resizeObserver&&_&&(this.resizeObserver=new J.Z(this.onResize),this.resizeObserver.observe(_))}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var I=this.props.children,_=(0,T.Z)(I);if(_.length>1)(0,D.ZP)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(_.length===0)return(0,D.ZP)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var M=_[0];if(S.isValidElement(M)&&(0,h.Yr)(M)){var V=M.ref;_[0]=S.cloneElement(M,{ref:(0,h.sQ)(V,this.setChildNode)})}return _.length===1?_[0]:_.map(function(L,G){return!S.isValidElement(L)||"key"in L&&L.key!==null?L:S.cloneElement(L,{key:"".concat(W,"-").concat(G)})})}}]),F}(S.Component);se.displayName="ResizeObserver",k.Z=se},57186:function(K,k,a){"use strict";a.d(k,{f:function(){return m}});var p=a(67294);function m(l){var R=p.createContext(null);function S(T){var D=l(T.initialState);return p.createElement(R.Provider,{value:D},T.children)}function $(){var T=p.useContext(R);if(T===null)throw new Error("Component must be wrapped with <Container.Provider>");return T}return{Provider:S,useContainer:$}}function b(l){return l.useContainer()}},30939:function(K,k,a){"use strict";a.d(k,{P:function(){return l}});var p=a(67294);function m(D){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(h){return typeof h}:m=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},m(D)}var b=function(){var h=new WeakSet;return function(J,W){if(m(W)==="object"&&W!==null){if(h.has(W))return;h.add(W)}return W}},l=function(h){return JSON.stringify(h,b())},R=function(h,J){try{return l(h)===l(J)}catch(W){}return!1};function S(D){var h=useRef("");return R(D,h.current)||(h.current=JSON.stringify(D,b())),h.current}function $(D,h){useEffect(D,[S(h)])}var T=null}}]);
