/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8],{229:function(e,t,n){"use strict";var r=n(521),o=n.n(r);t.a=o.a},333:function(e,t,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("19766eaa",content,!0,{sourceMap:!1})},334:function(e,t,n){e.exports=n.p+"img/music.899c6a2.gif"},335:function(e,t,n){e.exports=n.p+"img/music_static.e8a2f61.png"},336:function(e,t,n){"use strict";n(333)},337:function(e,t,n){var r=n(34)(!1);r.push([e.i,".media[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.el-image[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.media-container[data-v-597d3476] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.media-container .media-gif[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.media-container .media-control[data-v-597d3476] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0.133333rem;\n  color: #FFFFFF;\n  font-size: 0.533333rem;\n  height: 0.533333rem;\n  display: flex;\n  justify-content: center;\n  z-index: 120;\n}\n.media-container .media-control-bar[data-v-597d3476] {\n  bottom: 0;\n  position: absolute;\n  z-index: 10;\n  height: 0.08rem;\n  left: 0;\n  background-color: #5b90ed;\n}\n[data-v-597d3476] .el-image__inner {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.video[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\naudio[data-v-597d3476] {\n  width: 100%;\n}\n.sign[data-v-597d3476] {\n  position: absolute;\n  top: 0.266667rem;\n  right: 0.266667rem;\n  z-index: 1;\n  font-size: 0.266667rem;\n  text-shadow: 0 0 0.066667rem rgba(9, 1, 4, 0.3);\n  color: #fff;\n}\n.popVideo[data-v-597d3476] {\n  width: 100%;\n}\n.container[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}",""]),e.exports=r},338:function(e,t,n){"use strict";n.r(t);var r=n(23),o=(n(49),n(156),n(76)),l={components:Object(r.a)({},o.a.Component.name,o.a.Component),props:{url:{type:String,default:function(){return""}},isPopVideo:{type:Boolean,default:function(){return!1}},isPopImg:{type:Boolean,default:function(){return!1}}},data:function(){return{dialogVisible:!1,isPlaying:!1,camera:null,scene:null,renderer:null,mush:null,loader:null,mixer:null,controls:null,time:(new Date).getTime(),duration:0,currentTime:0}},computed:{controlsWidth:function(){return{width:(this.currentTime/this.duration*100).toFixed(2)+"%"}}},mounted:function(){this.url},watch:{url:function(e,ol){e&&this.$nextTick((function(){}))}},methods:{handleShowPic:function(){Object(o.a)([this.url])},getDuration:function(){this.$refs.player&&(this.duration=this.$refs.player.duration)},updateTime:function(e){this.currentTime=e.target.currentTime},handleOnePlay:function(){this.isPlaying?(this.$refs.player.pause(),this.isPlaying=!1):(this.$refs.player.play(),this.isPlaying=!0)},getType:function(){return/\.(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG|svg|SVG)$/.test(this.url)?"img":/\.(mp4|webm|wav|ogg|MP4|MOV|WEBM|WAV|OGG)$/.test(this.url)?"video":/\.(mp3|MP3)$/.test(this.url)?"mp3":"3D"},createRect:function(){var e=new THREE.PlaneGeometry(1e3,1e3),t=new THREE.MeshBasicMaterial({color:11184810});return new THREE.Mesh(e,t)},handleClose:function(){this.$refs.popvideo.pause(),this.dialogVisible=!1},playVideo:function(){var e=this;if(!this.isPopVideo)return!1;this.dialogVisible=!0,this.$nextTick((function(){e.$refs.popvideo.currentTime=0,e.$refs.popvideo.play()}))},init:function(){var e=this;if("3D"===this.getType()){var t=document.getElementById("container"+this.time);this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.scene=new THREE.Scene;(new GLTFLoader).load(this.url,(function(t){e.scene.add(t.scene)}));var n=new THREE.AmbientLight(4210752,10);this.scene.add(n);var r=new THREE.DirectionalLight(16777215);this.scene.add(r);var o=new THREE.SpotLight(16777215);o.position.set(100,1e3,100),o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.near=500,o.shadow.camera.far=4e3,o.shadow.camera.fov=30,this.scene.add(o),(n=new THREE.PointLight(16711680,1,100)).position.set(50,50,50),this.scene.add(n);window.innerWidth,window.innerHeight;this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement),this.controls=new OrbitControls(this.camera,this.renderer.domElement)}},render:function(){"3D"===this.getType()&&(requestAnimationFrame(this.render),this.renderer.render(this.scene,this.camera))}}},c=(n(336),n(22)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"media"},["img"===e.getType()?r("img",{staticClass:"el-image",attrs:{src:e.url},on:{click:function(t){return t.stopPropagation(),e.handleShowPic.apply(null,arguments)}}}):e._e(),e._v(" "),"video"===e.getType()?r("div",{staticClass:"media-container",on:{click:function(t){return t.stopPropagation(),e.handleOnePlay.apply(null,arguments)}}},[r("video",{ref:"player",staticClass:"video",attrs:{loop:"",src:e.url,"webkit-playsinline":"true",playsinline:"true","x5-playsinline":"true",poster:e.url+"?vframe/jpg/offset/1"},on:{click:e.playVideo}})]):e._e(),e._v(" "),"mp3"===e.getType()?r("div",{staticClass:"media-container",on:{click:function(t){return t.stopPropagation(),e.handleOnePlay.apply(null,arguments)}}},[e.isPlaying?r("img",{staticClass:"media-gif",attrs:{src:n(334),alt:""}}):r("img",{staticClass:"media-gif",attrs:{src:n(335),alt:""}}),e._v(" "),r("div",{staticClass:"media-control-bar",style:e.controlsWidth}),e._v(" "),r("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"player",attrs:{controls:"",loop:"",src:e.url},on:{canplay:e.getDuration,timeupdate:e.updateTime}})]):e._e(),e._v(" "),"mp3"===e.getType()?r("van-icon",{staticClass:"sign",attrs:{name:"music-o"}}):e._e(),e._v(" "),"video"===e.getType()?r("van-icon",{staticClass:"sign",attrs:{name:"video-o"}}):e._e()],1)}),[],!1,null,"597d3476",null);t.default=component.exports},339:function(e,t,n){e.exports=n.p+"img/empty.f6320fb.png"},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(130);var o=n(159),l=n(103);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(o.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},436:function(e,t,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("9425d3c0",content,!0,{sourceMap:!1})},521:function(e,t,n){e.exports=function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){for(var o in y(e,n),n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===_(e[o])&&"function"===_(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===_(e)||"function"===_(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],o=e.parentNode.offsetWidth*t,a=void 0,s=void 0,u=void 0;(n=n.trim().split(",")).map((function(e){e=e.trim(),-1===(a=e.lastIndexOf(" "))?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])})),r.sort((function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0}));for(var l="",c=void 0,d=r.length,f=0;f<d;f++)if((c=r[f])[0]>=o){l=c[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!x)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function c(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function d(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function f(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function h(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},y=function(e,t){if(null==e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,_=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":"[object RegExp]"===(n=w.call(t))?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object"},L=t,x="undefined"!=typeof window,k=x&&"IntersectionObserver"in window,E={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(x)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return x&&window.devicePixelRatio||e},T=function(){if(x){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),C={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},O=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},z=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},P=function(e){return z(e,"overflow")+z(e,"overflow-y")+z(e,"overflow-x")},$=function(e){if(x){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(P(t)))return t;t=t.parentNode}return window}},R={},I=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return m(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;f(this.options.filter).map((function(t){e.options.filter[t](e,e.options)}))}},{key:"renderLoading",value:function(e){var t=this;O({src:this.loading},(function(n){t.render("loading",!1),e()}),(function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")}))}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||R[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading((function(){e.attempt++,e.record("loadStart"),O({src:e.src},(function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),R[e.src]=1,t()}),(function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)}))}))}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),S="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",D=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],H={rootMargin:"0px",threshold:0},N=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,d=e.silent,f=void 0===d||d,h=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),m=e.adapter,g=e.observer,y=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=E.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:f,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||S,loading:s||S,attempt:u||3,scale:h||A(h),ListenEvents:v||D,hasbind:!1,supportWebp:l(),filter:p||{},adapter:m||{},observer:!!g,observerOptions:y||H},this._initEvent(),this.lazyLoadHandler=c(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?E.observer:E.event)}return m(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};L(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map((function(t){e.push(t.performance())})),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),x&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,(function(e){return e.el===t})))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,c=o.error;e.nextTick((function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=(a=r.context.$refs[o])?a.$el||a:document.getElementById(o)),a||(a=$(t));var d=new I({bindType:n.arg,$parent:a,el:t,loading:l,error:c,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(d),x&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick((function(){return i.lazyLoadHandler()}))}))}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var c=u(this.ListenerQueue,(function(e){return e.el===t}));c&&c.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick((function(){return r.lazyLoadHandler()}))}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,(function(t){return t.el===e}));t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;k||e!==E.observer||(e=E.event),this.mode=e,e===E.event?(this._observer&&(this.ListenerQueue.forEach((function(e){t._observer.unobserve(e.el)})),this._observer=null),this.TargetQueue.forEach((function(e){t._initListen(e.el,!0)}))):(this.TargetQueue.forEach((function(e){t._initListen(e.el,!1)})),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,(function(t){return t.el===e}));return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===E.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach((function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))}))}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach((function(r){return C[t?"on":"off"](e,r,n.lazyLoadHandler)}))}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){n?o(e.Event.listeners[t],n):e.Event.listeners[t]=[]},this.$emit=function(t,n,r){e.Event.listeners[t].forEach((function(e){return e(n,r)}))}}},{key:"_lazyLoadHandler",value:function(){var e=this;this.ListenerQueue.forEach((function(t,n){t.state.loaded||t.checkInView()&&t.load((function(){!t.error&&t.loaded&&e.ListenerQueue.splice(n,1)}))}))}},{key:"_initIntersectionObserver",value:function(){var e=this;k&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((function(t){e._observer.observe(t.el)})))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach((function(e){e.isIntersecting&&n.ListenerQueue.forEach((function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}}))}))}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return d(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},M=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),x&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},F=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return m(e,[{key:"bind",value:function(e,t,n){var r=new W({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,(function(t){return t.el===e}));r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,(function(t){return t.el===e}));r&&(r.clear(),o(this._queue,r))}}]),e}(),Q={selector:"img"},W=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return m(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=L({},Q,r.value),this.getImgs().forEach((function(e){t.lazy.add(e,L({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)}))}},{key:"getImgs",value:function(){return h(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach((function(t){return e.lazy.remove(t)})),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new(N(e))(t),i=new F({lazy:n}),r="2"===e.version.split(".")[0];e.prototype.$Lazyload=n,t.lazyComponent&&e.component("lazy-component",M(n)),r?(e.directive("lazy",{bind:n.add.bind(n),update:n.update.bind(n),componentUpdated:n.lazyLoadHandler.bind(n),unbind:n.remove.bind(n)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:n.lazyLoadHandler.bind(n),update:function(e,t){L(this.vm.$refs,this.vm.$els),n.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){n.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}}()},522:function(e,t,n){"use strict";n(436)},523:function(e,t,n){var r=n(34)(!1);r.push([e.i,'.o-new-reward-bbox[data-v-5512ec21] {\n  position: absolute;\n  top: -0.08rem;\n  right: 0.773333rem;\n  display: flex;\n  align-items: center;\n}\n.o-new-reward-bbox .o-end-time[data-v-5512ec21] {\n  font-size: 0.32rem;\n  font-weight: 400;\n  color: #bfbfbf;\n  margin-right: 0.2rem;\n}\n.o-new-reward-bbox .o-new-reward-box[data-v-5512ec21] {\n  background: #7632ff;\n  border-radius: 0 0 0.266667rem 0.266667rem;\n  box-shadow: 0.04rem 0.053333rem 0.066667rem 0 rgba(5, 0, 0, 0.3);\n  height: 1.733333rem;\n  padding: 0.2rem 0.293333rem 0;\n}\n.o-new-reward-bbox .o-for-reward[data-v-5512ec21] {\n  font-size: 0.293333rem;\n  line-height: 1;\n  color: #ffffff;\n  margin-bottom: 0.133333rem;\n}\n.o-new-reward-bbox .o-for-dollar[data-v-5512ec21] {\n  font-size: 0.32rem;\n  color: #AAAAAA;\n  line-height: 1;\n}\n.o-new-reward-bbox .o-nera[data-v-5512ec21] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.133333rem;\n}\n.o-new-reward-bbox .o-nera .o-icon-nera[data-v-5512ec21] {\n  width: 0.533333rem;\n  height: 0.533333rem;\n  margin-right: 0.093333rem;\n}\n.o-new-reward-bbox .o-nera .o-nera-prise[data-v-5512ec21] {\n  font-size: 0.48rem;\n  font-family: Avenir Next, Avenir Next-Bold;\n  font-weight: 700;\n  text-align: center;\n  color: #ffffff;\n  line-height: 0.533333rem;\n}\n.o-reward-user-nickname[data-v-5512ec21] {\n  width: 25% !important;\n}\n.o-year-line[data-v-5512ec21] {\n  position: relative;\n  padding: 0.586667rem 0.293333rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.o-year-line[data-v-5512ec21]:after {\n  content: "";\n  position: absolute;\n  height: 0.026667rem;\n  left: 0.586667rem;\n  right: 0.586667rem;\n  background: rgba(49, 49, 49, 0.1);\n}\n.o-year-line .o-year[data-v-5512ec21] {\n  position: relative;\n  font-weight: 700;\n  border-radius: 0.133333rem;\n  font-size: 0.453333rem;\n  text-align: center;\n  font-family: Arial, Arial-Regular, serif;\n}\n.o-year-line .o-year.--0[data-v-5512ec21] {\n  background: #ffffff;\n  border: 0.026667rem solid #e5e5e5;\n  padding: 0 0.32rem;\n  color: #1d1d1d;\n  line-height: 0.8rem;\n  position: absolute;\n  z-index: 1;\n}\n.o-year-line .o-year.--0 .o-clock[data-v-5512ec21] {\n  position: absolute;\n  font-size: 0.24rem;\n  bottom: -0.173333rem;\n  left: 0;\n  right: 0;\n  color: #1D1D1D;\n}\n.o-year-line .o-year.--1[data-v-5512ec21] {\n  line-height: 0.8rem;\n  color: #bfbfbf;\n  font-weight: 600;\n}\n.o-year-line .o-year.--2[data-v-5512ec21] {\n  font-size: 0.373333rem;\n  line-height: 0.8rem;\n  color: #e9e9e9;\n  font-weight: 400;\n}\n.o-year-line .o-year.--3[data-v-5512ec21] {\n  width: 1.706667rem;\n}\n.o-subject[data-v-5512ec21] {\n  padding: 0 0.4rem;\n  font-size: 0.346667rem;\n  font-weight: 700;\n  text-align: center;\n  color: #1d1d1d;\n  line-height: 0.48rem;\n  margin-bottom: 0.586667rem;\n}\n.o-answer-list[data-v-5512ec21] {\n  padding: 0 0.4rem;\n  font-size: 0.32rem;\n  font-weight: 600;\n  text-align: left;\n  color: #1d1d1d;\n  line-height: 0.48rem;\n}\n.o-answer-user-box[data-v-5512ec21] {\n  padding: 0.133333rem 0;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.o-answer-user-box .o-answer-user-avatar[data-v-5512ec21] {\n  width: 0.666667rem;\n  height: 0.666667rem;\n  border-radius: 50%;\n  margin-right: 0.2rem;\n}\n.o-answer-user-box .o-answer-user-name[data-v-5512ec21] {\n  flex: 1;\n  font-size: 0.32rem;\n  font-weight: 400;\n  text-align: left;\n  color: #1d1d1d;\n  line-height: 0.746667rem;\n}\n.empty[data-v-5512ec21] {\n  text-align: center;\n  padding: 1.6rem 0;\n}\n.empty .o-empty[data-v-5512ec21] {\n  width: 4.933333rem;\n  height: 4.933333rem;\n}\n.empty .o-empty-txt[data-v-5512ec21] {\n  font-size: 0.4rem;\n  color: #FFFFFF;\n}',""]),e.exports=r},562:function(e,t,n){"use strict";n.r(t);n(43),n(31),n(37),n(55),n(36),n(56);var r=n(344),o=n(11),l=n(23),c=(n(79),n(97),n(54),n(3)),d=n(229),f=n(58),h=n(338);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}c.a.use(d.a);var y={name:"BillboardList",props:["type"],components:{iMedia:h.default},filters:{filterDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Date(e).getFullYear()+t}},data:function(){return{isShow:!0,iTotal:0,iPageNo:0,iPageNum:10,oList:[],isLoading:!1,finished:!1}},computed:m({},Object(f.c)({userInfo:function(e){return e.userInfo},nera:function(e){return e.nera}})),watch:{nera:function(e){return e},type:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.iPageNo=0,t.finished=!1,t.isShow=!1,t.oList=[],t.$nextTick((function(){t.isShow=!0,t.load()}));case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.load()},methods:{load:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.finished=!1,e.isLoading=!0,t.next=4,e.getList();case 4:case"end":return t.stop()}}),t)})))()},getUrl:function(){switch(this.type){case"recommend":return"/v1/emall/GetRecommendRewardsList";case"unanswered":return"/v1/emall/GetNoAnswerRewardsList";case"unconfirmed":return"/v1/emall/GetUnconfirmedRewardsList";case"confirmed":return"/v1/emall/GetConfirmedRewardsList";default:return"/v1/emall/GetNoAnswerRewardsList"}},getList:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post(e.getUrl(),{iPageNo:e.iPageNo,iPageNum:e.iPageNum,iType:2});case 2:n=t.sent,o=n.vRewardInfor.map((function(e){return m(m({},e),{},{iPastStatus:e.iExpirationDate<new Date/1})})),e.oList=[].concat(Object(r.a)(e.oList),Object(r.a)(o)),e.iTotal=n.iTotal,e.iPageNo++,e.isLoading=!1,e.oList.length>=e.iTotal&&(e.finished=!0);case 9:case"end":return t.stop()}}),t)})))()},goDetail:function(e){this.$router.push("/reward/detail/".concat(e.iRewardId))},goAnswer:function(e){this.$router.push({path:"/answer",query:{iRewardId:e.iRewardId}})}}},w=(n(522),n(22)),component=Object(w.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isShow&&e.oList.length?r("van-list",{attrs:{finished:e.finished,"loading-text":e.$t("Main24"),"finished-text":e.$t("Main25")},on:{load:e.load},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.oList,(function(t,i){return r("div",{staticClass:"o-issue-bbox",on:{click:function(n){return e.goDetail(t)}}},[r("div",{staticClass:"o-issue-box billboard"},[r("div",{staticClass:"o-new-reward-bbox"},[r("p",{staticClass:"o-end-time"},[r("i",{staticClass:"fas fa-hourglass-half"}),e._v(" "+e._s(e._f("formatDate")(t.iExpirationDate)))]),e._v(" "),r("div",{staticClass:"o-new-reward-box"},[r("p",{staticClass:"o-for-reward"},[e._v(e._s(e.$t("Main34")))]),e._v(" "),r("div",{staticClass:"o-nera"},[r("img",{staticClass:"o-icon-nera",attrs:{src:n(223),alt:""}}),e._v(" "),r("span",{staticClass:"o-nera-prise"},[e._v(e._s(e._f("formatNera")(t.iReward)))])]),e._v(" "),r("p",{staticClass:"o-for-dollar"},[e._v("$"+e._s(e._f("formatNera")(t.iReward*e.nera)))])])]),e._v(" "),r("div",{staticClass:"o-reward-user",on:{click:function(n){return n.stopPropagation(),e.$router.push({name:"User",query:{iUserId:t.stUser.iUserId}})}}},[r("o-head",{staticClass:"o-reward-user-avatar",attrs:{"avatar-url":t.stUser.sAvatar}}),e._v(" "),r("span",{staticClass:"o-reward-user-nickname"},[e._v(e._s(t.stUser.sName))])],1),e._v(" "),r("div",{staticClass:"o-year-line"},[r("p",{staticClass:"o-year --2"},[e._v(e._s(e._f("filterDate")(t.sDate,-2)))]),e._v(" "),r("p",{staticClass:"o-year --1"},[e._v(e._s(e._f("filterDate")(t.sDate,-1)))]),e._v(" "),r("p",{staticClass:"o-year --3"}),e._v(" "),r("p",{staticClass:"o-year --0"},[e._v(e._s(e._f("filterDate")(t.sDate))),r("i",{staticClass:"far fa-clock o-clock"})]),e._v(" "),r("p",{staticClass:"o-year --1"},[e._v(e._s(e._f("filterDate")(t.sDate,1)))]),e._v(" "),r("p",{staticClass:"o-year --2"},[e._v(e._s(e._f("filterDate")(t.sDate,2)))])]),e._v(" "),r("p",{staticClass:"o-subject van-multi-ellipsis--l2"},[e._v(e._s(t.sSubject))]),e._v(" "),t.vAnswer.length?r("p",{staticClass:"o-answer-list"},[r("i",{staticClass:"fas fa-list-alt"}),e._v(" "+e._s(e.$t("Billboard28")))]):e._e(),e._v(" "),r("div",{staticClass:"o-reward-q"},[t.vAnswer.length?r("div",{class:["o-answer","__"+(t.vAnswer.length<3?t.vAnswer.length:"3")]},e._l(t.vAnswer.slice(0,3),(function(t){return r("div",{key:t.iAnswerId},[r("iMedia",{staticClass:"o-answer-img",attrs:{url:t.sFileUrl}}),e._v(" "),r("div",{staticClass:"o-answer-user-box van-ellipsis"},[r("o-head",{staticClass:"o-answer-user-avatar",attrs:{"avatar-url":t.stUser.sAvatar}}),e._v(" "),r("p",{staticClass:"o-answer-user-name van-ellipsis"},[e._v(e._s(t.stUser.sName))])],1)],1)})),0):e._e()]),e._v(" "),e.userInfo.iUserId===t.iUserId||"/billboard/confirmed"===e.$route.path||t.iPastStatus?e._e():r("div",{staticClass:"o-reward-answer-box"},[r("van-button",{staticClass:"o-reward-btn answer",on:{click:function(n){return n.stopPropagation(),e.goAnswer(t)}}},[e._v(e._s(e.$t("Billboard06"))+"\n        ")])],1)])])})),0):r("div",{staticClass:"empty"},[r("img",{staticClass:"o-empty",attrs:{src:n(339),alt:""}}),e._v(" "),r("p",{staticClass:"o-empty-txt"},[e._v(e._s(e.$t("Billboard27")))])])}),[],!1,null,"5512ec21",null);t.default=component.exports}}]);