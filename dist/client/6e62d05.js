(window.webpackJsonp=window.webpackJsonp||[]).push([[18,7,8],{329:function(e,t,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("69b05978",content,!0,{sourceMap:!1})},330:function(e,t,n){e.exports=n.p+"img/music.899c6a2.gif"},331:function(e,t,n){e.exports=n.p+"img/music_static.e8a2f61.png"},332:function(e,t,n){"use strict";n(329)},333:function(e,t,n){var r=n(34)(!1);r.push([e.i,".media[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.el-image[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.media-container[data-v-597d3476] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.media-container .media-gif[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.media-container .media-control[data-v-597d3476] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0.133333rem;\n  color: #FFFFFF;\n  font-size: 0.533333rem;\n  height: 0.533333rem;\n  display: flex;\n  justify-content: center;\n  z-index: 120;\n}\n.media-container .media-control-bar[data-v-597d3476] {\n  bottom: 0;\n  position: absolute;\n  z-index: 10;\n  height: 0.08rem;\n  left: 0;\n  background-color: #5b90ed;\n}\n[data-v-597d3476] .el-image__inner {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.video[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\naudio[data-v-597d3476] {\n  width: 100%;\n}\n.sign[data-v-597d3476] {\n  position: absolute;\n  top: 0.266667rem;\n  right: 0.266667rem;\n  z-index: 1;\n  font-size: 0.266667rem;\n  text-shadow: 0 0 0.066667rem rgba(9, 1, 4, 0.3);\n  color: #fff;\n}\n.popVideo[data-v-597d3476] {\n  width: 100%;\n}\n.container[data-v-597d3476] {\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}",""]),e.exports=r},334:function(e,t,n){"use strict";n.r(t);var r=n(23),o=(n(48),n(150),n(76)),c={components:Object(r.a)({},o.a.Component.name,o.a.Component),props:{url:{type:String,default:function(){return""}},isPopVideo:{type:Boolean,default:function(){return!1}},isPopImg:{type:Boolean,default:function(){return!1}}},data:function(){return{dialogVisible:!1,isPlaying:!1,camera:null,scene:null,renderer:null,mush:null,loader:null,mixer:null,controls:null,time:(new Date).getTime(),duration:0,currentTime:0}},computed:{controlsWidth:function(){return{width:(this.currentTime/this.duration*100).toFixed(2)+"%"}}},mounted:function(){this.url},watch:{url:function(e,ol){e&&this.$nextTick((function(){}))}},methods:{handleShowPic:function(){Object(o.a)([this.url])},getDuration:function(){this.$refs.player&&(this.duration=this.$refs.player.duration)},updateTime:function(e){this.currentTime=e.target.currentTime},handleOnePlay:function(){this.isPlaying?(this.$refs.player.pause(),this.isPlaying=!1):(this.$refs.player.play(),this.isPlaying=!0)},getType:function(){return/\.(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG|svg|SVG)$/.test(this.url)?"img":/\.(mp4|webm|wav|ogg|MP4|MOV|WEBM|WAV|OGG)$/.test(this.url)?"video":/\.(mp3|MP3)$/.test(this.url)?"mp3":"3D"},createRect:function(){var e=new THREE.PlaneGeometry(1e3,1e3),t=new THREE.MeshBasicMaterial({color:11184810});return new THREE.Mesh(e,t)},handleClose:function(){this.$refs.popvideo.pause(),this.dialogVisible=!1},playVideo:function(){var e=this;if(!this.isPopVideo)return!1;this.dialogVisible=!0,this.$nextTick((function(){e.$refs.popvideo.currentTime=0,e.$refs.popvideo.play()}))},init:function(){var e=this;if("3D"===this.getType()){var t=document.getElementById("container"+this.time);this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.scene=new THREE.Scene;(new GLTFLoader).load(this.url,(function(t){e.scene.add(t.scene)}));var n=new THREE.AmbientLight(4210752,10);this.scene.add(n);var r=new THREE.DirectionalLight(16777215);this.scene.add(r);var o=new THREE.SpotLight(16777215);o.position.set(100,1e3,100),o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.near=500,o.shadow.camera.far=4e3,o.shadow.camera.fov=30,this.scene.add(o),(n=new THREE.PointLight(16711680,1,100)).position.set(50,50,50),this.scene.add(n);window.innerWidth,window.innerHeight;this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement),this.controls=new OrbitControls(this.camera,this.renderer.domElement)}},render:function(){"3D"===this.getType()&&(requestAnimationFrame(this.render),this.renderer.render(this.scene,this.camera))}}},l=(n(332),n(22)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"media"},["img"===e.getType()?r("img",{staticClass:"el-image",attrs:{src:e.url},on:{click:function(t){return t.stopPropagation(),e.handleShowPic.apply(null,arguments)}}}):e._e(),e._v(" "),"video"===e.getType()?r("div",{staticClass:"media-container",on:{click:function(t){return t.stopPropagation(),e.handleOnePlay.apply(null,arguments)}}},[r("video",{ref:"player",staticClass:"video",attrs:{loop:"",src:e.url,"webkit-playsinline":"true",playsinline:"true","x5-playsinline":"true",poster:e.url+"?vframe/jpg/offset/1"},on:{click:e.playVideo}})]):e._e(),e._v(" "),"mp3"===e.getType()?r("div",{staticClass:"media-container",on:{click:function(t){return t.stopPropagation(),e.handleOnePlay.apply(null,arguments)}}},[e.isPlaying?r("img",{staticClass:"media-gif",attrs:{src:n(330),alt:""}}):r("img",{staticClass:"media-gif",attrs:{src:n(331),alt:""}}),e._v(" "),r("div",{staticClass:"media-control-bar",style:e.controlsWidth}),e._v(" "),r("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"player",attrs:{controls:"",loop:"",src:e.url},on:{canplay:e.getDuration,timeupdate:e.updateTime}})]):e._e(),e._v(" "),"mp3"===e.getType()?r("van-icon",{staticClass:"sign",attrs:{name:"music-o"}}):e._e(),e._v(" "),"video"===e.getType()?r("van-icon",{staticClass:"sign",attrs:{name:"video-o"}}):e._e()],1)}),[],!1,null,"597d3476",null);t.default=component.exports},336:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},338:function(e,t,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("a63e183a",content,!0,{sourceMap:!1})},345:function(e,t,n){var r=n(44),o="["+n(336)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},377:function(e,t,n){"use strict";var r=n(25),o=n(17),c=n(122),l=n(40),d=n(26),f=n(74),m=n(221),h=n(99),v=n(15),x=n(86),w=n(98).f,y=n(70).f,_=n(39).f,T=n(345).trim,C="Number",E=o.Number,I=E.prototype,D=f(x(I))==C,S=function(e){var t,n,r,o,c,l,d,code,f=h(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=T(f)).charCodeAt(0))||45===t){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(C,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var P,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(D?v((function(){I.valueOf.call(n)})):f(n)!=C)?m(new E(S(t)),n,O):S(t)},k=r?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;k.length>j;j++)d(E,P=k[j])&&!d(O,P)&&_(O,P,y(E,P));O.prototype=I,I.constructor=O,l(o,C,O)}},378:function(e,t,n){"use strict";n(338)},379:function(e,t,n){var r=n(34)(!1);r.push([e.i,".erax-nft-item[data-v-1b4e6769] {\n  text-align: center;\n  padding: 0.533333rem 0.32rem;\n  position: relative;\n  background-color: #FFFFFF;\n  margin-bottom: 0.32rem;\n  border-radius: 0.133333rem;\n  box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0, 0, 0, 0.1);\n}\n.erax-nft-item .erax-line-1[data-v-1b4e6769] {\n  text-align: left;\n  margin-bottom: 0.373333rem;\n}\n.erax-nft-item .erax-line-1 .erax-bid-time[data-v-1b4e6769] {\n  padding: 0 0.16rem;\n  height: 0.586667rem;\n  font-size: 0.373333rem;\n  border: 0.026667rem solid #ececec;\n  border-radius: 0.08rem;\n  line-height: 0.586667rem;\n}\n.erax-nft-item .erax-nft-logo[data-v-1b4e6769] {\n  height: 8.666667rem;\n  margin-bottom: 0.24rem;\n}\n.erax-nft-item .erax-line-2[data-v-1b4e6769] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.erax-nft-item .erax-line-2 .erax-nft-name[data-v-1b4e6769] {\n  font-size: 0.64rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.erax-nft-item .erax-line-2 .erax-prise-box[data-v-1b4e6769] {\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n}\n.erax-nft-item .erax-line-2 .erax-prise-box .erax-prise-img[data-v-1b4e6769] {\n  height: 0.48rem;\n  margin-right: 0.053333rem;\n}\n.erax-nft-item .erax-line-2 .erax-prise-box .erax-prise[data-v-1b4e6769] {\n  font-size: 0.48rem;\n  color: #1b1b1b;\n  line-height: 1;\n}\n.erax-nft-item .erax-line-2 .erax-prise-box .erax-prise-doll[data-v-1b4e6769] {\n  color: #979797;\n  font-size: 0.32rem;\n  margin-left: 0.133333rem;\n  line-height: 1;\n}\n.erax-nft-item .erax-line-3[data-v-1b4e6769] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.erax-nft-item .erax-line-3 .erax-collections[data-v-1b4e6769] {\n  margin: 0.4rem 0;\n  width: 65%;\n  display: flex;\n  align-items: center;\n}\n.erax-nft-item .erax-line-3 .erax-collections .erax-collections-img[data-v-1b4e6769] {\n  width: 0.586667rem;\n  height: 0.586667rem;\n  border-radius: 50%;\n  margin-right: 0.16rem;\n}\n.erax-nft-item .erax-line-3 .erax-collections .erax-collections-name[data-v-1b4e6769] {\n  font-size: 0.373333rem;\n  color: #1b1b1b;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.erax-nft-item .erax-line-3 .erax-info-more[data-v-1b4e6769] {\n  font-size: 0.373333rem;\n  color: #606060;\n  text-decoration: underline;\n}\n.erax-nft-item .erax-line-3 .erax-info-more-icon[data-v-1b4e6769] {\n  vertical-align: middle;\n  transform: rotateZ(90deg);\n  text-decoration: underline;\n}\n.erax-nft-item .erax-line-3 .erax-info-more-icon.z[data-v-1b4e6769] {\n  transform: rotateZ(270deg);\n}\n.erax-nft-item .erax-line-4 .a[data-v-1b4e6769] {\n  padding: 0.133333rem 0;\n  display: flex;\n  justify-content: space-between;\n  line-height: 0.533333rem;\n  font-size: 0.373333rem;\n  text-align: left;\n  word-break: break-word;\n}\n.erax-nft-item .erax-line-4 .a.b[data-v-1b4e6769] {\n  text-align: left;\n  color: #1b1b1b;\n}\n.erax-nft-item .erax-line-4 .a.x[data-v-1b4e6769] {\n  font-size: 0.426667rem;\n}\n.erax-nft-item .erax-line-4 .a .line-4-title[data-v-1b4e6769] {\n  font-weight: 400;\n  color: #979797;\n}\n.erax-nft-item .erax-line-4 .a .line-4-content[data-v-1b4e6769] {\n  font-weight: 500;\n  color: #1b1b1b;\n}\n.erax-nft-item .erax-line-4 .a .line-4-content.link[data-v-1b4e6769] {\n  color: #7632ff;\n  text-decoration: underline;\n}",""]),e.exports=r},384:function(e,t,n){"use strict";n.r(t);var r=n(11),o=(n(53),n(377),n(150),n(85),n(334)),c=n(117),l={name:"EraxNFT",props:{item:{type:Object,required:!0},idx:{type:Number},USDT:{type:Object,required:!0},dictData:{type:Object,required:!0}},components:{IMedia2:o.default},data:function(){return this.clearTags=c.a,{v:this.item,intervalTimeID:null,leftTime:0,isShowLine4:!1}},computed:{calcBidTime:function(){return this.leftTime<86400&&this.leftTime>0?this.$util.formatTime000000(this.leftTime):""},dPrice:function(){if(this.v.stCurrent.dPrice)return parseFloat(this.v.stCurrent.dPrice).toFixed(2)}},watch:{item:function(e){this.v=e},USDT:function(e){return e},dictData:function(e){return e}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.intervalTimeID=setInterval((function(){e.leftTime=(e.v.stCurrent.iExpirationDate-new Date)/1e3,e.leftTime<=0&&clearInterval(e.intervalTimeID)}),1e3);case 1:case"end":return t.stop()}}),t)})))()},methods:{handleLoadMore:function(){this.isShowLine4=!this.isShowLine4,this.isShowLine4&&(this.$set(this.v,"isLoading",!0),this.$emit("callBack",this.idx))},getDoll:function(e){switch(this.dictData[e.sCurrency]){case"ETH":case"WETH":return(this.USDT.ETHUSDT*parseFloat(e.dPrice)).toFixed(2);case"BRD":return(this.USDT.BRDBTC*this.USDT.BTCUSDT*parseFloat(e.dPrice)).toFixed(2);case"NERA":case"ERAT":return(this.USDT.NERAUSDT*parseFloat(e.dPrice)).toFixed(2);default:return""}}},beforeDestroy:function(){clearInterval(this.intervalTimeID)}},d=(n(378),n(22)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"erax-nft-item"},[e.calcBidTime?n("div",{staticClass:"erax-line-1"},[n("span",{staticClass:"erax-bid-time"},[e._v("倒计时： "+e._s(e.calcBidTime))])]):e._e(),e._v(" "),n("IMedia2",{staticClass:"erax-nft-logo",attrs:{url:e.v.sDataUrl}}),e._v(" "),n("div",{staticClass:"erax-line-2"},[n("span",{staticClass:"erax-nft-name"},[e._v(e._s(e.v.sName))]),e._v(" "),e.v.stCurrent&&0!==e.v.stCurrent.iSellType?n("div",{staticClass:"erax-prise-box"},[n("img",{staticClass:"erax-prise-img",attrs:{src:e.v.stCurrent.sCurrencyIcon,alt:""}}),e._v(" "),n("span",{staticClass:"erax-prise"},[e._v(e._s(e._f("formatNera")(e.v.stCurrent.dPrice)))]),e._v(" "),n("span",{staticClass:"erax-prise-doll"},[e._v("$"+e._s(e._f("formatNera")(e.getDoll(e.v.stCurrent))))])]):e._e()]),e._v(" "),n("div",{staticClass:"erax-line-3"},[n("div",{staticClass:"erax-collections"},[n("img",{staticClass:"erax-collections-img",attrs:{src:e.v.stCollection.sLogoImg,alt:""}}),e._v(" "),n("span",{staticClass:"erax-collections-name"},[e._v(e._s(e.v.stCollection.sCollectionName))])]),e._v(" "),n("span",{staticClass:"erax-info-more",on:{click:e.handleLoadMore}},[e._v("更多\n      "),n("van-icon",{class:["erax-info-more-icon",{z:e.isShowLine4}],attrs:{name:"play"}})],1)]),e._v(" "),e.isShowLine4?n("div",{staticClass:"erax-line-4"},[n("div",{staticClass:"a"},[n("span",{staticClass:"line-4-title"},[e._v("合约地址")]),e._v(" "),n("a",{staticClass:"line-4-content link",attrs:{href:"https://cn.etherscan.com/address/"+e.v.sContractAddress,target:"_blank"}},[e._v(e._s(e._f("filterHideMid")(e.v.sContractAddress,16)))])]),e._v(" "),n("div",{staticClass:"a"},[n("span",{staticClass:"line-4-title"},[e._v("Token ID")]),e._v(" "),n("span",{staticClass:"line-4-content"},[e._v(e._s(e._f("filterHideMid")(e.v.sTokenId,20)))])]),e._v(" "),n("div",{staticClass:"a"},[n("span",{staticClass:"line-4-title"},[e._v("区块链")]),e._v(" "),n("span",{staticClass:"line-4-content"},[e._v(e._s(e.v.sBlockchain))])]),e._v(" "),e.v.iOfferCount?n("div",{staticClass:"a"},[n("span",{staticClass:"line-4-title"},[e._v("报价次数")]),e._v(" "),n("span",{staticClass:"line-4-content"},[e._v(e._s(e.v.iOfferCount))])]):e._e(),e._v(" "),e.v.iLastOfferTime?n("div",{staticClass:"a"},[n("span",{staticClass:"line-4-title"},[e._v("最后报价时间")]),e._v(" "),n("span",{staticClass:"line-4-content"},[e._v(e._s(e._f("formatDate")(e.v.iLastOfferTime,"yyyy-MM-dd hh:mm:ss")))])]):e._e(),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"a x",domProps:{innerHTML:e._s(e.clearTags(e.v.sDescription))}})]):e._e()],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"a"},[n("span",{staticClass:"line-4-title"},[e._v("作品描述")])])}],!1,null,"1b4e6769",null);t.default=component.exports},428:function(e,t,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("6208cc09",content,!0,{sourceMap:!1})},517:function(e,t,n){"use strict";n(428)},518:function(e,t,n){var r=n(34)(!1);r.push([e.i,"#erax-home[data-v-2e1c7702] {\n  height: 100%;\n  min-height: calc(100vh - 0.8rem);\n}\n.erax-alert[data-v-2e1c7702] {\n  background-color: #FFF6DC;\n  display: flex;\n  align-items: center;\n  padding: 0.133333rem 0.32rem;\n  font-size: 0.186667rem;\n  line-height: 0.266667rem;\n  box-sizing: border-box;\n  color: #DB9657;\n  margin: 0.2rem 0.16rem 0.066667rem 0.16rem;\n  box-shadow: 0 0.026667rem 0.04rem 0 rgba(0, 0, 0, 0.16);\n}\n.erax-alert .icon[data-v-2e1c7702] {\n  margin-left: 0.133333rem;\n}\n.erax-nfts .list-item[data-v-2e1c7702] {\n  margin: 0.2rem 0.16rem;\n}\n.erax-nfts .erax-nfts-empty[data-v-2e1c7702] {\n  text-align: center;\n  padding: 25% 0;\n}",""]),e.exports=r},547:function(e,t,n){"use strict";n.r(t);n(43),n(31),n(37),n(54),n(55),n(66),n(24),n(48),n(67),n(45),n(68),n(69),n(50);var r=n(11),o=n(23),c=(n(53),n(36),n(97),n(384)),l=n(57);function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var h={name:"Nfts",components:{EraxNFT:c.default},data:function(){return{isAlert:!1,isLoading:!1,refreshing:!1,finished:!1,iTotal:0,iPageNo:0,vItems:[],dictData:{},USDT:{}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)(["searchText"])),watch:{searchText:function(e,t){console.log(e,t),this.iPageNo=0,this.iTotal=0,this.vItems=[],this.onRefresh()}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isAlert=!("1"===localStorage.getItem("home_alert")),t.next=3,e.$axios.post("/v1/emall/GetDictData",{iDictType:4});case 3:n=t.sent,r=n.vDictData,o={},c=d(r);try{for(c.s();!(l=c.n()).done;)f=l.value,o[f.sDictValue]=f.sDictText}catch(e){c.e(e)}finally{c.f()}e.dictData=o,e.$axios.post("v1/market/GetSymbolTick",{vSymbol:["btcusdt@miniTicker","ethusdt@miniTicker","brdbtc@miniTicker","nerausdt@miniTicker"]}).then((function(t){t.vSymbolTick.forEach((function(t){e.$set(e.USDT,t.s,t.c)}))})).catch((function(e){}));case 10:case"end":return t.stop()}}),t)})))()},methods:{handleHideAlert:function(){localStorage.setItem("home_alert","1"),this.isAlert=!1},onRefresh:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.iPageNo=0,e.iTotal=0,e.vItems=[],e.refreshing=!0,e.isLoading=!0,e.finished=!1,t.next=8,e.getExploreItemList();case 8:case"end":return t.stop()}}),t)})))()},onInfinite:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.finished=!1,e.isLoading=!0,t.next=4,e.getExploreItemList();case 4:case"end":return t.stop()}}),t)})))()},getExploreItemList:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("/v1/emall/ExploreItemList",{iSort:2,iPageNo:e.iPageNo,iPageNum:10,vSearchKey:e.searchText?[e.searchText]:[""]}).then((function(t){e.iTotal=t.iTotal,e.vItems=e.vItems.concat(t.vItems),e.isLoading=!1,e.refreshing=!1,e.iPageNo++}));case 2:case"end":return t.stop()}}),t)})))()},getExploreItem:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.post("/v1/emall/ExploreItem",{iItemId:t.vItems[e].iItemId}).then((function(n){t.$set(t.vItems,e,n.stItem)}));case 2:case"end":return n.stop()}}),n)})))()}}},v=(n(517),n(22)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"erax-home"}},[n("van-list",{staticClass:"erax-nfts",attrs:{finished:e.finished},on:{load:e.onInfinite},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[e.vItems.length>0?e._l(e.vItems,(function(t,r){return n("EraxNFT",{key:r,staticClass:"list-item",attrs:{item:t,idx:r,USDT:e.USDT,dictData:e.dictData},on:{callBack:e.getExploreItem}})})):n("div",{staticClass:"erax-nfts-empty"})],2)],1)}),[],!1,null,"2e1c7702",null);t.default=component.exports}}]);