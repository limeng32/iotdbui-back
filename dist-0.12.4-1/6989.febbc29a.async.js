(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6989],{8212:function(V,R,l){"use strict";l.d(R,{Z:function(){return A}});var v=l(67294),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=x,X=l(27029),K=function(N,Q){return v.createElement(X.Z,Object.assign({},N,{ref:Q,icon:o}))};K.displayName="EditOutlined";var A=v.forwardRef(K)},34719:function(){},59289:function(V,R,l){"use strict";l.d(R,{Z:function(){return st}});var v=l(22122),x=l(96156),o=l(67294),X=l(94184),K=l.n(X),A=l(42550),g=l(65632),N=l(21687),Q=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},q=function(r,i){var e=r.prefixCls,t=r.component,a=t===void 0?"article":t,s=r.className,d=r["aria-label"],c=r.setContentRef,p=r.children,f=Q(r,["prefixCls","component","className","aria-label","setContentRef","children"]),u=i;return c&&((0,N.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=(0,A.sQ)(i,c)),o.createElement(g.C,null,function(h){var b=h.getPrefixCls,I=h.direction,L=a,O=b("typography",e),z=K()(O,(0,x.Z)({},"".concat(O,"-rtl"),I==="rtl"),s);return o.createElement(L,(0,v.Z)({className:z,"aria-label":d,ref:u},f),p)})},F=o.forwardRef(q);F.displayName="Typography";var W=F,E=W,U=l(90484),_=l(98423),M=l(85061),J=l(6610),Ee=l(5991),Ce=l(10379),xe=l(60446),ne=l(50344),be=l(20640),Oe=l.n(be),Se=l(8212),Te=l(79508),Ne=l(99165),Ze=l(31739),Pe=l(69224),Re=l(42051),fe=l(34952),re=l(32637),ve=l(31808),ie=l(69713),Le=l(28481),ye=l(15105),we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},De=we,Ae=l(27029),he=function(r,i){return o.createElement(Ae.Z,Object.assign({},r,{ref:i,icon:De}))};he.displayName="EnterOutlined";var Ie=o.forwardRef(he),je=l(68100),Me=function(r){var i=r.prefixCls,e=r["aria-label"],t=r.className,a=r.style,s=r.direction,d=r.maxLength,c=r.autoSize,p=c===void 0?!0:c,f=r.value,u=r.onSave,h=r.onCancel,b=r.onEnd,I=o.useRef(),L=o.useRef(!1),O=o.useRef(),z=o.useState(f),$=(0,Le.Z)(z,2),w=$[0],G=$[1];o.useEffect(function(){G(f)},[f]),o.useEffect(function(){if(I.current&&I.current.resizableTextArea){var C=I.current.resizableTextArea.textArea;C.focus();var T=C.value.length;C.setSelectionRange(T,T)}},[]);var y=function(T){var P=T.target;G(P.value.replace(/[\n\r]/g,""))},m=function(){L.current=!0},D=function(){L.current=!1},Z=function(T){var P=T.keyCode;L.current||(O.current=P)},j=function(){u(w.trim())},B=function(T){var P=T.keyCode,ce=T.ctrlKey,de=T.altKey,pe=T.metaKey,ue=T.shiftKey;O.current===P&&!L.current&&!ce&&!de&&!pe&&!ue&&(P===ye.Z.ENTER?(j(),b==null||b()):P===ye.Z.ESC&&h())},k=function(){j()},H=K()(i,"".concat(i,"-edit-content"),(0,x.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return o.createElement("div",{className:H,style:a},o.createElement(je.Z,{ref:I,maxLength:d,value:w,onChange:y,onKeyDown:Z,onKeyUp:B,onCompositionStart:m,onCompositionEnd:D,onBlur:k,"aria-label":e,autoSize:p}),o.createElement(Ie,{className:"".concat(i,"-edit-content-confirm")}))},ke=Me,ae=l(73935),Ke=1,Ue=3,ze=8,S,oe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function le(n){if(!n)return 0;var r=n.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function $e(n){var r=Array.prototype.slice.apply(n);return r.map(function(i){return"".concat(i,": ").concat(n.getPropertyValue(i),";")}).join("")}function Be(n){var r=[];return n.forEach(function(i){var e=r[r.length-1];typeof i=="string"&&typeof e=="string"?r[r.length-1]+=i:r.push(i)}),r}function me(n,r){n.setAttribute("aria-hidden","true");var i=window.getComputedStyle(r),e=$e(i);n.setAttribute("style",e),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function He(n){var r=document.createElement("div");me(r,n),r.appendChild(document.createTextNode("text")),document.body.appendChild(r);var i=r.offsetHeight,e=le(window.getComputedStyle(n).lineHeight);return document.body.removeChild(r),i>e?i:e}var We=function(n,r,i,e,t){S||(S=document.createElement("div"),S.setAttribute("aria-hidden","true")),S.parentNode||document.body.appendChild(S);var a=r.rows,s=r.suffix,d=s===void 0?"":s,c=window.getComputedStyle(n),p=He(n),f=Math.floor(p)*(a+1)+le(c.paddingTop)+le(c.paddingBottom);me(S,n);var u=Be((0,ne.Z)(i));(0,ae.render)(o.createElement("div",{style:oe},o.createElement("span",{style:oe},u,d),o.createElement("span",{style:oe},e)),S);function h(){return Math.ceil(S.getBoundingClientRect().height)<f}if(h())return(0,ae.unmountComponentAtNode)(S),{content:i,text:S.innerHTML,ellipsis:!1};var b=Array.prototype.slice.apply(S.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(y){var m=y.nodeType;return m!==ze}),I=Array.prototype.slice.apply(S.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,ae.unmountComponentAtNode)(S);var L=[];S.innerHTML="";var O=document.createElement("span");S.appendChild(O);var z=document.createTextNode(t+d);O.appendChild(z),I.forEach(function(y){S.appendChild(y)});function $(y){O.insertBefore(y,z)}function w(y,m){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,Z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m.length,j=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,B=Math.floor((D+Z)/2),k=m.slice(0,B);if(y.textContent=k,D>=Z-1)for(var H=Z;H>=D;H-=1){var C=m.slice(0,H);if(y.textContent=C,h()||!C)return H===m.length?{finished:!1,reactNode:m}:{finished:!0,reactNode:C}}return h()?w(y,m,B,Z,B):w(y,m,D,B,j)}function G(y,m){var D=y.nodeType;if(D===Ke)return $(y),h()?{finished:!1,reactNode:u[m]}:(O.removeChild(y),{finished:!0,reactNode:null});if(D===Ue){var Z=y.textContent||"",j=document.createTextNode(Z);return $(j),w(j,Z)}return{finished:!1,reactNode:null}}return b.some(function(y,m){var D=G(y,m),Z=D.finished,j=D.reactNode;return j&&L.push(j),Z}),{content:L,text:S.innerHTML,ellipsis:!0}},Fe=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Ge=(0,ve.GL)("webkitLineClamp"),Ve=(0,ve.GL)("textOverflow");function Xe(n,r){var i=n.mark,e=n.code,t=n.underline,a=n.delete,s=n.strong,d=n.keyboard,c=n.italic,p=r;function f(u,h){!u||(p=o.createElement(h,{},p))}return f(s,"strong"),f(t,"u"),f(a,"del"),f(e,"code"),f(i,"mark"),f(d,"kbd"),f(c,"i"),p}function ee(n,r,i){return n===!0||n===void 0?r:n||i&&r}var ge="...",se=function(n){(0,Ce.Z)(i,n);var r=(0,xe.Z)(i);function i(){var e;return(0,J.Z)(this,i),e=r.apply(this,arguments),e.contentRef=o.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),d=s.onExpand;e.setState({expanded:!0}),(a=d)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,d=a.copyable,c=(0,v.Z)({},(0,U.Z)(d)==="object"?d:null);c.text===void 0&&(c.text=String(s)),Oe()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){re.Z.cancel(e.rafId),e.rafId=(0,re.Z)(function(){e.syncEllipsis()})},e}return(0,Ee.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),d=this.getEllipsis(t);(a!==t.children||s.rows!==d.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),re.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,d=s.editable;return d?(0,v.Z)({editing:a},(0,U.Z)(d)==="object"?d:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?(0,v.Z)({rows:1,expandable:!1},(0,U.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,d=a.copyable,c=this.getEllipsis(),p=c.rows,f=c.expandable,u=c.suffix,h=c.onEllipsis,b=c.tooltip;return u||b||s||d||f||!t||h?!1:p===1?Ve:Ge}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,d=t.expanded,c=this.getEllipsis(),p=c.rows,f=c.suffix,u=c.onEllipsis,h=this.props.children;if(!(!p||p<0||!this.contentRef.current||d)&&!this.canUseCSSEllipsis()){(0,N.Z)((0,ne.Z)(h).every(function(z){return typeof z=="string"}),"Typography","`ellipsis` should use string as children only.");var b=We(this.contentRef.current,{rows:p,suffix:f},h,this.renderOperations(!0),ge),I=b.content,L=b.text,O=b.ellipsis;(a!==L||s!==O)&&(this.setState({ellipsisText:L,ellipsisContent:I,isEllipsis:O}),s!==O&&u&&u(O))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,d=a.symbol,c=this.state,p=c.expanded,f=c.isEllipsis;if(!s||!t&&(p||!f))return null;var u;return d?u=d:u=this.expandStr,o.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,d=(0,ne.Z)(s)[0]||this.editStr,c=typeof d=="string"?d:"";return o.createElement(ie.Z,{key:"edit",title:s===!1?"":d},o.createElement(fe.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},a||o.createElement(Se.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),d=a.tooltips,c=a.icon,p=Array.isArray(d)?d:[d],f=Array.isArray(c)?c:[c],u=t?ee(p[1],this.copiedStr):ee(p[0],this.copyStr),h=t?this.copiedStr:this.copyStr,b=typeof u=="string"?u:h;return o.createElement(ie.Z,{key:"copy",title:u},o.createElement(fe.Z,{className:K()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":b},t?ee(f[1],o.createElement(Te.Z,null),!0):ee(f[0],o.createElement(Ne.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,d=t.style,c=this.context.direction,p=this.getEditable(),f=p.maxLength,u=p.autoSize,h=p.onEnd;return o.createElement(ke,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:h,prefixCls:this.getPrefixCls(),className:s,style:d,direction:c,maxLength:f,autoSize:u})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,d=a.isEllipsis,c=a.expanded,p=this.props,f=p.component,u=p.children,h=p.className,b=p.type,I=p.disabled,L=p.style,O=Fe(p,["component","children","className","type","disabled","style"]),z=this.context.direction,$=this.getEllipsis(),w=$.rows,G=$.suffix,y=$.tooltip,m=this.getPrefixCls(),D=(0,_.Z)(O,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,M.Z)(Pe.nf))),Z=this.canUseCSSEllipsis(),j=w===1&&Z,B=w&&w>1&&Z,k=u;if(w&&d&&!c&&!Z){var H=O.title,C=H||"";!H&&(typeof u=="string"||typeof u=="number")&&(C=String(u)),C=C.slice(String(s||"").length),k=o.createElement(o.Fragment,null,s,o.createElement("span",{title:C,"aria-hidden":"true"},ge),G),y&&(k=o.createElement(ie.Z,{title:y===!0?u:y},o.createElement("span",null,k)))}else k=o.createElement(o.Fragment,null,u,G);return k=Xe(this.props,k),o.createElement(Re.Z,{componentName:"Text"},function(T){var P,ce=T.edit,de=T.copy,pe=T.copied,ue=T.expand;return t.editStr=ce,t.copyStr=de,t.copiedStr=pe,t.expandStr=ue,o.createElement(Ze.Z,{onResize:t.resizeOnNextFrame,disabled:Z},o.createElement(E,(0,v.Z)({className:K()((P={},(0,x.Z)(P,"".concat(m,"-").concat(b),b),(0,x.Z)(P,"".concat(m,"-disabled"),I),(0,x.Z)(P,"".concat(m,"-ellipsis"),w),(0,x.Z)(P,"".concat(m,"-single-line"),w===1),(0,x.Z)(P,"".concat(m,"-ellipsis-single-line"),j),(0,x.Z)(P,"".concat(m,"-ellipsis-multiple-line"),B),P),h),style:(0,v.Z)((0,v.Z)({},L),{WebkitLineClamp:B?w:void 0}),component:f,ref:t.contentRef,direction:z},D),k,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return(0,N.Z)(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(o.Component);se.contextType=g.E_,se.defaultProps={children:""};var te=se,Qe=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Je=function(r){var i=r.ellipsis,e=Qe(r,["ellipsis"]),t=o.useMemo(function(){return i&&(0,U.Z)(i)==="object"?(0,_.Z)(i,["expandable","rows"]):i},[i]);return(0,N.Z)((0,U.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),o.createElement(te,(0,v.Z)({},e,{ellipsis:t,component:"span"}))},Ye=Je,qe=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},_e=function(r,i){var e=r.ellipsis,t=r.rel,a=qe(r,["ellipsis","rel"]);(0,N.Z)((0,U.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=o.useRef(null);o.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var d=(0,v.Z)((0,v.Z)({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete d.navigate,o.createElement(te,(0,v.Z)({},d,{ref:s,ellipsis:!!e,component:"a"}))},et=o.forwardRef(_e),tt=l(93355),nt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},rt=(0,tt.a)(1,2,3,4,5),it=function(r){var i=r.level,e=i===void 0?1:i,t=nt(r,["level"]),a;return rt.indexOf(e)!==-1?a="h".concat(e):((0,N.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),o.createElement(te,(0,v.Z)({},t,{component:a}))},at=it,ot=function(r){return o.createElement(te,(0,v.Z)({},r,{component:"div"}))},lt=ot,Y=E;Y.Text=Ye,Y.Link=et,Y.Title=at,Y.Paragraph=lt;var st=Y},402:function(V,R,l){"use strict";var v=l(43673),x=l.n(v),o=l(34719),X=l.n(o),K=l(22385),A=l(47673)},20640:function(V,R,l){"use strict";var v=l(11742),x={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function X(A){var g=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return A.replace(/#{\s*key\s*}/g,g)}function K(A,g){var N,Q,q,F,W,E,U=!1;g||(g={}),N=g.debug||!1;try{q=v(),F=document.createRange(),W=document.getSelection(),E=document.createElement("span"),E.textContent=A,E.style.all="unset",E.style.position="fixed",E.style.top=0,E.style.clip="rect(0, 0, 0, 0)",E.style.whiteSpace="pre",E.style.webkitUserSelect="text",E.style.MozUserSelect="text",E.style.msUserSelect="text",E.style.userSelect="text",E.addEventListener("copy",function(M){if(M.stopPropagation(),g.format)if(M.preventDefault(),typeof M.clipboardData=="undefined"){N&&console.warn("unable to use e.clipboardData"),N&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var J=x[g.format]||x.default;window.clipboardData.setData(J,A)}else M.clipboardData.clearData(),M.clipboardData.setData(g.format,A);g.onCopy&&(M.preventDefault(),g.onCopy(M.clipboardData))}),document.body.appendChild(E),F.selectNodeContents(E),W.addRange(F);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");U=!0}catch(M){N&&console.error("unable to copy using execCommand: ",M),N&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(g.format||"text",A),g.onCopy&&g.onCopy(window.clipboardData),U=!0}catch(J){N&&console.error("unable to copy using clipboardData: ",J),N&&console.error("falling back to prompt"),Q=X("message"in g?g.message:o),window.prompt(Q,A)}}finally{W&&(typeof W.removeRange=="function"?W.removeRange(F):W.removeAllRanges()),E&&document.body.removeChild(E),q()}return U}V.exports=K},11742:function(V){V.exports=function(){var R=document.getSelection();if(!R.rangeCount)return function(){};for(var l=document.activeElement,v=[],x=0;x<R.rangeCount;x++)v.push(R.getRangeAt(x));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return R.removeAllRanges(),function(){R.type==="Caret"&&R.removeAllRanges(),R.rangeCount||v.forEach(function(o){R.addRange(o)}),l&&l.focus()}}}}]);
