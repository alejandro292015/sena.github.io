(this.webpackJsonpreacproyect=this.webpackJsonpreacproyect||[]).push([[0],{38:function(e,a,t){e.exports=t(72)},43:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(36),o=t.n(c),l=(t(43),t(12)),i=t(13),m=t(15),u=t(16),s=t(17),d=t.n(s),p=t(18),b=t(9),f=t(5),E=t(14),v=t.n(E);function h(e){var a=Object(n.useState)({id:""}),t=Object(b.a)(a,2),c=t[0];t[1];var o=r.a.useState([]),l=Object(b.a)(o,2),i=l[0],m=l[1];r.a.useEffect((function(){u()}),[]);var u=function(){var e=Object(p.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api-new-03.herokuapp.com/read.php");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,m(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mr-0 mt-4\r "},r.a.createElement("div",{className:"flex-large mt-5"},r.a.createElement(f.b,{to:"/agregar",className:"btn btn-success"},"AGREGAR"),r.a.createElement("table",{class:" table table-striped table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Apellido"),r.a.createElement("th",null,"Identificacion"),r.a.createElement("th",null,"Correo"))),r.a.createElement("tbody",null,i.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.nombre),r.a.createElement("td",null,e.apellido),r.a.createElement("td",null,e.identificacion),r.a.createElement("td",null,e.correo),r.a.createElement("td",null,r.a.createElement(f.b,{to:"/editar/".concat(e.id),class:"btn btn-success"},"EDITAR"),r.a.createElement("button",{type:"button",onClick:function(){return a=e.id,c.id=a,fetch("https://api-new-03.herokuapp.com/delete.php",{method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8 "},body:JSON.stringify(c)}).catch((function(e){return console.log(e)})),void v.a.fire({icon:"success",title:"Operacion Exitosa",text:"Eliminados Correctamente"}).then(window.location="/sena.github.io/home");var a},class:"btn btn btn-danger ml-2"},"Eliminar")))}))))))}t(22);var g=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-danger bg-danger"},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"}))))},N=t(2),y=t(20),O=t(19),x=t.n(O);function j(e){var a=Object(n.useState)({nombre:"",apellido:"",identificacion:"",correo:""}),t=Object(b.a)(a,2),c=t[0],o=t[1];function l(e){var a=Object(y.a)({},c);a[e.target.id]=e.target.value,o(a)}return r.a.createElement("div",{className:"container mr-0"},r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),x.a.post("https://api-new-03.herokuapp.com/insert.php",JSON.stringify(c)).then((function(e){e.data=c,v.a.fire({icon:"success",title:"Operacion Exitosa",text:"Datos Insertados Correctamente"}).then(window.location="/sena.github.io/home")}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"nombre"},"Nombre"),r.a.createElement("input",{onChange:function(e){return l(e)},value:c.nombre,type:"text",name:"nombre",className:"form-control is-valid",id:"nombre",placeholder:"nombre"}),r.a.createElement("label",{for:"apellido"},"Apellido"),r.a.createElement("input",{onChange:function(e){return l(e)},value:c.apellido,type:"text",name:"apellido",className:"form-control is-valid",id:"apellido",placeholder:"apellido"}),r.a.createElement("label",{for:"identificacion"},"Identificacion"),r.a.createElement("input",{onChange:function(e){return l(e)},value:c.identificacion,type:"text",name:"identificacion",className:"form-control is-valid",id:"identificacion",placeholder:"identificacion"}),r.a.createElement("label",{for:"correo"},"Correo"),r.a.createElement("input",{onChange:function(e){return l(e)},value:c.correo,type:"text",name:"correo",className:"form-control data.noombre != is-valid ",id:"correo",placeholder:"correo"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Agregar"),r.a.createElement(f.b,{type:"button",to:"/",className:"btn btn-danger ml-3"},"Cancelar")))}var C=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null)}}]),t}(n.Component),w=function(e){var a=Object(n.useState)({id:"",nombre:"",apellido:"",identificacion:"",correo:""}),t=Object(b.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)({id:"",nombre:"",apellido:"",identificacion:"",correo:""}),i=Object(b.a)(l,2),m=i[0],u=(i[1],r.a.useState([])),s=Object(b.a)(u,2),E=s[0],h=s[1];r.a.useEffect((function(){g()}),[]);var g=function(){var e=Object(p.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api-new-03.herokuapp.com/read.php");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,h(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=Object(N.f)().id;function j(e){var a=Object(y.a)({},c);a[e.target.id]=e.target.value,o(a)}return c.id=O,E.forEach((function(e){m.id=O,m.id===e.id&&(m.nombre=e.nombre,m.apellido=e.apellido,m.identificacion=e.identificacion,m.correo=e.correo)})),r.a.createElement("div",{className:"container mr-0"},r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),""===c.nombre&&(c.nombre=m.nombre),""===c.apellido&&(c.apellido=m.apellido),""===c.identificacion&&(c.identificacion=m.identificacion),""===c.correo&&(c.correo=m.correo),x.a.post("https://api-new-03.herokuapp.com/update.php",JSON.stringify(c)).then((function(e){e.data=c,v.a.fire({icon:"success",title:"Operacion Exitosa",text:"Datos Insertados Correctamente",buttonFuncion:r.a.createElement(f.b,{to:"/"},"Editar")}).then(window.location="/sena.github.io/home")}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"nombre"},"ID"),r.a.createElement("input",{onChange:function(e){return j(e)},disabled:!0,value:c.id,type:"text",name:"nombre",className:"form-control",id:"nombre",placeholder:c.id}),r.a.createElement("label",{for:"nombre"},"Nombre"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.nombre,type:"text",name:"nombre",className:"form-control",id:"nombre",placeholder:m.nombre}),r.a.createElement("label",{for:"apellido"},"Apellido"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.apellido,type:"text",name:"apellido",className:"form-control",id:"apellido",placeholder:m.apellido}),r.a.createElement("label",{for:"identificacion"},"Identificacion"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.identificacion,type:"text",name:"identificacion",className:"form-control",id:"identificacion",placeholder:m.identificacion}),r.a.createElement("label",{for:"correo"},"Correo"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.correo,type:"text",name:"correo",className:"form-control",id:"correo",placeholder:m.correo})),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit",className:"btn btn-success ml-3"},"Editar"),r.a.createElement(f.b,{type:"button",to:"/",className:"btn btn-danger ml-3"},"Cancelar"))))},k=function(){return r.a.createElement("div",null,r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/sena.github.io/home",component:h}),r.a.createElement(N.a,{path:"/sena.github.io/agregar",component:C}),r.a.createElement(N.a,{path:"/sena.github.io/editar/:id",component:w})))},S=t(10),I=t.n(S),T=(t(71),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-danger bg-danger"},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"})),r.a.createElement("h4",null,"CRUD REACT JS"))),r.a.createElement(I.a,null,r.a.createElement(I.a.Toggle,null),r.a.createElement(I.a.Nav,{defaultSelected:"home"},r.a.createElement(S.NavItem,{eventKey:"home"},r.a.createElement(S.NavIcon,null,r.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),r.a.createElement(S.NavText,null,r.a.createElement(f.b,{className:"btn btn",to:"/sena.github.io/home"},"home"))))))}}]),t}(n.Component)),A=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(T,null),r.a.createElement(k,null))}}]),t}(n.Component);o.a.render(r.a.createElement(f.a,null,r.a.createElement(A,null)," "),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b5fbc71e.chunk.js.map