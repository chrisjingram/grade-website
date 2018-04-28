webpackJsonp([35783957827783],{85:function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=E.hasOwnProperty(t)?E[t]:null;v.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(c)&&g.mixins(e,n.mixins);for(var l in n)if(n.hasOwnProperty(l)&&l!==c){var u=n[l],s=r.hasOwnProperty(l);if(o(s,l),g.hasOwnProperty(l))g[l](e,u);else{var f=E.hasOwnProperty(l),m="function"==typeof u,h=m&&!f&&!s&&n.autobind!==!1;if(h)a.push(l,u),r[l]=u;else if(s){var y=E[l];i(f&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,l),"DEFINE_MANY_MERGED"===y?r[l]=p(r[l],u):"DEFINE_MANY"===y&&(r[l]=d(r[l],u))}else r[l]=u}}}else;}function s(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in g;i(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;i(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=r}}}function f(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return f(o,n),f(o,r),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=m(e,o)}}function y(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=r,this.refs=u,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;i("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new x,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],b.forEach(a.bind(null,t)),a(t,_),a(t,e),a(t,w),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in E)t.prototype[o]||(t.prototype[o]=null);return t}var b=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){s(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},w={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},x=function(){};return l(x.prototype,e.prototype,v),y}var a,l=n(5),u=n(32),i=n(1),c="mixins";a={},e.exports=o},143:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(t,s,f){if("string"!=typeof s){if(c){var p=i(s);p&&p!==c&&e(t,p,f)}var d=a(s);l&&(d=d.concat(l(s)));for(var m=0;m<d.length;++m){var h=d[m];if(!(n[h]||r[h]||f&&f[h])){var y=u(s,h);try{o(t,h,y)}catch(e){}}}return t}return t}},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,i=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var s in r)a.call(r,s)&&(i[s]=r[s]);if(o){u=o(r);for(var f=0;f<u.length;f++)l.call(r,u[f])&&(i[u[f]]=r[u[f]])}}return i}},419:function(e,t,n){e.exports=n.p+"static/book-now-bg.7a424f3e.jpg"},420:function(e,t,n){e.exports=n.p+"static/footer-bg.f04403a8.jpg"},421:function(e,t,n){e.exports=n.p+"static/header-bg.75b5ad56.jpeg"},422:function(e,t,n){e.exports=n.p+"static/logo.5906c0ad.png"},423:function(e,t,n){e.exports=n.p+"static/scroll-arrow.424a275a.png"},424:function(e,t,n){e.exports=n.p+"static/intro-image.d1e3d663.jpg"},425:function(e,t,n){e.exports=n.p+"static/clippers-icon.55b65018.png"},426:function(e,t,n){e.exports=n.p+"static/head-icon.d97e5edc.png"},427:function(e,t,n){e.exports=n.p+"static/razor-icon.d2d119e1.png"},428:function(e,t,n){e.exports=n.p+"static/scissors-icon.63053b9e.png"},429:function(e,t,n){e.exports=n.p+"static/services-section-bg.3e7e326b.jpg"},430:function(e,t,n){e.exports=n.p+"static/shop-image.9d22ffc9.jpg"},185:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(419)),f=r(s),p=n(39),d=r(p);n(277);var m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("section",{id:"book-now",style:{backgroundImage:"linear-gradient(rgba(23, 23, 23, 0.5), rgba(23, 23, 23, 0.5)),url("+f.default+")",backgroundPosition:"center center"}},i.default.createElement("div",null,i.default.createElement(d.default,{textColour:"#FFFFFF",smallText:"",text:"Book Now"})),i.default.createElement("div",null,i.default.createElement("a",{href:"https://gradebarbershop.resurva.com",className:"border-button",target:"_blank"},"Book an appointment")))},t}(i.default.PureComponent);t.default=m,e.exports=t.default},186:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(420)),f=r(s);n(279);var p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("section",{id:"footer",style:{backgroundImage:"linear-gradient(rgba(23, 23, 23, 0.8), rgba(23, 23, 23, 0.8)),url("+f.default+")",backgroundPosition:"center center"}},i.default.createElement("div",{className:"social-icons"},i.default.createElement("a",{href:"#"},i.default.createElement("i",{className:"fab fa-facebook"})),i.default.createElement("a",{href:"#"},i.default.createElement("i",{className:"fab fa-instagram"})),i.default.createElement("a",{href:"#"},i.default.createElement("i",{className:"fab fa-twitter"}))),i.default.createElement("div",{className:"copyright"},"© Grade Barber & Shop 2018"))},t}(i.default.PureComponent);t.default=p,e.exports=t.default},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(421)),f=r(s),p=n(422),d=r(p),m=n(423),h=r(m),y=n(50),b=r(y),E=n(189),g=r(E);n(280);var _=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("section",{id:"header",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 0.81)),url("+f.default+")",backgroundPosition:"center center"}},i.default.createElement(g.default,null),i.default.createElement(b.default,null,i.default.createElement("img",{src:d.default,className:"logo"}),i.default.createElement("h2",null,"Precision fades and",i.default.createElement("br",null),"bespoke shaves"),i.default.createElement("a",{href:"https://gradebarbershop.resurva.com",className:"border-button",target:"_blank"},"Book an appointment"),i.default.createElement("img",{src:h.default,className:"scroll-arrow"})))},t}(i.default.PureComponent);t.default=_,e.exports=t.default},39:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11);r(c);n(281);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"heading"},i.default.createElement("fieldset",null,i.default.createElement("legend",{style:{color:this.props.textColour,paddingRight:this.props.smallText?"10px":0}},this.props.smallText),i.default.createElement("h2",{style:{color:this.props.textColour,marginTop:this.props.smallText?0:"15px"}},this.props.text)))},t}(i.default.PureComponent);t.default=s,e.exports=t.default},188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=r(c),f=n(50),p=(r(f),n(39)),d=r(p);n(282);var m=n(424),h=r(m),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("section",{id:"intro"},i.default.createElement("div",{className:"flex-half flex-half-image",style:{backgroundImage:"url("+h.default+")",backgroundPosition:"top center",backgroundSize:"cover"}}),i.default.createElement("div",{className:"flex-half"},i.default.createElement("div",{className:"intro-text-container"},i.default.createElement(d.default,{textColour:"#000000",smallText:"Welcome",text:"Grade Barbers"}),i.default.createElement("p",null,"A five star master barber experience for gentlemen seeking high-grade  precision fades and bespoke shaves."),i.default.createElement(s.default,{to:"#",className:"border-button"},"Book an appointment"))))},t}(i.default.PureComponent);t.default=y,e.exports=t.default},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11);r(c);n(283);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){console.log("IndexPage componentDidMount"),document.querySelectorAll('a[href^="#"]').forEach(function(e){console.log(e),e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})})},t.prototype.render=function(){return i.default.createElement("ul",{className:"nav"},i.default.createElement("li",null,i.default.createElement("a",{href:"#header"},"Grade")),i.default.createElement("li",null,i.default.createElement("a",{href:"#intro"},"Barber")),i.default.createElement("li",null,i.default.createElement("a",{href:"#services"},"Services")),i.default.createElement("li",null,i.default.createElement("a",{href:"#book-now"},"Book")),i.default.createElement("li",null,i.default.createElement("a",{href:"#opening-hours"},"Find Us")))},t}(i.default.PureComponent);t.default=s,e.exports=t.default},190:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(39)),f=r(s);n(284);var p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("section",{id:"opening-hours"},i.default.createElement("div",{className:"flex-half left-col"},i.default.createElement("div",{className:"opening-hours-text-container"},i.default.createElement(f.default,{textColour:"#FFFFFF",smallText:"View Our",text:"Opening Hours"}),i.default.createElement("p",null,"MONDAY to FRIDAY",i.default.createElement("br",null),"10:00 - 19:00"),i.default.createElement("p",null,"SATURDAY",i.default.createElement("br",null),"09:00 - 17:00"),i.default.createElement("p",null,"SUNDAY",i.default.createElement("br",null),"Closed"))),i.default.createElement("div",{className:"flex-half"},i.default.createElement("iframe",{frameBorder:"0",style:{margin:0,width:"100%",height:"100%",border:0},src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyDYKEyKMhCzFL8tnV_PErHQpQGkqtrs4uE&q=564+Oldham+Rd,+Failsworth",allowFullScreen:!0})))},t}(i.default.PureComponent);t.default=p,e.exports=t.default},191:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(50));r(s);n(136);var f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"service-block"},i.default.createElement("img",{src:this.props.icon}),i.default.createElement("h4",null,this.props.title),i.default.createElement("p",null,this.props.children))},t}(i.default.PureComponent);t.default=f,e.exports=t.default},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(429)),f=r(s),p=n(428),d=r(p),m=n(425),h=r(m),y=n(426),b=r(y),E=n(427),g=r(E),_=n(50),w=(r(_),n(39)),v=r(w),x=n(191),O=r(x);n(136);var j=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("section",{id:"services",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.81)),url("+f.default+")",backgroundPosition:"center center"}},i.default.createElement(v.default,{textColour:"#FFFFFF",smallText:"View",text:"Our Services"}),i.default.createElement("div",{className:"services-blocks"},i.default.createElement(O.default,{icon:d.default,title:"Wash, Cut & Style"},"Standard ",i.default.createElement("strong",null,"£12.50"),i.default.createElement("br",null),"Bald fade ",i.default.createElement("strong",null,"£15")),i.default.createElement(O.default,{icon:h.default,title:"Buzz Cut"},"Standard ",i.default.createElement("strong",null,"£10"),i.default.createElement("br",null),"Fade ",i.default.createElement("strong",null,"£12.50")),i.default.createElement(O.default,{icon:b.default,title:"Youth Cut"},"Standard ",i.default.createElement("strong",null,"£10"),i.default.createElement("br",null),"Bald Fade ",i.default.createElement("strong",null,"£12.50")),i.default.createElement(O.default,{icon:g.default,title:"Shape Up Edges"},"Classic ",i.default.createElement("strong",null,"£10"))),i.default.createElement("div",{className:"services-blocks"},i.default.createElement(O.default,{icon:d.default,title:"Beard"},"Classic ",i.default.createElement("strong",null,"£7.50")),i.default.createElement(O.default,{icon:g.default,title:"Shave"},"Steam Shave ",i.default.createElement("strong",null,"£15"),i.default.createElement("br",null),"Hot Towel Shave ",i.default.createElement("strong",null,"£15")),i.default.createElement(O.default,{icon:g.default,title:"Executive Shave"},"Executive ",i.default.createElement("strong",null,"£20")),i.default.createElement(O.default,{icon:b.default,title:"Face"},"Express Facial ",i.default.createElement("strong",null,"£10"),i.default.createElement("br",null),"Executive Facial ",i.default.createElement("strong",null,"£15"))))},t}(i.default.PureComponent);t.default=j,e.exports=t.default},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(39)),f=r(s);n(286);var p=n(430),d=r(p),m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("section",{id:"intro"},i.default.createElement("div",{className:"flex-half"},i.default.createElement("div",{className:"shop-text-container"},i.default.createElement(f.default,{textColour:"#000000",smallText:"Welcome",text:"Grade Shop"}),i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "))),i.default.createElement("div",{className:"flex-half flex-half-image",style:{backgroundImage:"url("+d.default+")",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},i.default.createElement("iframe",{frameBorder:"0",style:{margin:0,width:"100%",height:"100%",border:0},src:"https://gradebarbershop.resurva.com/book?embedded=true",name:"resurva-frame",frameborder:"0",allowFullscreen:!0})))},t}(i.default.PureComponent);t.default=m,e.exports=t.default},50:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("div",{style:{width:"100%",height:"100%",display:"table"}},i.default.createElement("div",{style:{width:"100%",height:"100%",display:"table-cell",verticalAlign:"middle",textAlign:"center"}},this.props.children))},t}(i.default.Component);t.default=c,e.exports=t.default},277:function(e,t){},279:function(e,t){},280:function(e,t){},281:function(e,t){},282:function(e,t){},283:function(e,t){},284:function(e,t){},136:function(e,t){},286:function(e,t){},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(11),s=(r(c),n(187)),f=r(s),p=n(188),d=r(p),m=n(192),h=r(m),y=n(193),b=(r(y),n(185)),E=r(b),g=n(190),_=r(g),w=n(186),v=r(w),x=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("div",null,i.default.createElement(f.default,null),i.default.createElement(d.default,null),i.default.createElement(h.default,null),i.default.createElement(E.default,null),i.default.createElement(_.default,null),i.default.createElement(v.default,null))},t}(i.default.PureComponent);t.default=x,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-eb5eef5d32850dd78395.js.map