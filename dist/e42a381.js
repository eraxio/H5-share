(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1e3:function(e,t,n){"use strict";n(910)},1001:function(e,t,n){var r=n(51)(!1);r.push([e.i,".o-uploader[data-v-eece45d6] {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  margin: 0 auto;\n  margin-bottom: 0.266667rem;\n  position: relative;\n}\n.o-uploader[data-v-eece45d6] .van-uploader__preview {\n  margin: 0;\n}\n.o-uploader[data-v-eece45d6] .van-uploader__preview .van-uploader__preview-delete {\n  border-radius: 0 0.133333rem 0 0.32rem;\n}\n.o-uploader .o-delete[data-v-eece45d6] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0.506667rem;\n  height: 0.453333rem;\n  background: #c7c7c7;\n  line-height: 0.453333rem;\n  border-radius: 0 0 0 50%;\n  z-index: 999;\n}\n.o-uploader .img[data-v-eece45d6],\n.o-uploader #o-video[data-v-eece45d6] {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  object-fit: cover;\n}\n.o-uploader .o-uploader-upload[data-v-eece45d6],\n.o-uploader[data-v-eece45d6] .van-uploader__preview-image {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  background: #ffffff;\n  border-radius: 0.133333rem;\n  box-shadow: 0 0 0.2rem 0 rgba(5, 0, 0, 0.15);\n  text-align: center;\n  margin-bottom: 0.666667rem;\n}\n.o-uploader .o-uploader-upload .icon-image[data-v-eece45d6],\n.o-uploader[data-v-eece45d6] .van-uploader__preview-image .icon-image {\n  font-size: 2.133333rem;\n  line-height: 3.066667rem;\n  color: #E7E7E7;\n}",""]),e.exports=r},1096:function(e,t,n){"use strict";n.r(t);n(64),n(41),n(55),n(80),n(54),n(81);var r=n(14),o=n(33),l=(n(53),n(29),n(74),n(91),n(82));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"Answer",data:function(){return{fileList:[],showNFT:!1,iRewardShow:!1,NeraList:[50,100,200,500,1e3],oAnswer:{}}},components:{ONeraKeyboard:n(393).default},computed:d(d({},Object(l.c)({step:function(e){return e.reward.step},nera:function(e){return e.nera}})),{},{disabledStep2:function(){var e=this.oAnswer,t=e.sTitleName,n=e.iCreateNFTFlag,r=e.iPrice;return!t||n&&!r}}),watch:{step:function(e){return e},nera:function(e){return e}},mounted:function(){this.$store.commit("reward/SET_STEP",0)},methods:{asyncValidator:function(e,t){var n=this;return new Promise(function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(o){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(e<1||e>1e4)&&(t.message=n.$t("Main42"),o(!1)),o(!0);case 2:case"end":return r.stop()}}),r)})));return function(e){return o.apply(this,arguments)}}())},handleStep:function(){this.$store.commit("reward/SET_STEP",1)},handleChange:function(e){e&&(this.showNFT=e)},handleSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:data=d(d({},e.oAnswer),{},{iRewardId:+e.$route.query.iRewardId,iCreateNFTFlag:e.oAnswer.iCreateNFTFlag?1:0}),e.$axios.post("/v1/emall/CreateRewardsAnswer",data).then((function(t){e.$toast(e.$t("Tip02")),console.log(t),e.$route.query.page?e.$router.replace({name:"Detail",params:{iRewardId:e.$route.query.iRewardId,iAnswerId:t.iAnswerId}}):e.$router.go(-1)})).catch((function(e){})).finally((function(){e.$store.commit("reward/SET_STEP",0),e.$store.dispatch("UPDATE_USERINFO")}));case 2:case"end":return t.stop()}}),t)})))()},afterRead:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,data,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.file,(data=new FormData).append("file",r),n.next=5,t.$axios.post("/v1/oss/PublicUpload",data);case 5:(o=n.sent).vUrlPath.length&&t.$set(t.oAnswer,"sFileUrl",o.vUrlPath[0]);case 7:case"end":return n.stop()}}),n)})))()},handleRemove:function(){this.fileList=[],this.$set(this.oAnswer,"sFileUrl","")},handleDelete:function(e){return this.$set(this.oAnswer,"sFileUrl",""),!0},onOversize:function(e){this.$toast(this.$t("Tip04"))},onClose:function(e){this.$refs.oForm.validate("iPrice")},onInput:function(e){var t=this.oAnswer.iPrice||"";if(""===(t+="")&&"."===e)t="0";else{if(-1!==t.indexOf(".")&&"."===e)return;if(-1!==t.indexOf("0")&&1===t.length&&0===e)return;if(/\.\d{2}$/.test(t))return}t+=e,this.$set(this.oAnswer,"iPrice",t)},onDelete:function(){var e=this.oAnswer.iPrice||"";e&&(e=e.substring(0,e.length-1),this.$set(this.oAnswer,"iPrice",e))},handlePlay:function(){document.getElementById("o-video").play()}}},v=(n(1e3),n(32)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"r-offer"}},[r("div",{staticClass:"o-offer-bbox"},[r("div",{staticClass:"o-offer-box"},[r("div",{staticClass:"o-offer-title"},[r("span",[e._v(e._s(e.$t("Main02")))])]),e._v(" "),r("van-form",{ref:"oForm",staticClass:"o-offer-content o-form",on:{submit:e.handleSubmit}},[0===e.step?r("div",{staticClass:"o-form-item center"},[e.fileList.length?r("div",{staticClass:"o-uploader"},[e._l(e.fileList,(function(t){return[r("div",{staticClass:"o-delete",on:{click:e.handleRemove}},[r("i",{staticClass:"fas fa-times"})]),e._v(" "),t.content.includes("image")?r("img",{staticClass:"img",attrs:{src:t.content,alt:""}}):e._e(),e._v(" "),t.content.includes("video")?r("video",{attrs:{id:"o-video",src:t.content,muted:""},domProps:{muted:!0},on:{click:e.handlePlay}}):e._e()]}))],2):r("van-uploader",{staticClass:"o-uploader",attrs:{accept:"image/*,video/*,.webm","max-count":1,"max-size":104857600,"after-read":e.afterRead,"before-delete":e.handleDelete},on:{oversize:e.onOversize},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}},[r("div",{staticClass:"o-uploader-upload"},[r("i",{staticClass:"iconfont icon-image"})])]),e._v(" "),r("p",{staticClass:"o-form-item-label uploader"},[e._v(e._s(e.$t("Main03")))]),e._v(" "),r("p",{staticClass:"o-form-item-des uploader"},[e._v(e._s(e.$t("Main04")))])],1):e._e(),e._v(" "),1===e.step?[r("div",{staticClass:"o-form-item"},[r("p",{staticClass:"o-form-item-label"},[e._v(e._s(e.$t("Main05")))]),e._v(" "),r("van-field",{staticClass:"o-form-field",attrs:{type:"textarea",autosize:"",autosize:{minHeight:20,maxHeight:160},"show-word-limit":"",maxlength:"50"},model:{value:e.oAnswer.sTitleName,callback:function(t){e.$set(e.oAnswer,"sTitleName",t)},expression:"oAnswer.sTitleName"}})],1),e._v(" "),r("div",{staticClass:"o-form-item flex",staticStyle:{"margin-bottom":".13rem"}},[r("p",{staticClass:"o-form-item-label clear nft"},[e._v(e._s(e.$t("Main18")))]),e._v(" "),r("p",{staticClass:"o-form-item-icon",on:{click:function(t){e.showNFT=!0}}},[r("i",{staticClass:"far fa-question-circle"})]),e._v(" "),r("van-switch",{staticClass:"o-form-switch",attrs:{size:"0.53333rem"},on:{change:e.handleChange},model:{value:e.oAnswer.iCreateNFTFlag,callback:function(t){e.$set(e.oAnswer,"iCreateNFTFlag",t)},expression:"oAnswer.iCreateNFTFlag"}})],1),e._v(" "),e.oAnswer.iCreateNFTFlag?r("div",{staticClass:"o-form-item"},[r("van-field",{staticClass:"o-form-choice border",attrs:{"is-link":"",readonly:"",name:"iPrice",rules:[{required:!0,validator:e.asyncValidator}],placeholder:e.$t("Main08")},nativeOn:{touchstart:function(t){t.stopPropagation(),e.iRewardShow=!0}},model:{value:e.oAnswer.iPrice,callback:function(t){e.$set(e.oAnswer,"iPrice",t)},expression:"oAnswer.iPrice"}}),e._v(" "),r("p",{staticClass:"o-form-des"},[e._v(e._s(e.$t("Main20")))]),e._v(" "),r("van-number-keyboard",{attrs:{theme:"custom","get-container":"body","extra-key":["00","."],show:e.iRewardShow,"close-button-text":e.$t("Main44")},on:{blur:function(t){e.iRewardShow=!1},close:e.onClose,input:e.onInput,delete:e.onDelete},scopedSlots:e._u([{key:"title-left",fn:function(){return[e.oAnswer.iPrice?r("span",[e._v(e._s(e._f("formatNera")(e.oAnswer.iPrice))+"Nera ($"+e._s(e._f("formatNera")(e.oAnswer.iPrice*e.nera))+")")]):e._e()]},proxy:!0}],null,!1,58773746)})],1):e._e()]:e._e(),e._v(" "),r("div",{staticClass:"o-offer-submit"},[0===e.step?r("van-button",{staticClass:"o-btn-submit",attrs:{disabled:!e.oAnswer.sFileUrl},on:{click:e.handleStep}},[e._v(e._s(e.$t("Main17"))+"\n          ")]):e._e(),e._v(" "),1===e.step?r("van-button",{staticClass:"o-btn-submit",attrs:{disabled:e.disabledStep2,"native-type":"submit"}},[e._v(e._s(e.$t("Main07"))+"\n          ")]):e._e()],1)],2)],1)]),e._v(" "),r("van-popup",{staticClass:"o-create-nft-pop",model:{value:e.showNFT,callback:function(t){e.showNFT=t},expression:"showNFT"}},[r("div",{staticClass:"o-pop-box"},[r("div",{staticClass:"o-nft-box"},[r("p",{staticClass:"o-show-title"},[e._v(e._s(e.$t("Billboard26")))]),e._v(" "),r("div",{staticClass:"o-nft"},[r("div",{staticClass:"o-image"},[r("p",{staticClass:"o-image-title"},[e._v(e._s(e.$t("Billboard29")))])]),e._v(" "),r("div",{staticClass:"o-ul"},[r("div",{staticClass:"o-li"},[r("p",[e._v(e._s(e.$t("Billboard24")))]),e._v(" "),r("div",{staticClass:"o-li-r"},[r("p",{staticClass:"o-li-prise"},[e._v(e._s(e.$t("Billboard25")))]),e._v(" "),r("img",{staticClass:"o-li-nera",attrs:{src:n(802),alt:""}}),e._v("\n                1k\n              ")])]),e._v(" "),r("div",{staticClass:"o-li"},[r("div",{staticClass:"o-li-r"},[r("img",{staticClass:"o-erax",attrs:{src:n(411),alt:""}}),e._v(" "),r("span",{staticClass:"o-title"},[e._v("ERAX Official")])]),e._v(" "),r("p",[e._v("$100.00")])])])])]),e._v(" "),r("div",{staticClass:"o-popup-content"},[r("p",[e._v(e._s(e.$t("Main19")))]),e._v(" "),r("div",{staticClass:"o-btn"},[r("van-button",{staticClass:"o-btn-yes",on:{click:function(t){t.stopPropagation(),e.showNFT=!1}}},[e._v(e._s(e.$t("Billboard14")))])],1)])])])],1)}),[],!1,null,"eece45d6",null);t.default=component.exports},802:function(e,t,n){e.exports=n.p+"img/nera.21ea076.png"},910:function(e,t,n){var content=n(1001);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("6d613e59",content,!0,{sourceMap:!1})}}]);