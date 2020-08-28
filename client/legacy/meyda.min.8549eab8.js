import{C as t,B as r}from"./client.a2243a69.js";var e=t((function(t,e){var n;window,n=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===r(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(r){return t[r]}.bind(null,i));return o},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s="./src/index.js")}({"./node_modules/assert/assert.js":
/*!***************************************!*\
          !*** ./node_modules/assert/assert.js ***!
          \***************************************/
/*! no static exports found */
function(t,e,n){(function(e){var o=n(
/*! object-assign */
"./node_modules/object-assign/index.js");
/*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */function i(t,r){if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0}function u(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var a=n(
/*! util/ */
"./node_modules/node-libs-browser/node_modules/util/util.js"),c=Object.prototype.hasOwnProperty,s=Array.prototype.slice,f="foo"===function(){}.name;function l(t){return Object.prototype.toString.call(t)}function p(t){return!u(t)&&"function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer)))}var m=t.exports=S,y=/\s*function\s+([^\(\s]*)\s*/;function h(t){if(a.isFunction(t)){if(f)return t.name;var r=t.toString().match(y);return r&&r[1]}}function d(t,r){return"string"==typeof t?t.length<r?t:t.slice(0,r):t}function b(t){if(f||!a.isFunction(t))return a.inspect(t);var r=h(t);return"[Function"+(r?": "+r:"")+"]"}function g(t,r,e,n,o){throw new m.AssertionError({message:e,actual:t,expected:r,operator:n,stackStartFunction:o})}function S(t,r){t||g(t,!0,r,"==",m.ok)}function v(t,e,n,o){if(t===e)return!0;if(u(t)&&u(e))return 0===i(t,e);if(a.isDate(t)&&a.isDate(e))return t.getTime()===e.getTime();if(a.isRegExp(t)&&a.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"===r(t)||null!==e&&"object"===r(e)){if(p(t)&&p(e)&&l(t)===l(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===i(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(u(t)!==u(e))return!1;var c=(o=o||{actual:[],expected:[]}).actual.indexOf(t);return-1!==c&&c===o.expected.indexOf(e)||(o.actual.push(t),o.expected.push(e),function(t,r,e,n){if(null==t||null==r)return!1;if(a.isPrimitive(t)||a.isPrimitive(r))return t===r;if(e&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(r))return!1;var o=w(t),i=w(r);if(o&&!i||!o&&i)return!1;if(o)return t=s.call(t),r=s.call(r),v(t,r,e);var u,c,f=_(t),l=_(r);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),c=f.length-1;c>=0;c--)if(f[c]!==l[c])return!1;for(c=f.length-1;c>=0;c--)if(u=f[c],!v(t[u],r[u],e,n))return!1;return!0}(t,e,n,o))}return n?t===e:t==e}function w(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function j(t,r){if(!t||!r)return!1;if("[object RegExp]"==Object.prototype.toString.call(r))return r.test(t);try{if(t instanceof r)return!0}catch(t){}return!Error.isPrototypeOf(r)&&!0===r.call({},t)}function x(t,r,e,n){var o;if("function"!=typeof r)throw new TypeError('"block" argument must be a function');"string"==typeof e&&(n=e,e=null),o=function(t){var r;try{t()}catch(t){r=t}return r}(r),n=(e&&e.name?" ("+e.name+").":".")+(n?" "+n:"."),t&&!o&&g(o,e,"Missing expected exception"+n);var i="string"==typeof n,u=!t&&o&&!e;if((!t&&a.isError(o)&&i&&j(o,e)||u)&&g(o,e,"Got unwanted exception"+n),t&&o&&e&&!j(o,e)||!t&&o)throw o}m.AssertionError=function(t){var r;this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=d(b((r=this).actual),128)+" "+r.operator+" "+d(b(r.expected),128),this.generatedMessage=!0);var e=t.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var o=n.stack,i=h(e),u=o.indexOf("\n"+i);if(u>=0){var a=o.indexOf("\n",u+1);o=o.substring(a+1)}this.stack=o}}},a.inherits(m.AssertionError,Error),m.fail=g,m.ok=S,m.equal=function(t,r,e){t!=r&&g(t,r,e,"==",m.equal)},m.notEqual=function(t,r,e){t==r&&g(t,r,e,"!=",m.notEqual)},m.deepEqual=function(t,r,e){v(t,r,!1)||g(t,r,e,"deepEqual",m.deepEqual)},m.deepStrictEqual=function(t,r,e){v(t,r,!0)||g(t,r,e,"deepStrictEqual",m.deepStrictEqual)},m.notDeepEqual=function(t,r,e){v(t,r,!1)&&g(t,r,e,"notDeepEqual",m.notDeepEqual)},m.notDeepStrictEqual=function t(r,e,n){v(r,e,!0)&&g(r,e,n,"notDeepStrictEqual",t)},m.strictEqual=function(t,r,e){t!==r&&g(t,r,e,"===",m.strictEqual)},m.notStrictEqual=function(t,r,e){t===r&&g(t,r,e,"!==",m.notStrictEqual)},m.throws=function(t,r,e){x(!0,t,r,e)},m.doesNotThrow=function(t,r,e){x(!1,t,r,e)},m.ifError=function(t){if(t)throw t},m.strict=o((function t(r,e){r||g(r,!0,e,"==",t)}),m,{equal:m.strictEqual,deepEqual:m.deepStrictEqual,notEqual:m.notStrictEqual,notDeepEqual:m.notDeepStrictEqual}),m.strict.strict=m.strict;var _=Object.keys||function(t){var r=[];for(var e in t)c.call(t,e)&&r.push(e);return r}}).call(this,n(
/*! ./../webpack/buildin/global.js */
"./node_modules/webpack/buildin/global.js"))},"./node_modules/dct/index.js":
/*!***********************************!*\
          !*** ./node_modules/dct/index.js ***!
          \***********************************/
/*! no static exports found */
function(t,r,e){t.exports=e(
/*! ./src/dct.js */
"./node_modules/dct/src/dct.js")},"./node_modules/dct/src/dct.js":
/*!*************************************!*\
          !*** ./node_modules/dct/src/dct.js ***!
          \*************************************/
/*! no static exports found */
function(t,r){var e=null;t.exports=function(t,r){var n=t.length;return r=r||2,e&&e[n]||function(t){(e=e||{})[t]=new Array(t*t);for(var r=Math.PI/t,n=0;n<t;n++)for(var o=0;o<t;o++)e[t][o+n*t]=Math.cos(r*(o+.5)*n)}(n),t.map((function(){return 0})).map((function(o,i){return r*t.reduce((function(t,r,o,u){return t+r*e[n][o+i*n]}),0)}))}},"./node_modules/fftjs/dist/fft.js":
/*!****************************************!*\
          !*** ./node_modules/fftjs/dist/fft.js ***!
          \****************************************/
/*! no static exports found */
function(t,r,e){var n=e(
/*! ./utils */
"./node_modules/fftjs/dist/utils.js"),o=function(t){var r={};void 0===t.real||void 0===t.imag?r=n.constructComplexArray(t):(r.real=t.real.slice(),r.imag=t.imag.slice());var e=r.real.length,o=Math.log2(e);if(Math.round(o)!=o)throw new Error("Input size must be a power of 2.");if(r.real.length!=r.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var i=n.bitReverseArray(e),u={real:[],imag:[]},a=0;a<e;a++)u.real[i[a]]=r.real[a],u.imag[i[a]]=r.imag[a];for(var c=0;c<e;c++)r.real[c]=u.real[c],r.imag[c]=u.imag[c];for(var s=1;s<=o;s++)for(var f=Math.pow(2,s),l=0;l<f/2;l++)for(var p=n.euler(l,f),m=0;m<e/f;m++){var y=f*m+l,h=f*m+l+f/2,d={real:r.real[y],imag:r.imag[y]},b={real:r.real[h],imag:r.imag[h]},g=n.multiply(p,b),S=n.subtract(d,g);r.real[h]=S.real,r.imag[h]=S.imag;var v=n.add(g,d);r.real[y]=v.real,r.imag[y]=v.imag}return r};t.exports={fft:o,ifft:function(t){if(void 0===t.real||void 0===t.imag)throw new Error("IFFT only accepts a complex input.");for(var r=t.real.length,e={real:[],imag:[]},i=0;i<r;i++){var u={real:t.real[i],imag:t.imag[i]},a=n.conj(u);e.real[i]=a.real,e.imag[i]=a.imag}var c=o(e);return e.real=c.real.map((function(t){return t/r})),e.imag=c.imag.map((function(t){return t/r})),e}}},"./node_modules/fftjs/dist/utils.js":
/*!******************************************!*\
          !*** ./node_modules/fftjs/dist/utils.js ***!
          \******************************************/
/*! no static exports found */
function(t,r,e){function n(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}var o={},i={};t.exports={bitReverseArray:function(t){if(void 0===o[t]){for(var r=(t-1).toString(2).length,e="0".repeat(r),i={},u=0;u<t;u++){var a=u.toString(2);a=e.substr(a.length)+a,a=[].concat(n(a)).reverse().join(""),i[u]=parseInt(a,2)}o[t]=i}return o[t]},multiply:function(t,r){return{real:t.real*r.real-t.imag*r.imag,imag:t.real*r.imag+t.imag*r.real}},add:function(t,r){return{real:t.real+r.real,imag:t.imag+r.imag}},subtract:function(t,r){return{real:t.real-r.real,imag:t.imag-r.imag}},euler:function(t,r){var e=-2*Math.PI*t/r;return{real:Math.cos(e),imag:Math.sin(e)}},conj:function(t){return t.imag*=-1,t},constructComplexArray:function(t){var r={};r.real=void 0===t.real?t.slice():t.real.slice();var e=r.real.length;return void 0===i[e]&&(i[e]=Array.apply(null,Array(e)).map(Number.prototype.valueOf,0)),r.imag=i[e].slice(),r}}},"./node_modules/node-libs-browser/node_modules/util/node_modules/inherits/inherits_browser.js":
/*!****************************************************************************************************!*\
          !*** ./node_modules/node-libs-browser/node_modules/util/node_modules/inherits/inherits_browser.js ***!
          \****************************************************************************************************/
/*! no static exports found */
function(t,r){"function"==typeof Object.create?t.exports=function(t,r){t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,r){t.super_=r;var e=function(){};e.prototype=r.prototype,t.prototype=new e,t.prototype.constructor=t}},"./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js":
/*!*************************************************************************************!*\
          !*** ./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js ***!
          \*************************************************************************************/
/*! no static exports found */
function(t,e){t.exports=function(t){return t&&"object"===r(t)&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},"./node_modules/node-libs-browser/node_modules/util/util.js":
/*!******************************************************************!*\
          !*** ./node_modules/node-libs-browser/node_modules/util/util.js ***!
          \******************************************************************/
/*! no static exports found */
function(t,e,n){(function(t){var o=Object.getOwnPropertyDescriptors||function(t){for(var r=Object.keys(t),e={},n=0;n<r.length;n++)e[r[n]]=Object.getOwnPropertyDescriptor(t,r[n]);return e},i=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var r=[],e=0;e<arguments.length;e++)r.push(c(arguments[e]));return r.join(" ")}e=1;for(var n=arguments,o=n.length,u=String(t).replace(i,(function(t){if("%%"===t)return"%";if(e>=o)return t;switch(t){case"%s":return String(n[e++]);case"%d":return Number(n[e++]);case"%j":try{return JSON.stringify(n[e++])}catch(t){return"[Circular]"}default:return t}})),a=n[e];e<o;a=n[++e])d(a)||!w(a)?u+=" "+a:u+=" "+c(a);return u},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}};var u,a={};function c(t,r){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),h(r)?n.showHidden=r:r&&e._extend(n,r),S(n.showHidden)&&(n.showHidden=!1),S(n.depth)&&(n.depth=2),S(n.colors)&&(n.colors=!1),S(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=s),l(n,t,n.depth)}function s(t,r){var e=c.styles[r];return e?"["+c.colors[e][0]+"m"+t+"["+c.colors[e][1]+"m":t}function f(t,r){return t}function l(t,r,n){if(t.customInspect&&r&&_(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,t);return g(o)||(o=l(t,o,n)),o}var i=function(t,r){if(S(r))return t.stylize("undefined","undefined");if(g(r)){var e="'"+JSON.stringify(r).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(e,"string")}return b(r)?t.stylize(""+r,"number"):h(r)?t.stylize(""+r,"boolean"):d(r)?t.stylize("null","null"):void 0}(t,r);if(i)return i;var u=Object.keys(r),a=function(t){var r={};return t.forEach((function(t,e){r[t]=!0})),r}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(r)),x(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return p(r);if(0===u.length){if(_(r)){var c=r.name?": "+r.name:"";return t.stylize("[Function"+c+"]","special")}if(v(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(j(r))return t.stylize(Date.prototype.toString.call(r),"date");if(x(r))return p(r)}var s,f="",w=!1,E=["{","}"];return y(r)&&(w=!0,E=["[","]"]),_(r)&&(f=" [Function"+(r.name?": "+r.name:"")+"]"),v(r)&&(f=" "+RegExp.prototype.toString.call(r)),j(r)&&(f=" "+Date.prototype.toUTCString.call(r)),x(r)&&(f=" "+p(r)),0!==u.length||w&&0!=r.length?n<0?v(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),s=w?function(t,r,e,n,o){for(var i=[],u=0,a=r.length;u<a;++u)A(r,String(u))?i.push(m(t,r,e,n,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(m(t,r,e,n,o,!0))})),i}(t,r,n,a,u):u.map((function(e){return m(t,r,n,a,e,w)})),t.seen.pop(),function(t,r,e){return t.reduce((function(t,r){return r.indexOf("\n"),t+r.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?e[0]+(""===r?"":r+"\n ")+" "+t.join(",\n  ")+" "+e[1]:e[0]+r+" "+t.join(", ")+" "+e[1]}(s,f,E)):E[0]+f+E[1]}function p(t){return"["+Error.prototype.toString.call(t)+"]"}function m(t,r,e,n,o,i){var u,a,c;if((c=Object.getOwnPropertyDescriptor(r,o)||{value:r[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),A(n,o)||(u="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=d(e)?l(t,c.value,null):l(t,c.value,e-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),S(u)){if(i&&o.match(/^\d+$/))return a;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+a}function y(t){return Array.isArray(t)}function h(t){return"boolean"==typeof t}function d(t){return null===t}function b(t){return"number"==typeof t}function g(t){return"string"==typeof t}function S(t){return void 0===t}function v(t){return w(t)&&"[object RegExp]"===E(t)}function w(t){return"object"===r(t)&&null!==t}function j(t){return w(t)&&"[object Date]"===E(t)}function x(t){return w(t)&&("[object Error]"===E(t)||t instanceof Error)}function _(t){return"function"==typeof t}function E(t){return Object.prototype.toString.call(t)}function O(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(S(u)&&(u=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!a[r])if(new RegExp("\\b"+r+"\\b","i").test(u)){var n=t.pid;a[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else a[r]=function(){};return a[r]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=h,e.isNull=d,e.isNullOrUndefined=function(t){return null==t},e.isNumber=b,e.isString=g,e.isSymbol=function(t){return"symbol"===r(t)},e.isUndefined=S,e.isRegExp=v,e.isObject=w,e.isDate=j,e.isError=x,e.isFunction=_,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"===r(t)||void 0===t},e.isBuffer=n(
/*! ./support/isBuffer */
"./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js");var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(){var t=new Date,r=[O(t.getHours()),O(t.getMinutes()),O(t.getSeconds())].join(":");return[t.getDate(),M[t.getMonth()],r].join(" ")}function A(t,r){return Object.prototype.hasOwnProperty.call(t,r)}e.log=function(){console.log("%s - %s",T(),e.format.apply(e,arguments))},e.inherits=n(
/*! inherits */
"./node_modules/node-libs-browser/node_modules/util/node_modules/inherits/inherits_browser.js"),e._extend=function(t,r){if(!r||!w(r))return t;for(var e=Object.keys(r),n=e.length;n--;)t[e[n]]=r[e[n]];return t};var F="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function k(t,r){if(!t){var e=new Error("Promise was rejected with a falsy value");e.reason=t,t=e}return r(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(F&&t[F]){var r;if("function"!=typeof(r=t[F]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(r,F,{value:r,enumerable:!1,writable:!1,configurable:!0}),r}function r(){for(var r,e,n=new Promise((function(t,n){r=t,e=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,n){t?e(t):r(n)}));try{t.apply(this,o)}catch(t){e(t)}return n}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),F&&Object.defineProperty(r,F,{value:r,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(r,o(t))},e.promisify.custom=F,e.callbackify=function(r){if("function"!=typeof r)throw new TypeError('The "original" argument must be of type Function');function e(){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n]);var o=e.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};r.apply(this,e).then((function(r){t.nextTick(u,null,r)}),(function(r){t.nextTick(k,r,u)}))}return Object.setPrototypeOf(e,Object.getPrototypeOf(r)),Object.defineProperties(e,o(r)),e}}).call(this,n(
/*! ./../../../process/browser.js */
"./node_modules/process/browser.js"))},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
          !*** ./node_modules/object-assign/index.js ***!
          \*********************************************/
/*! no static exports found */
function(t,r,e){
/*
          object-assign
          (c) Sindre Sorhus
          @license MIT
          */
var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(t){return r[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,r){for(var e,a,c=u(t),s=1;s<arguments.length;s++){for(var f in e=Object(arguments[s]))o.call(e,f)&&(c[f]=e[f]);if(n){a=n(e);for(var l=0;l<a.length;l++)i.call(e,a[l])&&(c[a[l]]=e[a[l]])}}return c}},"./node_modules/process/browser.js":
/*!*****************************************!*\
          !*** ./node_modules/process/browser.js ***!
          \*****************************************/
/*! no static exports found */
function(t,r){var e,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&m())}function m(){if(!f){var t=a(p);f=!0;for(var r=s.length;r;){for(c=s,s=[];++l<r;)c&&c[l].run();l=-1,r=s.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(r){return n.call(this,t)}}}(t)}}function y(t,r){this.fun=t,this.array=r}function h(){}o.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];s.push(new y(t,r)),1!==s.length||f||a(m)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
          !*** (webpack)/buildin/global.js ***!
          \***********************************/
/*! no static exports found */
function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},"./src/extractors/chroma.js":
/*!**********************************!*\
          !*** ./src/extractors/chroma.js ***!
          \**********************************/
/*! exports provided: default */
function(t,r,e){function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(t){if("object"!==i(t.ampSpectrum))throw new TypeError("Valid ampSpectrum is required to generate chroma");if("object"!==i(t.chromaFilterBank))throw new TypeError("Valid chromaFilterBank is required to generate chroma");var r=t.chromaFilterBank.map((function(r,e){return t.ampSpectrum.reduce((function(t,e,n){return t+e*r[n]}),0)})),e=Math.max.apply(Math,n(r));return e?r.map((function(t){return t/e})):r}},"./src/extractors/energy.js":
/*!**********************************!*\
          !*** ./src/extractors/energy.js ***!
          \**********************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),e(
/*! assert */
"./node_modules/assert/assert.js"),r.default=function(){if("object"!==n(arguments[0].signal))throw new TypeError;for(var t=0,r=0;r<arguments[0].signal.length;r++)t+=Math.pow(Math.abs(arguments[0].signal[r]),2);return t}},"./src/extractors/extractorUtilities.js":
/*!**********************************************!*\
          !*** ./src/extractors/extractorUtilities.js ***!
          \**********************************************/
