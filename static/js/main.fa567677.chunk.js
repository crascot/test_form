(this.webpackJsonpticker=this.webpackJsonpticker||[]).push([[0],{447:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(13),l=a.n(n),s=a(465),r=a(471),o=a(467),i=a(466),j=a(468),d=a(469),u=a(32),b=a(64),m=a(470),g=a(3),h=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),j=Object(u.a)(l,2),h=j[0],O=j[1];return Object(c.useEffect)((function(){n(localStorage.getItem("nickname")),O(localStorage.getItem("password"))}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{value:a,onChange:function(e){n(e.target.value),localStorage.setItem("nickname",e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(m.a,{value:h,onChange:function(e){O(e.target.value),localStorage.setItem("password",e.target.value)},type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsxs)(o.a,{container:!0,direction:"row",justify:"space-between",children:[Object(g.jsx)(d.a,{id:"login",size:"small",variant:"contained",onClick:function(){new Promise((function(e,t){setTimeout((function(){a?+a?t(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):h?h.length<8?t(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):document.getElementById("loader").classList.remove("hide"):t(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):t(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")),document.getElementById("login").style.pointerEvents="none",setTimeout((function(){var t=[localStorage.getItem("nickname"),localStorage.getItem("password")];e(t)}),3e3)}),0)})).then((function(e){document.getElementById("loader").classList.add("hide"),Object(b.a)(Object(g.jsx)(s.a,{maxWidth:"sm",children:Object(g.jsxs)(r.a,{children:[Object(g.jsxs)(i.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0435 \u0438\u043c\u044f: ",e[0]]}),Object(g.jsxs)(i.a,{variant:"subtitle1",children:["\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c: ",e[1]]})]})}))}))},type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(g.jsx)(d.a,{onClick:function(){localStorage.clear(),n(""),O("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})},O=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),j=Object(u.a)(l,2),h=j[0],O=j[1],x=Object(c.useState)(""),v=Object(u.a)(x,2),f=v[0],p=v[1],w=Object(c.useState)(""),S=Object(u.a)(w,2),I=S[0],y=S[1];return Object(c.useEffect)((function(){n(localStorage.getItem("nickname")),O(localStorage.getItem("email")),p(localStorage.getItem("password")),y(localStorage.getItem("confirmPassword"))}),[]),Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)(m.a,{value:a,onChange:function(e){n(e.target.value),localStorage.setItem("nickname",e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(m.a,{value:h,onChange:function(e){O(e.target.value),localStorage.setItem("email",e.target.value)},type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(m.a,{value:f,onChange:function(e){p(e.target.value),localStorage.setItem("password",e.target.value)},type:"password",placeholder:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(m.a,{value:I,onChange:function(e){y(e.target.value),localStorage.setItem("confirmPassword",e.target.value)},type:"password",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsxs)(o.a,{container:!0,direction:"row",justify:"space-between",children:[Object(g.jsx)(d.a,{size:"small",variant:"contained",onClick:function(){var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;new Promise((function(t,c){setTimeout((function(){a?+a?c(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):h?e.test(h)?f?f.length<8?c(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):f!==I?c(alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")):document.getElementById("loader").classList.remove("hide"):c(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):c(alert("\u041f\u043e\u0447\u0442\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430")):c(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443")):c(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")),setTimeout((function(){var e=[localStorage.getItem("nickname"),localStorage.getItem("email"),localStorage.getItem("password"),localStorage.getItem("confirmPassword")];t(e)}),3e3)}),0)})).then((function(e){document.getElementById("loader").classList.add("hide"),Object(b.a)(Object(g.jsx)(s.a,{maxWidth:"sm",children:Object(g.jsxs)(r.a,{children:[Object(g.jsxs)(i.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0435 \u0438\u043c\u044f: ",e[0]]}),Object(g.jsxs)(i.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430: ",e[1]]}),Object(g.jsxs)(i.a,{variant:"subtitle1",children:["\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c: ",e[2]]})]})}))}))},type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(g.jsx)(d.a,{onClick:function(){localStorage.clear(),n(""),O(""),p(""),y("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})};a(447);function x(){Object(n.render)(Object(g.jsx)(O,{}),document.getElementById("block"))}var v=function(){return Object(g.jsx)(s.a,{maxWidth:"sm",children:Object(g.jsxs)(r.a,{className:"form",style:{padding:"10px"},children:[Object(g.jsxs)(o.a,{container:!0,direction:"row",justify:"space-between",children:[Object(g.jsx)(i.a,{variant:"h5",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(g.jsx)(j.a,{id:"loader",className:"hide"}),Object(g.jsx)(d.a,{className:"register",onClick:x,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(g.jsx)(h,{}),Object(g.jsx)("span",{id:"block"})]})})};l.a.render(Object(g.jsx)(v,{}),document.getElementById("root"))}},[[448,1,2]]]);
//# sourceMappingURL=main.fa567677.chunk.js.map