(this["webpackJsonpreact-redux-old"]=this["webpackJsonpreact-redux-old"]||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),u=n(3),i=n(7),l=n(24),d=n(10),s={addTodoAction:function(e){return{type:"ADD_TODO",payload:Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)()})}},removeTodoAction:function(e){return{type:"REMOVE_TODO",payload:e}},clearTodosAction:function(){return{type:"CLEAR_TODOS"}}},O=Object(u.b)((function(e){return{todos:e.todos}}),s)((function(e){var t=e.todos,n=e.addTodoAction,a=e.removeTodoAction,c=e.clearTodosAction,u=function(e){var t=Object(o.useState)(""),n=Object(d.a)(t,2),r=n[0],a=n[1];return{value:r,inputProps:{onChange:function(e){return a(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&(e(r),a(""))},value:r,type:"text"}}}((function(e){return n({content:e})})).inputProps;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",u),r.a.createElement("button",{onClick:function(){return c()}},"\ud83d\uddd1\ufe0f"),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},e.content,r.a.createElement("button",{onClick:function(){return a(e.id)}},"\u2714"))}))))})),f=n(1),m=[],p=Object(f.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return e.concat(t.payload);case"REMOVE_TODO":return e.filter((function(e){var n=e.id;return t.payload!==n}));case"CLEAR_TODOS":return[];default:return e}}}),E=Object(f.c)(p),v=function(){return r.a.createElement(u.a,{store:E},r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.d127b858.chunk.js.map