/*! exports provided: mu */
function(t,r,e){function n(t,r){for(var e=0,n=0,o=0;o<r.length;o++)e+=Math.pow(o,t)*Math.abs(r[o]),n+=r[o];return e/n}e.r(r),e.d(r,"mu",(function(){return n}))},"./src/extractors/loudness.js":
/*!************************************!*\
          !*** ./src/extractors/loudness.js ***!
          \************************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(t){if("object"!==n(t.ampSpectrum)||"object"!==n(t.barkScale))throw new TypeError;var r=new Float32Array(24),e=0,o=t.ampSpectrum,i=new Int32Array(25);i[0]=0;for(var u=t.barkScale[o.length-1]/24,a=1,c=0;c<o.length;c++)for(;t.barkScale[c]>u;)i[a++]=c,u=a*t.barkScale[o.length-1]/24;i[24]=o.length-1;for(var s=0;s<24;s++){for(var f=0,l=i[s];l<i[s+1];l++)f+=o[l];r[s]=Math.pow(f,.23)}for(var p=0;p<r.length;p++)e+=r[p];return{specific:r,total:e}}},"./src/extractors/mfcc.js":
/*!********************************!*\
          !*** ./src/extractors/mfcc.js ***!
          \********************************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./powerSpectrum */
"./src/extractors/powerSpectrum.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e(
/*! ./../utilities */
"./src/utilities.js");var i=e(
/*! dct */
"./node_modules/dct/index.js");r.default=function(t){if("object"!==o(t.ampSpectrum))throw new TypeError("Valid ampSpectrum is required to generate MFCC");if("object"!==o(t.melFilterBank))throw new TypeError("Valid melFilterBank is required to generate MFCC");var r=Math.min(40,Math.max(1,t.numberOfMFCCCoefficients||13)),e=Object(n.default)(t),u=t.melFilterBank.length,a=Array(u);if(u<r)throw new Error("Insufficient filter bank for requested number of coefficients");for(var c=new Float32Array(u),s=0;s<c.length;s++){a[s]=new Float32Array(t.bufferSize/2),c[s]=0;for(var f=0;f<t.bufferSize/2;f++)a[s][f]=t.melFilterBank[s][f]*e[f],c[s]+=a[s][f];c[s]=Math.log(c[s]+1)}var l=Array.prototype.slice.call(c);return i(l).slice(0,r)}},"./src/extractors/perceptualSharpness.js":
/*!***********************************************!*\
          !*** ./src/extractors/perceptualSharpness.js ***!
          \***********************************************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./loudness */
