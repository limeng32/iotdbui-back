(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8767],{72842:function(R){R.exports={linkGroup:"linkGroup___3u5k3"}},54178:function(R){R.exports={activitiesList:"activitiesList___1iz4w",username:"username___2CaQo",event:"event___37Bra",pageHeaderContent:"pageHeaderContent___1v9Rj",avatar:"avatar___2REGU",content:"content___2JXYM",contentTitle:"contentTitle___2ZQYk",extraContent:"extraContent___171XZ",statItem:"statItem___WnzK8",members:"members___pCbZL",member:"member___1PrAP",projectList:"projectList___1-phY",cardTitle:"cardTitle___i2mGR",projectGrid:"projectGrid___2_ET-",projectItemContent:"projectItemContent___1Af7z",datetime:"datetime___3wNS1",activeCard:"activeCard___2L47N"}},97432:function(){},47840:function(){},62838:function(R,S,e){"use strict";e.r(S),e.d(S,{default:function(){return X}});var m=e(13062),h=e(71230),n=e(89032),G=e(15746),q=e(72012),l=e(39144),ee=e(54421),_=e(38272),ye=e(95300),te=e(7277),me=e(94233),H=e(51890),xe=e(71748),ie=e(33860),V=e(26766),Z=e(58086),Y=e(73727),fe=e(15103),oe=e(30381),ae=e.n(oe),he=e(57663),c=e(71577),s=e(67294),f=e(49101),r=e(72842),a=e.n(r),t=e(85893),g=function(v){var d=v.links,K=v.linkElement,ne=v.onAdd;return(0,t.jsxs)("div",{className:a().linkGroup,children:[d.map(function(B){return(0,s.createElement)(K,{key:"linkGroup-item-".concat(B.id||B.title),to:B.href,href:B.href},B.title)}),(0,t.jsxs)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:ne,children:[(0,t.jsx)(f.Z,{})," \u6DFB\u52A0"]})]})};g.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var i=g,u=e(54178),o=e.n(u),p=e(3182),z=e(94043),N=e.n(z);function D(){return C.apply(this,arguments)}function C(){return C=(0,p.Z)(N().mark(function P(){return N().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,Z.WY)("/api/project/notice"));case 1:case"end":return d.stop()}},P)})),C.apply(this,arguments)}function A(){return L.apply(this,arguments)}function L(){return L=(0,p.Z)(N().mark(function P(){return N().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,Z.WY)("/api/activities"));case 1:case"end":return d.stop()}},P)})),L.apply(this,arguments)}function j(){return U.apply(this,arguments)}function U(){return U=(0,p.Z)(N().mark(function P(){return N().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,Z.WY)("/api/fake_workplace_chart_data"));case 1:case"end":return d.stop()}},P)})),U.apply(this,arguments)}var W=[{title:"\u64CD\u4F5C\u4E00",href:""},{title:"\u64CD\u4F5C\u4E8C",href:""},{title:"\u64CD\u4F5C\u4E09",href:""},{title:"\u64CD\u4F5C\u56DB",href:""},{title:"\u64CD\u4F5C\u4E94",href:""},{title:"\u64CD\u4F5C\u516D",href:""}],T=function(v){var d=v.currentUser,K=d&&Object.keys(d).length;return K?(0,t.jsxs)("div",{className:o().pageHeaderContent,children:[(0,t.jsx)("div",{className:o().avatar,children:(0,t.jsx)(H.C,{size:"large",src:d.avatar})}),(0,t.jsxs)("div",{className:o().content,children:[(0,t.jsxs)("div",{className:o().contentTitle,children:["\u65E9\u5B89\uFF0C",d.name,"\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929\uFF01"]}),(0,t.jsxs)("div",{children:[d.title," |",d.group]})]})]}):(0,t.jsx)(ie.Z,{avatar:!0,paragraph:{rows:1},active:!0})},k=function(){return(0,t.jsxs)("div",{className:o().extraContent,children:[(0,t.jsx)("div",{className:o().statItem,children:(0,t.jsx)(te.Z,{title:"\u9879\u76EE\u6570",value:56})}),(0,t.jsx)("div",{className:o().statItem,children:(0,t.jsx)(te.Z,{title:"\u56E2\u961F\u5185\u6392\u540D",value:8,suffix:"/ 24"})}),(0,t.jsx)("div",{className:o().statItem,children:(0,t.jsx)(te.Z,{title:"\u9879\u76EE\u8BBF\u95EE",value:2223})})]})},Q=function(){var v,d=(0,Z.QT)(D),K=d.loading,ne=d.data,B=ne===void 0?[]:ne,ce=(0,Z.QT)(A),re=ce.loading,de=ce.data,ge=de===void 0?[]:de,E=(0,Z.QT)(j),F=E.data,I=function(O){var Ee=O.template.split(/@\{([^{}]*)\}/gi).map(function(J){return O[J]?(0,t.jsx)("a",{href:O[J].link,children:O[J].name},O[J].name):J});return(0,t.jsx)(_.ZP.Item,{children:(0,t.jsx)(_.ZP.Item.Meta,{avatar:(0,t.jsx)(H.C,{src:O.user.avatar}),title:(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{className:o().username,children:O.user.name}),"\xA0",(0,t.jsx)("span",{className:o().event,children:Ee})]}),description:(0,t.jsx)("span",{className:o().datetime,title:O.updatedAt,children:ae()(O.updatedAt).fromNow()})})},O.id)};return(0,t.jsx)(fe.ZP,{content:(0,t.jsx)(T,{currentUser:{avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",name:"\u5434\u5F66\u7956",userid:"00000001",email:"antdesign@alipay.com",signature:"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",title:"\u4EA4\u4E92\u4E13\u5BB6",group:"\u8682\u8681\u91D1\u670D\uFF0D\u67D0\u67D0\u67D0\u4E8B\u4E1A\u7FA4\uFF0D\u67D0\u67D0\u5E73\u53F0\u90E8\uFF0D\u67D0\u67D0\u6280\u672F\u90E8\uFF0DUED"}}),extraContent:(0,t.jsx)(k,{}),children:(0,t.jsxs)(h.Z,{gutter:24,children:[(0,t.jsxs)(G.Z,{xl:16,lg:24,md:24,sm:24,xs:24,children:[(0,t.jsx)(l.Z,{className:o().projectList,style:{marginBottom:24},title:"\u8FDB\u884C\u4E2D\u7684\u9879\u76EE",bordered:!1,extra:(0,t.jsx)(Y.rU,{to:"/",children:"\u5168\u90E8\u9879\u76EE"}),loading:K,bodyStyle:{padding:0},children:B.map(function(y){return(0,t.jsx)(l.Z.Grid,{className:o().projectGrid,children:(0,t.jsxs)(l.Z,{bodyStyle:{padding:0},bordered:!1,children:[(0,t.jsx)(l.Z.Meta,{title:(0,t.jsxs)("div",{className:o().cardTitle,children:[(0,t.jsx)(H.C,{size:"small",src:y.logo}),(0,t.jsx)(Y.rU,{to:y.href,children:y.title})]}),description:y.description}),(0,t.jsxs)("div",{className:o().projectItemContent,children:[(0,t.jsx)(Y.rU,{to:y.memberLink,children:y.member||""}),y.updatedAt&&(0,t.jsx)("span",{className:o().datetime,title:y.updatedAt,children:ae()(y.updatedAt).fromNow()})]})]})},y.id)})}),(0,t.jsx)(l.Z,{bodyStyle:{padding:0},bordered:!1,className:o().activeCard,title:"\u52A8\u6001",loading:re,children:(0,t.jsx)(_.ZP,{loading:re,renderItem:function(O){return I(O)},dataSource:ge,className:o().activitiesList,size:"large"})})]}),(0,t.jsxs)(G.Z,{xl:8,lg:24,md:24,sm:24,xs:24,children:[(0,t.jsx)(l.Z,{style:{marginBottom:24},title:"\u5FEB\u901F\u5F00\u59CB / \u4FBF\u6377\u5BFC\u822A",bordered:!1,bodyStyle:{padding:0},children:(0,t.jsx)(i,{onAdd:function(){},links:W,linkElement:Y.rU})}),(0,t.jsx)(l.Z,{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:(F==null||(v=F.radarData)===null||v===void 0?void 0:v.length)===0,children:(0,t.jsx)("div",{className:o().chart,children:(0,t.jsx)(V.Fk,{height:343,data:(F==null?void 0:F.radarData)||[],angleField:"label",seriesField:"name",radiusField:"value",area:{visible:!1},point:{visible:!0},legend:{position:"bottom-center"}})})}),(0,t.jsx)(l.Z,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56E2\u961F",loading:K,children:(0,t.jsx)("div",{className:o().members,children:(0,t.jsx)(h.Z,{gutter:48,children:B.map(function(y){return(0,t.jsx)(G.Z,{span:12,children:(0,t.jsxs)(Y.rU,{to:y.href,children:[(0,t.jsx)(H.C,{src:y.logo,size:"small"}),(0,t.jsx)("span",{className:o().member,children:y.member})]})},"members-item-".concat(y.id))})})})})]})]})})},X=Q},39144:function(R,S,e){"use strict";e.d(S,{Z:function(){return he}});var m=e(96156),h=e(22122),n=e(67294),G=e(94184),q=e.n(G),l=e(98423),ee=e(65632),_=function(c,s){var f={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&s.indexOf(r)<0&&(f[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(c);a<r.length;a++)s.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(c,r[a])&&(f[r[a]]=c[r[a]]);return f},ye=function(s){var f=s.prefixCls,r=s.className,a=s.hoverable,t=a===void 0?!0:a,g=_(s,["prefixCls","className","hoverable"]);return n.createElement(ee.C,null,function(i){var u=i.getPrefixCls,o=u("card",f),p=q()("".concat(o,"-grid"),r,(0,m.Z)({},"".concat(o,"-grid-hoverable"),t));return n.createElement("div",(0,h.Z)({},g,{className:p}))})},te=ye,me=function(c,s){var f={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&s.indexOf(r)<0&&(f[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(c);a<r.length;a++)s.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(c,r[a])&&(f[r[a]]=c[r[a]]);return f},H=function(s){return n.createElement(ee.C,null,function(f){var r=f.getPrefixCls,a=s.prefixCls,t=s.className,g=s.avatar,i=s.title,u=s.description,o=me(s,["prefixCls","className","avatar","title","description"]),p=r("card",a),z=q()("".concat(p,"-meta"),t),N=g?n.createElement("div",{className:"".concat(p,"-meta-avatar")},g):null,D=i?n.createElement("div",{className:"".concat(p,"-meta-title")},i):null,C=u?n.createElement("div",{className:"".concat(p,"-meta-description")},u):null,A=D||C?n.createElement("div",{className:"".concat(p,"-meta-detail")},D,C):null;return n.createElement("div",(0,h.Z)({},o,{className:z}),N,A)})},xe=H,ie=e(45934),V=e(71230),Z=e(15746),Y=e(97647),fe=function(c,s){var f={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&s.indexOf(r)<0&&(f[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(c);a<r.length;a++)s.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(c,r[a])&&(f[r[a]]=c[r[a]]);return f};function oe(c){var s=c.map(function(f,r){return n.createElement("li",{style:{width:"".concat(100/c.length,"%")},key:"action-".concat(r)},n.createElement("span",null,f))});return s}var ae=function(s){var f,r,a=n.useContext(ee.E_),t=a.getPrefixCls,g=a.direction,i=n.useContext(Y.Z),u=function(ue){var x;(x=s.onTabChange)===null||x===void 0||x.call(s,ue)},o=function(){var ue;return n.Children.forEach(s.children,function(x){x&&x.type&&x.type===te&&(ue=!0)}),ue},p=s.prefixCls,z=s.className,N=s.extra,D=s.headStyle,C=D===void 0?{}:D,A=s.bodyStyle,L=A===void 0?{}:A,j=s.title,U=s.loading,W=s.bordered,T=W===void 0?!0:W,k=s.size,Q=s.type,X=s.cover,P=s.actions,v=s.tabList,d=s.children,K=s.activeTabKey,ne=s.defaultActiveTabKey,B=s.tabBarExtraContent,ce=s.hoverable,re=s.tabProps,de=re===void 0?{}:re,ge=fe(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),E=t("card",p),F=L.padding===0||L.padding==="0px"?{padding:24}:void 0,I=n.createElement("div",{className:"".concat(E,"-loading-block")}),y=n.createElement("div",{className:"".concat(E,"-loading-content"),style:F},n.createElement(V.Z,{gutter:8},n.createElement(Z.Z,{span:22},I)),n.createElement(V.Z,{gutter:8},n.createElement(Z.Z,{span:8},I),n.createElement(Z.Z,{span:15},I)),n.createElement(V.Z,{gutter:8},n.createElement(Z.Z,{span:6},I),n.createElement(Z.Z,{span:18},I)),n.createElement(V.Z,{gutter:8},n.createElement(Z.Z,{span:13},I),n.createElement(Z.Z,{span:9},I)),n.createElement(V.Z,{gutter:8},n.createElement(Z.Z,{span:4},I),n.createElement(Z.Z,{span:3},I),n.createElement(Z.Z,{span:16},I))),O=K!==void 0,Ee=(0,h.Z)((0,h.Z)({},de),(f={},(0,m.Z)(f,O?"activeKey":"defaultActiveKey",O?K:ne),(0,m.Z)(f,"tabBarExtraContent",B),f)),J,pe=v&&v.length?n.createElement(ie.Z,(0,h.Z)({size:"large"},Ee,{className:"".concat(E,"-head-tabs"),onChange:u}),v.map(function(se){return n.createElement(ie.Z.TabPane,{tab:se.tab,disabled:se.disabled,key:se.key})})):null;(j||N||pe)&&(J=n.createElement("div",{className:"".concat(E,"-head"),style:C},n.createElement("div",{className:"".concat(E,"-head-wrapper")},j&&n.createElement("div",{className:"".concat(E,"-head-title")},j),N&&n.createElement("div",{className:"".concat(E,"-extra")},N)),pe));var be=X?n.createElement("div",{className:"".concat(E,"-cover")},X):null,Ce=n.createElement("div",{className:"".concat(E,"-body"),style:L},U?y:d),Pe=P&&P.length?n.createElement("ul",{className:"".concat(E,"-actions")},oe(P)):null,Me=(0,l.Z)(ge,["onTabChange"]),Ze=k||i,Se=q()(E,(r={},(0,m.Z)(r,"".concat(E,"-loading"),U),(0,m.Z)(r,"".concat(E,"-bordered"),T),(0,m.Z)(r,"".concat(E,"-hoverable"),ce),(0,m.Z)(r,"".concat(E,"-contain-grid"),o()),(0,m.Z)(r,"".concat(E,"-contain-tabs"),v&&v.length),(0,m.Z)(r,"".concat(E,"-").concat(Ze),Ze),(0,m.Z)(r,"".concat(E,"-type-").concat(Q),!!Q),(0,m.Z)(r,"".concat(E,"-rtl"),g==="rtl"),r),z);return n.createElement("div",(0,h.Z)({},Me,{className:Se}),J,be,Ce,Pe)};ae.Grid=te,ae.Meta=xe;var he=ae},72012:function(R,S,e){"use strict";var m=e(43673),h=e.n(m),n=e(97432),G=e.n(n),q=e(18106),l=e(13062),ee=e(89032)},15746:function(R,S,e){"use strict";var m=e(21584);S.Z=m.Z},89032:function(R,S,e){"use strict";var m=e(43673),h=e.n(m),n=e(6999)},38272:function(R,S,e){"use strict";e.d(S,{ZM:function(){return c},ZP:function(){return r}});var m=e(85061),h=e(22122),n=e(96156),G=e(28481),q=e(90484),l=e(67294),ee=e(94184),_=e.n(ee),ye=e(11382),te=e(25378),me=e(24308),H=e(65632),xe=e(40308),ie=e(92820),V=e(21584),Z=e(96159),Y=function(a,t){var g={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&t.indexOf(i)<0&&(g[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,i=Object.getOwnPropertySymbols(a);u<i.length;u++)t.indexOf(i[u])<0&&Object.prototype.propertyIsEnumerable.call(a,i[u])&&(g[i[u]]=a[i[u]]);return g},fe=function(t){var g=t.prefixCls,i=t.className,u=t.avatar,o=t.title,p=t.description,z=Y(t,["prefixCls","className","avatar","title","description"]),N=l.useContext(H.E_),D=N.getPrefixCls,C=D("list",g),A=_()("".concat(C,"-item-meta"),i),L=l.createElement("div",{className:"".concat(C,"-item-meta-content")},o&&l.createElement("h4",{className:"".concat(C,"-item-meta-title")},o),p&&l.createElement("div",{className:"".concat(C,"-item-meta-description")},p));return l.createElement("div",(0,h.Z)({},z,{className:A}),u&&l.createElement("div",{className:"".concat(C,"-item-meta-avatar")},u),(o||p)&&L)},oe=function(t){var g=t.prefixCls,i=t.children,u=t.actions,o=t.extra,p=t.className,z=t.colStyle,N=Y(t,["prefixCls","children","actions","extra","className","colStyle"]),D=l.useContext(c),C=D.grid,A=D.itemLayout,L=l.useContext(H.E_),j=L.getPrefixCls,U=function(){var v;return l.Children.forEach(i,function(d){typeof d=="string"&&(v=!0)}),v&&l.Children.count(i)>1},W=function(){return A==="vertical"?!!o:!U()},T=j("list",g),k=u&&u.length>0&&l.createElement("ul",{className:"".concat(T,"-item-action"),key:"actions"},u.map(function(P,v){return l.createElement("li",{key:"".concat(T,"-item-action-").concat(v)},P,v!==u.length-1&&l.createElement("em",{className:"".concat(T,"-item-action-split")}))})),Q=C?"div":"li",X=l.createElement(Q,(0,h.Z)({},N,{className:_()("".concat(T,"-item"),(0,n.Z)({},"".concat(T,"-item-no-flex"),!W()),p)}),A==="vertical"&&o?[l.createElement("div",{className:"".concat(T,"-item-main"),key:"content"},i,k),l.createElement("div",{className:"".concat(T,"-item-extra"),key:"extra"},o)]:[i,k,(0,Z.Tm)(o,{key:"extra"})]);return C?l.createElement(V.Z,{flex:1,style:z},X):X};oe.Meta=fe;var ae=oe,he=function(a,t){var g={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&t.indexOf(i)<0&&(g[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,i=Object.getOwnPropertySymbols(a);u<i.length;u++)t.indexOf(i[u])<0&&Object.prototype.propertyIsEnumerable.call(a,i[u])&&(g[i[u]]=a[i[u]]);return g},c=l.createContext({}),s=c.Consumer;function f(a){var t,g=a.pagination,i=g===void 0?!1:g,u=a.prefixCls,o=a.bordered,p=o===void 0?!1:o,z=a.split,N=z===void 0?!0:z,D=a.className,C=a.children,A=a.itemLayout,L=a.loadMore,j=a.grid,U=a.dataSource,W=U===void 0?[]:U,T=a.size,k=a.header,Q=a.footer,X=a.loading,P=X===void 0?!1:X,v=a.rowKey,d=a.renderItem,K=a.locale,ne=he(a,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),B=i&&(0,q.Z)(i)==="object"?i:{},ce=l.useState(B.defaultCurrent||1),re=(0,G.Z)(ce,2),de=re[0],ge=re[1],E=l.useState(B.defaultPageSize||10),F=(0,G.Z)(E,2),I=F[0],y=F[1],O=l.useContext(H.E_),Ee=O.getPrefixCls,J=O.renderEmpty,pe=O.direction,be={current:1,total:0},Ce={},Pe=function(b){return function(le,w){ge(le),y(w),i&&i[b]&&i[b](le,w)}},Me=Pe("onChange"),Ze=Pe("onShowSizeChange"),Se=function(b,le){if(!d)return null;var w;return typeof v=="function"?w=v(b):typeof v=="string"?w=b[v]:w=b.key,w||(w="list-item-".concat(le)),Ce[le]=w,d(b,le)},se=function(){return!!(L||i||Q)},ue=function(b,le){return l.createElement("div",{className:"".concat(b,"-empty-text")},K&&K.emptyText||le("List"))},x=Ee("list",u),ve=P;typeof ve=="boolean"&&(ve={spinning:ve});var De=ve&&ve.spinning,je="";switch(T){case"large":je="lg";break;case"small":je="sm";break;default:break}var ze=_()(x,(t={},(0,n.Z)(t,"".concat(x,"-vertical"),A==="vertical"),(0,n.Z)(t,"".concat(x,"-").concat(je),je),(0,n.Z)(t,"".concat(x,"-split"),N),(0,n.Z)(t,"".concat(x,"-bordered"),p),(0,n.Z)(t,"".concat(x,"-loading"),De),(0,n.Z)(t,"".concat(x,"-grid"),!!j),(0,n.Z)(t,"".concat(x,"-something-after-last-item"),se()),(0,n.Z)(t,"".concat(x,"-rtl"),pe==="rtl"),t),D),$=(0,h.Z)((0,h.Z)((0,h.Z)({},be),{total:W.length,current:de,pageSize:I}),i||{}),Ie=Math.ceil($.total/$.pageSize);$.current>Ie&&($.current=Ie);var Te=i?l.createElement("div",{className:"".concat(x,"-pagination")},l.createElement(xe.Z,(0,h.Z)({},$,{onChange:Me,onShowSizeChange:Ze}))):null,Ae=(0,m.Z)(W);i&&W.length>($.current-1)*$.pageSize&&(Ae=(0,m.Z)(W).splice(($.current-1)*$.pageSize,$.pageSize));var Be=(0,te.Z)(),Oe=l.useMemo(function(){for(var M=0;M<me.c4.length;M+=1){var b=me.c4[M];if(Be[b])return b}},[Be]),Ke=l.useMemo(function(){if(!!j){var M=Oe&&j[Oe]?j[Oe]:j.column;if(M)return{width:"".concat(100/M,"%"),maxWidth:"".concat(100/M,"%")}}},[j==null?void 0:j.column,Oe]),Le=De&&l.createElement("div",{style:{minHeight:53}});if(Ae.length>0){var Re=Ae.map(function(M,b){return Se(M,b)}),Ue=l.Children.map(Re,function(M,b){return l.createElement("div",{key:Ce[b],style:Ke},M)});Le=j?l.createElement(ie.Z,{gutter:j.gutter},Ue):l.createElement("ul",{className:"".concat(x,"-items")},Re)}else!C&&!De&&(Le=ue(x,J));var Ne=$.position||"bottom";return l.createElement(c.Provider,{value:{grid:j,itemLayout:A}},l.createElement("div",(0,h.Z)({className:ze},ne),(Ne==="top"||Ne==="both")&&Te,k&&l.createElement("div",{className:"".concat(x,"-header")},k),l.createElement(ye.Z,ve,Le,C),Q&&l.createElement("div",{className:"".concat(x,"-footer")},Q),L||(Ne==="bottom"||Ne==="both")&&Te))}f.Item=ae;var r=f},54421:function(R,S,e){"use strict";var m=e(43673),h=e.n(m),n=e(47840),G=e.n(n),q=e(13254),l=e(20228),ee=e(14781),_=e(6999)},71230:function(R,S,e){"use strict";var m=e(92820);S.Z=m.Z},13062:function(R,S,e){"use strict";var m=e(43673),h=e.n(m),n=e(6999)}}]);
