(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(11),i=t.n(a),c=t(1),u=t(2);function l(){var n=Object(u.a)(["\n    html{\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body{\n        font-family: 'Roboto', sans-serif;\n        background: ",";\n    }\n"]);return l=function(){return n},n}var d=Object(c.b)(l(),(function(n){return n.theme.color.gallery})),f=t(15),s=t(5),m=t(4);function b(){var n=Object(u.a)(["\n    padding: 10px;\n    background: ",";\n    color: ",";\n    border: none;\n    transition: 0.3s;\n\n    &:hover {\n        filter: brightness(110%);\n        transform: scale(1.1);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return b=function(){return n},n}function g(){var n=Object(u.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n"]);return g=function(){return n},n}function h(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: ","px){\n        grid-template-columns: 1fr;\n    }\n"]);return h=function(){return n},n}var p=c.d.form(h(),(function(n){return n.theme.breakpoint.mobileMax})),v=c.d.input(g(),(function(n){return n.theme.color.alto})),x=c.d.button(b(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white})),j=function(n){var e=n.addNewTask,t=Object(r.useState)(""),a=Object(m.a)(t,2),i=a[0],c=a[1];return o.a.createElement(p,{onSubmit:function(n){n.preventDefault();var t=i.trim();t&&(e(t),c(""))}},o.a.createElement(v,{value:i,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return c(e.value)}}),o.a.createElement(x,null,"Dodaj zadanie"))};function k(){var n=Object(u.a)(["\n        background: ",";\n    "]);return k=function(){return n},n}function O(){var n=Object(u.a)(["\n        background: ","; \n    "]);return O=function(){return n},n}function E(){var n=Object(u.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: background 0.3s;\n\n    ","\n\n    ","\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return E=function(){return n},n}function w(){var n=Object(u.a)(["\n        text-decoration: line-through;\n    "]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n    ","\n"]);return y=function(){return n},n}function D(){var n=Object(u.a)(["\n        display: none;\n    "]);return D=function(){return n},n}function z(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid ",";\n\n    ","\n"]);return z=function(){return n},n}function S(){var n=Object(u.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return S=function(){return n},n}var C=c.d.ul(S()),T=c.d.li(z(),(function(n){return n.theme.color.alto}),(function(n){return n.hidden&&Object(c.c)(D())})),M=c.d.span(y(),(function(n){return n.done&&Object(c.c)(w())})),N=c.d.button(E(),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(c.c)(O(),(function(n){return n.theme.color.forestGreen}))}),(function(n){return n.remove&&Object(c.c)(k(),(function(n){return n.theme.color.crimson}))})),H=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,a=n.toggleTaskDone;return o.a.createElement(C,null,e.map((function(n){return o.a.createElement(T,{key:n.id,hidden:n.done&&t},o.a.createElement(N,{toggleDone:!0,onClick:function(){return a(n.id)}},n.done?"\u2714":""),o.a.createElement(M,{done:n.done},n.content),o.a.createElement(N,{remove:!0,onClick:function(){return r(n.id)}},"X"))})))};function J(){var n=Object(u.a)(["\n    background: transparent;\n    color: ",";\n    border: none;\n    margin: 0 0 0 20px;\n    transition: color 0.3s;\n\n    @media (max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n    }\n"]);return J=function(){return n},n}function I(){var n=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]);return I=function(){return n},n}var A=c.d.div(I()),B=c.d.button(J(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.silver})),G=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,a=n.setAllDone;return o.a.createElement(A,null,e.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(B,{onClick:r},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement(B,{onClick:a,disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie")))};function L(){var n=Object(u.a)(["\n    padding: 20px;\n"]);return L=function(){return n},n}function U(){var n=Object(u.a)(["\n    font-size: 20px;\n    margin: 0;\n"]);return U=function(){return n},n}function W(){var n=Object(u.a)(["\n    border-bottom: 1px solid ",";\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return W=function(){return n},n}function _(){var n=Object(u.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n"]);return _=function(){return n},n}var F=c.d.section(_(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.alto})),P=c.d.header(W(),(function(n){return n.theme.color.alto}),(function(n){return n.theme.breakpoint.mobileMax})),R=c.d.h2(U()),X=c.d.div(L()),$=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return o.a.createElement(F,null,o.a.createElement(P,null,o.a.createElement(R,{className:"section__title"},e),r),o.a.createElement(X,null,t))},q=function(n){var e=n.title;return o.a.createElement("header",null,o.a.createElement("h1",null,e))};function K(){var n=Object(u.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n"]);return K=function(){return n},n}var Q=c.d.main(K()),V=function(n){var e=n.children;return o.a.createElement(Q,null,e)},Y=function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]};var Z=function(){var n=Object(r.useState)(!1),e=Object(m.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(Y),c=Object(m.a)(i,2),u=c[0],l=c[1];return Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(u))}),[u]),o.a.createElement(V,null,o.a.createElement(q,{title:"Lista zada\u0144"}),o.a.createElement($,{title:"Dodaj nowe zadanie",body:o.a.createElement(j,{addNewTask:function(n){l((function(e){return[].concat(Object(f.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),o.a.createElement($,{title:"Lista zada\u0144",body:o.a.createElement(H,{tasks:u,hideDone:t,removeTask:function(n){l((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){l((function(e){return e.map((function(e){return e.id===n?Object(s.a)(Object(s.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:o.a.createElement(G,{tasks:u,hideDone:t,toggleHideDone:function(){a((function(n){return!n}))},setAllDone:function(){l((function(n){return n.map((function(n){return Object(s.a)(Object(s.a)({},n),{},{done:!0})}))}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{theme:{color:{black:"#000",silver:"#ccc",alto:"#ddd",gallery:"#eee",white:"#fff",teal:"#008080",crimson:"#db143c",forestGreen:"#228c22"},breakpoint:{mobileMax:767}}},o.a.createElement(d,null),o.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.7fed800b.chunk.js.map