"./src/extractors/loudness.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default=function(){if("object"!==o(arguments[0].signal))throw new TypeError;for(var t=Object(n.default)(arguments[0]),r=t.specific,e=0,i=0;i<r.length;i++)e+=i<15?(i+1)*r[i+1]:.066*Math.exp(.171*(i+1));return e*=.11/t.total}},"./src/extractors/perceptualSpread.js":
/*!********************************************!*\
          !*** ./src/extractors/perceptualSpread.js ***!
          \********************************************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./loudness */
"./src/extractors/loudness.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default=function(){if("object"!==o(arguments[0].signal))throw new TypeError;for(var t=Object(n.default)(arguments[0]),r=0,e=0;e<t.specific.length;e++)t.specific[e]>r&&(r=t.specific[e]);var i=Math.pow((t.total-r)/t.total,2);return i}},"./src/extractors/powerSpectrum.js":
/*!*****************************************!*\
          !*** ./src/extractors/powerSpectrum.js ***!
          \*****************************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(){if("object"!==n(arguments[0].ampSpectrum))throw new TypeError;for(var t=new Float32Array(arguments[0].ampSpectrum.length),r=0;r<t.length;r++)t[r]=Math.pow(arguments[0].ampSpectrum[r],2);return t}},"./src/extractors/rms.js":
/*!*******************************!*\
          !*** ./src/extractors/rms.js ***!
          \*******************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(t){if("object"!==n(t.signal))throw new TypeError;for(var r=0,e=0;e<t.signal.length;e++)r+=Math.pow(t.signal[e],2);return r/=t.signal.length,r=Math.sqrt(r)}},"./src/extractors/spectralCentroid.js":
/*!********************************************!*\
          !*** ./src/extractors/spectralCentroid.js ***!
          \********************************************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./extractorUtilities */
