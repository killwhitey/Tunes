(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||null===this)throw new TypeError;var f,c=Object(this),d=c.length>>>0,e=0;if("function"!=typeof b)throw new TypeError;if(0==d&&1==arguments.length)throw new TypeError;if(arguments.length>=2)f=arguments[1];else for(;;){if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}for(;d>e;)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function A(a){return"[object Function]"==v.call(a)}function B(a){return a instanceof Object}function C(b){var c,d;if("[object Object]"!==v.call(b))return!1;if(d=A(b.constructor)&&b.constructor.prototype,!d||!hasOwnProperty.call(d,"isPrototypeOf"))return!1;for(c in b);return c===a||hasOwnProperty.call(b,c)}function D(a){return a instanceof Array}function E(a){return"number"==typeof a.length}function F(b){return b.filter(function(b){return b!==a&&null!==b})}function G(a){return a.length>0?[].concat.apply([],a):a}function H(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(a){return a in i?i[a]:i[a]=RegExp("(^|\\s)"+a+"(\\s|$)")}function J(a,b){return"number"!=typeof b||k[H(a)]?b:b+"px"}function K(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),h[a]=c),h[a]}function L(b,d){return d===a?c(b):c(b).filter(d)}function M(a,b,c,d){return A(b)?b.call(a,c,d):b}function N(a,b,d){var e=a%2?b:b.parentNode;e?e.insertBefore(d,a?1==a?e.firstChild:2==a?b:null:b.nextSibling):c(d).remove()}function O(a,b){b(a);for(var c in a.childNodes)O(a.childNodes[c],b)}var a,b,c,d,x,y,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,m=[1,3,8,9,11],n=["after","prepend","before","append"],o=g.createElement("table"),p=g.createElement("tr"),q={tr:g.createElement("tbody"),tbody:o,thead:o,tfoot:o,td:p,th:p,"*":g.createElement("div")},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString,w={},z=g.createElement("div");return w.matches=function(a,b){if(!a||1!==a.nodeType)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=z).appendChild(a),d=~w.qsa(e,b).indexOf(a),f&&z.removeChild(a),d},x=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},y=function(a){return a.filter(function(b,c){return a.indexOf(b)==c})},w.fragment=function(b,d){d===a&&(d=l.test(b)&&RegExp.$1),d in q||(d="*");var e=q[d];return e.innerHTML=""+b,c.each(f.call(e.childNodes),function(){e.removeChild(this)})},w.Z=function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||"",a},w.isZ=function(a){return a instanceof w.Z},w.init=function(b,d){if(b){if(A(b))return c(g).ready(b);if(w.isZ(b))return b;var e;if(D(b))e=F(b);else if(C(b))e=[c.extend({},b)],b=null;else if(m.indexOf(b.nodeType)>=0||b===window)e=[b],b=null;else if(l.test(b))e=w.fragment(b.trim(),RegExp.$1),b=null;else{if(d!==a)return c(d).find(b);e=w.qsa(g,b)}return w.Z(e,b)}return w.Z()},c=function(a,b){return w.init(a,b)},c.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d)d[b]!==a&&(c[b]=d[b])}),c},w.qsa=function(a,b){var c;return a===g&&t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:1!==a.nodeType&&9!==a.nodeType?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.isFunction=A,c.isObject=B,c.isArray=D,c.isPlainObject=C,c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.trim=function(a){return a.trim()},c.uuid=0,c.map=function(a,b){var c,e,f,d=[];if(E(a))for(e=0;a.length>e;e++)c=b(a[e],e),null!=c&&d.push(c);else for(f in a)c=b(a[f],f),null!=c&&d.push(c);return G(d)},c.each=function(a,b){var c,d;if(E(a)){for(c=0;a.length>c;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return c.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(c):g.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return c([].filter.call(this,function(b){return w.matches(b,a)}))},add:function(a,b){return c(y(this.concat(c(a,b))))},is:function(a){return this.length>0&&w.matches(this[0],a)},not:function(b){var d=[];if(A(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e="string"==typeof b?this.filter(b):E(b)&&A(b.item)?f.call(b):c(b);this.forEach(function(a){0>e.indexOf(a)&&d.push(a)})}return c(d)},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!B(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!B(a)?a:c(a)},find:function(a){var b;return b=1==this.length?w.qsa(this[0],a):this.map(function(){return w.qsa(this,a)}),c(b)},closest:function(a,b){for(var d=this[0];d&&!w.matches(d,a);)d=d!==b&&d!==g&&d.parentNode;return c(d)},parents:function(b){for(var d=[],e=this;e.length>0;)e=c.map(e,function(b){return(b=b.parentNode)&&b!==g&&0>d.indexOf(b)?(d.push(b),b):a});return L(d,b)},parent:function(a){return L(y(this.pluck("parentNode")),a)},children:function(a){return L(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return L(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==j(this,"").getPropertyValue("display")&&(this.style.display=K(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return this.each(function(){c(this).wrapAll(c(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&&(c(this[0]).before(a=c(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return c(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(b){return(b===a?"none"==this.css("display"):b)?this.show():this.hide()},prev:function(){return c(this.pluck("previousElementSibling"))},next:function(){return c(this.pluck("nextElementSibling"))},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(M(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return"string"==typeof c&&d===a?0==this.length||1!==this[0].nodeType?a:"value"==c&&"INPUT"==this[0].nodeName?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(1===this.nodeType)if(B(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,M(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){1===this.nodeType&&this.removeAttribute(a)})},prop:function(b,c){return c===a?this[0]?this[0][b]:a:this.each(function(a){this[b]=M(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+H(b),c);return null!==d?d:a},val:function(b){return b===a?this.length>0?this[0].value:a:this.each(function(a){this.value=M(this,b,a,this.value)})},offset:function(){if(0==this.length)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&&"string"==typeof c)return 0==this.length?a:this[0].style[x(c)]||j(this[0],"").getPropertyValue(c);var e="";for(b in c)"string"==typeof c[b]&&""==c[b]?this.each(function(){this.style.removeProperty(H(b))}):e+=H(b)+":"+J(b,c[b])+";";return"string"==typeof c&&(""==d?this.each(function(){this.style.removeProperty(H(c))}):e=H(c)+":"+J(c,d)),this.each(function(){this.style.cssText+=";"+e})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return 1>this.length?!1:I(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var e=this.className,f=M(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&(this.className+=(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){return b===a?this.className="":(d=this.className,M(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(I(a)," ")}),this.className=d.trim(),a)})},toggleClass:function(b,d){return this.each(function(e){var f=M(this,b,e,this.className);(d===a?!c(this).hasClass(f):d)?c(this).addClass(f):c(this).removeClass(f)})}},["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?this[0]==window?window["inner"+f]:this[0]==g?g.documentElement["offset"+f]:(e=this.offset())&&e[b]:this.each(function(a){var e=c(this);e.css(b,M(this,d,a,e[b]()))})}}),n.forEach(function(a,b){c.fn[a]=function(){var a=c.map(arguments,function(a){return B(a)?a:w.fragment(a)});if(1>a.length)return this;var d=this.length,e=d>1,f=2>b;return this.each(function(c,g){for(var h=0;a.length>h;h++){var i=a[f?a.length-h-1:h];O(i,function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||window.eval.call(window,a.innerHTML)}),e&&d-1>c&&(i=i.cloneNode(!0)),N(b,g,i)}})},c.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),w.Z.prototype=c.fn,w.camelize=x,w.uniq=y,c.zepto=w,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function f(a){return a._zid||(a._zid=d++)}function g(a,b,d,e){if(b=h(b),b.ns)var g=i(b.ns);return(c[f(a)]||[]).filter(function(a){return!(!a||b.e&&a.e!=b.e||b.ns&&!g.test(a.ns)||d&&f(a.fn)!==f(d)||e&&a.sel!=e)})}function h(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function i(a){return RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function j(b,c,d){a.isObject(b)?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function k(b,d,e,g,i,k){k=!!k;var l=f(b),m=c[l]||(c[l]=[]);j(d,e,function(c,d){var e=i&&i(d,c),f=e||d,j=function(a){var c=f.apply(b,[a].concat(a.data));return c===!1&&a.preventDefault(),c},l=a.extend(h(c),{fn:d,proxy:j,sel:g,del:e,i:m.length});m.push(l),b.addEventListener(l.e,j,k)})}function l(a,b,d,e){var h=f(a);j(b||"",d,function(b,d){g(a,b,d,e).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function p(b){var c=a.extend({originalEvent:b},b);return a.each(o,function(a,d){c[a]=function(){return this[d]=m,b[a].apply(b,arguments)},c[d]=n}),c}function q(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var c=(a.zepto.qsa,{}),d=1,e={};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:k,remove:l},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=f(b),d}if("string"==typeof c)return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){k(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){k(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return l(d,b,a),c}})})};var m=function(){return!0},n=function(){return!1},o={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){var e=!1;return("blur"==c||"focus"==c)&&(a.iswebkit?c="blur"==c?"focusout":"focus"==c?"focusin":c:e=!0),this.each(function(f,g){k(g,c,d,b,function(c){return function(d){var e,f=a(d.target).closest(b,g).get(0);return f?(e=a.extend(p(d),{currentTarget:f,liveFired:g}),c.apply(f,[e].concat([].slice.call(arguments,1)))):void 0}},e)})},a.fn.undelegate=function(a,b,c){return this.each(function(){l(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return void 0==c||a.isFunction(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return void 0==c||a.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){return"string"==typeof b&&(b=a.Event(b)),q(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=p("string"==typeof b?a.Event(b):b),d.data=c,d.target=h,a.each(g(h,b.type||b),function(a,b){return e=b.proxy(d),d.isImmediatePropagationStopped()?!1:void 0})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(c){}return this}}),a.Event=function(a,b){var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)"bubbles"==f?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c}}(Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/);(c.webkit=!!d)&&(c.version=d[1]),e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0)}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a,b){function l(a){return a.toLowerCase()}function m(a){return d?d+a:l(a)}var d,c="",g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k={};a.each(g,function(a,e){return i.style[a+"TransitionProperty"]!==b?(c="-"+l(a)+"-",d=e,!1):b}),k[c+"transition-property"]=k[c+"transition-duration"]=k[c+"transition-timing-function"]=k[c+"animation-name"]=k[c+"animation-duration"]="",a.fx={off:d===b&&i.style.transitionProperty===b,cssPrefix:c,transitionEnd:m("TransitionEnd"),animationEnd:m("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c/=1e3),this.anim(b,c,d,e)},a.fn.anim=function(d,e,f,g){var h,l,n,i={},m=this,o=a.fx.transitionEnd;if(e===b&&(e=.4),a.fx.off&&(e=0),"string"==typeof d)i[c+"animation-name"]=d,i[c+"animation-duration"]=e+"s",o=a.fx.animationEnd;else{for(l in d)j.test(l)?(h||(h=[]),h.push(l+"("+d[l]+")")):i[l]=d[l];h&&(i[c+"transform"]=h.join(" ")),a.fx.off||"object"!=typeof d||(i[c+"transition-property"]=Object.keys(d).join(", "),i[c+"transition-duration"]=e+"s",i[c+"transition-timing-function"]=f||"linear")}return n=function(c){if(c!==b){if(c.target!==c.currentTarget)return;a(c.target).unbind(o,arguments.callee)}a(this).css(k),g&&g.call(this)},e>0&&this.bind(o,n),setTimeout(function(){m.css(i),0>=e&&setTimeout(function(){m.each(function(){n.call(this)})},0)},0),this},i=null}(Zepto),function(a){function m(b,c,d){var e=a.Event(c);return a(b).trigger(e,d),!e.defaultPrevented}function n(a,b,c,e){return a.global?m(b||d,c,e):void 0}function o(b){b.global&&0===a.active++&&n(b,null,"ajaxStart")}function p(b){b.global&&!--a.active&&n(b,null,"ajaxStop")}function q(a,b){var c=b.context;return b.beforeSend.call(c,a,b)===!1||n(b,c,"ajaxBeforeSend",[a,b])===!1?!1:(n(b,c,"ajaxSend",[a,b]),void 0)}function r(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),n(c,d,"ajaxSuccess",[b,c,a]),t(e,b,c)}function s(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),n(d,e,"ajaxError",[c,d,a]),t(b,c,d)}function t(a,b,c){var d=c.context;c.complete.call(d,b,a),n(c,d,"ajaxComplete",[b,c]),p(c)}function u(){}function v(a){return a&&(a==k?"html":a==j?"json":h.test(a)?"script":i.test(a)&&"xml")||"text"}function w(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function x(b){c(b.data)&&(b.data=a.param(b.data)),!b.data||b.type&&"GET"!=b.type.toUpperCase()||(b.url=w(b.url,b.data))}function z(b,d,e,f){var g=a.isArray(d);a.each(d,function(d,h){f&&(d=e?f:f+"["+(g?"":d)+"]"),!f&&g?b.add(h.name,h.value):(e?a.isArray(h):c(h))?z(b,h,e,d):b.add(d,h)})}var e,f,b=0,c=a.isObject,d=window.document,g=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,h=/^(?:text|application)\/javascript/i,i=/^(?:text|application)\/xml/i,j="application/json",k="text/html",l=/^\s*$/;a.active=0,a.ajaxJSONP=function(c){var i,e="jsonp"+ ++b,f=d.createElement("script"),g=function(){a(f).remove(),e in window&&(window[e]=u),t("abort",h,c)},h={abort:g};return c.error&&(f.onerror=function(){h.abort(),c.error()}),window[e]=function(b){clearTimeout(i),a(f).remove(),delete window[e],r(b,h,c)},x(c),f.src=c.url.replace(/=\?/,"="+e),a("head").append(f),c.timeout>0&&(i=setTimeout(function(){h.abort(),t("timeout",h,c)},c.timeout)),h},a.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:j,xml:"application/xml, text/xml",html:k,text:"text/plain"},crossDomain:!1,timeout:0},a.ajax=function(b){var c=a.extend({},b||{});for(e in a.ajaxSettings)void 0===c[e]&&(c[e]=a.ajaxSettings[e]);o(c),c.crossDomain||(c.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(c.url)&&RegExp.$2!=window.location.host);var d=c.dataType,g=/=\?/.test(c.url);if("jsonp"==d||g)return g||(c.url=w(c.url,"callback=?")),a.ajaxJSONP(c);c.url||(c.url=""+window.location),x(c);var m,h=c.accepts[d],i={},j=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:window.location.protocol,k=a.ajaxSettings.xhr();c.crossDomain||(i["X-Requested-With"]="XMLHttpRequest"),h&&(i.Accept=h,h.indexOf(",")>-1&&(h=h.split(",",2)[0]),k.overrideMimeType&&k.overrideMimeType(h)),(c.contentType||c.data&&"GET"!=c.type.toUpperCase())&&(i["Content-Type"]=c.contentType||"application/x-www-form-urlencoded"),c.headers=a.extend(i,c.headers||{}),k.onreadystatechange=function(){if(4==k.readyState){clearTimeout(m);var a,b=!1;if(k.status>=200&&300>k.status||304==k.status||0==k.status&&"file:"==j){d=d||v(k.getResponseHeader("content-type")),a=k.responseText;try{"script"==d?(1,eval)(a):"xml"==d?a=k.responseXML:"json"==d&&(a=l.test(a)?null:JSON.parse(a))}catch(e){b=e}b?s(b,"parsererror",k,c):r(a,k,c)}else s(null,"error",k,c)}};var n="async"in c?c.async:!0;k.open(c.type,c.url,n);for(f in c.headers)k.setRequestHeader(f,c.headers[f]);return q(k,c)===!1?(k.abort(),!1):(c.timeout>0&&(m=setTimeout(function(){k.onreadystatechange=u,k.abort(),s(null,"timeout",k,c)},c.timeout)),k.send(c.data?c.data:null),k)},a.get=function(b,c){return a.ajax({url:b,success:c})},a.post=function(b,c,d,e){return a.isFunction(c)&&(e=e||d,d=c,c=null),a.ajax({type:"POST",url:b,data:c,success:d,dataType:e})},a.getJSON=function(b,c){return a.ajax({url:b,success:c,dataType:"json"})},a.fn.load=function(b,c){if(!this.length)return this;var h,e=this,f=b.split(/\s/);return f.length>1&&(b=f[0],h=f[1]),a.get(b,function(b){e.html(h?a(d.createElement("div")).html(b.replace(g,"")).find(h).html():b),c&&c.call(e)}),this};var y=encodeURIComponent;a.param=function(a,b){var c=[];return c.add=function(a,b){this.push(y(a)+"="+y(b))},z(c,a,b),c.join("&").replace("%20","+")}}(Zepto),function(a){a.fn.serializeArray=function(){var c,b=[];return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=d&&"reset"!=d&&"button"!=d&&("radio"!=d&&"checkbox"!=d||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function h(){g=null,b.last&&(b.el.trigger("longTap"),b={})}function i(){g&&clearTimeout(g),g=null}var c,g,b={},f=750;a(document).ready(function(){var j,k;a(document.body).bind("touchstart",function(e){j=Date.now(),k=j-(b.last||j),b.el=a(d(e.touches[0].target)),c&&clearTimeout(c),b.x1=e.touches[0].pageX,b.y1=e.touches[0].pageY,k>0&&250>=k&&(b.isDoubleTap=!0),b.last=j,g=setTimeout(h,f)}).bind("touchmove",function(a){i(),b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind("touchend",function(){i(),b.isDoubleTap?(b.el.trigger("doubleTap"),b={}):b.x2&&Math.abs(b.x1-b.x2)>30||b.y2&&Math.abs(b.y1-b.y2)>30?(b.el.trigger("swipe")&&b.el.trigger("swipe"+e(b.x1,b.x2,b.y1,b.y2)),b={}):"last"in b&&(b.el.trigger("tap"),c=setTimeout(function(){c=null,b.el.trigger("singleTap"),b={}},250))}).bind("touchcancel",function(){c&&clearTimeout(c),g&&clearTimeout(g),g=c=null,b={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto);
