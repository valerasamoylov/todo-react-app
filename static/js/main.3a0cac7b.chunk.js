(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(31)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),c=(a(21),a(2)),l=a(3),o=a(6),u=a(4),m=a(5),h=(a(22),a(11)),d=(a(23),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).update=function(){a.setState({time:new Date})},a.state={time:new Date},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.update,1e3)}},{key:"render",value:function(){var e=this.state.time.getHours(),t=this.state.time.getMinutes();return r.a.createElement("div",{className:"clock"},e,":",t<10?"0"+t:t)}}]),t}(n.Component)),p=(a(24),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,r.a.createElement(d,null)),r.a.createElement("div",{className:"main-information"},r.a.createElement("h2",null,"Hello,what's your name:"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter your name",onChange:a("firstName"),defaultValue:t.firstName,id:"standard-textarea"}),r.a.createElement("button",{onClick:this.continue,className:"btn btn-primary",type:"submit"},"Confirm")))}}]),t}(n.Component)),b=a(8),f=a(14),v=(a(25),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this))).state={tasks:[{title:"buy potatoes",isDone:!1},{title:"call a friend",isDone:!1}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"createNewTask",value:function(e){"Enter"===e.key&&""!==e.currentTarget.value&&(this.setState({tasks:[].concat(Object(f.a)(this.state.tasks),[{title:e.currentTarget.value,isDone:!1}])}),e.currentTarget.value="")}},{key:"deleteTask",value:function(e,t){this.setState({tasks:this.state.tasks.filter(function(t){return t!==e})})}},{key:"toogleTaskIsChecked",value:function(e,t){e.isDone=!e.isDone,this.forceUpdate()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"todolist"},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Todos")),r.a.createElement("div",{className:"header"},r.a.createElement("input",{onKeyPress:this.createNewTask.bind(this),className:"input-todo"})),r.a.createElement("div",{className:"tasks"},this.state.tasks.map(function(t){return r.a.createElement("div",{key:t.title,className:t.isDone?"task done":"task"},r.a.createElement("input",{type:"checkbox",onClick:e.toogleTaskIsChecked.bind(e,t),className:"input-checked-task"}),t.title,r.a.createElement("span",{className:"delete",onClick:e.deleteTask.bind(e,t)},"x"))})))}}]),t}(n.Component)),k=(a(26),a(12)),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={sidebarOpen:!0},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){var e=this,t=this.props.values.firstName;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(k.a,{sidebar:r.a.createElement(v,null),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white"}}},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(){return e.onSetSidebarOpen(!0)}},"Todos")),r.a.createElement("h1",null,r.a.createElement(d,null)),r.a.createElement("div",{className:"hello-title"},r.a.createElement("h2",null,"Hello,"),r.a.createElement("h2",null,t)))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.handleChange=function(e){return function(t){a.setState(Object(h.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.step,t={firstName:this.state.firstName};switch(e){case 1:return r.a.createElement(p,{nextStep:this.nextStep,handleChange:this.handleChange,values:t,primary:"true"});case 2:return r.a.createElement(O,{values:t})}}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.3a0cac7b.chunk.js.map