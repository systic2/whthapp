(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(3),o=n.n(r),i=n(4),u=n.n(i),a=n(39),c=n.n(a),l=n(100),f=n(0),s=n(8),d=n(26),b=n(14),p=n(41),j=n(63),y=n(101),h=n(74),O=n(10),g="black",x="#3A3D40",v="#5C5C60",w=n(43),m=n(145),D=n(146),S=n(5);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(){var e=Object(f.useState)(!0),t=c()(e,2),n=t[0],r=t[1],i=Object(f.useState)(""),a=c()(i,2),s=a[0],g=a[1],v=Object(f.useState)({}),k=c()(v,2),P=k[0],C=k[1];Object(f.useEffect)((function(){N()}),[]);var W=function(){var e=u()((function*(){r(!1),yield w.default.setItem("@WorkOrTravel",JSON.stringify(!1))}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=u()((function*(){r(!0),yield w.default.setItem("@WorkOrTravel",JSON.stringify(!0))}));return function(){return e.apply(this,arguments)}}(),J=function(e){return g(e)},E=function(){var e=u()((function*(e){yield w.default.setItem("@toDos",JSON.stringify(e))}));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=u()((function*(){var e=yield w.default.getItem("@WorkOrTravel"),t=yield w.default.getItem("@toDos");e&&r(JSON.parse(e)),t&&C(JSON.parse(t))}));return function(){return e.apply(this,arguments)}}(),V=function(){var e=u()((function*(){if(""!==s){var e=T(T({},P),{},o()({},Date.now(),{text:s,working:n,done:!1,editable:!1}));C(e),yield E(e),g("")}}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=u()((function*(e){var t=T({},P);t[e]=T(T({},t[e]),{},{editable:!t[e].editable}),C(t),yield E(t)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=u()((function*(e,t){var n=T({},P);n[e]=T(T({},n[e]),{},{editable:!n[e].editable,text:s}),C(n),yield E(n)}));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=u()((function*(e){var t=T({},P);t[e]=T(T({},t[e]),{},{done:!t[e].done}),C(t),yield E(t)}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=u()((function*(e){if("web"===O.default.OS){if(confirm("Do you want to delete this To Do?")){var t=T({},P);delete t[e],C(t),E(t)}}else h.default.alert("Delete To Do","Are you sure?",[{text:"Cancel"},{text:"I'm sure",onPress:function(){var t=T({},P);delete t[e],C(t),E(t)}}])}));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(b.default,{style:z.container,children:[Object(S.jsx)(l.StatusBar,{style:"auto"}),Object(S.jsxs)(b.default,{style:z.header,children:[Object(S.jsx)(p.default,{onPress:I,children:Object(S.jsx)(d.default,{style:{fontSize:38,fontWeight:"600",color:n?"white":x},children:"Work"})}),Object(S.jsx)(p.default,{onPress:W,children:Object(S.jsx)(d.default,{style:{fontSize:38,fontWeight:"600",color:n?x:"white"},children:"Travel"})})]}),Object(S.jsx)(j.default,{onSubmitEditing:V,onChangeText:J,returnKeyType:"done",placeholder:n?"Add a To do":"Where do you want to go?",style:z.input}),Object(S.jsx)(y.default,{children:Object.keys(P).map((function(e){return P[e].working===n?Object(S.jsxs)(b.default,{style:z.toDo,children:[Object(S.jsx)(p.default,{onPress:function(){return B(e)},children:Object(S.jsx)(m.default,{name:P[e].done?"checkbox-active":"checkbox-passive",size:18,color:x})}),!1===P[e].editable?Object(S.jsx)(d.default,{style:P[e].done?z.doneDoText:z.toDoText,children:P[e].text}):Object(S.jsx)(j.default,{onSubmitEditing:function(t){return H(e,t)},onChangeText:J,defaultValue:P[e].text,style:z.input}),Object(S.jsx)(p.default,{onPress:function(){return A(e)},children:Object(S.jsx)(D.default,{name:"edit",size:18,color:x})}),Object(S.jsx)(p.default,{onPress:function(){return R(e)},children:Object(S.jsx)(m.default,{name:"trash",size:18,color:x})})]},e):null}))})]})}var z=s.default.create({container:{flex:1,backgroundColor:g,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},btnText:{fontSize:38,fontWeight:"600"},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:v,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"500"},doneDoText:{color:"gray",fontSize:16,fontWeight:"500",textDecorationLine:"line-through"}})},104:function(e,t,n){e.exports=n(137)}},[[104,1,2]]]);
//# sourceMappingURL=app.db8fc0c9.chunk.js.map