"./src/extractors/extractorUtilities.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default=function(){if("object"!==o(arguments[0].ampSpectrum))throw new TypeError;return Object(n.mu)(1,arguments[0].ampSpectrum)}},"./src/extractors/spectralFlatness.js":
/*!********************************************!*\
          !*** ./src/extractors/spectralFlatness.js ***!
          \********************************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(){if("object"!==n(arguments[0].ampSpectrum))throw new TypeError;for(var t=0,r=0,e=0;e<arguments[0].ampSpectrum.length;e++)t+=Math.log(arguments[0].ampSpectrum[e]),r+=arguments[0].ampSpectrum[e];return Math.exp(t/arguments[0].ampSpectrum.length)*arguments[0].ampSpectrum.length/r}},"./src/extractors/spectralFlux.js":
/*!****************************************!*\
          !*** ./src/extractors/spectralFlux.js ***!
          \****************************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(t){if("object"!==n(t.signal)||"object"!=n(t.previousSignal))throw new TypeError;for(var r=0,e=-t.bufferSize/2;e<signal.length/2-1;e++)x=Math.abs(t.signal[e])-Math.abs(t.previousSignal[e]),r+=(x+Math.abs(x))/2;return r}},"./src/extractors/spectralKurtosis.js":
/*!********************************************!*\
          !*** ./src/extractors/spectralKurtosis.js ***!
          \********************************************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./extractorUtilities */
