(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{347:function(e,t,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(35).default)("5f545aba",content,!0,{sourceMap:!1})},394:function(e,t,r){"use strict";r(347)},395:function(e,t,r){var n=r(34)(!1);n.push([e.i,'.o-year-line[data-v-64f67ca4] {\n  position: relative;\n  padding: 0.853333rem 0.293333rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.o-year-line[data-v-64f67ca4]:after {\n  content: "";\n  position: absolute;\n  height: 0.026667rem;\n  left: 0.586667rem;\n  right: 0.586667rem;\n  background: rgba(49, 49, 49, 0.1);\n}\n.o-year-line .o-year[data-v-64f67ca4] {\n  position: relative;\n  font-weight: 700;\n  border-radius: 0.133333rem;\n  font-size: 0.453333rem;\n  text-align: center;\n  font-family: Arial, Arial-Regular, serif;\n}\n.o-year-line .o-year.--0[data-v-64f67ca4] {\n  background: #ffffff;\n  border: 0.026667rem solid #e5e5e5;\n  padding: 0 0.32rem;\n  color: #1d1d1d;\n  line-height: 0.8rem;\n  position: absolute;\n  z-index: 1;\n}\n.o-year-line .o-year.--0 .o-clock[data-v-64f67ca4] {\n  position: absolute;\n  font-size: 0.24rem;\n  bottom: -0.173333rem;\n  left: 0;\n  right: 0;\n  color: #1D1D1D;\n}\n.o-year-line .o-year.--1[data-v-64f67ca4] {\n  line-height: 0.8rem;\n  color: #bfbfbf;\n  font-weight: 600;\n}\n.o-year-line .o-year.--2[data-v-64f67ca4] {\n  font-size: 0.373333rem;\n  line-height: 0.8rem;\n  color: #e9e9e9;\n  font-weight: 400;\n}\n.o-year-line .o-year.--3[data-v-64f67ca4] {\n  width: 1.706667rem;\n}\n.o--bottom[data-v-64f67ca4] {\n  position: absolute;\n  bottom: 0.693333rem;\n  left: 0;\n  right: 0;\n}\n.o--bottom .o--answer[data-v-64f67ca4] {\n  padding: 0.08rem 0.186667rem;\n  height: 0.56rem;\n  background: #ffffff;\n  border: 0.013333rem solid #eeeeee;\n  border-radius: 0.133333rem;\n  font-size: 0.32rem;\n  color: #BFBFBF;\n}\n.o--bottom .o--answer .o--count[data-v-64f67ca4] {\n  color: #1d1d1d;\n}\n.o--bottom .o-tip[data-v-64f67ca4] {\n  padding-top: 0.2rem;\n  font-size: 0.293333rem;\n  color: #d3d3d3;\n}',""]),e.exports=n},447:function(e,t,r){"use strict";r.r(t);r(43),r(31),r(37),r(55),r(36),r(56);var n=r(23),o=r(58);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"OReward",props:["vReward","rate"],filters:{filterDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Date(e).getFullYear()+t}},computed:l(l({},Object(o.c)({userInfo:function(e){return e.userInfo},isLogin:function(e){return e.isLogin},nera:function(e){return e.nera}})),{},{stUser:function(){return this.vReward.stUser||{}},canAnswer:function(){}}),watch:{nera:function(e){return e}},methods:{goAnswer:function(e){this.$router.push({path:"/answer",query:{iRewardId:e.iRewardId}})}}},f=(r(394),r(22)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"o-issue-box main reward",on:{click:function(t){return e.$router.push("/reward/detail/"+e.vReward.iRewardId)}}},[n("div",{staticClass:"o-reward-box"},[n("p",{staticClass:"o-for-reward"},[e._v(e._s(e.$t("Main34")))]),e._v(" "),n("div",{staticClass:"o-nera"},[n("img",{staticClass:"o-icon-nera",attrs:{src:r(223),alt:""}}),e._v(" "),n("span",{staticClass:"o-nera-prise"},[e._v(e._s(e._f("formatNera")(e.vReward.iReward)))])]),e._v(" "),n("p",{staticClass:"o-for-dollar"},[e._v("$"+e._s(e._f("formatNera")(e.vReward.iReward*e.nera)))])]),e._v(" "),n("div",{staticClass:"o-reward-user",on:{click:function(t){return t.stopPropagation(),e.$router.push({name:"User",query:{iUserId:e.stUser.iUserId}})}}},[n("o-head",{staticClass:"o-reward-user-avatar",attrs:{"avatar-url":e.stUser.sAvatar}}),e._v(" "),n("span",{staticClass:"o-reward-user-nickname"},[e._v(e._s(e.stUser.sName))])],1),e._v(" "),n("div",{staticClass:"o-year-line"},[n("p",{staticClass:"o-year --2"},[e._v(e._s(e._f("filterDate")(e.vReward.sDate,-2)))]),e._v(" "),n("p",{staticClass:"o-year --1"},[e._v(e._s(e._f("filterDate")(e.vReward.sDate,-1)))]),e._v(" "),n("p",{staticClass:"o-year --3"}),e._v(" "),n("p",{staticClass:"o-year --0"},[e._v(e._s(e._f("filterDate")(e.vReward.sDate))),n("i",{staticClass:"far fa-clock o-clock"})]),e._v(" "),n("p",{staticClass:"o-year --1"},[e._v(e._s(e._f("filterDate")(e.vReward.sDate,1)))]),e._v(" "),n("p",{staticClass:"o-year --2"},[e._v(e._s(e._f("filterDate")(e.vReward.sDate,2)))])]),e._v(" "),n("p",{staticClass:"o-issue van-multi-ellipsis--l2"},[e._v(e._s(e.vReward.sSubject))]),e._v(" "),n("div",{staticClass:"o--bottom"},[n("span",{staticClass:"o--answer"},[n("span",{staticClass:"o--count"},[e._v(e._s(e.vReward.vAnswer.length))]),e._v(" "+e._s(e.$t("Billboard22")))]),e._v(" "),e.isLogin&&e.userInfo.iUserId===e.vReward.iUserId?e._e():n("p",{staticClass:"o-tip"},[e._v(e._s(e.$t("Main21")))])]),e._v(" "),e.userInfo.iUserId!==e.vReward.iUserId?n("div",{staticClass:"o-reward-answer-box"},[n("van-button",{staticClass:"o-reward-btn answer",on:{click:function(t){return t.stopPropagation(),e.goAnswer(e.vReward)}}},[e._v(e._s(e.$t("Main02"))+"\n    ")])],1):e._e()])}),[],!1,null,"64f67ca4",null);t.default=component.exports}}]);