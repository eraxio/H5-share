(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1014:function(n,r,o){"use strict";o.r(r);var t=[function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("th",{staticClass:"a3",staticStyle:{"text-align":"center"},attrs:{width:"30%"}},[t("img",{staticClass:"o-nera",attrs:{src:o(339),alt:""}}),n._v("NERA\n            ")])}],e={name:"RewardRanking",data:function(){return{vRewardList:[]}},mounted:function(){var n=this;this.$axios.post("/v1/emall/GetRewardRanking",{}).then((function(r){n.vRewardList=r.vReward}))}},d=(o(978),o(22)),component=Object(d.a)(e,(function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"o-reward-ranking"},[t("van-button",{staticClass:"o-ranking-back",on:{click:function(r){return n.$router.back()}}},[t("i",{staticClass:"fas fa-arrow-left"})]),n._v(" "),t("div",{staticClass:"o-ranking"},[t("h1",{staticClass:"o-ranking-title"},[n._v(n._s(n.$t("Other03")))]),n._v(" "),t("div",{staticClass:"o-ranking-box"},[t("div",{staticClass:"o-ranking-line-bg"}),n._v(" "),t("div",{staticClass:"o-ranking-before"},n._l(n.vRewardList.slice(0,3),(function(r,i){return t("div",{key:i,class:["o-ranking-user","_"+(i+1)]},[t("img",{class:["o-icon","_"+(i+1)],attrs:{src:o(974)("./no"+(i+1)+".png"),alt:""}}),n._v(" "),t("o-head",{class:["o-before-avatar","_"+(i+1)],attrs:{"avatar-url":r.sAvatar}}),n._v(" "),t("p",{staticClass:"o-nickname"},[n._v(n._s(r.sNickName))]),n._v(" "),t("div",{staticClass:"o-nera-box"},[t("img",{staticClass:"o-nera",attrs:{src:o(339),alt:""}}),n._v(" "),t("span",{staticClass:"o-nera-total"},[n._v(n._s(n._f("formatThousandth")(parseInt(r.iRewardTotal))))])])],1)})),0),n._v(" "),t("div",{staticClass:"o-ranking-after"},[t("table",{staticClass:"o-table"},[t("tr",{staticClass:"o-thead"},[t("th",{staticStyle:{"text-align":"center"},attrs:{width:"20%"}},[n._v("No.")]),n._v(" "),t("th",{attrs:{width:"50%"}},[n._v(n._s(n.$t("Other04")))]),n._v(" "),n._m(0)]),n._v(" "),n._l(n.vRewardList.slice(3),(function(r,i){return t("tr",{key:i,staticClass:"o-list-item"},[t("td",{staticStyle:{"text-align":"center"}},[n._v(n._s(i+4))]),n._v(" "),t("td",{staticClass:"o-head-name"},[t("o-head",{staticClass:"o-list-avatar",attrs:{"avatar-url":r.sAvatar}}),n._v("\n              "+n._s(r.sNickName)+"\n            ")],1),n._v(" "),t("td",{staticClass:"b3"},[n._v(n._s(n._f("formatThousandth")(parseInt(r.iRewardTotal))))])])}))],2)])])])],1)}),t,!1,null,"43a38d76",null);r.default=component.exports},339:function(n,r,o){n.exports=o.p+"img/nera.21ea076.png"},619:function(n,r,o){var content=o(979);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(35).default)("3006d258",content,!0,{sourceMap:!1})},974:function(n,r,o){var map={"./no1.png":975,"./no2.png":976,"./no3.png":977};function t(n){var r=e(n);return o(r)}function e(n){if(!o.o(map,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return map[n]}t.keys=function(){return Object.keys(map)},t.resolve=e,n.exports=t,t.id=974},975:function(n,r,o){n.exports=o.p+"img/no1.2a7ce6b.png"},976:function(n,r,o){n.exports=o.p+"img/no2.1257b59.png"},977:function(n,r,o){n.exports=o.p+"img/no3.a50074c.png"},978:function(n,r,o){"use strict";o(619)},979:function(n,r,o){var t=o(34),e=o(159),d=o(227),k=o(980),l=t(!1),f=e(d),m=e(k);l.push([n.i,".o-reward-ranking[data-v-43a38d76] {\n  height: 100vh;\n  background-image: url("+f+");\n  background-size: 100% 100%;\n  overflow-y: scroll;\n}\n.o-reward-ranking .o-ranking-back[data-v-43a38d76] {\n  position: fixed;\n  left: 0.533333rem;\n  top: 0.4rem;\n  width: 0.8rem;\n  height: 0.8rem;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 0.133333rem;\n  box-shadow: 0 0 0.2rem 0 rgba(5, 0, 0, 0.15);\n  border: 0;\n  font-size: 0.32rem;\n  color: #1d1d1d;\n}\n.o-reward-ranking .o-ranking[data-v-43a38d76] {\n  padding-bottom: 0.733333rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-title[data-v-43a38d76] {\n  padding-top: 1.6rem;\n  font-size: 0.64rem;\n  font-weight: 700;\n  text-align: center;\n  color: #fefefe;\n  line-height: 0.64rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box[data-v-43a38d76] {\n  position: relative;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-line-bg[data-v-43a38d76] {\n  width: 7.733333rem;\n  height: 8.133333rem;\n  background-image: url("+m+");\n  background-size: 100% 100%;\n  margin: 0 auto;\n  position: absolute;\n  top: 2.986667rem;\n  left: 0;\n  right: 0;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before[data-v-43a38d76] {\n  height: 6.866667rem;\n  display: flex;\n  justify-content: center;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user[data-v-43a38d76] {\n  position: absolute;\n  text-align: center;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user._1[data-v-43a38d76] {\n  top: 1.306667rem;\n  margin: 0 auto;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user._2[data-v-43a38d76] {\n  top: 2.8rem;\n  left: 1.626667rem;\n  margin: 0 auto;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user._3[data-v-43a38d76] {\n  top: 2.8rem;\n  right: 1.626667rem;\n  margin: 0 auto;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-icon[data-v-43a38d76] {\n  width: 0.853333rem;\n  height: 0.853333rem;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: -0.426667rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-before-avatar[data-v-43a38d76] {\n  width: 1.733333rem;\n  height: 1.733333rem;\n  margin-bottom: 0.866667rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-before-avatar._1[data-v-43a38d76] {\n  width: 2.133333rem;\n  height: 2.133333rem;\n  border: 0.066667rem solid #f2bb1a;\n  margin-bottom: 0.733333rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-before-avatar._2[data-v-43a38d76] {\n  border: 0.066667rem solid #5fbce4;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-before-avatar._3[data-v-43a38d76] {\n  border: 0.066667rem solid #bfd952;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-nickname[data-v-43a38d76] {\n  font-size: 0.32rem;\n  text-align: center;\n  color: #ffffff;\n  line-height: 0.64rem;\n  margin-bottom: 0.133333rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-nera-box[data-v-43a38d76] {\n  min-width: 1.68rem;\n  height: 0.6rem;\n  background: #291473;\n  border-radius: 0.306667rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-nera-box .o-nera[data-v-43a38d76] {\n  width: 0.4rem;\n  height: 0.4rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-before .o-ranking-user .o-nera-box .o-nera-total[data-v-43a38d76] {\n  font-size: 0.32rem;\n  color: #ffffff;\n  line-height: 0.64rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after[data-v-43a38d76] {\n  position: relative;\n  top: 0.733333rem;\n  left: 0;\n  right: 0;\n  width: 8.933333rem;\n  min-height: 8.8rem;\n  background: #ffffff;\n  border-radius: 0.4rem;\n  box-shadow: 0 0 0.2rem 0 rgba(5, 0, 0, 0.15);\n  margin: 0 auto 1.333333rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table[data-v-43a38d76] {\n  width: 100%;\n  font-size: 0.4rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table tr td[data-v-43a38d76]:first-child,\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table tr th[data-v-43a38d76]:first-child {\n  padding-left: 0.333333rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table tr td[data-v-43a38d76]:last-child,\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table tr th[data-v-43a38d76]:last-child {\n  padding-right: 0.333333rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table .o-thead[data-v-43a38d76] {\n  height: 1.12rem;\n  border-bottom: 0.026667rem solid #d2d2d2;\n  color: #bfbfbf;\n  line-height: 1.12rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table .o-thead .a3 .o-nera[data-v-43a38d76] {\n  width: 0.4rem;\n  height: 0.4rem;\n  margin-right: 0.133333rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table .o-list-item[data-v-43a38d76] {\n  font-size: 0.4rem;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table .o-list-item td[data-v-43a38d76] {\n  margin: 0.2rem 0;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table .o-list-item .o-head-name[data-v-43a38d76] {\n  display: flex;\n  align-items: center;\n  word-break: break-word;\n  color: #1d1d1d;\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table .o-list-item .o-head-name .o-list-avatar[data-v-43a38d76] {\n  width: 0.666667rem;\n  height: 0.666667rem;\n  margin-right: 0.2rem;\n  box-shadow: 0 0 0.2rem 0 rgba(5, 0, 0, 0.15);\n}\n.o-reward-ranking .o-ranking .o-ranking-box .o-ranking-after .o-table .o-list-item .b3[data-v-43a38d76] {\n  font-size: 0.4rem;\n  text-align: center;\n  color: #8d00ff;\n}",""]),n.exports=l},980:function(n,r,o){n.exports=o.p+"img/ranking-line.dcbab47.png"}}]);