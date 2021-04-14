/*!
 * WFPlayer.js v2.0.6
 * Github: https://github.com/zhw2590582/WFPlayer#readme
 * (c) 2017-2021 Harvey Zack
 * Released under the MIT License.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).WFPlayer=t()}(this,function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=e(t(function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0})),i=e(t(function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0})),a=e(t(function(e){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0})),o=t(function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0}),s=e(o),c=t(function(r){function n(e,t){return r.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r.exports.default=r.exports,r.exports.__esModule=!0,n(e,t)}r.exports=n,r.exports.default=r.exports,r.exports.__esModule=!0});e(c);var u=e(t(function(e){e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0})),l=t(function(t){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(e){return typeof e}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t.exports.default=t.exports,t.exports.__esModule=!0,r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0});e(l);var f=e(t(function(e){var r=l.default;e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0})),d=t(function(t){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t.exports.default=t.exports,t.exports.__esModule=!0,r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0}),p=e(d),h=t(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return e.constructor?e.constructor.name:null}function c(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return u(e,t,r),l(e,t,r),function(i,a,s){var e=f(a),t=f(i);if("object"===e){if("object"!==t)throw new Error("[Type Error]: '".concat(s.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(a).forEach(function(e){var t=i[e],r=a[e],n=s.slice();n.push(e),u(t,r,n),l(t,r,n),c(t,r,n)})}if("array"===e){if("array"!==t)throw new Error("[Type Error]: '".concat(s.join("."),"' require 'array' type, but got '").concat(t,"'"));i.forEach(function(e,t){var r=i[t],n=a[t]||a[0],o=s.slice();o.push(t),u(r,n,o),l(r,n,o),c(r,n,o)})}}(e,t,r),e}function u(e,t,r){if("string"===f(t)){var n=f(e);if(!(-1<(t="?"===t[0]?t.slice(1)+"|undefined":t).indexOf("|")?t.split("|").map(function(e){return e.toLowerCase().trim()}).filter(Boolean).some(function(e){return n===e}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(r.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function l(e,t,r){if("function"===f(t)){t=t(e,f(e),r);if(!0!==t){e=f(t);throw"string"===e?new Error(t):"error"===e?t:new Error("[Validator Error]: The scheme for '".concat(r.join("."),"' validator require return true, but got '").concat(t,"'"))}}}var i,f;e.exports=(i=Object.prototype.toString,c.kindOf=f=function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t,r=n(e);if("boolean"===r)return"boolean";if("string"===r)return"string";if("number"===r)return"number";if("symbol"===r)return"symbol";if("function"===r)return"GeneratorFunction"===o(e)?"generatorfunction":"function";if(t=e,Array.isArray?Array.isArray(t):t instanceof Array)return"array";if(e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))return"buffer";if(function(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return 1}catch(e){if(-1!==e.message.indexOf("callee"))return 1}}(e))return"arguments";if(e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate)return"date";if(e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit)return"error";if(e instanceof RegExp||"string"==typeof e.flags&&"boolean"==typeof e.ignoreCase&&"boolean"==typeof e.multiline&&"boolean"==typeof e.global)return"regexp";switch(o(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if("function"==typeof e.throw&&"function"==typeof e.return&&"function"==typeof e.next)return"generator";switch(r=i.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return r.slice(8,-1).toLowerCase().replace(/\s/g,"")},c)}),y=function(){function e(){i(this,e)}return a(e,[{key:"on",value:function(e,t,r){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this}},{key:"once",value:function(n,o,i){var a=this;function s(){a.off(n,s);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o.apply(i,t)}return s._=o,this.on(n,s,i)}},{key:"emit",value:function(e){for(var t=((this.e||(this.e={}))[e]||[]).slice(),r=arguments.length,n=new Array(1<r?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0;i<t.length;i+=1)t[i].fn.apply(t[i].ctx,n);return this}},{key:"off",value:function(e,t){var r=this.e||(this.e={}),n=r[e],o=[];if(n&&t)for(var i=0,a=n.length;i<a;i+=1)n[i].fn!==t&&n[i].fn._!==t&&o.push(n[i]);return o.length?r[e]=o:delete r[e],this}}]),e}(),m=function(){function e(){i(this,e),this.destroyEvents=[],this.proxy=this.proxy.bind(this)}return a(e,[{key:"proxy",value:function(t,e,r){var n=this,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if(Array.isArray(e))return e.map(function(e){return n.proxy(t,e,r,o)});t.addEventListener(e,r,o);function i(){return t.removeEventListener(e,r,o)}return this.destroyEvents.push(i),i}},{key:"destroy",value:function(){this.destroyEvents.forEach(function(e){return e()})}}]),e}(),g=t(function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.default=e.exports,e.exports.__esModule=!0});e(g);var v=t(function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0});e(v);var w=t(function(n){function o(e,t,r){return v()?n.exports=o=Reflect.construct:n.exports=o=function(e,t,r){var n=[null];n.push.apply(n,t);n=new(Function.bind.apply(e,n));return r&&c(n,r.prototype),n},n.exports.default=n.exports,n.exports.__esModule=!0,o.apply(null,arguments)}n.exports=o,n.exports.default=n.exports,n.exports.__esModule=!0});function b(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p(r);return t=n?(e=p(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),f(this,t)}}e(w);var r=function(e){u(r,e);var t=b(r);function r(e){return i(this,r),(e=t.call(this,e)).name="WFPlayerError",e}return r}(e(t(function(t){function n(e){var r="function"==typeof Map?new Map:void 0;return t.exports=n=function(e){if(null===e||!g(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return w(e,arguments,d(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),c(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0,n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0}))(Error));function x(e,t){if(!e)throw new r(t);return e}function k(e,t,r){return Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))}function T(o,i,a){var s=Date.now();return function(){var e=Date.now();if(i<=e-s){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];o.apply(a,r),s=Date.now()}}}var R=function(){function t(e){i(this,t),this.wf=e,this.canvas=null;e=e.options.refreshRate;this.update=T(this.init,e,this),this.init()}return a(t,[{key:"init",value:function(){var e=this.wf.options,t=e.container,r=e.pixelRatio,e=t.clientWidth*r,r=t.clientHeight*r;this.canvas?(this.canvas.width!==e&&(this.canvas.width=e),this.canvas.height!==r&&(this.canvas.height=r)):(x(this.wf.constructor.instances.every(function(e){return e.options.container!==t}),"Cannot mount multiple instances on the same dom element, please destroy the previous instance first."),t.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=r,this.canvas.style.width="100%",this.canvas.style.height="100%",t.appendChild(this.canvas))}},{key:"exportImage",value:function(){var e=document.createElement("a");e.style.display="none",e.href=this.canvas.toDataURL("image/png"),e.download="".concat(Date.now(),".png"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}},{key:"destroy",value:function(){this.wf.options.container.innerHTML=""}}]),t}(),M=t(function(e){e.exports=function(e,t){if(null==e)return{};for(var r,n={},o=Object.keys(e),i=0;i<o.length;i++)r=o[i],0<=t.indexOf(r)||(n[r]=e[r]);return n},e.exports.default=e.exports,e.exports.__esModule=!0});e(M);var E=e(t(function(e){e.exports=function(e,t){if(null==e)return{};var r,n=M(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++)r=o[i],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n},e.exports.default=e.exports,e.exports.__esModule=!0})),O=t(function(e,t){var m,w,b,g,v=void 0===self.document,x=null,k=null,T=null,R=44100,M=new Float32Array;function E(e,t,r){return Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))}function O(e){var t=e.options,e=t.rulerColor,r=t.pixelRatio,n=t.padding,o=t.rulerAtTop,i=k.height;T.font="".concat(11*r,"px Arial"),T.fillStyle=e;for(var a,s,c,u=-1,l=0;l<m;l+=1)l&&n<=l&&l<=m-n&&(l-n)%10==0?(u+=1,T.fillRect(w*l,o?0:i-15*r,r,15*r),(l-n)%(10*g)==0&&T.fillText((a=b+u,c=s=void 0,s=Math.floor(a/3600),c=Math.floor((a-3600*s)/60),[s,c,Math.floor(a-3600*s-60*c)].map(function(e){return e<10?"0".concat(e):String(e)}).join(":")),w*l-11*r*2+r,o?30*r:i-30*r+11)):l&&(l-n)%5==0&&T.fillRect(w*l,o?0:i-7.5*r,r,7.5*r)}self.onmessage=function(e){var t,r,n,o,i,a,s,c,u,l,f,d,p=e.data,h=p.type,y=p.data;"INIT"===h&&(k=v?new OffscreenCanvas(y.width,y.height):(x=y.wf,y.canvas),T=k.getContext("2d")),"DECODE"===h&&(R=y.sampleRate,M=y.channelData),"UPDATE"===h&&(t=y.width,r=y.height,n=y.currentTime,u=(d=y.options).cursor,o=d.grid,s=d.ruler,c=d.wave,i=d.duration,a=d.padding,k.width!==t&&(k.width=t),k.height!==r&&(k.height=r),w=t/(m=10*i+2*a),b=Math.floor(n/i)*i,g=function(e){e=e.options.pixelRatio,T.font="".concat(11*e,"px Arial");var r=T.measureText("99:99:99").width;return function e(t){return 1<w*t/(1.5*r)?Math.floor(t/10):e(t+10)}(10)}(y),p=(e=(f=y).options).backgroundColor,h=e.paddingColor,d=e.padding,f=k.width,e=k.height,T.clearRect(0,0,f,e),T.fillStyle=p,T.fillRect(0,0,f,e),T.fillStyle=h,T.fillRect(0,0,d*w,e),T.fillRect(f-d*w,0,d*w,e),o&&function(e){var t=e.options,e=t.gridColor,r=t.pixelRatio,n=k.width,o=k.height;T.fillStyle=e;for(var i=0;i<m;i+=g)T.fillRect(w*i,0,r,o);for(var a=0;a<o/w;a+=g)T.fillRect(0,w*a,n,r)}(y),s&&O(y),c&&function(e){for(var t=e.currentTime,r=(s=e.options).progress,n=s.waveColor,o=s.progressColor,e=s.duration,i=s.padding,a=s.waveScale,s=k.width,c=k.height/2,u=s-w*i*2,s=E(b*R,0,1/0),l=E((b+e)*R,s,1/0),f=Math.floor((l-s)/u),d=i*w+(t-b)*w*10,p=0,h=0,y=1,m=-1,g=s;g<l;g+=1){p+=1;var v=M[g]||0;v<y?y=v:m<v&&(m=v),f<=p&&h<u&&(v=w*i+(h+=1),T.fillStyle=r&&v<=d?o:n,T.fillRect(v,(1+y*a)*c,1,Math.max(1,(m-y)*c*a)),p=0,m=-(y=1))}}(y),u&&(c=(s=y).currentTime,u=(l=s.options).cursorColor,y=l.pixelRatio,s=l.padding,l=k.height,T.fillStyle=u,T.fillRect(s*w+(c-b)*w*10,0,y,l)),l=M.byteLength,l={padding:a,duration:i,gridGap:w,gridNum:m,beginTime:b,currentTime:n,density:g,width:t,height:r,sampleRate:R,byteLength:l},v?self.postMessage({type:"UPFATE",data:{config:l,imageBitmap:k.transferToImageBitmap()}}):x.emit("update",l))},v||(t.postMessage=function(e){self.onmessage({data:e})})});O.postMessage;var S=function(){function o(e){var r=this;i(this,o),this.wf=e,this.canvas=e.template.canvas;var t=e.options,n=t.refreshRate,t=t.useWorker;this.update=T(this.update,n,this),t&&window.OffscreenCanvas&&window.Worker?(this.worker=new Worker(URL.createObjectURL(new Blob(['"use strict";var isWorker=self.document===void 0,wf=null,canvas=null,ctx=null,gridNum=0,gridGap=0,beginTime=0,density=1,sampleRate=44100,channelData=new Float32Array;function secondToTime(a){var b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=Math.floor(a-3600*b-60*c);return[b,c,d].map(function add0(a){return 10>a?"0".concat(a):a+""}).join(":")}function clamp(c,d,a){return Math.max(Math.min(c,Math.max(d,a)),Math.min(d,a))}function getDensity(a){var b=a.options.pixelRatio;ctx.font="".concat(11*b,"px Arial");var c=ctx.measureText("99:99:99").width;return function a(b){var d=gridGap*b/(1.5*c);return 1<d?Math.floor(b/10):a(b+10)}(10)}function drawBackground(a){var b=a.options,c=b.backgroundColor,d=b.paddingColor,e=b.padding,f=canvas,g=f.width,h=f.height;ctx.clearRect(0,0,g,h),ctx.fillStyle=c,ctx.fillRect(0,0,g,h),ctx.fillStyle=d,ctx.fillRect(0,0,e*gridGap,h),ctx.fillRect(g-e*gridGap,0,e*gridGap,h)}function drawGrid(a){var b=a.options,c=b.gridColor,d=b.pixelRatio,e=canvas,f=e.width,g=e.height;ctx.fillStyle=c;for(var h=0;h<gridNum;h+=density)ctx.fillRect(gridGap*h,0,d,g);for(var i=0;i<g/gridGap;i+=density)ctx.fillRect(0,gridGap*i,f,d)}function drawRuler(a){var b=a.options,c=b.rulerColor,d=b.pixelRatio,e=b.padding,f=b.rulerAtTop,g=canvas,h=g.height,i=11,j=15,k=30;ctx.font="".concat(i*d,"px Arial"),ctx.fillStyle=c;for(var l=-1,m=0;m<gridNum;m+=1)m&&m>=e&&m<=gridNum-e&&0==(m-e)%10?(l+=1,ctx.fillRect(gridGap*m,f?0:h-j*d,d,j*d),0==(m-e)%(10*density)&&ctx.fillText(secondToTime(beginTime+l),gridGap*m-2*(i*d)+d,f?k*d:h-k*d+i)):m&&0==(m-e)%5&&ctx.fillRect(gridGap*m,f?0:h-j/2*d,d,j/2*d)}function drawWave(a){for(var b=a.currentTime,c=a.options,d=c.progress,e=c.waveColor,f=c.progressColor,g=c.duration,h=c.padding,j=c.waveScale,k=canvas,l=k.width,m=k.height,n=m/2,o=l-2*(gridGap*h),p=clamp(beginTime*sampleRate,0,1/0),q=clamp((beginTime+g)*sampleRate,p,1/0),r=Math.floor((q-p)/o),s=h*gridGap+10*((b-beginTime)*gridGap),t=0,u=0,v=1,w=-1,x=p;x<q;x+=1){t+=1;var y=channelData[x]||0;if(y<v?v=y:y>w&&(w=y),t>=r&&u<o){u+=1;var z=gridGap*h+u;ctx.fillStyle=d&&s>=z?f:e,ctx.fillRect(z,(1+v*j)*n,1,Math.max(1,(w-v)*n*j)),t=0,v=1,w=-1}}}function drawCursor(a){var b=a.currentTime,c=a.options,d=c.cursorColor,e=c.pixelRatio,f=c.padding,g=canvas,h=g.height;ctx.fillStyle=d;var i=f*gridGap+10*((b-beginTime)*gridGap);ctx.fillRect(i,0,e,h)}self.onmessage=function(a){var b=a.data,c=b.type,d=b.data;if("INIT"===c&&(isWorker?canvas=new OffscreenCanvas(d.width,d.height):(wf=d.wf,canvas=d.canvas),ctx=canvas.getContext("2d")),"DECODE"===c&&(sampleRate=d.sampleRate,channelData=d.channelData),"UPDATE"===c){var e=d.width,f=d.height,g=d.currentTime,h=d.options,i=h.cursor,j=h.grid,k=h.ruler,l=h.wave,m=h.duration,n=h.padding;canvas.width!==e&&(canvas.width=e),canvas.height!==f&&(canvas.height=f),gridNum=10*m+2*n,gridGap=e/gridNum,beginTime=Math.floor(g/m)*m,density=getDensity(d),drawBackground(d),j&&drawGrid(d),k&&drawRuler(d),l&&drawWave(d),i&&drawCursor(d);var o=channelData,p=o.byteLength,q={padding:n,duration:m,gridGap:gridGap,gridNum:gridNum,beginTime:beginTime,currentTime:g,density:density,width:e,height:f,sampleRate:sampleRate,byteLength:p};isWorker?self.postMessage({type:"UPFATE",data:{config:q,imageBitmap:canvas.transferToImageBitmap()}}):wf.emit("update",q)}},"undefined"==typeof exports||isWorker||(exports.postMessage=function(a){self.onmessage({data:a})});']))),this.ctx=this.canvas.getContext("bitmaprenderer"),this.wf.events.proxy(this.worker,"message",function(e){var t=e.data,e=t.type,t=t.data;"UPFATE"===e&&(r.wf.emit("update",t.config),r.ctx.transferFromImageBitmap(t.imageBitmap))}),this.worker.postMessage({type:"INIT",data:{width:this.canvas.width,height:this.canvas.height}})):(this.worker=O,this.worker.postMessage({type:"INIT",data:{canvas:this.canvas,wf:this.wf}})),e.on("decode",function(e){var t=e.channelData,e=e.sampleRate;r.worker.postMessage({type:"DECODE",data:{channelData:t,sampleRate:e}})})}return a(o,[{key:"update",value:function(){var e=this.wf,t=e.currentTime,r=e.options;r.container,r.mediaElement;var n=E(r,["container","mediaElement"]),e=this.canvas,r=e.width,e=e.height;this.worker.postMessage({type:"UPDATE",data:{options:n,currentTime:t,width:r,height:e}})}},{key:"destroy",value:function(){this.worker.terminate&&this.worker.terminate()}}]),o}(),C=function(){function t(e){i(this,t),this.wf=e,this.audioCtx=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,44100),this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array}return a(t,[{key:"decodeAudioData",value:function(e){var n=this;return new Promise(function(t,r){n.audioCtx.decodeAudioData(e.buffer,function(e){n.decodeSuccess(e),t(e)},function(e){return r(e)})})}},{key:"decodeSuccess",value:function(e){this.audiobuffer=e,this.channelData=e.getChannelData(this.wf.options.channel),this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}},{key:"changeChannel",value:function(e){this.channelData=this.audiobuffer.getChannelData(e)||new Float32Array,this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}},{key:"destroy",value:function(){this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array}}]),t}(),j=function(){function t(e){i(this,t),this.wf=e,this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader=null}return a(t,[{key:"load",value:function(e){var t=this;return this.destroy(),fetch(e).then(function(e){return e.body&&"function"==typeof e.body.getReader?(t.fileSize=Number(e.headers.get("content-length")),t.reader=e.body.getReader(),function r(){var n=this;return this.reader.read().then(function(e){var t=e.done,e=e.value;return t?null:(n.loadSize+=e.byteLength,n.data=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0].constructor;return t.reduce(function(e,t){var r=new n((0|e.byteLength)+(0|t.byteLength));return r.set(e,0),r.set(t,0|e.byteLength),r},new n)}(n.data,e),n.wf.decoder.decodeAudioData(n.data.slice()),n.wf.emit("load",{fileSize:n.fileSize,loadSize:n.loadSize,data:n.data}),r.call(n))})}.call(t)):e.arrayBuffer()}).then(function(e){return e&&e.byteLength&&(t.data=new Uint8Array(e),t.fileSize=t.data.byteLength,t.loadSize=t.data.byteLength,t.wf.decoder.decodeAudioData(t.data),t.wf.emit("load",{fileSize:t.fileSize,loadSize:t.loadSize,data:t.data})),e})}},{key:"destroy",value:function(){this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader&&(this.reader.cancel(),this.reader=null)}}]),t}(),_=function(){function r(e){var t=this;i(this,r),this.wf=e,this.playTimer=null,this.init=function(){t.clickInit(),t.resizeInit(),t.playInit()}}return a(r,[{key:"getTimeFromEvent",value:function(e){var t=this.wf,r=t.currentTime,n=t.template.canvas,o=t.options,i=o.duration,a=o.padding,t=o.container,o=o.pixelRatio,n=n.width/(10*i+2*a),a=k(e.pageX-t.offsetLeft-a*n/o,0,1/0);return Math.floor(r/i)*i+k(a/n*o/10,0,i)}},{key:"clickInit",value:function(){var r=this,e=this.wf,t=e.template.canvas,n=e.events.proxy,o=e.options.mediaElement;n(t,["click","contextmenu"],function(e){var t=r.getTimeFromEvent(e);r.wf.emit(e.type,t,e),o&&o.currentTime!==t&&(o.currentTime=t),r.wf.update()})}},{key:"resizeInit",value:function(){var e=this,t=this.wf.events.proxy,r=T(function(){e.wf.update(),e.wf.emit("resize")},500,this);t(window,["resize","orientationchange"],function(){r()})}},{key:"playInit",value:function(){var e=this,t=this.wf,r=t.events.proxy,n=t.options.mediaElement;n&&(r(n,"seeked",function(){e.wf.update()}),function e(){var t=this;this.playTimer=requestAnimationFrame(function(){t.wf.playing&&(t.wf.update(),t.wf.emit("playing",n.currentTime)),t.wf.isDestroy||e.call(t)})}.call(this))}},{key:"destroy",value:function(){cancelAnimationFrame(this.playTimer)}}]),r}();function A(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function P(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p(r);return t=n?(e=p(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),f(this,t)}}var I=0,L=[];return function(){u(n,y);var r=P(n);function n(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return i(this,n),(e=r.call(this))._currentTime=0,e.isDestroy=!1,e.options={},e.setOptions(t),e.events=new m(s(e)),e.template=new R(s(e)),e.decoder=new C(s(e)),e.drawer=new S(s(e)),e.controller=new _(s(e)),e.loader=new j(s(e)),e.update(),I+=1,e.id=I,L.push(s(e)),e}return a(n,[{key:"currentTime",get:function(){return this.options.mediaElement?this.options.mediaElement.currentTime:this._currentTime}},{key:"duration",get:function(){return this.options.mediaElement?this.options.mediaElement.duration:1/0}},{key:"playing",get:function(){var e=this.options.mediaElement;return!!e&&!!(0<e.currentTime&&!e.paused&&!e.ended&&2<e.readyState)}},{key:"setOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return x("object"===h.kindOf(e),"setOptions expects to receive object as a parameter."),"string"==typeof e.container&&(e.container=document.querySelector(e.container)),"string"==typeof e.mediaElement&&(e.mediaElement=document.querySelector(e.mediaElement)),this.options=h(D(D(D({},n.default),this.options),e),n.scheme),this.update(),this}},{key:"load",value:function(e){return e&&"function"==typeof e.getChannelData?this.decoder.decodeSuccess(e):e&&e.buffer?this.decoder.decodeAudioData(e):(x("string"==typeof(e=e instanceof HTMLVideoElement||e instanceof HTMLAudioElement?(this.options.mediaElement=e).src:e)&&e.trim(),"The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty."),this.loader.load(e)),this.controller.init(),this}},{key:"seek",value:function(e){return x("number"==typeof e,"seek expects to receive number as a parameter."),this._currentTime=k(e,0,this.duration),this.options.mediaElement&&this.options.mediaElement.currentTime!==this._currentTime&&(this.options.mediaElement.currentTime=this._currentTime),this.update(),this}},{key:"changeChannel",value:function(e){return this.decoder.changeChannel(e),this.setOptions({channel:e}),this.update(),this}},{key:"exportImage",value:function(){return this.template.exportImage(),this}},{key:"update",value:function(){return this.template&&this.drawer&&(this.template.update(),this.drawer.update()),this}},{key:"destroy",value:function(){return this.isDestroy=!0,this.events.destroy(),this.template.destroy(),this.controller.destroy(),this.decoder.destroy(),this.loader.destroy(),this.drawer.destroy(),L.splice(L.indexOf(this),1),this}}],[{key:"instances",get:function(){return L}},{key:"version",get:function(){return"2.0.6"}},{key:"env",get:function(){return'"production"'}},{key:"default",get:function(){return{container:"#waveform",mediaElement:null,useWorker:!0,wave:!0,waveColor:"rgba(255, 255, 255, 0.1)",backgroundColor:"rgb(28, 32, 34)",paddingColor:"rgba(255, 255, 255, 0.05)",cursor:!0,cursorColor:"#ff0000",progress:!0,progressColor:"rgba(255, 255, 255, 0.5)",grid:!0,gridColor:"rgba(255, 255, 255, 0.05)",ruler:!0,rulerColor:"rgba(255, 255, 255, 0.5)",rulerAtTop:!0,refreshRate:50,channel:0,duration:10,padding:5,waveScale:.8,pixelRatio:Math.ceil(window.devicePixelRatio)}}},{key:"scheme",get:function(){function e(r,n,o,i){return function(e,t){x("number"===t,"".concat(r," expects to receive number as a parameter, but got ").concat(t,"."));t=i?"an integer":"a";return x(n<=e&&e<=o&&(!i||Number.isInteger(e)),"'options.".concat(r,"' expect ").concat(t," number that >= ").concat(n," and <= ").concat(o,", but got ").concat(e,".")),!0}}return{container:"htmlelement|htmldivelement",mediaElement:"null|htmlvideoelement|htmlaudioelement",useWorker:"boolean",wave:"boolean",waveColor:"string",backgroundColor:"string",paddingColor:"string",cursor:"boolean",cursorColor:"string",progress:"boolean",progressColor:"string",grid:"boolean",gridColor:"string",ruler:"boolean",rulerColor:"string",rulerAtTop:"boolean",refreshRate:e("channel",16,1e3,!0),channel:e("channel",0,5,!0),duration:e("duration",1,100,!0),padding:e("padding",1,100,!0),waveScale:e("waveScale",.1,10,!1),pixelRatio:e("pixelRatio",1,10,!1)}}}]),n}()});
