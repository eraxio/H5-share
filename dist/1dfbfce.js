(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{339:function(e,n,t){var content=t(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(35).default)("5a6dc60c",content,!0,{sourceMap:!1})},342:function(e,n,t){e.exports=t.p+"img/nera.21ea076.png"},345:function(e,n,t){e.exports=t.p+"img/isMp4.4f07629.png"},346:function(e,n,t){e.exports=t.p+"img/music.899c6a2.gif"},347:function(e,n,t){e.exports=t.p+"img/music_static.e8a2f61.png"},349:function(e,n,t){"use strict";t(339)},350:function(e,n,t){var o=t(34)(!1);o.push([e.i,".media[data-v-15cef168] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.el-image[data-v-15cef168] {\n  width: 100%;\n  height: 100%;\n}\n.media-container[data-v-15cef168] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.media-container .media-gif[data-v-15cef168] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.media-container .media-control[data-v-15cef168] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0.133333rem;\n  color: #FFFFFF;\n  font-size: 0.533333rem;\n  height: 0.533333rem;\n  display: flex;\n  justify-content: center;\n  z-index: 120;\n}\n.media-container .media-control-bar[data-v-15cef168] {\n  bottom: 0;\n  position: absolute;\n  z-index: 10;\n  height: 0.08rem;\n  left: 0;\n  background-color: #5b90ed;\n}\n[data-v-15cef168] .el-image__inner {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.video[data-v-15cef168] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\naudio[data-v-15cef168] {\n  width: 100%;\n}\n.sign[data-v-15cef168] {\n  position: absolute;\n  top: 0.266667rem;\n  right: 0.266667rem;\n  z-index: 1;\n  font-size: 0.266667rem;\n  text-shadow: 0 0 0.066667rem rgba(9, 1, 4, 0.3);\n  color: #fff;\n}\n.popVideo[data-v-15cef168] {\n  width: 100%;\n}\n.container[data-v-15cef168] {\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}",""]),e.exports=o},351:function(e,n,t){"use strict";t.r(n);var o=t(23),r=(t(38),t(344),t(158),t(76)),d={components:Object(o.a)({},r.a.Component.name,r.a.Component),props:{url:{type:String,default:function(){return""}},isPopVideo:{type:Boolean,default:function(){return!1}},isPopImg:{type:Boolean,default:function(){return!1}},oImgList:{type:Array,default:function(){return[]}},imgIndex:{type:Number,default:0}},data:function(){return{dialogVisible:!1,isPlaying:!1,camera:null,scene:null,renderer:null,mush:null,loader:null,mixer:null,controls:null,time:(new Date).getTime(),duration:0,currentTime:0}},computed:{controlsWidth:function(){return{width:(this.currentTime/this.duration*100).toFixed(2)+"%"}}},mounted:function(){this.url},watch:{url:function(e,ol){e&&this.$nextTick((function(){}))}},methods:{handleShowPic:function(){this.oImgList.length?Object(r.a)({images:this.oImgList,closeable:!0,startPosition:this.imgIndex,lockScroll:!1}):Object(r.a)({images:[this.url],closeable:!0,lockScroll:!1})},getDuration:function(){this.$refs.player&&(this.duration=this.$refs.player.duration)},updateTime:function(e){this.currentTime=e.target.currentTime},handleOnePlay:function(){this.isPlaying?(this.$refs.player.pause(),this.isPlaying=!1):(this.$refs.player.play(),this.isPlaying=!0)},getType:function(){return/\.(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG|svg|SVG)$/.test(this.url)?"img":/\.(mp4|webm|wav|ogg|MP4|MOV|WEBM|WAV|OGG)$/.test(this.url)?"video":/\.(mp3|MP3)$/.test(this.url)?"mp3":"3D"},createRect:function(){var e=new THREE.PlaneGeometry(1e3,1e3),n=new THREE.MeshBasicMaterial({color:11184810});return new THREE.Mesh(e,n)},handleClose:function(){this.$refs.popvideo.pause(),this.dialogVisible=!1},playVideo:function(){var e=this;if(!this.isPopVideo)return!1;this.dialogVisible=!0,this.$nextTick((function(){e.$refs.popvideo.currentTime=0,e.$refs.popvideo.play()}))},init:function(){var e=this;if("3D"===this.getType()){var n=document.getElementById("container"+this.time);this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.scene=new THREE.Scene;(new GLTFLoader).load(this.url,(function(n){e.scene.add(n.scene)}));var t=new THREE.AmbientLight(4210752,10);this.scene.add(t);var o=new THREE.DirectionalLight(16777215);this.scene.add(o);var r=new THREE.SpotLight(16777215);r.position.set(100,1e3,100),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.near=500,r.shadow.camera.far=4e3,r.shadow.camera.fov=30,this.scene.add(r),(t=new THREE.PointLight(16711680,1,100)).position.set(50,50,50),this.scene.add(t);window.innerWidth,window.innerHeight;this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(n.clientWidth,n.clientHeight),n.appendChild(this.renderer.domElement),this.controls=new OrbitControls(this.camera,this.renderer.domElement)}},render:function(){"3D"===this.getType()&&(requestAnimationFrame(this.render),this.renderer.render(this.scene,this.camera))}}},l=(t(349),t(22)),component=Object(l.a)(d,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"media"},["img"===e.getType()?o("van-image",{staticClass:"el-image",attrs:{fit:"cover","lazy-load":"",src:e.url},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),e.handleShowPic.apply(null,arguments)}}}):e._e(),e._v(" "),"video"===e.getType()?o("div",{staticClass:"media-container",on:{click:function(n){return n.stopPropagation(),e.handleOnePlay.apply(null,arguments)}}},[o("img",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!isPlaying"}],staticClass:"media-gif",attrs:{src:t(345),alt:""}}),e._v(" "),o("video",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],ref:"player",staticClass:"video",attrs:{loop:"",src:e.url,"webkit-playsinline":"true",playsinline:"true","x5-playsinline":"true",poster:e.url+"?vframe/jpg/offset/1"},on:{click:e.playVideo}})]):e._e(),e._v(" "),"mp3"===e.getType()?o("div",{staticClass:"media-container",on:{click:function(n){return n.stopPropagation(),e.handleOnePlay.apply(null,arguments)}}},[e.isPlaying?o("img",{staticClass:"media-gif",attrs:{src:t(346),alt:""}}):o("img",{staticClass:"media-gif",attrs:{src:t(347),alt:""}}),e._v(" "),o("div",{staticClass:"media-control-bar",style:e.controlsWidth}),e._v(" "),o("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"player",attrs:{controls:"",loop:"",src:e.url},on:{canplay:e.getDuration,timeupdate:e.updateTime}})]):e._e(),e._v(" "),"mp3"===e.getType()?o("van-icon",{staticClass:"sign",attrs:{name:"music-o"}}):e._e(),e._v(" "),"video"===e.getType()?o("van-icon",{staticClass:"sign",attrs:{name:"video-o"}}):e._e()],1)}),[],!1,null,"15cef168",null);n.default=component.exports},390:function(e,n,t){var content=t(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(35).default)("4df026a3",content,!0,{sourceMap:!1})},457:function(e,n,t){"use strict";t(390)},458:function(e,n,t){var o=t(34)(!1);o.push([e.i,'.o-issue-box.main[data-v-ed432644] {\n  width: 8rem;\n}\n.o-issue-box .o-box[data-v-ed432644] {\n  width: 8rem;\n}\n.o-issue-box .o-box .o-offer[data-v-ed432644] {\n  width: 8rem;\n  height: 12rem;\n  margin: 0 auto;\n  background-size: 100% 100%;\n}\n.o-issue-box .o-box .o-offer .o-year-line[data-v-ed432644] {\n  position: relative;\n  padding: 0.586667rem 0.293333rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.o-issue-box .o-box .o-offer .o-year-line[data-v-ed432644]:after {\n  content: "";\n  position: absolute;\n  height: 0.026667rem;\n  left: 0.586667rem;\n  right: 0.586667rem;\n  background: rgba(49, 49, 49, 0.1);\n}\n.o-issue-box .o-box .o-offer .o-year-line .o-year[data-v-ed432644] {\n  position: relative;\n  font-weight: 700;\n  border-radius: 0.133333rem;\n  font-size: 0.453333rem;\n  text-align: center;\n  font-family: Arial, Arial-Regular, serif;\n}\n.o-issue-box .o-box .o-offer .o-year-line .o-year.--0[data-v-ed432644] {\n  background: #ffffff;\n  border: 0.026667rem solid #e5e5e5;\n  padding: 0 0.32rem;\n  color: #1d1d1d;\n  line-height: 0.8rem;\n  position: absolute;\n  z-index: 1;\n}\n.o-issue-box .o-box .o-offer .o-year-line .o-year.--0 .o-clock[data-v-ed432644] {\n  position: absolute;\n  font-size: 0.24rem;\n  bottom: -0.173333rem;\n  left: 0;\n  right: 0;\n  color: #1D1D1D;\n}\n.o-issue-box .o-box .o-offer .o-year-line .o-year.--1[data-v-ed432644] {\n  line-height: 0.8rem;\n  color: #bfbfbf;\n  font-weight: 600;\n}\n.o-issue-box .o-box .o-offer .o-year-line .o-year.--2[data-v-ed432644] {\n  font-size: 0.373333rem;\n  line-height: 0.8rem;\n  color: #e9e9e9;\n  font-weight: 400;\n}\n.o-issue-box .o-box .o-offer .o-year-line .o-year.--3[data-v-ed432644] {\n  width: 1.706667rem;\n}\n.o-issue-box .o-box .o-offer .o-title[data-v-ed432644] {\n  font-size: 0.4rem;\n  font-weight: 700;\n  text-align: center;\n  color: #1d1d1d;\n  line-height: 0.48rem;\n  margin: 0 0.586667rem 0.266667rem;\n}\n.o-issue-box .o-box .o-offer .o-task-rewards[data-v-ed432644] {\n  padding: 0 0.586667rem;\n  font-size: 0.24rem;\n  text-align: right;\n  color: #7e7e7e;\n  margin-bottom: 0.133333rem;\n}\n.o-issue-box .o-box .o-offer .o-task-info[data-v-ed432644] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0.266667rem;\n  padding: 0 0.32rem 0.266667rem;\n  border-bottom: 0.026667rem solid #d2d2d2;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-task-user[data-v-ed432644] {\n  display: flex;\n  align-items: center;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-task-user .o-avatar[data-v-ed432644] {\n  width: 0.533333rem;\n  height: 0.533333rem;\n  border-radius: 50%;\n  margin-right: 0.133333rem;\n  object-fit: cover;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-task-user .o-nickname[data-v-ed432644] {\n  font-size: 0.373333rem;\n  font-weight: 400;\n  color: #1d1d1d;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-reward[data-v-ed432644] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 0.106667rem 0 0.56rem;\n  height: 0.613333rem;\n  background: #eeeeee;\n  border-radius: 0.133333rem;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-reward.no_accept[data-v-ed432644] {\n  padding: 0 0.106667rem;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-reward .o-good[data-v-ed432644] {\n  position: absolute;\n  left: -0.32rem;\n  display: inline-block;\n  width: 0.56rem;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.346667rem;\n  text-align: center;\n  background: linear-gradient(-45deg, #1ec5bf 0%, #65da99 100%);\n  color: #ffffff;\n  border-radius: 50%;\n  border: 0.08rem solid #FFFFFF;\n  box-sizing: content-box;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-reward .o-good.black[data-v-ed432644] {\n  color: #2D2D2D;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-reward .o-nera[data-v-ed432644] {\n  width: 0.32rem;\n  height: 0.32rem;\n  margin-right: 0.066667rem;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-reward .o-nera-price[data-v-ed432644] {\n  font-size: 0.293333rem;\n  color: #1d1d1d;\n  margin-right: 0.106667rem;\n}\n.o-issue-box .o-box .o-offer .o-task-info .o-reward .o-nera-dollar[data-v-ed432644] {\n  font-size: 0.293333rem;\n  color: #8E8E8E;\n}\n.o-issue-box .o-box .o-offer .o-reward-info[data-v-ed432644] {\n  position: relative;\n  box-sizing: content-box;\n  width: 7.44rem;\n  height: 6.666667rem;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0.453333rem 0 0.586667rem 0;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-img[data-v-ed432644] {\n  width: 7.386667rem;\n  height: 6.666667rem;\n  border-radius: 0.333333rem;\n  object-fit: cover;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info[data-v-ed432644] {\n  position: absolute;\n  top: 0.453333rem;\n  left: 0;\n  right: 0;\n  bottom: 0.586667rem;\n  padding: 0.266667rem;\n  border-radius: 0.333333rem;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line1[data-v-ed432644] {\n  display: flex;\n  justify-content: space-between;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line1 .o-cart[data-v-ed432644] {\n  background: #f9f9f9;\n  border-radius: 0.066667rem;\n  padding: 0 0.106667rem;\n  font-size: 0.266667rem;\n  font-weight: 400;\n  text-align: center;\n  color: #1d1d1d;\n  line-height: 0.56rem;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line1 .o-cart .fa-shopping-cart[data-v-ed432644] {\n  color: #7632ff;\n  margin-right: 0.08rem;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line1 .o-nft[data-v-ed432644] {\n  background: #f9f9f9;\n  border-radius: 0.066667rem;\n  padding: 0 0.106667rem;\n  color: #1d1d1d;\n  font-weight: 700;\n  font-size: 0.266667rem;\n  line-height: 0.56rem;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line2[data-v-ed432644] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0.133333rem 0.266667rem;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\n  border-radius: 0 0 0.333333rem 0.333333rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 2.666667rem;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line2 .o-user[data-v-ed432644] {\n  display: flex;\n  align-items: center;\n  text-align: left;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line2 .o-user .o-avatar[data-v-ed432644] {\n  width: 0.746667rem;\n  height: 0.746667rem;\n  border-radius: 50%;\n  margin-right: 0.2rem;\n  object-fit: cover;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line2 .o-user .o-nickname[data-v-ed432644] {\n  font-size: 0.266667rem;\n  font-weight: 400;\n  color: #f9f9f9;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line2 .o-user .o-time[data-v-ed432644] {\n  font-size: 0.266667rem;\n  font-weight: 400;\n  color: #f9f9f9;\n  opacity: 0.7;\n}\n.o-issue-box .o-box .o-offer .o-reward-info .o-answer-info .o-line2 .o-answer-title[data-v-ed432644] {\n  padding: 0.293333rem 0;\n  text-align: left;\n  font-size: 0.373333rem;\n  font-weight: 400;\n  color: #ffffff;\n}',""]),e.exports=o},622:function(e,n,t){"use strict";t.r(n);t(45),t(31),t(37),t(56),t(36),t(57);var o=t(23),r=t(58),d=t(351),l=(t(499),t(445));function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var m={name:"OReward",props:["vReward","rate"],components:{IMead:d.default,OSharePic:l.default},data:function(){return{showShare:!1,iAnswerId:0,iRewardsId:0}},computed:f(f({},Object(r.c)({userInfo:function(e){return e.userInfo},isLogin:function(e){return e.isLogin},nera:function(e){return e.nera}})),{},{ssDate:function(){return new Date(this.vReward.sDate).getFullYear()},vAnswer:function(){return this.vReward.vAnswer[0]},stUser:function(){return this.vReward.stUser||{}}}),watch:{nera:function(e){return e}},mounted:function(){},methods:{handleShare:function(){this.$router.push({name:"Share",query:{iAnswerId:this.vReward.vAnswer[0].iAnswerId},params:{shareControl:!0,noBack:!0}})},filterT:function(e,n){var t=(n||(new Date).getTime())-e,o=36e5,r=24*o,d=30*r,l=t/31104e6,c=t/d,f=t/(7*r),m=t/r,h=t/o,v=t/6e4;return l>=1?parseInt(l)+this.$t("Main35"):c>=1?parseInt(c)+this.$t("Main36"):f>=1?parseInt(f)+this.$t("Main37"):m>=1?parseInt(m)+this.$t("Main38"):h>=1?parseInt(h)+this.$t("Main39"):v>=1?parseInt(v)+this.$t("Main40"):this.$t("Main41")},toShareTwitter:function(){}}},h=(t(457),t(22)),component=Object(h.a)(m,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"o-issue-box main",on:{click:function(n){return e.$router.push("/reward/detail/"+e.vReward.iRewardId)}}},[o("div",{staticClass:"o-box"},[o("div",{staticClass:"o-offer"},[o("div",{staticClass:"o-year-line"},[o("p",{staticClass:"o-year --2"},[e._v(e._s(e.ssDate-2))]),e._v(" "),o("p",{staticClass:"o-year --1"},[e._v(e._s(e.ssDate-1))]),e._v(" "),o("p",{staticClass:"o-year --3"}),e._v(" "),o("p",{staticClass:"o-year --0"},[e._v(e._s(e.ssDate)),o("i",{staticClass:"far fa-clock o-clock"})]),e._v(" "),o("p",{staticClass:"o-year --1"},[e._v(e._s(e.ssDate+1))]),e._v(" "),o("p",{staticClass:"o-year --2"},[e._v(e._s(e.ssDate+2))])]),e._v(" "),o("p",{staticClass:"o-title van-multi-ellipsis--l2"},[e._v(e._s(e.vReward.sSubject))]),e._v(" "),e.vReward.iCheckAnswerFlag?o("p",{staticClass:"o-task-rewards"},[e._v(e._s(e.$t("Nav12")))]):e._e(),e._v(" "),o("div",{staticClass:"o-task-info"},[o("div",{staticClass:"o-task-user"},[o("img",{staticClass:"o-avatar",attrs:{src:e.vReward.stUser.sAvatar,alt:""}}),e._v(" "),o("span",{staticClass:"o-nickname"},[e._v(e._s(e.vReward.stUser.sName))])]),e._v(" "),o("div",{class:["o-reward",{no_accept:!e.vAnswer.iCheckStatus}]},[e.vAnswer.iCheckStatus?o("div",{staticClass:"o-good"},[o("i",{staticClass:"fas fa-check "})]):e._e(),e._v(" "),o("img",{staticClass:"o-nera",attrs:{src:t(342),alt:""}}),e._v(" "),o("span",{staticClass:"o-nera-price"},[e._v(e._s(e._f("formatNera")(e.vReward.iReward)))]),e._v(" "),o("span",{staticClass:"o-nera-dollar"},[e._v("($"+e._s(e._f("formatNera")(e.vReward.iReward*e.nera))+")")])])]),e._v(" "),o("div",{staticClass:"o-reward-info"},[/\.(mp4|webm|wav|ogg|MP4|MOV|WEBM|WAV|OGG)$/.test(e.vAnswer.sFileUrl)?o("img",{staticClass:"o-answer-img",attrs:{src:t(345),alt:""}}):o("img",{staticClass:"o-answer-img",attrs:{src:e.vAnswer.sFileUrl,alt:""}}),e._v(" "),o("div",{staticClass:"o-answer-info"},[o("div",{staticClass:"o-line1"},[e.vAnswer.iCheckStatus&&e.vAnswer.iCreateNFTFlag?o("div",{staticClass:"o-cart"},[o("i",{staticClass:"fas fa-shopping-cart"}),e._v("ERAX.IO\n            ")]):e._e(),e._v(" "),e.vAnswer.iCheckStatus&&e.vAnswer.iCreateNFTFlag?o("div",{staticClass:"o-nft"},[e._v("NFT")]):e._e()]),e._v(" "),o("div",{staticClass:"o-line2"},[o("div",{staticClass:"o-user"},[o("img",{staticClass:"o-avatar",attrs:{src:e.vAnswer.stUser.sAvatar,alt:""}}),e._v(" "),o("div",[o("p",{staticClass:"o-nickname"},[e._v(e._s(e.vAnswer.stUser.sName))]),e._v(" "),o("p",{staticClass:"o-time"},[e._v(e._s(e.filterT(e.vAnswer.iCreateTime)))])])]),e._v(" "),o("p",{staticClass:"o-answer-title van-ellipsis"},[e._v(e._s(e.vAnswer.sTitleName))])])])])])]),e._v(" "),o("div",{staticClass:"o-reward-answer-box"},[o("van-button",{staticClass:"o-reward-btn share",on:{click:function(n){return n.stopPropagation(),e.handleShare.apply(null,arguments)}}},[e._v(e._s(e.$t("Main23")))])],1)])}),[],!1,null,"ed432644",null);n.default=component.exports}}]);