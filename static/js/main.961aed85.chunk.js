(this.webpackJsonpticker=this.webpackJsonpticker||[]).push([[0],{457:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(16),s=a.n(n),r=a(475),l=a(37),i=a(69),o=a(481),j=a(476),d=a(477),m=a(478),u=a(479),b=a(480),h=a(46),g=a(3),O=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),O=Object(l.a)(s,2),x=O[0],f=O[1];return Object(c.useEffect)((function(){n(localStorage.getItem("nickname")),f(localStorage.getItem("password"))}),[]),Object(g.jsxs)(o.a,{className:"form",children:[Object(g.jsxs)(d.a,{className:"form-register",container:!0,direction:"row",justify:"space-between",children:[Object(g.jsx)(j.a,{variant:"h5",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(g.jsx)(m.a,{id:"loader",className:"hide"}),Object(g.jsx)(u.a,{className:"register",children:Object(g.jsx)(h.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),Object(g.jsx)(b.a,{value:a,onChange:function(e){n(e.target.value),localStorage.setItem("nickname",e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(b.a,{value:x,onChange:function(e){f(e.target.value),localStorage.setItem("password",e.target.value)},type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(g.jsx)(u.a,{id:"login",size:"small",variant:"contained",onClick:function(){new Promise((function(e,t){setTimeout((function(){a?+a?t(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):x?x.length<8?t(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):(document.getElementById("login").style.pointerEvents="none",document.getElementById("loader").classList.remove("hide")):t(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):t(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")),setTimeout((function(){var t=[localStorage.getItem("nickname"),localStorage.getItem("password")];e(t)}),3e3)}),0)})).then((function(e){document.getElementById("loader").classList.add("hide"),Object(i.a)(Object(g.jsx)(r.a,{maxWidth:"sm",children:Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0435 \u0438\u043c\u044f: ",e[0]]}),Object(g.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c: ",e[1]]})]})}))}))},type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(g.jsx)(u.a,{onClick:function(){localStorage.clear(),n(""),f("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})},x=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),O=Object(l.a)(s,2),x=O[0],f=O[1],p=Object(c.useState)(""),v=Object(l.a)(p,2),w=v[0],S=v[1],I=Object(c.useState)(""),y=Object(l.a)(I,2),k=y[0],E=y[1];return Object(c.useEffect)((function(){n(localStorage.getItem("nickname")),f(localStorage.getItem("email")),S(localStorage.getItem("password")),E(localStorage.getItem("confirmPassword"))}),[]),Object(g.jsxs)(o.a,{className:"form",children:[Object(g.jsxs)(d.a,{className:"form-register",container:!0,direction:"row",justify:"space-between",children:[Object(g.jsx)(j.a,{variant:"h5",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(g.jsx)(m.a,{id:"loader",className:"hide"}),Object(g.jsx)(u.a,{className:"register",children:Object(g.jsx)(h.b,{to:"/",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),Object(g.jsx)(b.a,{value:a,onChange:function(e){n(e.target.value),localStorage.setItem("nickname",e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(b.a,{value:x,onChange:function(e){f(e.target.value),localStorage.setItem("email",e.target.value)},type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(b.a,{value:w,onChange:function(e){S(e.target.value),localStorage.setItem("password",e.target.value)},type:"password",placeholder:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsx)(b.a,{value:k,onChange:function(e){E(e.target.value),localStorage.setItem("confirmPassword",e.target.value)},type:"password",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})," ",Object(g.jsx)("hr",{width:"0"}),Object(g.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(g.jsx)(u.a,{id:"register",size:"small",variant:"contained",onClick:function(){var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;new Promise((function(t,c){setTimeout((function(){a?+a?c(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):x?e.test(x)?w?w.length<8?c(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):w!==k?c(alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")):(document.getElementById("register").style.pointerEvents="none",document.getElementById("loader").classList.remove("hide")):c(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):c(alert("\u041f\u043e\u0447\u0442\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430")):c(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443")):c(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")),setTimeout((function(){var e=[localStorage.getItem("nickname"),localStorage.getItem("email"),localStorage.getItem("password"),localStorage.getItem("confirmPassword")];t(e)}),3e3)}),0)})).then((function(e){document.getElementById("loader").classList.add("hide"),Object(i.a)(Object(g.jsx)(r.a,{maxWidth:"sm",children:Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0435 \u0438\u043c\u044f: ",e[0]]}),Object(g.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430: ",e[1]]}),Object(g.jsxs)(j.a,{variant:"subtitle1",children:["\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c: ",e[2]]})]})}))}))},type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(g.jsx)(u.a,{onClick:function(){localStorage.clear(),n(""),f(""),S(""),E("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})},f=(a(457),a(9)),p=function(){return Object(g.jsx)(h.a,{basename:"/test_form",children:Object(g.jsxs)(r.a,{maxWidth:"sm",children:[Object(g.jsx)(f.a,{exact:!0,path:"/",component:O}),Object(g.jsx)(f.a,{exact:!0,path:"/register",component:x})]})})};s.a.render(Object(g.jsx)(p,{}),document.getElementById("root"))}},[[458,1,2]]]);
//# sourceMappingURL=main.961aed85.chunk.js.map