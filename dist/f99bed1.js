(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{843:function(e,n,t){var content=t(858);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(52).default)("5f76cbe7",content,!0,{sourceMap:!1})},850:function(e,n,t){"use strict";t.r(n);t(254);var r=t(923),o={props:{url:{type:String,default:function(){return""}},realUrl:{type:String,default:function(){return""}},isPopVideo:{type:Boolean,default:function(){return!1}},isPopImg:{type:Boolean,default:function(){return!1}}},data:function(){return{dialogVisible:!1,isPlaying:!1,camera:null,scene:null,renderer:null,mush:null,loader:null,mixer:null,clock:new r.b,controls:null,time:(new Date).getTime(),duration:0,currentTime:0}},computed:{controlsWidth:function(){return{width:(this.currentTime/this.duration*100).toFixed(2)+"%"}}},mounted:function(){console.log("picURl",this.url),this.url&&(this.init(),this.render())},watch:{url:function(e,ol){var n=this;e&&this.$nextTick((function(){n.init(),n.render()}))}},methods:{getDuration:function(){this.$refs.player&&(this.duration=this.$refs.player.duration)},updateTime:function(e){this.currentTime=e.target.currentTime},handlePlay:function(){this.$refs.player.play(),this.isPlaying=!0},handlePause:function(){this.$refs.player.pause(),this.isPlaying=!1},getType:function(){return this.url?/\.(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG|svg|SVG)$/.test(this.url)?"img":/\.(mp4|webm|wav|ogg|MP4|WEBM|WAV|OGG)$/.test(this.url)?"video":/\.(mp3|MP3)$/.test(this.url)?"mp3":"3D":"img"},createRect:function(){var e=new r.g(1e3,1e3),n=new r.e({color:11184810});return new r.d(e,n)},handleClose:function(){this.$refs.popvideo.pause(),this.dialogVisible=!1},playVideo:function(){var e=this;if(!this.isPopVideo)return!1;this.dialogVisible=!0,this.$nextTick((function(){e.$refs.popvideo.currentTime=0,e.$refs.popvideo.play()}))},init:function(){var e=this;if("3D"===this.getType()){var n=document.getElementById("container"+this.time);this.camera=new r.f(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.scene=new r.i;(new GLTFLoader).load(this.url,(function(n){console.log("-------------"+n),e.scene.add(n.scene)}));var t=new r.a(4210752,10);this.scene.add(t);var o=new r.c(16777215);this.scene.add(o);var d=new r.j(16777215);d.position.set(100,1e3,100),d.castShadow=!0,d.shadow.mapSize.width=1024,d.shadow.mapSize.height=1024,d.shadow.camera.near=500,d.shadow.camera.far=4e3,d.shadow.camera.fov=30,this.scene.add(d),(t=new r.h(16711680,1,100)).position.set(50,50,50),this.scene.add(t);window.innerWidth,window.innerHeight;this.renderer=new r.k({antialias:!0}),this.renderer.setSize(n.clientWidth,n.clientHeight),n.appendChild(this.renderer.domElement),this.controls=new OrbitControls(this.camera,this.renderer.domElement)}},render:function(){"3D"===this.getType()&&(requestAnimationFrame(this.render),this.renderer.render(this.scene,this.camera))}}},d=(t(857),t(36)),component=Object(d.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"media"},["img"===e.getType()?t("img",{attrs:{src:e.url}}):e._e()])}),[],!1,null,"590809d8",null);n.default=component.exports},857:function(e,n,t){"use strict";t(843)},858:function(e,n,t){var r=t(51)(!1);r.push([e.i,".media[data-v-590809d8] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.media img[data-v-590809d8] {\n  width: 100%;\n}\n.el-image[data-v-590809d8] {\n  width: 100%;\n  height: 100%;\n}\n.media-container[data-v-590809d8] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.media-container .media-gif[data-v-590809d8] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.media-container .media-control[data-v-590809d8] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0.066667rem;\n  color: #FFFFFF;\n  font-size: 0.266667rem;\n  height: 0.266667rem;\n  display: flex;\n  justify-content: center;\n  z-index: 120;\n}\n.media-container .media-control-bar[data-v-590809d8] {\n  bottom: 0;\n  position: absolute;\n  z-index: 10;\n  height: 0.04rem;\n  left: 0;\n  background-color: #5b90ed;\n}\n[data-v-590809d8] .el-image__inner {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.video[data-v-590809d8] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\naudio[data-v-590809d8] {\n  width: 100%;\n}\n.sign[data-v-590809d8] {\n  position: absolute;\n  top: 0.133333rem;\n  right: 0.133333rem;\n  z-index: 1;\n  font-size: 0.266667rem;\n  text-shadow: 0 0 0.066667rem rgba(9, 1, 4, 0.3);\n  color: #fff;\n}\n.popVideo[data-v-590809d8] {\n  width: 100%;\n}\n[data-v-590809d8] .el-dialog {\n  background: transparent;\n  width: 70%;\n  max-width: 16rem;\n  border: 0;\n  box-shadow: none;\n}\n[data-v-590809d8] .el-dialog .el-dialog__close {\n  color: #fff;\n}\n[data-v-590809d8] .el-dialog .el-dialog__header {\n  padding: 0;\n}\n[data-v-590809d8] .el-dialog .el-dialog__headerbtn {\n  top: 0;\n}\n.container[data-v-590809d8] {\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}",""]),e.exports=r}}]);