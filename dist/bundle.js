webpackJsonp([0],{0:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=n(1),u=l(r),a=n(28),o=l(a),f=n(166),c=l(f),i=n(167),d=l(i);o.default.render(u.default.createElement("div",null,u.default.createElement(c.default,null),u.default.createElement(d.default,null)),document.getElementById("example"))},166:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),f=n(1),c=l(f),i=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("fieldset",null,c.default.createElement("legend",null,"Task List"),c.default.createElement("ul",null,c.default.createElement("li",null,"Reload page"),c.default.createElement("li",null,"Click Page")))}}]),t}(c.default.Component);t.default=i},167:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),f=n(1),c=l(f),i=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("fieldset",null,c.default.createElement("legend",null,"Add Task"),c.default.createElement("form",{role:"form"},c.default.createElement("div",null,c.default.createElement("div",{for:"task-name"},"Task Name"),c.default.createElement("input",{type:"text",id:"task-name",placeholder:"Task Name"})),c.default.createElement("div",null,c.default.createElement("div",{for:"input-interval"},"Interval"),c.default.createElement("input",{type:"text",id:"input-interval",placeholder:"Interval"})),c.default.createElement("a",{href:"#",className:"button"},"Add Item"),c.default.createElement("div",null,c.default.createElement("div",{for:"page-url"},"Page Url"),c.default.createElement("input",{type:"text",id:"page-url",placeholder:"Page Url"})),c.default.createElement("div",null,c.default.createElement("label",null,c.default.createElement("input",{type:"checkbox"})," Check me out")),c.default.createElement("button",{type:"submit",class:"btn btn-default"},"Submit")))}}]),t}(c.default.Component);t.default=i}});