(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function e(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function f(d,a,b){return a&&e(d.prototype,a),b&&e(d,b),d}function g(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function h(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function i(d,a,b){return a&&h(d.prototype,a),b&&h(d,b),d}function j(i,a){var b;if('undefined'==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=k(i))||a&&i&&'number'==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b['return']||b['return']()}finally{if(g)throw a}}}}function k(d,e){if(d){if('string'==typeof d)return l(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return'Object'===b&&d.constructor&&(b=d.constructor.name),'Map'===b||'Set'===b?Array.from(d):'Arguments'===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?l(d,e):void 0}}function l(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}c.r(b),c.d(b,'todoList',function(){return v});var m=c(0),n=function(){function h(a){d(this,h),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return f(h,null,[{key:'fromJson',value:function(a){var b=a.id,c=a.tarea,d=a.completado,e=a.creado,f=new h(c);return f.id=b,f.completado=d,f.creado=e,f}}]),h}(),o=function(){function b(){g(this,b),this.cargarLocalStorage()}return i(b,[{key:'nuevoTodo',value:function(b){this.todos.push(b),this.guardarLocalStorage()}},{key:'eliminarTodo',value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:'marcarCompletado',value:function(c){for(var a in this.todos)if(a.id==c){a.completado=!a.completado,this.guardarLocalStorage();break}}},{key:'eliminarCompletados',value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.guardarLocalStorage()}},{key:'guardarLocalStorage',value:function(){localStorage.setItem('todo',JSON.stringify(this.todos))}},{key:'cargarLocalStorage',value:function(){this.todos=localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):[],this.todos=this.todos.map(n.fromJson)}}]),b}(),p=document.querySelector('.todo-list'),q=document.querySelector('.new-todo'),r=document.querySelector('.clear-completed'),s=document.querySelector('.filters'),t=document.querySelectorAll('.filtro'),u=function(d){var a='\n        <li class="'.concat(d.completado?'completed':'','" data-id="').concat(d.id,'">\n            <div class="view">\n                <input class="toggle" type="checkbox" ').concat(d.completado?'checked':'','>\n                <label>').concat(d.tarea,'</label>\n                <button class="destroy"></button>\n            </div>\n            <input class="edit" value="Create a TodoMVC template">\n        </li>'),b=document.createElement('div');return b.innerHTML=a,p.append(b.firstElementChild),b.firstElementChild};q.addEventListener('keyup',function(c){if(13===c.keyCode&&0<q.value.length){var a=new n(q.value);v.nuevoTodo(a),u(a),q.value=''}}),p.addEventListener('click',function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute('data-id');a.includes('input')?(v.marcarCompletado(c),b.classList.toggle('completed')):a.includes('button')&&(v.eliminarTodo(c),p.removeChild(b))}),r.addEventListener('click',function(){v.eliminarCompletados();for(var c,a=p.children.length-1;0<=a;a--)c=p.children[a],c.classList.contains('completed')&&p.removeChild(c)}),s.addEventListener('click',function(g){var a=g.target.text;if(a){t.forEach(function(b){return b.classList.remove('selected')}),g.target.classList.add('selected');var b,c=j(p.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove('hidden');var e=d.classList.contains('completed');switch(a){case'Pendientes':e&&d.classList.add('hidden');break;case'Completados':e||d.classList.add('hidden');break;default:}}}catch(b){c.e(b)}finally{c.f()}}});var v=new o;v.todos.forEach(u),console.log(v.todos)}]);