"./src/extractors/extractorUtilities.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default=function(){if("object"!==o(arguments[0].ampSpectrum))throw new TypeError;var t=arguments[0].ampSpectrum,r=Object(n.mu)(1,t),e=Object(n.mu)(2,t),i=Object(n.mu)(3,t),u=Object(n.mu)(4,t),a=-3*Math.pow(r,4)+6*r*e-4*r*i+u,c=Math.pow(Math.sqrt(e-Math.pow(r,2)),4);return a/c}},"./src/extractors/spectralRolloff.js":
/*!*******************************************!*\
          !*** ./src/extractors/spectralRolloff.js ***!
          \*******************************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(){if("object"!==n(arguments[0].ampSpectrum))throw new TypeError;for(var t=arguments[0].ampSpectrum,r=arguments[0].sampleRate/(2*(t.length-1)),e=0,o=0;o<t.length;o++)e+=t[o];for(var i=.99*e,u=t.length-1;e>i&&u>=0;)e-=t[u],--u;return(u+1)*r}},"./src/extractors/spectralSkewness.js":
/*!********************************************!*\
          !*** ./src/extractors/spectralSkewness.js ***!
          \********************************************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./extractorUtilities */
"./src/extractors/extractorUtilities.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default=function(t){if("object"!==o(t.ampSpectrum))throw new TypeError;var r=Object(n.mu)(1,t.ampSpectrum),e=Object(n.mu)(2,t.ampSpectrum),i=Object(n.mu)(3,t.ampSpectrum);return(2*Math.pow(r,3)-3*r*e+i)/Math.pow(Math.sqrt(e-Math.pow(r,2)),3)}},"./src/extractors/spectralSlope.js":
/*!*****************************************!*\
          !*** ./src/extractors/spectralSlope.js ***!
          \*****************************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(t){if("object"!==n(t.ampSpectrum))throw new TypeError;for(var r=0,e=0,o=new Float32Array(t.ampSpectrum.length),i=0,u=0,a=0;a<t.ampSpectrum.length;a++){r+=t.ampSpectrum[a];var c=a*t.sampleRate/t.bufferSize;o[a]=c,i+=c*c,e+=c,u+=c*t.ampSpectrum[a]}return(t.ampSpectrum.length*u-e*r)/(r*(i-Math.pow(e,2)))}},"./src/extractors/spectralSpread.js":
/*!******************************************!*\
          !*** ./src/extractors/spectralSpread.js ***!
          \******************************************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./extractorUtilities */
