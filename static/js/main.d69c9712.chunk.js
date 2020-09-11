(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{18:function(n,e,t){n.exports=t(30)},30:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(1),u=t(4),l=t(2);function d(){var n=Object(l.a)(["\n    html{\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body{\n        font-family: 'Roboto', sans-serif;\n        background: ",";\n    }\n"]);return d=function(){return n},n}var s=Object(c.b)(d(),(function(n){return n.theme.color.gallery})),f=t(17),m=t(6);function b(){var n=Object(l.a)(["\n    padding: 10px;\n    background: ",";\n    color: ",";\n    border: none;\n    transition: 0.3s;\n\n    &:hover {\n        filter: brightness(110%);\n        transform: scale(1.1);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return b=function(){return n},n}function g(){var n=Object(l.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n"]);return g=function(){return n},n}function p(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: ","px){\n        grid-template-columns: 1fr;\n    }\n"]);return p=function(){return n},n}var h=c.d.form(p(),(function(n){return n.theme.breakpoint.mobileMax})),v=c.d.input(g(),(function(n){return n.theme.color.alto})),k=c.d.button(b(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white})),x=t(11),j=Object(m.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem("tasks"))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},deleteTask:function(n,e){var t=e.payload;n.tasks=n.tasks.filter((function(n){return n.id!==t}))},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t[a].done=!t[a].done},setAllTasksDone:function(n){n.tasks=n.tasks.map((function(n){return Object(x.a)(Object(x.a)({},n),{},{done:!0})}))}}}),O=j.actions,E=O.addTask,y=O.deleteTask,w=O.toggleHideDone,D=O.toggleTaskDone,z=O.setAllTasksDone,S=function(n){return n.tasks},C=j.reducer,T=function(){var n=Object(r.useState)(""),e=Object(f.a)(n,2),t=e[0],o=e[1],i=Object(r.useRef)(null),c=Object(u.b)();return a.a.createElement(h,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(c(E({content:e,done:!1,id:Object(m.c)()})),o(""),i.current.focus())}},a.a.createElement(v,{ref:i,value:t,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return o(e.value)}}),a.a.createElement(k,null,"Dodaj zadanie"))};function M(){var n=Object(l.a)(["\n        background: ",";\n    "]);return M=function(){return n},n}function H(){var n=Object(l.a)(["\n        background: ","; \n    "]);return H=function(){return n},n}function I(){var n=Object(l.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: background 0.3s;\n\n    ","\n\n    ","\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return I=function(){return n},n}function J(){var n=Object(l.a)(["\n        text-decoration: line-through;\n    "]);return J=function(){return n},n}function N(){var n=Object(l.a)(["\n    ","\n"]);return N=function(){return n},n}function A(){var n=Object(l.a)(["\n        display: none;\n    "]);return A=function(){return n},n}function B(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid ",";\n\n    ","\n"]);return B=function(){return n},n}function G(){var n=Object(l.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return G=function(){return n},n}var L=c.d.ul(G()),R=c.d.li(B(),(function(n){return n.theme.color.alto}),(function(n){return n.hidden&&Object(c.c)(A())})),U=c.d.span(N(),(function(n){return n.done&&Object(c.c)(J())})),W=c.d.button(I(),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(c.c)(H(),(function(n){return n.theme.color.forestGreen}))}),(function(n){return n.remove&&Object(c.c)(M(),(function(n){return n.theme.color.crimson}))})),_=function(){var n=Object(u.c)(S),e=n.tasks,t=n.hideDone,r=Object(u.b)();return a.a.createElement(L,null,e.map((function(n){var e=n.id,o=n.content,i=n.done;return a.a.createElement(R,{key:e,hidden:i&&t},a.a.createElement(W,{toggleDone:!0,onClick:function(){return r(D(e))}},i?"\u2714":""),a.a.createElement(U,{done:i},o),a.a.createElement(W,{remove:!0,onClick:function(){return r(y(e))}},"X"))})))};function F(){var n=Object(l.a)(["\n    background: transparent;\n    color: ",";\n    border: none;\n    margin: 0 0 0 20px;\n    transition: color 0.3s;\n\n    @media (max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n    }\n"]);return F=function(){return n},n}function P(){var n=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]);return P=function(){return n},n}var X=c.d.div(P()),$=c.d.button(F(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.silver})),q=function(){var n=Object(u.c)(S),e=n.tasks,t=n.hideDone,r=Object(u.b)();return a.a.createElement(X,null,e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,{onClick:function(){return r(w())}},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),a.a.createElement($,{onClick:function(){return r(z())},disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie")))};function K(){var n=Object(l.a)(["\n    padding: 20px;\n"]);return K=function(){return n},n}function Q(){var n=Object(l.a)(["\n    font-size: 20px;\n    margin: 0;\n"]);return Q=function(){return n},n}function V(){var n=Object(l.a)(["\n    border-bottom: 1px solid ",";\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return V=function(){return n},n}function Y(){var n=Object(l.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n"]);return Y=function(){return n},n}var Z=c.d.section(Y(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.alto})),nn=c.d.header(V(),(function(n){return n.theme.color.alto}),(function(n){return n.theme.breakpoint.mobileMax})),en=c.d.h2(Q()),tn=c.d.div(K()),rn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return a.a.createElement(Z,null,a.a.createElement(nn,null,a.a.createElement(en,{className:"section__title"},e),r),a.a.createElement(tn,null,t))},an=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement("h1",null,e))};function on(){var n=Object(l.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n"]);return on=function(){return n},n}var cn=c.d.main(on()),un=function(n){var e=n.children;return a.a.createElement(cn,null,e)};var ln=function(){return a.a.createElement(un,null,a.a.createElement(an,{title:"Lista zada\u0144"}),a.a.createElement(rn,{title:"Dodaj nowe zadanie",body:a.a.createElement(T,null)}),a.a.createElement(rn,{title:"Lista zada\u0144",extraHeaderContent:a.a.createElement(q,null),body:a.a.createElement(_,null)}))},dn=function(){return a.a.createElement(ln,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var sn=Object(m.a)({reducer:{tasks:C}});sn.subscribe((function(){localStorage.setItem("tasks",JSON.stringify(sn.getState().tasks.tasks))}));var fn=sn;i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{store:fn},a.a.createElement(c.a,{theme:{color:{black:"#000",silver:"#ccc",alto:"#ddd",gallery:"#eee",white:"#fff",teal:"#008080",crimson:"#db143c",forestGreen:"#228c22"},breakpoint:{mobileMax:767}}},a.a.createElement(s,null),a.a.createElement(dn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d69c9712.chunk.js.map