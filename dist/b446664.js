(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1144:function(t,e,o){"use strict";o.r(e);o(65),o(42),o(56),o(81),o(55),o(82);var n=o(14),r=o(34),c=(o(54),o(29),o(75),o(91),o(257),o(100)),l=o(83);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Publish",data:function(){return{minDate:new Date(1888,0,1),minCurrentDate:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),maxDate:new Date(2099,12,31),sDateShow:!1,iRewardShow:!1,iExpirationDateShow:!1,sLocationShow:!1,iAmountCount:0,NeraList:[50,100,200,500,1e3],dateList:[],columns:[{text:this.$t("Day01"),value:3,type:1},{text:this.$t("Day02"),value:5,type:1},{text:this.$t("Day03"),value:7,type:1},{text:this.$t("Day04"),value:1,type:2},{text:this.$t("Day05"),value:2,type:2},{text:this.$t("Day06"),value:3,type:2},{text:this.$t("Day07"),value:4,type:2},{text:this.$t("Day08"),value:5,type:2},{text:this.$t("Day09"),value:6,type:2},{text:this.$t("Day10"),value:7,type:2},{text:this.$t("Day11"),value:8,type:2},{text:this.$t("Day12"),value:9,type:2},{text:this.$t("Day13"),value:10,type:2},{text:this.$t("Day14"),value:11,type:2},{text:this.$t("Day15"),value:1,type:3}],oReward:{sSubject:"I want to find some pictures of "}}},computed:f(f({},Object(l.c)({step:function(t){return t.reward.step},nera:function(t){return t.nera}})),{},{publishStep1:function(){return this.iAmountCount<0||!this.oReward.sSubject||!this.oReward.iReward}}),watch:{step:function(t){return t},nera:function(t){return t}},mounted:function(){this.getAmountCount(0);for(var i=1e3;i<3e3;i++)this.dateList.push(i)},methods:{asyncValidator:function(t,e){var o=this;return new Promise(function(){var r=Object(n.a)(regeneratorRuntime.mark((function n(r){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t<1||t>1e4)&&(e.message=o.$t("Main12"),r(!1)),o.$toast.loading(o.$t("Main31")),n.next=4,o.getAmountCount(t);case 4:c=n.sent,o.$toast.clear(),c<0&&(e.message=o.$t("Main32"),r(!1)),r(!0);case 8:case"end":return n.stop()}}),n)})));return function(t){return r.apply(this,arguments)}}())},handleSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.step){e.next=3;break}return t.$store.commit("reward/SET_STEP",1),e.abrupt("return");case 3:return delete(data=f(f({},t.oReward),{},{iExpirationDate:new Date(t.oReward.iExpirationDate.replace(/-/g,"/")+" 23:59:59").getTime()})).sDate2,e.next=7,t.$axios.post("/v1/emall/CreateRewardsInfo",data);case 7:o=e.sent,t.$router.replace({name:"Main",params:{iRewardId:o.iRewardId}}),t.$toast(t.$t("Tip01")),t.$store.dispatch("UPDATE_USERINFO"),t.$store.commit("reward/SET_STEP",0),console.log(o);case 13:case"end":return e.stop()}}),e)})))()},getAmountCount:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.$axios.post("/v1/udc/GetUserBalance",{iAcctType:0});case 2:if(n=o.sent,!(r=n.vBalance).length){o.next=9;break}return r=r[0],l=Object(c.c)(r.iAvailableAmount),e.iAmountCount=Object(c.c)(l-t),o.abrupt("return",e.iAmountCount);case 9:case"end":return o.stop()}}),o)})))()},onFinish:function(){},handleCancel:function(){this.sDateShow=!1,this.iExpirationDateShow=!1,this.sLocationShow=!1},handleDateConfirm:function(t){this.$set(this.oReward,"sDate",t),this.handleCancel()},handleDate2Confirm:function(t){var e=new Date;switch(t.type){case 1:e.setDate(e.getDate()+t.value);break;case 2:e.setMonth(e.getMonth()+t.value);break;case 3:e.setFullYear(e.getFullYear()+t.value)}var o=Object(c.e)(e,"yyyy-MM-dd");this.$set(this.oReward,"iExpirationDate",o),this.$set(this.oReward,"iExpirationDate2",o),this.handleCancel()},handleLocationConfirm:function(t,e){this.$set(this.oReward,"sLocation",t.join("/")),this.handleCancel()},onClose:function(t){this.oReward.iReward||this.getAmountCount(0),this.$refs.oForm.validate("iReward")},onInput:function(t){var e=this.oReward.iReward||"";if(""===(e+="")&&"."===t)e="0";else{if(-1!==e.indexOf(".")&&"."===t)return;if(-1!==e.indexOf("0")&&1===e.length&&0===t)return;if(/\.\d{2}$/.test(e))return}e+=t,this.$set(this.oReward,"iReward",e)},onDelete:function(){var t=this.oReward.iReward||"";t&&(t=t.substring(0,t.length-1),this.$set(this.oReward,"iReward",t))}}},m=o(33),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"r-offer"}},[o("div",{staticClass:"o-offer-bbox"},[o("div",{staticClass:"o-offer-box"},[o("div",{staticClass:"o-offer-title"},[o("span",[t._v(t._s(t.$t("Main09")))])]),t._v(" "),o("van-form",{ref:"oForm",attrs:{"validate-first":""},on:{submit:t.handleSubmit}},[o("div",{staticClass:"o-offer-content"},[o("div",{staticClass:"o-form"},[0===t.step?[o("div",{staticClass:"o-form-item"},[o("p",{staticClass:"o-form-item-label"},[t._v(t._s(t.$t("Main10")))]),t._v(" "),o("p",{staticClass:"o-form-item-des"},[t._v("Ex. I want to find some pictures of Elon Musk's at Paypal, 2004.")]),t._v(" "),o("van-field",{staticClass:"o-form-field",attrs:{type:"textarea",placeholder:t.$t("Main45"),autosize:{minHeight:20,maxHeight:80},rules:[{required:!0}],"show-word-limit":"",maxlength:"100"},model:{value:t.oReward.sSubject,callback:function(e){t.$set(t.oReward,"sSubject",e)},expression:"oReward.sSubject"}})],1),t._v(" "),o("div",{staticClass:"o-form-item"},[o("van-field",{staticClass:"o-form-choice border",attrs:{readonly:"",placeholder:t.$t("Main11"),"is-link":"",rules:[{required:!0}]},on:{click:function(e){t.sDateShow=!0}},model:{value:t.oReward.sDate,callback:function(e){t.$set(t.oReward,"sDate",e)},expression:"oReward.sDate"}}),t._v(" "),o("van-popup",{staticClass:"o-popup-f",attrs:{position:"bottom",overlay:!0},model:{value:t.sDateShow,callback:function(e){t.sDateShow=e},expression:"sDateShow"}},[o("van-picker",{staticStyle:{width:"100%"},attrs:{"show-toolbar":"",columns:t.dateList,"default-index":(new Date).getFullYear()-1e3},on:{cancel:t.handleCancel,confirm:t.handleDateConfirm}})],1)],1),t._v(" "),o("div",{staticClass:"o-form-item"},[o("van-field",{staticClass:"o-form-choice border",attrs:{"is-link":"",readonly:"",name:"iReward",clickable:"",placeholder:t.$t("Main12"),rules:[{required:!0,validator:t.asyncValidator}]},nativeOn:{touchstart:function(e){e.stopPropagation(),t.iRewardShow=!0}},model:{value:t.oReward.iReward,callback:function(e){t.$set(t.oReward,"iReward",e)},expression:"oReward.iReward"}}),t._v(" "),o("van-number-keyboard",{attrs:{theme:"custom","extra-key":["00","."],show:t.iRewardShow,"close-button-text":t.$t("Main44")},on:{blur:function(e){t.iRewardShow=!1},close:t.onClose,input:t.onInput,delete:t.onDelete},scopedSlots:t._u([{key:"title-left",fn:function(){return[t.oReward.iReward?o("span",[t._v(t._s(t._f("formatNera")(t.oReward.iReward))+"Nera ($"+t._s(t._f("formatNera")(t.oReward.iReward*t.nera))+")")]):t._e()]},proxy:!0}],null,!1,286704835)})],1),t._v(" "),o("div",{staticClass:"o-form-item"},[o("van-cell",{class:["o-form-choice",{through:t.iAmountCount<0}],attrs:{title:t.$t("Main16"),value:t.iAmountCount+" NERA"}})],1)]:t._e(),t._v(" "),1===t.step?[o("div",{staticClass:"o-form-item"},[o("p",{staticClass:"o-form-item-label"},[t._v(t._s(t.$t("Main13")))]),t._v(" "),o("van-field",{staticClass:"o-form-field",attrs:{type:"textarea",autosize:{minHeight:20,maxHeight:160},"show-word-limit":"",maxlength:"1000"},model:{value:t.oReward.sDescription,callback:function(e){t.$set(t.oReward,"sDescription",e)},expression:"oReward.sDescription"}})],1),t._v(" "),o("div",{staticClass:"o-form-item"},[o("van-field",{staticClass:"o-form-choice border",attrs:{placeholder:t.$t("Main14"),maxlength:"50"},model:{value:t.oReward.sLocation,callback:function(e){t.$set(t.oReward,"sLocation",e)},expression:"oReward.sLocation"}})],1),t._v(" "),o("div",{staticClass:"o-form-item"},[o("van-field",{staticClass:"o-form-choice border",attrs:{readonly:"",placeholder:t.$t("Main15"),"is-link":"",rules:[{required:!0}]},on:{click:function(e){t.iExpirationDateShow=!0}},model:{value:t.oReward.iExpirationDate,callback:function(e){t.$set(t.oReward,"iExpirationDate",e)},expression:"oReward.iExpirationDate"}}),t._v(" "),o("van-popup",{staticClass:"o-popup-f",attrs:{position:"bottom",overlay:!0},model:{value:t.iExpirationDateShow,callback:function(e){t.iExpirationDateShow=e},expression:"iExpirationDateShow"}},[o("van-picker",{attrs:{title:t.$t("Main15"),"show-toolbar":"","cancel-button-text":t.$t("picker1"),"confirm-button-text":t.$t("picker2"),columns:t.columns,"default-index":2},on:{confirm:t.handleDate2Confirm,cancel:t.handleCancel}})],1)],1)]:t._e()],2)]),t._v(" "),o("div",{staticClass:"o-offer-submit"},[0===t.step?o("van-button",{staticClass:"o-btn-submit",attrs:{"native-type":"submit"}},[t._v(t._s(t.$t("Main17")))]):t._e(),t._v(" "),1===t.step?o("van-button",{staticClass:"o-btn-submit",attrs:{"native-type":"submit"}},[t._v(t._s(t.$t("Main33")))]):t._e()],1)])],1)])])}),[],!1,null,"7da3357c",null);e.default=component.exports}}]);