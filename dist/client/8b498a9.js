(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{420:function(e,t,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("6f902df6",content,!0,{sourceMap:!1})},497:function(e,t,n){"use strict";n(420)},498:function(e,t,n){var o=n(34)(!1);o.push([e.i,".o-uploader[data-v-a22f4f3e] {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  margin: 0 auto;\n  margin-bottom: 0.266667rem;\n  position: relative;\n}\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview {\n  margin: 0;\n}\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview .van-uploader__preview-delete {\n  border-radius: 0 0.133333rem 0 0.32rem;\n}\n.o-uploader .o-delete[data-v-a22f4f3e] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0.506667rem;\n  height: 0.453333rem;\n  background: #c7c7c7;\n  line-height: 0.453333rem;\n  border-radius: 0 0 0 50%;\n  z-index: 999;\n}\n.o-uploader .img[data-v-a22f4f3e],\n.o-uploader #o-video[data-v-a22f4f3e] {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  object-fit: cover;\n}\n.o-uploader .o-uploader-upload[data-v-a22f4f3e],\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview-image {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  background: #ffffff;\n  border-radius: 0.133333rem;\n  box-shadow: 0 0 0.2rem 0 rgba(5, 0, 0, 0.15);\n  text-align: center;\n  margin-bottom: 0.666667rem;\n}\n.o-uploader .o-uploader-upload .icon-image[data-v-a22f4f3e],\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview-image .icon-image {\n  font-size: 2.133333rem;\n  line-height: 3.066667rem;\n  color: #E7E7E7;\n}",""]),e.exports=o},541:function(e,t,n){"use strict";n.r(t);n(43),n(31),n(37),n(54),n(36),n(55);var o=n(11),r=n(23),l=(n(53),n(24),n(78),n(57));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"Answer",data:function(){return{fileList:[],showNFT:!1,iRewardShow:!1,NeraList:[50,100,200,500,1e3],oAnswer:{}}},computed:d(d({},Object(l.c)({step:function(e){return e.reward.step}})),{},{disabledStep2:function(){var e=this.oAnswer,t=e.sTitleName,n=e.iCreateNFTFlag,o=e.iPrice;return!t||n&&!o}}),watch:{step:function(e){return e}},mounted:function(){this.$store.commit("reward/SET_STEP",0)},methods:{asyncValidator:function(e,t){var n=this;return new Promise(function(){var r=Object(o.a)(regeneratorRuntime.mark((function o(r){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:(e<1||e>1e4)&&(t.message=n.$t("Main42"),r(!1)),r(!0);case 2:case"end":return o.stop()}}),o)})));return function(e){return r.apply(this,arguments)}}())},handleStep:function(){this.$store.commit("reward/SET_STEP",1)},handleSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:data=d(d({},e.oAnswer),{},{iRewardId:+e.$route.query.iRewardId,iCreateNFTFlag:e.oAnswer.iCreateNFTFlag?1:0}),e.$axios.post("/v1/emall/CreateRewardsAnswer",data).then((function(t){e.$toast(e.$t("Tip02")),e.$router.go(-1),console.log(t)})).catch((function(e){})).finally((function(){e.$store.commit("reward/SET_STEP",0),e.$store.dispatch("UPDATE_USERINFO")}));case 2:case"end":return t.stop()}}),t)})))()},afterRead:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,data,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.file,(data=new FormData).append("file",o),n.next=5,t.$axios.post("/v1/oss/PublicUpload",data);case 5:(r=n.sent).vUrlPath.length&&t.$set(t.oAnswer,"sFileUrl",r.vUrlPath[0]);case 7:case"end":return n.stop()}}),n)})))()},handleRemove:function(){this.fileList=[],this.$set(this.oAnswer,"sFileUrl","")},handleDelete:function(e){return this.$set(this.oAnswer,"sFileUrl",""),!0},onOversize:function(e){this.$toast(this.$t("Tip04"))},onClose:function(e){this.$refs.oForm.validate("iPrice")},handleDiy:function(e){this.$set(this.oAnswer,"iPrice",e.toString())},onInput:function(){},onDelete:function(){},handlePlay:function(){document.getElementById("o-video").play()}}},m=(n(497),n(22)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"r-offer"}},[n("div",{staticClass:"o-offer-bbox"},[n("div",{staticClass:"o-offer-box"},[n("div",{staticClass:"o-offer-title"},[n("span",[e._v(e._s(e.$t("Main02")))])]),e._v(" "),n("van-form",{ref:"oForm",staticClass:"o-offer-content o-form",on:{submit:e.handleSubmit}},[0===e.step?n("div",{staticClass:"o-form-item center"},[e.fileList.length?n("div",{staticClass:"o-uploader"},[e._l(e.fileList,(function(t){return[n("div",{staticClass:"o-delete",on:{click:e.handleRemove}},[n("i",{staticClass:"fas fa-times"})]),e._v(" "),t.content.includes("image")?n("img",{staticClass:"img",attrs:{src:t.content,alt:""}}):e._e(),e._v(" "),t.content.includes("video")?n("video",{attrs:{id:"o-video",src:t.content,muted:""},domProps:{muted:!0},on:{click:e.handlePlay}}):e._e()]}))],2):n("van-uploader",{staticClass:"o-uploader",attrs:{accept:"image/*,video/*,.webm","max-count":1,"max-size":104857600,"after-read":e.afterRead,"before-delete":e.handleDelete},on:{oversize:e.onOversize},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}},[n("div",{staticClass:"o-uploader-upload"},[n("i",{staticClass:"iconfont icon-image"})])]),e._v(" "),n("p",{staticClass:"o-form-item-label uploader"},[e._v(e._s(e.$t("Main03")))]),e._v(" "),n("p",{staticClass:"o-form-item-des uploader"},[e._v(e._s(e.$t("Main04")))])],1):e._e(),e._v(" "),1===e.step?[n("div",{staticClass:"o-form-item"},[n("p",{staticClass:"o-form-item-label"},[e._v(e._s(e.$t("Main05")))]),e._v(" "),n("van-field",{staticClass:"o-form-field",attrs:{type:"textarea",autosize:"",autosize:{minHeight:20,maxHeight:160},"show-word-limit":"",maxlength:"50"},model:{value:e.oAnswer.sTitleName,callback:function(t){e.$set(e.oAnswer,"sTitleName",t)},expression:"oAnswer.sTitleName"}})],1),e._v(" "),n("div",{staticClass:"o-form-item flex",staticStyle:{"margin-bottom":".13rem"}},[n("p",{staticClass:"o-form-item-label clear nft"},[e._v(e._s(e.$t("Main18")))]),e._v(" "),n("p",{staticClass:"o-form-item-icon",on:{click:function(t){e.showNFT=!0}}},[n("i",{staticClass:"far fa-question-circle"})]),e._v(" "),n("van-switch",{staticClass:"o-form-switch",attrs:{size:"0.53333rem"},model:{value:e.oAnswer.iCreateNFTFlag,callback:function(t){e.$set(e.oAnswer,"iCreateNFTFlag",t)},expression:"oAnswer.iCreateNFTFlag"}})],1),e._v(" "),e.oAnswer.iCreateNFTFlag?n("div",{staticClass:"o-form-item"},[n("van-field",{staticClass:"o-form-choice border",attrs:{"is-link":"",name:"iPrice",rules:[{required:!0,validator:e.asyncValidator}],placeholder:e.$t("Main08")},nativeOn:{touchstart:function(t){t.stopPropagation(),e.iRewardShow=!0}},model:{value:e.oAnswer.iPrice,callback:function(t){e.$set(e.oAnswer,"iPrice",t)},expression:"oAnswer.iPrice"}}),e._v(" "),n("p",{staticClass:"o-form-des"},[e._v(e._s(e.$t("Main26")))]),e._v(" "),n("van-number-keyboard",{attrs:{theme:"custom","get-container":"body","extra-key":["00","."],show:e.iRewardShow,"close-button-text":e.$t("Main44")},on:{blur:function(t){e.iRewardShow=!1},close:e.onClose,input:e.onInput,delete:e.onDelete},model:{value:e.oAnswer.iPrice,callback:function(t){e.$set(e.oAnswer,"iPrice",t)},expression:"oAnswer.iPrice"}})],1):e._e()]:e._e(),e._v(" "),n("div",{staticClass:"o-offer-submit"},[0===e.step?n("van-button",{staticClass:"o-btn-submit",attrs:{disabled:!e.oAnswer.sFileUrl},on:{click:e.handleStep}},[e._v(e._s(e.$t("Main17"))+"\n          ")]):e._e(),e._v(" "),1===e.step?n("van-button",{staticClass:"o-btn-submit",attrs:{disabled:e.disabledStep2,"native-type":"submit"}},[e._v(e._s(e.$t("Main07"))+"\n          ")]):e._e()],1)],2)],1)]),e._v(" "),n("van-popup",{staticClass:"o-footer-popup",attrs:{closeable:"",position:"bottom",overlay:!1},model:{value:e.showNFT,callback:function(t){e.showNFT=t},expression:"showNFT"}},[n("p",{staticClass:"o-popup-content"},[e._v(e._s(e.$t("Main19")))])])],1)}),[],!1,null,"a22f4f3e",null);t.default=component.exports}}]);