(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7812],{12826:function(Pe,te,u){"use strict";u.d(te,{Z:function(){return Rt}});var C=u(84305),j=u(69224),G=u(98858),h=u(4914),N=u(9715),L=u(86585),V=u(49111),I=u(19650),n=u(67294),X=u(54549),he=u(79508),b=u(8212),w=u(50344),d=u(15196),f=u(31649),P=u(34792),S=u(48086),$=u(21770),i=u(12862),s=u(73935),o=u(86671);function m(e,t,r,a,l,c,y){try{var g=e[c](y),v=g.value}catch(A){r(A);return}g.done?t(v):Promise.resolve(v).then(a,l)}function O(e){return function(){var t=this,r=arguments;return new Promise(function(a,l){var c=e.apply(t,r);function y(v){m(c,a,l,y,g,"next",v)}function g(v){m(c,a,l,y,g,"throw",v)}y(void 0)})}}function M(e,t){return ne(e)||Se(e,t)||re(e,t)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(!!e){if(typeof e=="string")return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}}function se(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Se(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a=[],l=!0,c=!1,y,g;try{for(r=r.call(e);!(l=(y=r.next()).done)&&(a.push(y.value),!(t&&a.length===t));l=!0);}catch(v){c=!0,g=v}finally{try{!l&&r.return!=null&&r.return()}finally{if(c)throw g}}return a}}function ne(e){if(Array.isArray(e))return e}function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,a)}return r}function Ze(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ae(Object(r),!0).forEach(function(a){k(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=e.data,r=e.row;return Ze(Ze({},t),r)}function F(e){var t=e.type||"single",r=(0,$.Z)([],{value:e.editableKeys,onChange:e.onChange?function(D){var R;e==null||(R=e.onChange)===null||R===void 0||R.call(e,D,e.dataSource)}:void 0}),a=M(r,2),l=a[0],c=a[1],y=(0,n.useMemo)(function(){var D=t==="single"?l==null?void 0:l.slice(0,1):l;return new Set(D)},[(l||[]).join(","),t]),g=(0,n.useCallback)(function(D){return!!(l==null?void 0:l.includes((0,o.sN)(D)))},[(l||[]).join(",")]),v=function(R){return y.size>0&&t==="single"?(S.default.warn(e.onlyOneLineEditorAlertMessage||"\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C"),!1):(y.add((0,o.sN)(R)),c(Array.from(y)),!0)},A=function(R){return s.unstable_batchedUpdates(function(){y.delete((0,o.sN)(R)),c(Array.from(y))}),!0},me=function(){var D=O(regeneratorRuntime.mark(function R(H,B,x,ee){var ue,fe;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e==null||(ue=e.onCancel)===null||ue===void 0?void 0:ue.call(e,H,B,x,ee);case 2:if(fe=E.sent,fe!==!1){E.next=5;break}return E.abrupt("return",!1);case 5:return E.abrupt("return",!0);case 6:case"end":return E.stop()}},R)}));return function(H,B,x,ee){return D.apply(this,arguments)}}(),ye=function(){var D=O(regeneratorRuntime.mark(function R(H,B,x){var ee,ue,fe;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e==null||(ee=e.onSave)===null||ee===void 0?void 0:ee.call(e,H,B,x);case 2:if(ue=E.sent,ue!==!1){E.next=5;break}return E.abrupt("return",!1);case 5:return A(H),fe={data:e.dataSource,row:B,key:H,childrenColumnName:e.childrenColumnName||"children"},e.setDataSource(p(fe)),E.abrupt("return",!0);case 9:case"end":return E.stop()}},R)}));return function(H,B,x){return D.apply(this,arguments)}}(),q=(0,i.YB)(),de=q.getMessage("editableTable.action.save","\u4FDD\u5B58"),pe=q.getMessage("editableTable.action.delete","\u5220\u9664"),Q=q.getMessage("editableTable.action.cancel","\u53D6\u6D88"),ge=(0,n.useCallback)(function(D,R,H){var B=Ze({recordKey:D,cancelEditable:A,onCancel:me,onSave:ye,editableKeys:l,setEditableRowKeys:c,form:R,saveText:de,cancelText:Q,deleteText:pe,deletePopconfirmMessage:"\u5220\u9664\u6B64\u884C\uFF1F",editorType:"Map"},H),x=(0,o.aX)(e.dataSource,B);return e.actionRender?e.actionRender(e.dataSource,B,{save:x[0],delete:x[1],cancel:x[2]}):x},[l&&l.join(","),e.dataSource]);return{editableKeys:l,setEditableRowKeys:c,isEditable:g,actionRender:ge,startEditable:v,cancelEditable:A}}var ae=F,W=u(2026),Y=u(94984),ie=u(53621),K=u(78164),J=u(88306),T=u(30939),le=u(72012),_=u(39144),De=u(71748),Z=u(33860),Ne=u(48736),We=u(27049),ce=u(38069),Ee=function(t){var r=t.padding;return n.createElement("div",{style:{padding:r||"0 24px"}},n.createElement(We.Z,{style:{margin:0}}))},we={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},Ce=function(t){var r=t.size,a=t.active,l=(0,ce.ZP)(),c=r===void 0?we[l]||6:r,y=function(v){return c>2&&v!==0?42:v===0?0:16};return n.createElement(_.Z,{bordered:!1,style:{marginBottom:16}},n.createElement("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"}},new Array(c).fill(null).map(function(g,v){return n.createElement("div",{key:v,style:{borderLeft:c>2&&v===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingLeft:y(v),flex:1,marginRight:v===0?16:0}},n.createElement(Z.Z,{active:a,paragraph:!1,title:{width:100,style:{marginTop:0}}}),n.createElement(Z.Z.Button,{active:a,style:{height:48}}))})))},Te=function(t){var r=t.active;return n.createElement(n.Fragment,null,n.createElement(_.Z,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24}},n.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},n.createElement("div",{style:{maxWidth:"100%",flex:1}},n.createElement(Z.Z,{active:r,title:{width:100,style:{marginTop:0}},paragraph:{rows:1,style:{margin:0}}})),n.createElement(Z.Z.Button,{active:r,size:"small",style:{width:165,marginTop:12}}))),n.createElement(Ee,null))},je=function(t){var r=t.size,a=t.active,l=a===void 0?!0:a,c=t.actionButton;return n.createElement(_.Z,{bordered:!1,bodyStyle:{padding:0}},new Array(r).fill(null).map(function(y,g){return n.createElement(Te,{key:g,active:!!l})}),c!==!1&&n.createElement(_.Z,{bordered:!1,style:{borderTopRightRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement(Z.Z.Button,{style:{width:102},active:l,size:"small"})))},Ie=function(t){var r=t.active;return n.createElement("div",{style:{marginBottom:16}},n.createElement(Z.Z,{paragraph:!1,title:{width:185}}),n.createElement(Z.Z.Button,{active:r,size:"small"}))},Me=function(t){var r=t.active;return n.createElement(_.Z,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBottom:8}},n.createElement(I.Z,{style:{width:"100%",justifyContent:"space-between"}},n.createElement(Z.Z.Button,{active:r,style:{width:200},size:"small"}),n.createElement(I.Z,null,n.createElement(Z.Z.Button,{active:r,size:"small",style:{width:120}}),n.createElement(Z.Z.Button,{active:r,size:"small",style:{width:80}}))))},Re=function(t){var r=t.active,a=r===void 0?!0:r,l=t.statistic,c=t.actionButton,y=t.toolbar,g=t.pageHeader,v=t.list,A=v===void 0?5:v;return n.createElement("div",{style:{width:"100%"}},g!==!1&&n.createElement(Ie,{active:a}),l!==!1&&n.createElement(Ce,{size:l,active:a}),(y!==!1||A!==!1)&&n.createElement(_.Z,{bordered:!1,bodyStyle:{padding:0}},y!==!1&&n.createElement(Me,{active:a}),A!==!1&&n.createElement(je,{size:A,active:a,actionButton:c})))},_e=Re,Le=function(t){var r=t.active,a=r===void 0?!0:r,l=t.pageHeader;return n.createElement("div",{style:{width:"100%"}},l!==!1&&n.createElement(Ie,{active:a}),n.createElement(_.Z,null,n.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128}},n.createElement(Z.Z.Avatar,{size:64,style:{marginBottom:32}}),n.createElement(Z.Z.Button,{active:a,style:{width:214,marginBottom:8}}),n.createElement(Z.Z.Button,{active:a,style:{width:328},size:"small"}),n.createElement(I.Z,{style:{marginTop:24}},n.createElement(Z.Z.Button,{active:a,style:{width:116}}),n.createElement(Z.Z.Button,{active:a,style:{width:116}})))))},ze=Le,Be={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},et=function(t){var r=t.active;return n.createElement("div",{style:{marginTop:32}},n.createElement(Z.Z.Button,{active:r,size:"small",style:{width:100,marginBottom:16}}),n.createElement("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"}},n.createElement("div",{style:{flex:1,marginRight:24,maxWidth:300}},n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:0}}}),n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:8}}}),n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:8}}})),n.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{maxWidth:300,margin:"auto"}},n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:0}}}),n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:8}}})))))},tt=function(t){var r=t.size,a=t.active,l=(0,ce.ZP)(),c=r===void 0?Be[l]||3:r;return n.createElement("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"}},new Array(c).fill(null).map(function(y,g){return n.createElement("div",{key:g,style:{flex:1,paddingLeft:g===0?0:24,paddingRight:g===c-1?0:24}},n.createElement(Z.Z,{active:a,paragraph:!1,title:{style:{marginTop:0}}}),n.createElement(Z.Z,{active:a,paragraph:!1,title:{style:{marginTop:8}}}),n.createElement(Z.Z,{active:a,paragraph:!1,title:{style:{marginTop:8}}}))}))},$e=function(t){var r=t.active,a=t.header,l=a===void 0?!1:a,c=(0,ce.ZP)(),y=Be[c]||3;return n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",background:l?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"}},new Array(y).fill(null).map(function(g,v){return n.createElement("div",{key:v,style:{flex:1,paddingLeft:l&&v===0?0:20,paddingRight:32}},n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{margin:0,height:24,width:l?"75px":"100%"}}}))}),n.createElement("div",{style:{flex:3,paddingLeft:32}},n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{margin:0,height:24,width:l?"75px":"100%"}}}))),n.createElement(Ee,{padding:"0px 0px"}))},rt=function(t){var r=t.active,a=t.size,l=a===void 0?4:a;return n.createElement(_.Z,{bordered:!1},n.createElement(Z.Z.Button,{active:r,size:"small",style:{width:100,marginBottom:16}}),n.createElement($e,{header:!0,active:r}),new Array(l).fill(null).map(function(c,y){return n.createElement($e,{key:y,active:r})}),n.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:16}},n.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})))},nt=function(t){var r=t.active;return n.createElement(_.Z,{bordered:!1,style:{borderTopRightRadius:0,borderTopLeftRadius:0}},n.createElement(Z.Z.Button,{active:r,size:"small",style:{width:100,marginBottom:16}}),n.createElement(tt,{active:r}),n.createElement(et,{active:r}))},at=function(t){var r=t.active,a=r===void 0?!0:r,l=t.pageHeader,c=t.list;return n.createElement("div",{style:{width:"100%"}},l!==!1&&n.createElement(Ie,{active:a}),n.createElement(nt,{active:a}),c!==!1&&n.createElement(Ee,null),c!==!1&&n.createElement(rt,{active:a,size:c}))},it=at;function lt(e,t){if(e==null)return{};var r=ot(e,t),a,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)a=c[l],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function ot(e,t){if(e==null)return{};var r={},a=Object.keys(e),l,c;for(c=0;c<a.length;c++)l=a[c],!(t.indexOf(l)>=0)&&(r[l]=e[l]);return r}var ut=function(t){var r=t.type,a=r===void 0?"list":r,l=lt(t,["type"]);return a==="result"?n.createElement(ze,l):a==="descriptions"?n.createElement(it,l):n.createElement(_e,l)},st=ut;function ct(e){return vt(e)||ft(e)||Ge(e)||dt()}function dt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vt(e){if(Array.isArray(e))return ke(e)}function Ue(e,t,r,a,l,c,y){try{var g=e[c](y),v=g.value}catch(A){r(A);return}g.done?t(v):Promise.resolve(v).then(a,l)}function mt(e){return function(){var t=this,r=arguments;return new Promise(function(a,l){var c=e.apply(t,r);function y(v){Ue(c,a,l,y,g,"next",v)}function g(v){Ue(c,a,l,y,g,"throw",v)}y(void 0)})}}function He(e,t){return gt(e)||yt(e,t)||Ge(e,t)||pt()}function pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ge(e,t){if(!!e){if(typeof e=="string")return ke(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ke(e,t)}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function yt(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a=[],l=!0,c=!1,y,g;try{for(r=r.call(e);!(l=(y=r.next()).done)&&(a.push(y.value),!(t&&a.length===t));l=!0);}catch(v){c=!0,g=v}finally{try{!l&&r.return!=null&&r.return()}finally{if(c)throw g}}return a}}function gt(e){if(Array.isArray(e))return e}var ht=function(t,r){var a=r||{},l=a.onRequestError,c=a.effects,y=a.manual,g=a.dataSource,v=a.defaultDataSource,A=a.onDataSourceChange,me=(0,$.Z)(v,{value:g,onChange:A}),ye=He(me,2),q=ye[0],de=ye[1],pe=(0,$.Z)(r==null?void 0:r.loading,{value:r==null?void 0:r.loading,onChange:r==null?void 0:r.onLoadingChange}),Q=He(pe,2),ge=Q[0],D=Q[1],R=function(x){de(x),D(!1)},H=function(){var B=mt(regeneratorRuntime.mark(function x(){var ee,ue,fe;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(!ge){E.next=2;break}return E.abrupt("return");case 2:return D(!0),E.prev=3,E.next=6,t();case 6:if(E.t0=E.sent,E.t0){E.next=9;break}E.t0={};case 9:ee=E.t0,ue=ee.data,fe=ee.success,fe!==!1&&R(ue),E.next=23;break;case 15:if(E.prev=15,E.t1=E.catch(3),l!==void 0){E.next=21;break}throw new Error(E.t1);case 21:l(E.t1);case 22:D(!1);case 23:case"end":return E.stop()}},x,null,[[3,15]])}));return function(){return B.apply(this,arguments)}}();return(0,n.useEffect)(function(){y||H()},[].concat(ct(c||[]),[y])),{dataSource:q,setDataSource:de,loading:ge,reload:function(){return H()}}},Et=ht,Ft=u(83660),bt=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],Pt=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError"];function Ve(e){return wt(e)||xt(e)||St(e)||Ot()}function Ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function St(e,t){if(!!e){if(typeof e=="string")return Ke(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ke(e,t)}}function xt(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wt(e){if(Array.isArray(e))return Ke(e)}function Ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Qe(e,t,r,a,l,c,y){try{var g=e[c](y),v=g.value}catch(A){r(A);return}g.done?t(v):Promise.resolve(v).then(a,l)}function Ct(e){return function(){var t=this,r=arguments;return new Promise(function(a,l){var c=e.apply(t,r);function y(v){Qe(c,a,l,y,g,"next",v)}function g(v){Qe(c,a,l,y,g,"throw",v)}y(void 0)})}}function Xe(e,t){if(e==null)return{};var r=Tt(e,t),a,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)a=c[l],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function Tt(e,t){if(e==null)return{};var r={},a=Object.keys(e),l,c;for(c=0;c<a.length;c++)l=a[c],!(t.indexOf(l)>=0)&&(r[l]=e[l]);return r}function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},be.apply(this,arguments)}function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,a)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ye(Object(r),!0).forEach(function(a){Zt(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Zt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Dt=function(t,r){var a=t.dataIndex;if(a){var l=Array.isArray(a)?(0,J.Z)(r,a):r[a];if(l!==void 0||l!==null)return l}return t.children},It=function(t){var r=t.valueEnum,a=t.action,l=t.index,c=t.text,y=t.entity,g=t.mode,v=t.render,A=t.editableUtils,me=t.valueType,ye=t.plain,q=t.dataIndex,de=t.request,pe=t.renderFormItem,Q=t.params,ge={text:c,valueEnum:r,mode:g||"read",proFieldProps:{render:v?function(){return v==null?void 0:v(c,y,l,a,oe(oe({},t),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:me,request:de,params:Q,plain:ye};if(g==="read"||!g||me==="option"){var D=(0,W.Z)(t.fieldProps,void 0,oe(oe({},t),{},{rowKey:q,isEditable:!1}));return n.createElement(f.Z,be({name:q},ge,{fieldProps:D}))}return n.createElement("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0}},n.createElement(L.Z.Item,{noStyle:!0,shouldUpdate:!0},function(R){var H,B=(0,W.Z)(t.formItemProps,R,oe(oe({},t),{},{rowKey:q,isEditable:!0})),x=(0,W.Z)(t.fieldProps,R,oe(oe({},t),{},{rowKey:q,isEditable:!0})),ee=pe?pe==null?void 0:pe(oe(oe({},t),{},{type:"descriptions"}),{isEditable:!0,recordKey:q,record:R.getFieldValue([q].flat(1)),defaultRender:function(){return n.createElement(f.Z,be({},ge,{fieldProps:x}))},type:"descriptions"},R):void 0;return n.createElement(I.Z,null,n.createElement(Y.Z,be({style:{margin:0},name:q},B,{initialValue:c||(B==null?void 0:B.initialValue)}),ee||n.createElement(f.Z,be({},ge,{proFieldProps:oe({},ge.proFieldProps),fieldProps:x}))),A==null||(H=A.actionRender)===null||H===void 0?void 0:H.call(A,q||l,R,{cancelText:n.createElement(X.Z,null),saveText:n.createElement(he.Z,null),deleteText:!1}))}))},At=function(t,r,a,l){var c,y=[],g=t==null||(c=t.map)===null||c===void 0?void 0:c.call(t,function(v,A){var me,ye;if(n.isValidElement(v))return v;var q=v.valueEnum,de=v.render,pe=v.renderText,Q=v.mode,ge=v.plain,D=v.dataIndex,R=v.request,H=v.params,B=v.editable,x=Xe(v,bt),ee=typeof x.title=="function"?x.title(v,"descriptions",x.title):x.title,ue=(me=Dt(v,r))!==null&&me!==void 0?me:x.children,fe=pe?pe(ue,r,A,a):ue,Oe=typeof x.valueType=="function"?x.valueType(r||{},"descriptions"):x.valueType,E=l==null?void 0:l.isEditable(D||A),xe=Q||E?"edit":"read",ve=l&&xe==="read"&&B!==!1&&(B==null?void 0:B(fe,r,A))!==!1,z=ve?I.Z:n.Fragment,Fe=n.createElement(h.Z.Item,be({},x,{key:((ye=x.label)===null||ye===void 0?void 0:ye.toString())||A,label:(ee||x.label||x.tooltip||x.tip)&&n.createElement(ie.Z,{label:ee||x.label,tooltip:x.tooltip||x.tip})}),n.createElement(z,null,n.createElement(It,be({},v,{dataIndex:v.dataIndex||A,mode:xe,text:fe,valueType:Oe,entity:r,index:A,action:a,editableUtils:l})),ve&&Oe!=="option"&&n.createElement(b.Z,{onClick:function(){l==null||l.startEditable(D||A)}})));return Oe==="option"?(y.push(Fe),null):Fe}).filter(function(v){return v});return{options:(y==null?void 0:y.length)?y:null,children:g}},jt=function(t){return n.createElement(h.Z.Item,t,t.children)},Mt=function(t){return t.children},Je=function(t){var r,a=t.request,l=t.columns,c=t.params,y=c===void 0?{}:c,g=t.dataSource,v=t.onDataSourceChange,A=t.formProps,me=t.editable,ye=t.loading,q=t.onLoadingChange,de=t.actionRef,pe=t.onRequestError,Q=Xe(t,Pt),ge=(0,n.useContext)(j.ZP.ConfigContext),D=Et(Ct(regeneratorRuntime.mark(function E(){var xe;return regeneratorRuntime.wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(!a){z.next=6;break}return z.next=3,a(y);case 3:z.t0=z.sent,z.next=7;break;case 6:z.t0={data:{}};case 7:return xe=z.t0,z.abrupt("return",xe);case 9:case"end":return z.stop()}},E)})),{onRequestError:pe,effects:[(0,T.P)(y)],manual:!a,dataSource:g,loading:ye,onLoadingChange:q,onDataSourceChange:v}),R=ae(oe(oe({},t.editable),{},{childrenColumnName:void 0,dataSource:D.dataSource,setDataSource:D.setDataSource}));if((0,n.useEffect)(function(){de&&(de.current=oe({reload:D.reload},R))},[D,de,R]),D.loading||D.loading===void 0&&a)return n.createElement(st,{type:"descriptions",list:!1,pageHeader:!1});var H=function(){var xe=(0,w.Z)(t.children).map(function(ve){var z=ve.props,Fe=z.valueEnum,qe=z.valueType,Lt=z.dataIndex,Bt=z.request;return!qe&&!Fe&&!Lt&&!Bt?ve:oe(oe({},ve.props),{},{entity:g})});return[].concat(Ve(l||[]),Ve(xe)).filter(function(ve){return["index","indexBorder"].includes(ve.valueType)?!1:!ve.hideInDescriptions}).sort(function(ve,z){return z.order||ve.order?(z.order||0)-(ve.order||0):(z.index||0)-(ve.index||0)})},B=At(H(),D.dataSource||{},(de==null?void 0:de.current)||D,me?R:void 0),x=B.options,ee=B.children,ue=me?d.ZP:Mt,fe=null;(Q.title||Q.tooltip||Q.tip)&&(fe=n.createElement(ie.Z,{label:Q.title,tooltip:Q.tooltip||Q.tip}));var Oe=ge.getPrefixCls("pro-descriptions");return n.createElement(K.Z,null,n.createElement(ue,be({key:"form",form:(r=t.editable)===null||r===void 0?void 0:r.form,component:!1,submitter:!1},A,{onFinish:void 0}),n.createElement(h.Z,be({className:Oe},Q,{extra:Q.extra?n.createElement(I.Z,null,x,Q.extra):x,title:fe}),ee)))};Je.Item=jt;var Rt=Je},22452:function(Pe,te,u){"use strict";var C=u(67294),j=u(22517),G=u(61834);function h(){return h=Object.assign||function(V){for(var I=1;I<arguments.length;I++){var n=arguments[I];for(var X in n)Object.prototype.hasOwnProperty.call(n,X)&&(V[X]=n[X])}return V},h.apply(this,arguments)}var N="dateTime",L=C.forwardRef(function(V,I){var n=V.fieldProps,X=V.proFieldProps;return C.createElement(j.ZP,h({ref:I,text:n==null?void 0:n.value,mode:"edit",fieldProps:n,valueType:N},X))});te.Z=(0,G.Z)(L,{valueType:N,customLightMode:!0})},86615:function(Pe,te,u){"use strict";var C=u(88983),j=u(47933),G=u(67294),h=u(22517),N=u(22270),L=u(61834),V=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"];function I(){return I=Object.assign||function(i){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(i[m]=o[m])}return i},I.apply(this,arguments)}function n(i,s){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);s&&(m=m.filter(function(O){return Object.getOwnPropertyDescriptor(i,O).enumerable})),o.push.apply(o,m)}return o}function X(i){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?n(Object(o),!0).forEach(function(m){he(i,m,o[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach(function(m){Object.defineProperty(i,m,Object.getOwnPropertyDescriptor(o,m))})}return i}function he(i,s,o){return s in i?Object.defineProperty(i,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[s]=o,i}function b(i,s){if(i==null)return{};var o=w(i,s),m,O;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(i);for(O=0;O<M.length;O++)m=M[O],!(s.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,m)||(o[m]=i[m]))}return o}function w(i,s){if(i==null)return{};var o={},m=Object.keys(i),O,M;for(M=0;M<m.length;M++)O=m[M],!(s.indexOf(O)>=0)&&(o[O]=i[O]);return o}var d=G.forwardRef(function(i,s){var o=i.fieldProps,m=i.options,O=i.radioType,M=i.layout,U=i.proFieldProps,re=i.valueEnum,se=b(i,V);return G.createElement(h.ZP,I({mode:"edit",valueType:O==="button"?"radioButton":"radio",ref:s,valueEnum:(0,N.h)(re,void 0)},se,{fieldProps:X({options:m,layout:M},o)},U))}),f=G.forwardRef(function(i,s){var o=i.fieldProps,m=i.children;return G.createElement(j.ZP,I({},o,{ref:s}),m)}),P=(0,L.Z)(f,{valuePropName:"checked",ignoreWidth:!0}),S=(0,L.Z)(d,{customLightMode:!0}),$=P;$.Group=S,$.Button=j.ZP.Button,te.Z=$},64317:function(Pe,te,u){"use strict";var C=u(67294),j=u(22517),G=u(22270),h=u(61834);function N(){return N=Object.assign||function(d){for(var f=1;f<arguments.length;f++){var P=arguments[f];for(var S in P)Object.prototype.hasOwnProperty.call(P,S)&&(d[S]=P[S])}return d},N.apply(this,arguments)}function L(d,f){var P=Object.keys(d);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(d);f&&(S=S.filter(function($){return Object.getOwnPropertyDescriptor(d,$).enumerable})),P.push.apply(P,S)}return P}function V(d){for(var f=1;f<arguments.length;f++){var P=arguments[f]!=null?arguments[f]:{};f%2?L(Object(P),!0).forEach(function(S){I(d,S,P[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(P)):L(Object(P)).forEach(function(S){Object.defineProperty(d,S,Object.getOwnPropertyDescriptor(P,S))})}return d}function I(d,f,P){return f in d?Object.defineProperty(d,f,{value:P,enumerable:!0,configurable:!0,writable:!0}):d[f]=P,d}var n=C.forwardRef(function(d,f){var P=d.fieldProps,S=d.children,$=d.params,i=d.proFieldProps,s=d.mode,o=d.valueEnum,m=d.request,O=d.showSearch,M=d.options;return C.createElement(j.ZP,N({mode:"edit",valueEnum:(0,G.h)(o),request:m,params:$,valueType:"select",fieldProps:V({options:M,mode:s,showSearch:O},P),ref:f},i),S)}),X=C.forwardRef(function(d,f){var P=d.fieldProps,S=d.children,$=d.params,i=d.proFieldProps,s=d.mode,o=d.valueEnum,m=d.request,O=d.options,M=V({options:O,mode:s||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label",filterOption:!1},P);return C.createElement(j.ZP,N({mode:"edit",valueEnum:(0,G.h)(o),request:m,params:$,valueType:"select",fieldProps:M,ref:f},i),S)}),he=(0,h.Z)(n,{customLightMode:!0}),b=(0,h.Z)(X,{customLightMode:!0}),w=he;w.SearchSelect=b,te.Z=w},90672:function(Pe,te,u){"use strict";var C=u(67294),j=u(22517),G=u(61834),h=["fieldProps","proFieldProps"];function N(){return N=Object.assign||function(b){for(var w=1;w<arguments.length;w++){var d=arguments[w];for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(b[f]=d[f])}return b},N.apply(this,arguments)}function L(b,w){var d=Object.keys(b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(b);w&&(f=f.filter(function(P){return Object.getOwnPropertyDescriptor(b,P).enumerable})),d.push.apply(d,f)}return d}function V(b){for(var w=1;w<arguments.length;w++){var d=arguments[w]!=null?arguments[w]:{};w%2?L(Object(d),!0).forEach(function(f){I(b,f,d[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(d)):L(Object(d)).forEach(function(f){Object.defineProperty(b,f,Object.getOwnPropertyDescriptor(d,f))})}return b}function I(b,w,d){return w in b?Object.defineProperty(b,w,{value:d,enumerable:!0,configurable:!0,writable:!0}):b[w]=d,b}function n(b,w){if(b==null)return{};var d=X(b,w),f,P;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(b);for(P=0;P<S.length;P++)f=S[P],!(w.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,f)||(d[f]=b[f]))}return d}function X(b,w){if(b==null)return{};var d={},f=Object.keys(b),P,S;for(S=0;S<f.length;S++)P=f[S],!(w.indexOf(P)>=0)&&(d[P]=b[P]);return d}var he=function(w,d){var f=w.fieldProps,P=w.proFieldProps,S=n(w,h);return C.createElement(j.ZP,N({text:f==null?void 0:f.value,ref:d,mode:"edit",valueType:"textarea",fieldProps:V(V({},f),{},{onChange:function(){for(var i,s,o=arguments.length,m=new Array(o),O=0;O<o;O++)m[O]=arguments[O];f==null||(i=f.onChange)===null||i===void 0||i.call.apply(i,[f].concat(m)),S==null||(s=S.onChange)===null||s===void 0||s.call.apply(s,[S].concat(m))}})},P))};te.Z=(0,G.Z)(C.forwardRef(he))},16894:function(Pe,te,u){"use strict";var C=u(12862),j=u(97230);te.ZP=j.Z},83660:function(){},63337:function(){},33860:function(Pe,te,u){"use strict";u.d(te,{Z:function(){return Ze}});var C=u(96156),j=u(22122),G=u(90484),h=u(67294),N=u(94184),L=u.n(N),V=function(p){var F=p.prefixCls,ae=p.className,W=p.width,Y=p.style;return h.createElement("h3",{className:L()(F,ae),style:(0,j.Z)({width:W},Y)})},I=V,n=u(85061),X=function(p){var F=function(T){var le=p.width,_=p.rows,De=_===void 0?2:_;if(Array.isArray(le))return le[T];if(De-1===T)return le},ae=p.prefixCls,W=p.className,Y=p.style,ie=p.rows,K=(0,n.Z)(Array(ie)).map(function(J,T){return h.createElement("li",{key:T,style:{width:F(T)}})});return h.createElement("ul",{className:L()(ae,W),style:Y},K)},he=X,b=u(65632),w=function(p){var F,ae,W=p.prefixCls,Y=p.className,ie=p.style,K=p.size,J=p.shape,T=L()((F={},(0,C.Z)(F,"".concat(W,"-lg"),K==="large"),(0,C.Z)(F,"".concat(W,"-sm"),K==="small"),F)),le=L()((ae={},(0,C.Z)(ae,"".concat(W,"-circle"),J==="circle"),(0,C.Z)(ae,"".concat(W,"-square"),J==="square"),(0,C.Z)(ae,"".concat(W,"-round"),J==="round"),ae)),_=typeof K=="number"?{width:K,height:K,lineHeight:"".concat(K,"px")}:{};return h.createElement("span",{className:L()(W,T,le,Y),style:(0,j.Z)((0,j.Z)({},_),ie)})},d=w,f=u(98423),P=function(p){var F=function(W){var Y=W.getPrefixCls,ie=p.prefixCls,K=p.className,J=p.active,T=Y("skeleton",ie),le=(0,f.Z)(p,["prefixCls"]),_=L()(T,"".concat(T,"-element"),(0,C.Z)({},"".concat(T,"-active"),J),K);return h.createElement("div",{className:_},h.createElement(d,(0,j.Z)({prefixCls:"".concat(T,"-avatar")},le)))};return h.createElement(b.C,null,F)};P.defaultProps={size:"default",shape:"circle"};var S=P,$=function(p){var F=function(W){var Y=W.getPrefixCls,ie=p.prefixCls,K=p.className,J=p.active,T=Y("skeleton",ie),le=(0,f.Z)(p,["prefixCls"]),_=L()(T,"".concat(T,"-element"),(0,C.Z)({},"".concat(T,"-active"),J),K);return h.createElement("div",{className:_},h.createElement(d,(0,j.Z)({prefixCls:"".concat(T,"-button")},le)))};return h.createElement(b.C,null,F)};$.defaultProps={size:"default"};var i=$,s=function(p){var F=function(W){var Y=W.getPrefixCls,ie=p.prefixCls,K=p.className,J=p.active,T=Y("skeleton",ie),le=(0,f.Z)(p,["prefixCls"]),_=L()(T,"".concat(T,"-element"),(0,C.Z)({},"".concat(T,"-active"),J),K);return h.createElement("div",{className:_},h.createElement(d,(0,j.Z)({prefixCls:"".concat(T,"-input")},le)))};return h.createElement(b.C,null,F)};s.defaultProps={size:"default"};var o=s,m="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",O=function(p){var F=function(W){var Y=W.getPrefixCls,ie=p.prefixCls,K=p.className,J=p.style,T=Y("skeleton",ie),le=L()(T,"".concat(T,"-element"),K);return h.createElement("div",{className:le},h.createElement("div",{className:L()("".concat(T,"-image"),K),style:J},h.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(T,"-image-svg")},h.createElement("path",{d:m,className:"".concat(T,"-image-path")}))))};return h.createElement(b.C,null,F)},M=O;function U(k){return k&&(0,G.Z)(k)==="object"?k:{}}function re(k,p){return k&&!p?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function se(k,p){return!k&&p?{width:"38%"}:k&&p?{width:"50%"}:{}}function Se(k,p){var F={};return(!k||!p)&&(F.width="61%"),!k&&p?F.rows=3:F.rows=2,F}var ne=function(p){var F=function(W){var Y=W.getPrefixCls,ie=W.direction,K=p.prefixCls,J=p.loading,T=p.className,le=p.children,_=p.avatar,De=p.title,Z=p.paragraph,Ne=p.active,We=p.round,ce=Y("skeleton",K);if(J||!("loading"in p)){var Ee,we=!!_,Ce=!!De,Te=!!Z,je;if(we){var Ie=(0,j.Z)((0,j.Z)({prefixCls:"".concat(ce,"-avatar")},re(Ce,Te)),U(_));je=h.createElement("div",{className:"".concat(ce,"-header")},h.createElement(d,Ie))}var Me;if(Ce||Te){var Re;if(Ce){var _e=(0,j.Z)((0,j.Z)({prefixCls:"".concat(ce,"-title")},se(we,Te)),U(De));Re=h.createElement(I,_e)}var Le;if(Te){var ze=(0,j.Z)((0,j.Z)({prefixCls:"".concat(ce,"-paragraph")},Se(we,Ce)),U(Z));Le=h.createElement(he,ze)}Me=h.createElement("div",{className:"".concat(ce,"-content")},Re,Le)}var Be=L()(ce,(Ee={},(0,C.Z)(Ee,"".concat(ce,"-with-avatar"),we),(0,C.Z)(Ee,"".concat(ce,"-active"),Ne),(0,C.Z)(Ee,"".concat(ce,"-rtl"),ie==="rtl"),(0,C.Z)(Ee,"".concat(ce,"-round"),We),Ee),T);return h.createElement("div",{className:Be},je,Me)}return le};return h.createElement(b.C,null,F)};ne.defaultProps={avatar:!1,title:!0,paragraph:!0},ne.Button=i,ne.Avatar=S,ne.Input=o,ne.Image=M;var Ae=ne,Ze=Ae},71748:function(Pe,te,u){"use strict";var C=u(43673),j=u.n(C),G=u(63337),h=u.n(G)},38069:function(Pe,te,u){"use strict";u.d(te,{ZP:function(){return $}});var C=u(67294);function j(i,s){return V(i)||L(i,s)||h(i,s)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(i,s){if(!!i){if(typeof i=="string")return N(i,s);var o=Object.prototype.toString.call(i).slice(8,-1);if(o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set")return Array.from(i);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return N(i,s)}}function N(i,s){(s==null||s>i.length)&&(s=i.length);for(var o=0,m=new Array(s);o<s;o++)m[o]=i[o];return m}function L(i,s){var o=i&&(typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"]);if(o!=null){var m=[],O=!0,M=!1,U,re;try{for(o=o.call(i);!(O=(U=o.next()).done)&&(m.push(U.value),!(s&&m.length===s));O=!0);}catch(se){M=!0,re=se}finally{try{!O&&o.return!=null&&o.return()}finally{if(M)throw re}}return m}}function V(i){if(Array.isArray(i))return i}function I(i){var s=typeof window=="undefined",o=(0,C.useState)(function(){return s?!1:window.matchMedia(i).matches}),m=j(o,2),O=m[0],M=m[1];return(0,C.useLayoutEffect)(function(){if(!s){var U=window.matchMedia(i),re=function(Se){return M(Se.matches)};return U.addListener(re),function(){return U.removeListener(re)}}},[i]),O}function n(i,s){return d(i)||w(i,s)||he(i,s)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(i,s){if(!!i){if(typeof i=="string")return b(i,s);var o=Object.prototype.toString.call(i).slice(8,-1);if(o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set")return Array.from(i);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return b(i,s)}}function b(i,s){(s==null||s>i.length)&&(s=i.length);for(var o=0,m=new Array(s);o<s;o++)m[o]=i[o];return m}function w(i,s){var o=i&&(typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"]);if(o!=null){var m=[],O=!0,M=!1,U,re;try{for(o=o.call(i);!(O=(U=o.next()).done)&&(m.push(U.value),!(s&&m.length===s));O=!0);}catch(se){M=!0,re=se}finally{try{!O&&o.return!=null&&o.return()}finally{if(M)throw re}}return m}}function d(i){if(Array.isArray(i))return i}var f={xs:{maxWidth:575,matchMedia:"(max-width: 575px)"},sm:{minWidth:576,maxWidth:767,matchMedia:"(min-width: 576px) and (max-width: 767px)"},md:{minWidth:768,maxWidth:991,matchMedia:"(min-width: 768px) and (max-width: 991px)"},lg:{minWidth:992,maxWidth:1199,matchMedia:"(min-width: 992px) and (max-width: 1199px)"},xl:{minWidth:1200,maxWidth:1599,matchMedia:"(min-width: 1200px) and (max-width: 1599px)"},xxl:{minWidth:1600,matchMedia:"(min-width: 1600px)"}},P=function(){var s="md";if(typeof window=="undefined")return s;var o=Object.keys(f).find(function(m){var O=f[m].matchMedia;return!!window.matchMedia(O).matches});return s=o,s},S=function(){var s=I(f.md.matchMedia),o=I(f.lg.matchMedia),m=I(f.xxl.matchMedia),O=I(f.xl.matchMedia),M=I(f.sm.matchMedia),U=I(f.xs.matchMedia),re=(0,C.useState)(P()),se=n(re,2),Se=se[0],ne=se[1];return(0,C.useEffect)(function(){if(m){ne("xxl");return}if(O){ne("xl");return}if(o){ne("lg");return}if(s){ne("md");return}if(M){ne("sm");return}if(U){ne("xs");return}ne("md")},[s,o,m,O,M,U]),Se},$=S}}]);
