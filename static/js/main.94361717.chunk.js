(this.webpackJsonpticker=this.webpackJsonpticker||[]).push([[0],{86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(10),i=a.n(c),r=a(13),s=a(116),o=a(118),l=a(119),u=a(120),j=a(125),d=a(123),b=a(121),x=a(27),O=a(11),f=a(114),h=Object(f.a)({body:{margin:"20px 0",paddingBottom:5,borderTop:"3px solid #0dcaf0","& *":{width:"100%",marginTop:7}},register:{"& *":{textDecoration:"none",color:"inherit"}},hide:{display:"none",margin:30}});var m=a(3),p=function(){var e=h(),t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],i=a[1],f=Object(n.useState)(""),p=Object(r.a)(f,2),g=p[0],v=p[1],y=Object(n.useState)(!1),F=Object(r.a)(y,2),S=F[0],C=F[1],w=Object(n.useState)(e.hide),N=Object(r.a)(w,2),k=N[0],D=N[1],T=Object(n.useState)(""),I=Object(r.a)(T,2),W=I[0],A=I[1];return Object(m.jsx)(s.a,{maxWidth:"sm",children:Object(m.jsxs)(o.a,{className:"form",children:[Object(m.jsxs)(l.a,{className:"form-register head",container:!0,direction:"row",justify:"space-between",children:[Object(m.jsx)(u.a,{variant:"h5",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(m.jsx)(u.a,{variant:"h5",children:"\u0438\u043b\u0438"}),Object(m.jsx)(j.a,{className:e.register,disabled:S,variant:"outlined",color:"primary",children:Object(m.jsx)(x.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),Object(m.jsxs)(l.a,{className:"form-register ".concat(e.body),container:!0,children:[Object(m.jsx)(d.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:c,onChange:function(e){i(e.target.value)},disabled:S,type:"text"}),Object(m.jsx)(d.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:g,onChange:function(e){v(e.target.value)},disabled:S,type:"password"})]}),Object(m.jsxs)(l.a,{className:"form-register footer",container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(m.jsxs)(j.a,{id:"login",size:"small",disabled:S,variant:"contained",onClick:function(){C(!0),D(null),function(e,t){var a=JSON.parse(localStorage.getItem("database"));return new Promise((function(n,c){e?+e?c(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):t?t.length<8?c(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):setTimeout((function(){a.users.find((function(a){return a.name===e&&a.password===t}))?n():c(alert("\u0414\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u0432\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u043b\u0438 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"))}),3e3):c(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):c(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"))}))}(c,g).then((function(){localStorage.setItem("auth_token",!0),A("/feed")})).catch((function(){})).finally((function(){C(!1),D(e.hide)}))},type:"submit",children:[Object(m.jsx)(O.a,{to:W}),"\u0412\u043e\u0439\u0442\u0438"]}),Object(m.jsx)(b.a,{id:"loader",className:"".concat(k," + visible")}),Object(m.jsx)(j.a,{onClick:function(){i(""),v("")},type:"submit",disabled:S,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})})},g=function(){var e=h(),t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],i=a[1],O=Object(n.useState)(""),f=Object(r.a)(O,2),p=f[0],g=f[1],v=Object(n.useState)(""),y=Object(r.a)(v,2),F=y[0],S=y[1],C=Object(n.useState)(""),w=Object(r.a)(C,2),N=w[0],k=w[1],D=Object(n.useState)(!1),T=Object(r.a)(D,2),I=T[0],W=T[1],A=Object(n.useState)(e.hide),E=Object(r.a)(A,2),J=E[0],B=E[1];function z(){i(""),g(""),S(""),k("")}return Object(m.jsx)(s.a,{maxWidth:"sm",children:Object(m.jsxs)(o.a,{className:"form",children:[Object(m.jsxs)(l.a,{className:"form-register head",container:!0,direction:"row",justify:"space-between",children:[Object(m.jsx)(u.a,{variant:"h5",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(m.jsx)(u.a,{variant:"h5",children:"\u0438\u043b\u0438"}),Object(m.jsx)(j.a,{className:e.register,disabled:I,variant:"outlined",color:"primary",children:Object(m.jsx)(x.b,{to:"/",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),Object(m.jsxs)(l.a,{className:"form-register ".concat(e.body),container:!0,children:[Object(m.jsx)(d.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:c,onChange:function(e){i(e.target.value)},disabled:I,type:"text"}),Object(m.jsx)(d.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443",value:p,onChange:function(e){g(e.target.value)},disabled:I,type:"email"}),Object(m.jsx)(d.a,{label:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:F,onChange:function(e){S(e.target.value)},disabled:I,type:"password"}),Object(m.jsx)(d.a,{label:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:N,onChange:function(e){k(e.target.value)},disabled:I,type:"password"})]}),Object(m.jsxs)(l.a,{className:"form-register footer",container:!0,direction:"row",justify:"space-between",children:[Object(m.jsx)(j.a,{id:"register",size:"small",disabled:I,variant:"contained",onClick:function(){W(!0),B(null),function(e,t,a,n){return new Promise((function(c,i){var r={name:e,email:t,password:a};e?+e?i(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):t?/^(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+(\.(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+\.)+(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S]){2,})$/i.test(t)?a?a.length<8?i(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):a!==n?i(alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")):setTimeout((function(){c(r)}),3e3):i(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):i(alert("\u041f\u043e\u0447\u0442\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430")):i(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443")):i(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"))})).then((function(e){return new Promise((function(a,n){var c=JSON.parse(localStorage.getItem("database"));c.users.find((function(e){return e.email===t}))?n(alert("\u0414\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0437\u0430\u043d\u044f\u0442\u0430")):(localStorage.setItem("database",JSON.stringify(e)),c.users.push(e),localStorage.setItem("database",JSON.stringify(c)),a())}))}))}(c,p,F,N).then((function(){z()})).catch((function(){})).finally((function(){W(!1),B(e.hide)}))},type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(m.jsx)(b.a,{id:"loader",className:J}),Object(m.jsx)(j.a,{onClick:z,disabled:I,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})})},v=a(124),y=a(122),F=a(58),S=a.n(F),C=Object(f.a)({pagination:{width:"100%",marginTop:"2rem",display:"flex",flexWrap:"wrap",justifyContent:"center"},num:{width:30,margin:"10px 3px",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}}),w=function(e){for(var t=e.cardsLength,a=e.totalCards,n=e.paginate,c=C(),i=[],r=1;r<=Math.ceil(a/t);r++)i.push(r);return Object(m.jsx)("div",{className:c.pagination,children:i.map((function(e){return Object(m.jsx)(j.a,{onClick:function(){return n(e)},className:c.num,size:"small",children:e},e)}))})},N=Object(f.a)({block:{display:"flex",flexWrap:"wrap",justifyContent:"center"},card:{minWidth:280,maxWidth:280,marginTop:"2rem",margin:"0 14px"},icon:{marginTop:"9px",marginLeft:"88%",cursor:"pointer"},body:{borderTop:"3px solid #0dcaf0",paddingTop:4},save:{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",marginTop:5},pagination:{marginTop:"2rem",display:"flex",justifyContent:"center"}}),k=function(e){var t=e.cards,a=e.setCards,c=N(),i=Object(n.useState)(null),s=Object(r.a)(i,2),l=s[0],b=s[1],x=Object(n.useState)(""),O=Object(r.a)(x,2),f=O[0],h=O[1],p=Object(n.useState)(""),g=Object(r.a)(p,2),F=g[0],C=g[1],k=Object(n.useState)(1),D=Object(r.a)(k,2),T=D[0],I=D[1],W=8*T,A=W-8;return Object(m.jsxs)(v.a,{className:c.block,children:[t.map((function(e){return Object(m.jsxs)(o.a,{className:c.card,id:e.id,children:[Object(m.jsx)(S.a,{className:c.icon,onClick:function(){return n=e.id,void a(t.filter((function(e){return e.id!==n})));var n}}),Object(m.jsxs)(y.a,{children:[Object(m.jsx)("div",{children:l===e.id?Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{value:f,onChange:function(e){return h(e.target.value)},fullWidth:!0,multiline:!0})}):Object(m.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title})}),Object(m.jsx)("div",{className:c.body,children:l===e.id?Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{value:F,onChange:function(e){return C(e.target.value)},fullWidth:!0,multiline:!0})}):Object(m.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:e.body})}),Object(m.jsx)(u.a,{className:c.save,variant:"button",children:l===e.id?Object(m.jsx)(j.a,{onClick:function(){return function(e){var n=t.map((function(t){return t.id===e&&(t.title=f,t.body=F),t}));a(n),b(null)}(e.id)},size:"small",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}):Object(m.jsx)(j.a,{onClick:function(){return t=e.id,a=e.title,n=e.body,b(t),h(a),void C(n);var t,a,n},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})]},e.id)})).slice(A,W),Object(m.jsx)(w,{cardsLength:8,totalCards:t.length,paginate:function(e){return I(e)}})]})},D=a(126),T=Object(f.a)({block:{maxWidth:"100%",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#0dcaf0",margin:"0 -15xp",padding:"0 15px"}}),I=function(){var e=T();return Object(m.jsxs)(v.a,{className:e.block,children:[Object(m.jsx)(u.a,{children:"Test-Form"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)(u.a,{children:"\u0414\u043e\u043c\u043e\u0439"}),Object(m.jsx)(u.a,{children:"\u0414\u043e\u043c\u043e\u0439"}),Object(m.jsx)(u.a,{children:"\u0414\u043e\u043c\u043e\u0439"})]}),Object(m.jsx)(D.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})]})},W=Object(f.a)({header:{marginLeft:"0",marginRight:"0"},footer:{maxWidth:"100%",width:"100%",marginTop:"2rem"}}),A=function(){var e=W(),t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){new Promise((function(e){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e(JSON.stringify(t))}))})).then((function(e){i(JSON.parse(e))}))}),[]),localStorage.getItem("auth_token")?Object(m.jsxs)(v.a,{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",children:[Object(m.jsx)(I,{}),Object(m.jsxs)(s.a,{children:[Object(m.jsx)(k,{cards:c,setCards:i}),Object(m.jsx)(v.a,{className:e.footer,children:Object(m.jsx)(u.a,{children:"footer"})})]})]}):Object(O.a)("/")},E=(a(86),function(){return Object(m.jsx)("div",{style:{margin:-8},children:Object(m.jsx)(x.a,{basename:"/test_form",children:Object(m.jsxs)(O.d,{children:[Object(m.jsx)(O.b,{path:"/",exact:!0,component:p}),Object(m.jsx)(O.b,{path:"/register",component:g}),Object(m.jsx)(O.b,{path:"/feed",component:A})]})})})}),J={users:[]},B=function(){return Object(n.useEffect)((function(){localStorage.getItem("database")||localStorage.setItem("database",JSON.stringify(J))}),[]),Object(m.jsx)(E,{})};i.a.render(Object(m.jsx)(B,{}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.94361717.chunk.js.map