"./src/extractors/extractorUtilities.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default=function(t){if("object"!==o(t.ampSpectrum))throw new TypeError;return Math.sqrt(Object(n.mu)(2,t.ampSpectrum)-Math.pow(Object(n.mu)(1,t.ampSpectrum),2))}},"./src/extractors/zcr.js":
/*!*******************************!*\
          !*** ./src/extractors/zcr.js ***!
          \*******************************/
/*! exports provided: default */
function(t,r,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r),r.default=function(){if("object"!==n(arguments[0].signal))throw new TypeError;for(var t=0,r=1;r<arguments[0].signal.length;r++)(arguments[0].signal[r-1]>=0&&arguments[0].signal[r]<0||arguments[0].signal[r-1]<0&&arguments[0].signal[r]>=0)&&t++;return t}},"./src/featureExtractors.js":
/*!**********************************!*\
          !*** ./src/featureExtractors.js ***!
          \**********************************/
/*! exports provided: buffer, rms, energy, complexSpectrum, spectralSlope, spectralCentroid, spectralRolloff, spectralFlatness, spectralSpread, spectralSkewness, spectralKurtosis, amplitudeSpectrum, zcr, loudness, perceptualSpread, perceptualSharpness, powerSpectrum, mfcc, chroma, spectralFlux */
function(t,r,e){e.r(r),e.d(r,"buffer",(function(){return v})),e.d(r,"complexSpectrum",(function(){return w})),e.d(r,"amplitudeSpectrum",(function(){return j}));var n=e(
/*! ./extractors/rms */
"./src/extractors/rms.js");e.d(r,"rms",(function(){return n.default}));var o=e(
/*! ./extractors/energy */
"./src/extractors/energy.js");e.d(r,"energy",(function(){return o.default}));var i=e(
/*! ./extractors/spectralSlope */
"./src/extractors/spectralSlope.js");e.d(r,"spectralSlope",(function(){return i.default}));var u=e(
/*! ./extractors/spectralCentroid */
"./src/extractors/spectralCentroid.js");e.d(r,"spectralCentroid",(function(){return u.default}));var a=e(
/*! ./extractors/spectralRolloff */
"./src/extractors/spectralRolloff.js");e.d(r,"spectralRolloff",(function(){return a.default}));var c=e(
/*! ./extractors/spectralFlatness */
"./src/extractors/spectralFlatness.js");e.d(r,"spectralFlatness",(function(){return c.default}));var s=e(
/*! ./extractors/spectralSpread */
"./src/extractors/spectralSpread.js");e.d(r,"spectralSpread",(function(){return s.default}));var f=e(
/*! ./extractors/spectralSkewness */
"./src/extractors/spectralSkewness.js");e.d(r,"spectralSkewness",(function(){return f.default}));var l=e(
/*! ./extractors/spectralKurtosis */
"./src/extractors/spectralKurtosis.js");e.d(r,"spectralKurtosis",(function(){return l.default}));var p=e(
/*! ./extractors/zcr */
"./src/extractors/zcr.js");e.d(r,"zcr",(function(){return p.default}));var m=e(
/*! ./extractors/loudness */
"./src/extractors/loudness.js");e.d(r,"loudness",(function(){return m.default}));var y=e(
/*! ./extractors/perceptualSpread */
"./src/extractors/perceptualSpread.js");e.d(r,"perceptualSpread",(function(){return y.default}));var h=e(
/*! ./extractors/perceptualSharpness */
"./src/extractors/perceptualSharpness.js");e.d(r,"perceptualSharpness",(function(){return h.default}));var d=e(
/*! ./extractors/mfcc */
"./src/extractors/mfcc.js");e.d(r,"mfcc",(function(){return d.default}));var b=e(
/*! ./extractors/chroma */
"./src/extractors/chroma.js");e.d(r,"chroma",(function(){return b.default}));var g=e(
/*! ./extractors/powerSpectrum */
"./src/extractors/powerSpectrum.js");e.d(r,"powerSpectrum",(function(){return g.default}));var S=e(
/*! ./extractors/spectralFlux */
"./src/extractors/spectralFlux.js");e.d(r,"spectralFlux",(function(){return S.default}));var v=function(t){return t.signal},w=function(t){return t.complexSpectrum},j=function(t){return t.ampSpectrum}},"./src/index.js":
/*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/
/*! no static exports found */
function(t,r,e){t.exports=e(
/*! ./main */
"./src/main.js").default},"./src/main.js":
/*!*********************!*\
          !*** ./src/main.js ***!
          \*********************/
