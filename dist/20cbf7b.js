(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1131:function(e,n,t){"use strict";t.r(n);t(64),t(41),t(55),t(80),t(54),t(81);var o=t(14),r=t(33),c=(t(53),t(189),t(74),t(108),t(90),t(29),t(125),t(99),t(127),t(250)),l=t.n(c),d=t(133),f=t(263),v=t(82);function m(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var h={layout:"single-container",name:"Signup",data:function(){return{email:"",eye1:!1,eye2:!1,word1:"",code:"",daley:0,deleyTimeId:null,sInviteCode:"",inviteCode:"",gift:0,regesterSuc:!1,onRequest:!1,isError:!1,isLoading:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({btnDisable:function(){var e=new RegExp("^[a-zA-Z0-9]+([._\\-]*[A-Za-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),n=new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$");return!this.email||!e.test(this.email)||(!n.test(this.word1)||(!this.code||this.code.length<6))}},Object(v.c)({locale:function(e){return e.locale}})),beforeDestroy:function(){clearInterval(this.deleyTimeId)},mounted:function(){},methods:{initCopy:function(){var e=this,n=document.getElementById("copy"),t=new l.a(n);t.on("success",(function(){e.$toast(e.$t("Mine32"))})),t.on("error",(function(e){}))},onClose:function(){this.regesterSuc=!1,this.$router.replace("/account/complete?step=1")},showPassword1:function(){this.eye1=!this.eye1},onBlur:function(){new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$").test(this.word1)?this.isError=!1:this.isError=!0},userRegister:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.$axios.post("/v1/auth/UserRegister",{iSource:1,iRegisterType:2,sPassword:e.word1,sEmail:e.email.toLowerCase(),sEmailVerifyCode:e.code,sInviteCode:e.sInviteCode}).then(function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(data){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return localStorage.setItem("Email",e.email),Object(d.b)(data.sSessionKey),e.$store.commit("SET_ISLOGIN",!0),localStorage.setItem("sInviteCode",data.sInviteCode),localStorage.setItem("sEmail",data.sEmail),n.next=7,e.$axios.post("/v1/udc/GetUserExten",{});case 7:t=n.sent,e.gift=parseInt(t.sAwardAmount),Object(f.a)(data.iUserId,e),e.inviteCode=data.sInviteCode,e.regesterSuc=!0,e.$nextTick((function(){e.initCopy()}));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){})).finally((function(){e.isLoading=!1}));case 3:case"end":return n.stop()}}),n)})))()},showPassword2:function(){this.eye2=!this.eye2},toRouter:function(){this.$router.push("/account/protocol")},getCode:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.onRequest){n.next=2;break}return n.abrupt("return");case 2:if(e.onRequest=!0,setTimeout((function(){e.onRequest=!1}),2e3),t=new RegExp("^[a-zA-Z0-9]+([._\\-]*[A-Za-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),e.email&&t.test(e.email)){n.next=7;break}return n.abrupt("return");case 7:return n.next=9,e.$axios.post("/v1/auth/CheckRegistered",{iRegisterType:2,sEmail:e.email.toLowerCase()});case 9:return n.next=11,e.$axios.post("/v1/auth/SendEmailVerifyCode",{iSource:1,iSendMethod:2,iVerifyBusi:1,sLanguage:e.locale.includes("zh")?"zh":"en",sEmail:e.email.toLowerCase()});case 11:e.daley=60,clearInterval(e.deleyTimeId),e.deleyTimeId=setInterval((function(){e.daley--,e.daley<=0&&(e.daley=0,clearInterval(e.deleyTimeId))}),1e3);case 14:case"end":return n.stop()}}),n)})))()}}},y=(t(997),t(32)),component=Object(y.a)(h,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"signup"},[o("van-nav-bar",{attrs:{title:e.$t("Account05"),"left-arrow":""},on:{"click-left":function(n){return e.$router.back()}}}),e._v(" "),o("div",{staticClass:"container"},[o("van-field",{staticClass:"txt",attrs:{placeholder:e.$t("Account01")},model:{value:e.email,callback:function(n){e.email=n},expression:"email"}}),e._v(" "),o("van-field",{staticClass:"txt",attrs:{maxlength:"6",placeholder:e.$t("Account06")},scopedSlots:e._u([{key:"button",fn:function(){return[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.daley,expression:"!daley"}],staticClass:"send",on:{click:e.getCode}},[e._v(e._s(e.$t("Account12")))]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.daley,expression:"daley"}],staticClass:"send"},[e._v(e._s(e.daley)+"s")])]},proxy:!0}]),model:{value:e.code,callback:function(n){e.code=n},expression:"code"}}),e._v(" "),o("van-field",{staticClass:"txt txtnomargin",attrs:{maxlength:"16",type:e.eye1?"text":"password",placeholder:e.$t("Account07"),"right-icon":e.eye1?"eye-o":"closed-eye"},on:{"click-right-icon":e.showPassword1,blur:e.onBlur},model:{value:e.word1,callback:function(n){e.word1=n},expression:"word1"}}),e._v(" "),o("div",{staticClass:"error-tips"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.isError,expression:"isError"}]},[e._v(e._s(e.$t("Tip14")))])]),e._v(" "),o("van-field",{staticClass:"txt",attrs:{placeholder:e.$t("Account08")},model:{value:e.sInviteCode,callback:function(n){e.sInviteCode=n},expression:"sInviteCode"}}),e._v(" "),o("div",{staticClass:"txt-login"},[e._v(e._s(e.$t("Account09"))+"\n      "),o("span",{staticClass:"back-login",on:{click:function(n){return e.$router.back()}}},[e._v(e._s(e.$t("Account21")))])]),e._v(" "),o("van-button",{staticClass:"signin",attrs:{type:"primary",round:"",size:"large",loading:e.isLoading,disabled:e.btnDisable},on:{click:e.userRegister}},[e._v("\n      "+e._s(e.$t("Account05"))+"\n    ")]),e._v(" "),o("div",{staticClass:"tips"},[e._v(e._s(e.$t("Account10"))),o("span",{staticClass:"link",on:{click:e.toRouter}},[e._v(e._s(e.$t("Account11")))])])],1),e._v(" "),o("van-popup",{model:{value:e.regesterSuc,callback:function(n){e.regesterSuc=n},expression:"regesterSuc"}},[o("div",{staticClass:"pop-container"},[o("div",{staticClass:"container"},[o("img",{attrs:{src:t(996),alt:""}}),e._v(" "),o("div",{staticClass:"txt1"},[e._v("SUCCEED")]),e._v(" "),e.gift?o("div",{staticClass:"txt2"},[e._v(e._s(e.$t("Account16",{nera:e.gift})))]):e._e(),e._v(" "),o("div",{staticClass:"txt3"},[e._v(e._s(e.$t("Account17")))]),e._v(" "),o("div",{staticClass:"txt4"},[e._v(e._s(e.$t("Account18"))+": "+e._s(e.inviteCode)+"\n          "),o("i",{staticClass:"far fa-clone",attrs:{id:"copy","data-clipboard-action":"copy","data-clipboard-text":e.inviteCode}})]),e._v(" "),o("van-button",{staticClass:"successBtn",attrs:{round:"",type:"info"},on:{click:e.onClose}},[e._v(e._s(e.$t("Account22")))])],1),e._v(" "),o("div",{staticClass:"line"}),e._v(" "),o("div",{staticClass:"close",on:{click:e.onClose}},[o("i",{staticClass:"fas fa-times"})])])])],1)}),[],!1,null,"e08775fe",null);n.default=component.exports},909:function(e,n,t){var content=t(998);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(52).default)("fd6fec72",content,!0,{sourceMap:!1})},996:function(e,n,t){e.exports=t.p+"img/success.f32dfb5.png"},997:function(e,n,t){"use strict";t(909)},998:function(e,n,t){var o=t(51)(!1);o.push([e.i,".van-popup[data-v-e08775fe] {\n  background: transparent;\n  overflow: hidden;\n}\n.van-popup .container[data-v-e08775fe] {\n  width: 7.333333rem;\n  opacity: 1;\n  background: #ffffff;\n  border: 0.013333rem solid #707070;\n  border-radius: 1rem;\n  padding: 0.666667rem 0.266667rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.van-popup .container img[data-v-e08775fe] {\n  width: 1.893333rem;\n}\n.van-popup .container .van-icon-checked[data-v-e08775fe] {\n  font-size: 1.893333rem;\n}\n.van-popup .container .txt1[data-v-e08775fe] {\n  font-size: 0.453333rem;\n  font-family: PingFang SC, PingFang SC-Bold;\n  font-weight: 700;\n  color: #1b1b1b;\n  margin-top: 0.533333rem;\n}\n.van-popup .container .txt2[data-v-e08775fe] {\n  font-size: 0.453333rem;\n  font-family: PingFang SC, PingFang SC-Bold;\n  font-weight: 700;\n  color: #6a47fe;\n  margin-top: 0.093333rem;\n}\n.van-popup .container .txt3[data-v-e08775fe] {\n  font-size: 0.4rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #979797;\n  margin-top: 0.333333rem;\n  margin-bottom: 0.533333rem;\n}\n.van-popup .container .txt4[data-v-e08775fe] {\n  font-size: 0.4rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #1b1b1b;\n  margin-bottom: 0.533333rem;\n}\n.van-popup .container .successBtn[data-v-e08775fe] {\n  width: 3.093333rem;\n  height: 0.893333rem;\n  opacity: 1;\n  background: #6a47fe;\n  border-radius: 0.453333rem;\n  border: none;\n}\n.van-popup .line[data-v-e08775fe] {\n  width: 0.04rem;\n  height: 0.8rem;\n  background: #ffffff;\n  margin: 0 auto;\n}\n.van-popup .fa-clone[data-v-e08775fe] {\n  margin-left: 0.066667rem;\n  color: #979797;\n}\n.van-popup .close[data-v-e08775fe] {\n  width: 0.746667rem;\n  height: 0.746667rem;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n.txt-login[data-v-e08775fe] {\n  font-size: 0.4rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  text-align: left;\n  color: #1b1b1b;\n}\n.txt-login .back-login[data-v-e08775fe] {\n  color: #6A47FE;\n  cursor: pointer;\n}\n.van-nav-bar[data-v-e08775fe] {\n  padding-top: 0.773333rem;\n}\n.container[data-v-e08775fe] {\n  padding: 0.666667rem 0.533333rem;\n  text-align: center;\n}\n.container .tips[data-v-e08775fe] {\n  font-size: 0.346667rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #1b1b1b;\n  margin-top: 0.533333rem;\n}\n.container .tips .link[data-v-e08775fe] {\n  color: #6A47FE;\n  text-decoration: underline;\n}\n.container .send[data-v-e08775fe] {\n  font-size: 0.373333rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #6a47fe;\n}\n.container .txt[data-v-e08775fe] {\n  height: 1.146667rem;\n  background: #fafafa;\n  border-radius: 0.533333rem;\n  border: none;\n  margin-bottom: 0.6rem;\n}\n.container .txtnomargin[data-v-e08775fe] {\n  margin-bottom: 0;\n}\n.container .error-tips[data-v-e08775fe] {\n  height: 0.6rem;\n  font-size: 0.373333rem;\n  font-family: PingFang SC, PingFang SC-Medium;\n  font-weight: 500;\n  text-align: left;\n  color: #fe4747;\n  padding-left: 0.4rem;\n}\n.container .signin[data-v-e08775fe] {\n  margin-top: 0.8rem;\n  width: 8.933333rem;\n  height: 1.146667rem;\n  border-radius: 0.573333rem;\n  border: none;\n}\n.van-cell[data-v-e08775fe]::after {\n  display: none;\n}\n.van-hairline--bottom[data-v-e08775fe]::after {\n  display: none;\n}\n[data-v-e08775fe] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-e08775fe] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-family: PingFang SC, PingFang SC-Bold;\n  font-weight: 700;\n  color: #1b1b1b;\n}",""]),e.exports=o}}]);