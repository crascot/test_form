(this.webpackJsonpticker=this.webpackJsonpticker||[]).push([[0],{454:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(16),r=a.n(n),s=a(475),l=a(37),i=a(68),o=a(481),j=a(476),d=a(477),u=a(478),m=a(479),b=a(480),h=a(3),g=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),g=Object(l.a)(r,2),O=g[0],x=g[1];return Object(c.useEffect)((function(){n(localStorage.getItem("nickname")),x(localStorage.getItem("password"))}),[]),Object(h.jsxs)(o.a,{className:"form",style:{padding:"10px"},children:[Object(h.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(h.jsx)(j.a,{variant:"h5",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(h.jsx)(u.a,{id:"loader",className:"hide"}),Object(h.jsx)(m.a,{className:"register",href:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(h.jsx)(b.a,{value:a,onChange:function(e){n(e.target.value),localStorage.setItem("nickname",e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})," ",Object(h.jsx)("hr",{width:"0"}),Object(h.jsx)(b.a,{value:O,onChange:function(e){x(e.target.value),localStorage.setItem("password",e.target.value)},type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(h.jsx)("hr",{width:"0"}),Object(h.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(h.jsx)(m.a,{id:"login",size:"small",variant:"contained",onClick:function(){new Promise((function(e,t){setTimeout((function(){a?+a?t(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):O?O.length<8?t(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):(document.getElementById("login").style.pointerEvents="none",document.getElementById("loader").classList.remove("hide")):t(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):t(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")),setTimeout((function(){var t=[localStorage.getItem("nickname"),localStorage.getItem("password")];e(t)}),3e3)}),0)})).then((function(e){document.getElementById("loader").classList.add("hide"),Object(i.a)(Object(h.jsx)(s.a,{maxWidth:"sm",children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0435 \u0438\u043c\u044f: ",e[0]]}),Object(h.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c: ",e[1]]})]})}))}))},type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(h.jsx)(m.a,{onClick:function(){localStorage.clear(),n(""),x("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})},O=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),g=Object(l.a)(r,2),O=g[0],x=g[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],w=f[1],S=Object(c.useState)(""),I=Object(l.a)(S,2),y=I[0],k=I[1];return Object(c.useEffect)((function(){n(localStorage.getItem("nickname")),x(localStorage.getItem("email")),w(localStorage.getItem("password")),k(localStorage.getItem("confirmPassword"))}),[]),Object(h.jsxs)(o.a,{style:{padding:"10px"},children:[Object(h.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(h.jsx)(j.a,{variant:"h5",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsx)(u.a,{id:"loader",className:"hide"}),Object(h.jsx)(m.a,{className:"register",href:"/",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(h.jsx)(b.a,{value:a,onChange:function(e){n(e.target.value),localStorage.setItem("nickname",e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})," ",Object(h.jsx)("hr",{width:"0"}),Object(h.jsx)(b.a,{value:O,onChange:function(e){x(e.target.value),localStorage.setItem("email",e.target.value)},type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"})," ",Object(h.jsx)("hr",{width:"0"}),Object(h.jsx)(b.a,{value:v,onChange:function(e){w(e.target.value),localStorage.setItem("password",e.target.value)},type:"password",placeholder:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(h.jsx)("hr",{width:"0"}),Object(h.jsx)(b.a,{value:y,onChange:function(e){k(e.target.value),localStorage.setItem("confirmPassword",e.target.value)},type:"password",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(h.jsx)("hr",{width:"0"}),Object(h.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(h.jsx)(m.a,{id:"register",size:"small",variant:"contained",onClick:function(){var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;new Promise((function(t,c){setTimeout((function(){a?+a?c(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):O?e.test(O)?v?v.length<8?c(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):v!==y?c(alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")):(document.getElementById("register").style.pointerEvents="none",document.getElementById("loader").classList.remove("hide")):c(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):c(alert("\u041f\u043e\u0447\u0442\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430")):c(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443")):c(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")),setTimeout((function(){var e=[localStorage.getItem("nickname"),localStorage.getItem("email"),localStorage.getItem("password"),localStorage.getItem("confirmPassword")];t(e)}),3e3)}),0)})).then((function(e){document.getElementById("loader").classList.add("hide"),Object(i.a)(Object(h.jsx)(s.a,{maxWidth:"sm",children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0435 \u0438\u043c\u044f: ",e[0]]}),Object(h.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430: ",e[1]]}),Object(h.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c: ",e[2]]})]})}))}))},type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsx)(m.a,{onClick:function(){localStorage.clear(),n(""),x(""),w(""),k("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})},x=(a(454),a(148)),p=a(9),f=function(){return Object(h.jsx)(x.a,{children:Object(h.jsxs)(s.a,{maxWidth:"sm",children:[Object(h.jsx)(p.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(p.a,{path:"/register",component:O})]})})};r.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[458,1,2]]]);
//# sourceMappingURL=main.e6108f7c.chunk.js.map