/*! exports provided: default */
function(t,r,e){e.r(r);var n=e(
/*! ./utilities */
"./src/utilities.js"),o=e(
/*! ./featureExtractors */
"./src/featureExtractors.js"),i=e(
/*! fftjs */
"./node_modules/fftjs/dist/fft.js"),u=e(
/*! ./meyda-wa */
"./src/meyda-wa.js");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:o,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,_featuresToExtract:[],windowing:n.applyWindow,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(t){return new u.MeydaAnalyzer(t,Object.assign({},c))},extract:function(t,r,e){var o=this;if(!r)throw this._errors.invalidInput;if("object"!=a(r))throw this._errors.invalidInput;if(!t)throw this._errors.featureUndef;if(!n.isPowerOfTwo(r.length))throw this._errors.notPow2;void 0!==this.barkScale&&this.barkScale.length==this.bufferSize||(this.barkScale=n.createBarkScale(this.bufferSize,this.sampleRate,this.bufferSize)),void 0!==this.melFilterBank&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=n.createMelFilterBank(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),void 0!==this.chromaFilterBank&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=n.createChromaFilterBank(this.chromaBands,this.sampleRate,this.bufferSize)),void 0===r.buffer?this.signal=n.arrayToTyped(r):this.signal=r;var i=s(r,this.windowingFunction,this.bufferSize);if(this.signal=i.windowedSignal,this.complexSpectrum=i.complexSpectrum,this.ampSpectrum=i.ampSpectrum,e){var u=s(e,this.windowingFunction,this.bufferSize);this.previousSignal=u.windowedSignal,this.previousComplexSpectrum=u.complexSpectrum,this.previousAmpSpectrum=u.ampSpectrum}var c=function(t){return o.featureExtractors[t]({ampSpectrum:o.ampSpectrum,chromaFilterBank:o.chromaFilterBank,complexSpectrum:o.complexSpectrum,signal:o.signal,bufferSize:o.bufferSize,sampleRate:o.sampleRate,barkScale:o.barkScale,melFilterBank:o.melFilterBank,previousSignal:o.previousSignal,previousAmpSpectrum:o.previousAmpSpectrum,previousComplexSpectrum:o.previousComplexSpectrum,numberOfMFCCCoefficients:o.numberOfMFCCCoefficients})};if("object"===a(t))return t.reduce((function(t,r){return Object.assign({},t,(e={},n=r,o=c(r),n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e));var e,n,o}),{});if("string"==typeof t)return c(t);throw this._errors.invalidFeatureFmt}},s=function(t,r,e){var o={};void 0===t.buffer?o.signal=n.arrayToTyped(t):o.signal=t,o.windowedSignal=n.applyWindow(o.signal,r),o.complexSpectrum=Object(i.fft)(o.windowedSignal),o.ampSpectrum=new Float32Array(e/2);for(var u=0;u<e/2;u++)o.ampSpectrum[u]=Math.sqrt(Math.pow(o.complexSpectrum.real[u],2)+Math.pow(o.complexSpectrum.imag[u],2));return o};r.default=c,"undefined"!=typeof window&&(window.Meyda=c)},"./src/meyda-wa.js":
/*!*************************!*\
          !*** ./src/meyda-wa.js ***!
          \*************************/
