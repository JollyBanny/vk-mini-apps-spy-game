(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(20),i=n.n(a),l=n(14),s=n.n(l),o=n(25),j=n(8),d=n(21),b=n.n(d),u=n(3),O=(n(147),n(19)),h=n(13),p=n(1),f=function(e){var t=Object(h.b)(),n=Object(h.c)((function(e){return e.places})).places,r=Object(h.c)((function(e){return e.lobby})).count,a=Object(c.useState)([]),i=Object(j.a)(a,2),l=i[0],s=i[1];return Object(c.useEffect)((function(){for(var e=Array(r).fill({id:1,name:"\u0418\u0433\u0440\u043e\u043a",role:"homie"}),t=0;t<e.length;++t)e[t]={id:t+1,name:"\u0418\u0433\u0440\u043e\u043a ".concat(t+1),role:"homie"};s(e)}),[]),Object(p.jsxs)(u.l,{id:e.id,children:[Object(p.jsx)(u.m,{left:Object(p.jsx)(u.n,{onClick:e.go,"data-to":"lobby-setting"}),children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u0435\u043d\u0430"}),l.map((function(e){return Object(p.jsx)(u.h,{top:"\u0418\u0433\u0440\u043e\u043a ".concat(e.id),children:Object(p.jsx)(u.k,{type:"text",value:e.name,onChange:function(t){return function(e,t){var n=Object(O.a)(l);n.map((function(n){return n.id==e?n.name=t.target.value:""})),s(n)}(e.id,t)}})},e.id)})),Object(p.jsx)(u.g,{style:{marginTop:"auto"},children:Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"commerce",onClick:function(c){return function(c){for(var r=Object(O.a)(l),a=Math.floor(Math.random()*n.length),i=Math.ceil(l.length/8),s=0;s<i;++s){for(var o=Math.floor(Math.random()*l.length);"spy"===r[o].role;)o=Math.floor(Math.random()*l.length);r[o].role="spy"}t(function(e){return{type:"SET_LOBBY_PLAYERS",payload:e}}(l)),t({type:"SET_LOBBY_PLACE",payload:n[a]}),e.go(c)}(c)},"data-to":"game",children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043b\u043e\u0431\u0431\u0438"})})]})},x=function(e){var t=Object(c.useState)(3),n=Object(j.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)([]),l=Object(j.a)(i,2),s=l[0],o=l[1],d=Object(c.useState)(null),b=Object(j.a)(d,2),f=b[0],x=b[1],g=Object(h.b)(),y=Object(h.c)((function(e){return e.places})).places;Object(c.useEffect)((function(){o(y)}),[]);return Object(p.jsxs)(u.l,{id:e.id,children:[Object(p.jsx)(u.m,{left:Object(p.jsx)(u.n,{onClick:e.go,"data-to":"home"}),children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043b\u043e\u0431\u0431\u0438"}),f&&Object(p.jsx)(u.g,{children:Object(p.jsx)(u.d,{style:{display:"flex",height:48,alignItems:"center",justifyContent:"center",background:"#ff52527a",border:"2px solid #ff6161cf"},children:Object(p.jsx)("span",{children:f})})}),Object(p.jsx)(u.h,{top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432",children:Object(p.jsx)(u.k,{type:"text",value:r,onChange:function(e){a(e.target.value)}})}),Object(p.jsx)(u.i,{header:Object(p.jsxs)(u.g,{style:{display:"flex",paddingLeft:0,paddingTop:0,paddingBottom:0,justifyContent:"space-between"},children:[Object(p.jsx)(u.j,{children:"\u041c\u0435\u0441\u0442\u0430"}),Object(p.jsx)(u.c,{size:"s",mode:"primary",onClick:function(){var e=Object(O.a)(s),t={id:s.length+1,label:"\u041c\u0435\u0441\u0442\u043e ".concat(s.length+1)};e.push(t),o(e)},children:"+"})]}),children:s.map((function(e){return Object(p.jsx)(u.h,{removable:!0,onRemove:function(){return function(e){var t=Object(O.a)(s).filter((function(t){return t.id!==e}));o(t)}(e.id)},children:Object(p.jsx)(u.k,{type:"text",value:e.label,onChange:function(t){return function(e,t){var n=Object(O.a)(s);n.map((function(n){return n.id==e?n.label=t.target.value:""})),o(n)}(e.id,t)}})},e.id)}))}),Object(p.jsx)(u.g,{style:{marginTop:"auto"},children:Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"secondary",onClick:function(t){r<3?x("\u0412 \u0438\u0433\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 3 \u0447\u0435\u043b\u043e\u0432\u0435\u043a"):s.length<2?x("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b 2 \u043c\u0435\u0441\u0442\u0430, \u0430 \u0442\u043e \u0441\u043a\u0443\u0447\u043d\u043e \u043a\u0430\u043a-\u0442\u043e"):(g({type:"SET_PLAYERS_COUNT",payload:r}),g(function(e){return{type:"SET_PLACES",payload:e}}(s)),e.go(t))},"data-to":"lobby",children:"\u0414\u0430\u043b\u0435\u0435"})})]})},g=function(e){var t=e.id,n=e.go,c=Object(h.c)((function(e){return e.places})).places;return Object(p.jsxs)(u.l,{id:t,children:[Object(p.jsx)(u.m,{children:"Spy Game"}),Object(p.jsx)(u.i,{header:Object(p.jsx)(u.j,{mode:"secondary",children:"\u041b\u043e\u043a\u0430\u0446\u0438\u0438"}),children:Object(p.jsx)(u.e,{size:"m",children:c.map((function(e){return Object(p.jsx)(u.d,{children:Object(p.jsx)("div",{style:{height:96,display:"flex",alignItems:"center",textAlign:"center"},children:Object(p.jsxs)("span",{style:{margin:"0px auto"},children:[" ",e.label," "]})})},e.id)}))})}),Object(p.jsx)(u.g,{style:{marginTop:"auto"},children:Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"secondary",onClick:n,"data-to":"lobby-setting",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043b\u043e\u0431\u0431\u0438"})})]})},y=n(155),m=function(e){var t,n,a=Object(h.c)((function(e){return e.lobby})),i=a.players,l=a.history,d=a.place,O=Object(c.useState)(1e4),f=Object(j.a)(O,2),x=f[0],g=f[1],m=Object(c.useState)(!1),v=Object(j.a)(m,2),S=v[0],E=v[1],C=Object(c.useState)(!1),k=Object(j.a)(C,2),T=k[0],_=k[1],I=Object(c.useState)(!1),A=Object(j.a)(I,2),L=A[0],B=A[1],z=Object(c.useState)({pos:0,player:i[0]}),w=Object(j.a)(z,2),P=w[0],Y=w[1],M=function(){D(),_(!0)},D=function(){E(!0)};return Object(c.useEffect)((function(){i.length!==l.length&&M(),g(60*i.length)}),[]),Object(c.useEffect)((function(){return n=setInterval((function(){console.log("ok"),S&&g(x-1)}),1e3),0===x&&(clearInterval(n),t=setInterval(Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppFlashGetInfo").then((function(e){return e}));case 2:t=e.sent,s.a.send("VKWebAppFlashSetLevel",{level:null!==t&&void 0!==t&&t.level?0:1});case 4:case"end":return e.stop()}}),e)}))),1e3)),function(){clearInterval(n)}}),[S,x]),Object(p.jsxs)(u.l,{id:e.id,children:[Object(p.jsxs)(u.m,{children:[" ",T?"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435":"\u0420\u0430\u0437\u0434\u0430\u0447\u0430 \u0440\u043e\u043b\u0435\u0439"," "]}),T?Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)(u.g,{children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"40px"},children:[Object(p.jsx)(y.a,{width:64,height:64}),Object(p.jsx)("span",{style:{fontSize:"96px"},children:"".concat(Math.floor(x/60).toString().padStart(2,"0")," :\n\t\t\t\t\t\t\t  ").concat((x-60*Math.floor(x/60)).toString().padStart(2,"0"))})]})}),Object(p.jsx)(u.g,{style:{marginTop:"auto"},children:0==x?Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"primary",onClick:function(n){s.a.send("VKWebAppFlashSetLevel",{level:0}),clearInterval(t),e.go(n)},"data-to":"vote",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044e"}):Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"destructive",onClick:function(c){e.go(c),clearInterval(t),clearInterval(n)},"data-to":"final",children:"\u0428\u043f\u0438\u043e\u043d \u0440\u0430\u0441\u043a\u0440\u044b\u043b \u043c\u0435\u0441\u0442\u043e"})})]}):Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)(u.g,{style:{marginTop:"20px"},onClick:function(){return B(!0)},children:Object(p.jsx)("div",{style:{backgroundImage:"linear-gradient(135deg, #FD8229 0%, #A73ED9 100%)",height:"70vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingBottom:"6px",borderRadius:12,gap:10},children:L?Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)(u.r,{level:"1",children:"spy"==P.player.role?"\u0428\u043f\u0438\u043e\u043d":"\u0421\u0432\u043e\u0439"}),Object(p.jsx)(u.r,{level:"2",children:"spy"!==P.player.role&&d.label})]}):Object(p.jsx)(u.r,{level:"2",children:"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f \u0438 \u0443\u0437\u043d\u0430\u0439 \u0440\u043e\u043b\u044c"})})}),Object(p.jsx)(u.g,{style:{marginTop:"auto"},children:P.pos==i.length-1?Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"commerce",onClick:function(){return M()},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443!"}):Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"primary",onClick:function(){return function(){var e={pos:P.pos+1,player:i[P.pos+1]};B(!1),Y(e)}()},children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0438\u0433\u0440\u043e\u043a"})})]})]})},v=function(e){var t=e.id,n=e.go,r=Object(h.b)(),a=Object(h.c)((function(e){return e.lobby})).players,i=Object(c.useState)(!1),l=Object(j.a)(i,2),s=l[0],o=l[1],d=Object(c.useState)(null),b=Object(j.a)(d,2),O=b[0],f=b[1];return Object(p.jsxs)(u.l,{id:t,children:[Object(p.jsx)(u.m,{children:"\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(p.jsx)(u.i,{header:Object(p.jsx)(u.j,{mode:"primary",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0433\u0440\u043e\u043a\u0430 \u043d\u0430 \u0432\u044b\u0431\u044b\u0432\u0430\u043d\u0438\u0435"}),children:Object(p.jsx)(u.e,{size:"m",children:a.map((function(e){return Object(p.jsx)(u.d,{style:{background:(null===O||void 0===O?void 0:O.id)==e.id&&"#8adb97"},onClick:function(){return function(e){var t=a.find((function(t){return t.id==e}));f(t)}(e.id)},children:Object(p.jsx)("div",{style:{height:96,display:"flex",alignItems:"center",textAlign:"center"},children:Object(p.jsxs)("span",{style:{margin:"0px auto"},children:[" ",e.name," "]})})},e.id)}))})}),s&&Object(p.jsx)(u.g,{children:Object(p.jsx)(u.d,{style:{display:"flex",height:48,alignItems:"center",justifyContent:"center",background:"#ff52527a",border:"2px solid #ff6161cf"},children:Object(p.jsx)("span",{children:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430 \u043d\u0430 \u0432\u044b\u0431\u044b\u0432\u0430\u043d\u0438\u0435"})})}),Object(p.jsx)(u.g,{style:{marginTop:"auto"},children:Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"secondary",onClick:function(e){if(null!=O){var t=a.filter((function(e){return e.id!==O.id}));if(r(function(e){return{type:"EDIT_LOBBY_PLAYERS",payload:e}}(t)),"spy"==O.role||3==a.length)return e.currentTarget.dataset.to="final",void n(e);n(e)}else o(!0)},"data-to":"game",children:"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435"})})]})},S=function(e){var t=e.id,n=e.go,r=Object(h.c)((function(e){return e.lobby})),a=r.history,i=r.players,l=Object(c.useState)(!1),s=Object(j.a)(l,2),o=s[0],d=s[1];Object(c.useEffect)((function(){i.find((function(e){return"spy"==e.role}))&&d(!0),i.map((function(e){return e.id})).in}),[]);var b={display:"flex",height:48,alignItems:"center",justifyContent:"center",background:"".concat(o?"#ff52527a":"#89e2778e"),border:"2px solid ".concat(o?"#ff6161cf":"#1a7a078e")};return Object(p.jsxs)(u.l,{id:t,children:[Object(p.jsx)(u.m,{children:"Spy Game"}),Object(p.jsx)(u.g,{children:Object(p.jsx)(u.d,{style:b,children:Object(p.jsxs)("span",{children:["\u0428\u043f\u0438\u043e\u043d ",o?"\u0432\u044b\u0438\u0433\u0440\u0430\u043b":"\u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b"]})})}),Object(p.jsx)(u.i,{header:Object(p.jsx)(u.j,{mode:"secondary",children:"\u0418\u0433\u0440\u043e\u043a\u0438"}),children:a.map((function(e){return Object(p.jsxs)(u.g,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(p.jsx)(u.r,{level:"3",children:"".concat(e.name," (").concat("spy"==e.role?"\u0428\u043f\u0438\u043e\u043d":"\u0421\u0432\u043e\u0439",")")}),Object(p.jsx)(u.r,{level:"3",children:"".concat(i.map((function(e){return e.id})).includes(e.id)?"\u041e\u0441\u0442\u0430\u043b\u0441\u044f":"\u0412\u044b\u0431\u044b\u043b")})]},e.id)}))}),Object(p.jsx)(u.g,{style:{marginTop:"auto"},children:Object(p.jsx)(u.c,{stretched:!0,size:"l",mode:"secondary",onClick:n,"data-to":"home",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u043c\u0435\u043d\u044e"})})]})},E=function(){var e=Object(c.useState)("bright_light"),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("home"),i=Object(j.a)(a,2),l=i[0],d=i[1],O=Object(c.useState)(null),h=Object(j.a)(O,2),y=h[0],E=h[1],C=Object(c.useState)(Object(p.jsx)(u.o,{size:"large"})),k=Object(j.a)(C,2),T=k[0],_=k[1];Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,E(t),_(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;"VKWebAppUpdateConfig"===n&&r(c.scheme)})),function(){e.apply(this,arguments)}()}),[]);var I=function(e){d(e.currentTarget.dataset.to)};return Object(p.jsx)(u.f,{scheme:n,children:Object(p.jsx)(u.a,{children:Object(p.jsx)(u.b,{children:Object(p.jsx)(u.q,{popout:T,children:Object(p.jsx)(u.p,{children:Object(p.jsxs)(u.s,{activePanel:l,children:[Object(p.jsx)(g,{id:"home",fetchedUser:y,go:I}),Object(p.jsx)(f,{id:"lobby",go:I}),Object(p.jsx)(m,{id:"game",go:I}),Object(p.jsx)(v,{id:"vote",go:I}),Object(p.jsx)(S,{id:"final",go:I}),Object(p.jsx)(x,{id:"lobby-setting",go:I})]})})})})})})},C=n(22),k=n(41),T=n(15),_={history:[],players:[],place:null,count:0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOBBY_PLAYERS":return Object(T.a)(Object(T.a)({},e),{},{history:t.payload,players:t.payload,count:t.payload.length});case"EDIT_LOBBY_PLAYERS":return Object(T.a)(Object(T.a)({},e),{},{players:t.payload,count:t.payload.length});case"SET_PLAYERS_COUNT":return Object(T.a)(Object(T.a)({},e),{},{count:Number(t.payload)});case"SET_LOBBY_PLACE":return Object(T.a)(Object(T.a)({},e),{},{place:t.payload});default:return e}},A={places:[{id:1,label:"\u0417\u0430\u0434\u043d\u0438\u0439 \u0434\u0432\u043e\u0440"},{id:2,label:"\u041a\u043b\u0430\u0434\u0431\u0438\u0449\u0435"},{id:3,label:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d"},{id:4,label:"\u0411\u0430\u0441\u0441\u0435\u0439\u043d"},{id:5,label:"\u041a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"},{id:6,label:"\u0421\u043f\u0430-\u0441\u0430\u043b\u043e\u043d"},{id:7,label:"\u041a\u0430\u043c\u043f\u0443\u0441 \u0414\u0412\u0424\u0423"},{id:8,label:"\u0414\u043e\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \xab\u0417\u0438\u043d\u0433\u0435\u0440\xbb"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"SET_PLACES"===t.type?Object(T.a)(Object(T.a)({},e),{},{places:t.payload}):e},B=Object(C.b)({lobby:I,places:L}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.c,w=Object(C.d)(B,z(Object(C.a)(k.a)));s.a.send("VKWebAppInit"),i.a.render(Object(p.jsx)(h.a,{store:w,children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.32290eec.chunk.js.map