/*! exports provided: MeydaAnalyzer */
function(t,r,e){e.r(r),e.d(r,"MeydaAnalyzer",(function(){return u}));var n=e(
/*! ./utilities */
"./src/utilities.js"),o=e(
/*! ./featureExtractors */
"./src/featureExtractors.js");function i(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(r,e){var i=this;if(function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this._m=e,!r.audioContext)throw this._m.errors.noAC;if(r.bufferSize&&!n.isPowerOfTwo(r.bufferSize))throw this._m._errors.notPow2;if(!r.source)throw this._m._errors.noSource;this._m.audioContext=r.audioContext,this._m.bufferSize=r.bufferSize||this._m.bufferSize||256,this._m.hopSize=r.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=r.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=r.callback,this._m.windowingFunction=r.windowingFunction||"hanning",this._m.featureExtractors=o,this._m.EXTRACTION_STARTED=r.startImmediately||!1,this._m.channel="number"==typeof r.channel?r.channel:0,this._m.inputs=r.inputs||1,this._m.outputs=r.outputs||1,this._m.numberOfMFCCCoefficients=r.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=r.featureExtractors||[],this._m.barkScale=n.createBarkScale(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=n.createMelFilterBank(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(r.source),this._m.spn.onaudioprocess=function(t){if(null!==i._m.inputData&&(i._m.previousInputData=i._m.inputData),i._m.inputData=t.inputBuffer.getChannelData(i._m.channel),i._m.previousInputData)(r=new Float32Array(i._m.previousInputData.length+i._m.inputData.length-i._m.hopSize)).set(i._m.previousInputData.slice(i._m.hopSize)),r.set(i._m.inputData,i._m.previousInputData.length-i._m.hopSize);else var r=i._m.inputData;n.frame(r,i._m.bufferSize,i._m.hopSize).forEach((function(t){i._m.frame=t;var r=i._m.extract(i._m._featuresToExtract,i._m.frame,i._m.previousFrame);"function"==typeof i._m.callback&&i._m.EXTRACTION_STARTED&&i._m.callback(r),i._m.previousFrame=i._m.frame}))}}var r,e,u;return r=t,(e=[{key:"start",value:function(t){this._m._featuresToExtract=t||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0}},{key:"stop",value:function(){this._m.EXTRACTION_STARTED=!1}},{key:"setSource",value:function(t){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=t,this._m.source.connect(this._m.spn)}},{key:"setChannel",value:function(t){t<=this._m.inputs?this._m.channel=t:console.error("Channel ".concat(t," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(t," when instantiating the MeydaAnalyzer"))}},{key:"get",value:function(t){return this._m.inputData?this._m.extract(t||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null}}])&&i(r.prototype,e),u&&i(r,u),t}()},"./src/utilities.js":
/*!**************************!*\
          !*** ./src/utilities.js ***!
          \**************************/
/*! exports provided: isPowerOfTwo, error, pointwiseBufferMult, applyWindow, createBarkScale, typedToArray, arrayToTyped, _normalize, normalize, normalizeToOne, mean, melToFreq, freqToMel, createMelFilterBank, hzToOctaves, normalizeByColumn, createChromaFilterBank, frame */
function(t,r,e){e.r(r),e.d(r,"isPowerOfTwo",(function(){return a})),e.d(r,"error",(function(){return c})),e.d(r,"pointwiseBufferMult",(function(){return s})),e.d(r,"applyWindow",(function(){return f})),e.d(r,"createBarkScale",(function(){return l})),e.d(r,"typedToArray",(function(){return p})),e.d(r,"arrayToTyped",(function(){return m})),e.d(r,"_normalize",(function(){return y})),e.d(r,"normalize",(function(){return h})),e.d(r,"normalizeToOne",(function(){return d})),e.d(r,"mean",(function(){return b})),e.d(r,"melToFreq",(function(){return v})),e.d(r,"freqToMel",(function(){return w})),e.d(r,"createMelFilterBank",(function(){return j})),e.d(r,"hzToOctaves",(function(){return x})),e.d(r,"normalizeByColumn",(function(){return _})),e.d(r,"createChromaFilterBank",(function(){return E})),e.d(r,"frame",(function(){return O}));var n=e(
/*! ./windowing */
"./src/windowing.js");function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var u={};function a(t){for(;t%2==0&&t>1;)t/=2;return 1===t}function c(t){throw new Error("Meyda: "+t)}function s(t,r){for(var e=[],n=0;n<Math.min(t.length,r.length);n++)e[n]=t[n]*r[n];return e}function f(t,r){if("rect"!==r){if(""!==r&&r||(r="hanning"),u[r]||(u[r]={}),!u[r][t.length])try{u[r][t.length]=n[r](t.length)}catch(t){throw new Error("Invalid windowing function")}t=s(t,u[r][t.length])}return t}function l(t,r,e){for(var n=new Float32Array(t),o=0;o<n.length;o++)n[o]=o*r/e,n[o]=13*Math.atan(n[o]/1315.8)+3.5*Math.atan(Math.pow(n[o]/7518,2));return n}function p(t){return Array.prototype.slice.call(t)}function m(t){return Float32Array.from(t)}function y(t,r){return t/r}function h(t,r){return t.map((function(t){return y(t,r)}))}function d(t){var r=Math.max.apply(null,t);return t.map((function(t){return t/r}))}function b(t){return t.reduce((function(t,r){return t+r}))/t.length}function g(t){return 700*(Math.exp(t/1125)-1)}function S(t){return 1125*Math.log(1+t/700)}function v(t){return g(t)}function w(t){return S(t)}function j(t,r,e){for(var n=new Float32Array(t+2),o=new Float32Array(t+2),i=r/2,u=S(0),a=(S(i)-u)/(t+1),c=Array(t+2),s=0;s<n.length;s++)n[s]=s*a,o[s]=g(n[s]),c[s]=Math.floor((e+1)*o[s]/r);for(var f=Array(t),l=0;l<f.length;l++){f[l]=Array.apply(null,new Array(e/2+1)).map(Number.prototype.valueOf,0);for(var p=c[l];p<c[l+1];p++)f[l][p]=(p-c[l])/(c[l+1]-c[l]);for(var m=c[l+1];m<c[l+2];m++)f[l][m]=(c[l+2]-m)/(c[l+2]-c[l+1])}return f}function x(t,r){return Math.log2(16*t/r)}function _(t){var r=t[0].map((function(){return 0})),e=t.reduce((function(t,r){return r.forEach((function(r,e){t[e]+=Math.pow(r,2)})),t}),r).map(Math.sqrt);return t.map((function(t,r){return t.map((function(t,r){return t/(e[r]||1)}))}))}function E(t,r,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,u=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:440,c=Math.floor(e/2)+1,s=new Array(e).fill(0).map((function(n,o){return t*x(r*o/e,a)}));s[0]=s[1]-1.5*t;var f=s.slice(1).map((function(t,r){return Math.max(t-s[r])}),1).concat([1]),l=Math.round(t/2),p=new Array(t).fill(0).map((function(r,e){return s.map((function(r){return(10*t+l+r-e)%t-l}))})),m=p.map((function(t,r){return t.map((function(t,e){return Math.exp(-.5*Math.pow(2*p[r][e]/f[e],2))}))}));if(m=_(m),i){var y=s.map((function(r){return Math.exp(-.5*Math.pow((r/t-n)/i,2))}));m=m.map((function(t){return t.map((function(t,r){return t*y[r]}))}))}return u&&(m=[].concat(o(m.slice(3)),o(m.slice(0,3)))),m.map((function(t){return t.slice(0,c)}))}function O(t,r,e){if(t.length<r)throw new Error("Buffer is too short for frame length");if(e<1)throw new Error("Hop length cannot be less that 1");if(r<1)throw new Error("Frame length cannot be less that 1");var n=1+Math.floor((t.length-r)/e);return new Array(n).fill(0).map((function(n,o){return t.slice(o*e,o*e+r)}))}},"./src/windowing.js":
/*!**************************!*\
          !*** ./src/windowing.js ***!
          \**************************/
/*! exports provided: blackman, sine, hanning, hamming */
function(t,r,e){function n(t){for(var r=new Float32Array(t),e=2*Math.PI/(t-1),n=2*e,o=0;o<t/2;o++)r[o]=.42-.5*Math.cos(o*e)+.08*Math.cos(o*n);for(var i=t/2;i>0;i--)r[t-i]=r[i-1];return r}function o(t){for(var r=Math.PI/(t-1),e=new Float32Array(t),n=0;n<t;n++)e[n]=Math.sin(r*n);return e}function i(t){for(var r=new Float32Array(t),e=0;e<t;e++)r[e]=.5-.5*Math.cos(2*Math.PI*e/(t-1));return r}function u(t){for(var r=new Float32Array(t),e=0;e<t;e++)r[e]=.54-.46*Math.cos(2*Math.PI*(e/t-1));return r}e.r(r),e.d(r,"blackman",(function(){return n})),e.d(r,"sine",(function(){return o})),e.d(r,"hanning",(function(){return i})),e.d(r,"hamming",(function(){return u}))}})},t.exports=n()})),n=Object.freeze(Object.assign(Object.create(null),e,{default:e,__moduleExports:e}));export{n as m};
