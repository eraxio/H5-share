(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{418:function(n,t,e){var content=e(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(35).default)("1c2935d3",content,!0,{sourceMap:!1})},477:function(n,t,e){"use strict";e(418)},478:function(n,t,e){var o=e(34)(!1);o.push([n.i,".van-nav-bar[data-v-6c2dd402] {\n  padding-top: 0.773333rem;\n}\n.container[data-v-6c2dd402] {\n  padding: 0.666667rem 0.533333rem;\n  text-align: center;\n}\n.container .tips[data-v-6c2dd402] {\n  margin-top: 0.533333rem;\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.4rem;\n  font-weight: 400;\n  text-align: left;\n  color: #1b1b1b;\n  line-height: 0.706667rem;\n}\n.container .tips .link[data-v-6c2dd402] {\n  color: #6A47FE;\n  text-decoration: underline;\n}\n.container .send[data-v-6c2dd402] {\n  font-size: 0.373333rem;\n  font-weight: 400;\n  color: #6a47fe;\n}\n.container .txt[data-v-6c2dd402] {\n  height: 1.146667rem;\n  background: #fafafa;\n  border-radius: 0.533333rem;\n  border: none;\n  margin-bottom: 0.853333rem;\n}\n.container .o-login[data-v-6c2dd402] {\n  margin-top: 1.013333rem;\n  width: 8.933333rem;\n  height: 1.146667rem;\n  line-height: 1.146667rem;\n  border-radius: 0.573333rem;\n  background-color: #7632ff;\n  font-size: 0.48rem;\n  color: #FFFFFF;\n  border: none;\n}\n.van-hairline--bottom[data-v-6c2dd402]::after {\n  display: none;\n}\n[data-v-6c2dd402] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-6c2dd402] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-weight: 700;\n  color: #1b1b1b;\n}",""]),n.exports=o},543:function(n,t,e){"use strict";e.r(t);e(43),e(31),e(37),e(55),e(36),e(56);var o=e(23),r=e(11),c=(e(54),e(126),e(58),e(78),e(66),e(135)),l=e(170);function d(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}function f(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}var v={name:"Login",layout:"single-container",data:function(){return{showPsw:!1,oLogin:{}}},computed:{btnDisable:function(){var n=new RegExp("^[a-zA-Z0-9]+([._\\-]*[A-Za-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");return!this.oLogin.sEmail||!n.test(this.oLogin.sEmail)||!this.oLogin.sPassword}},methods:{handleLogin:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data=f(f({},n.oLogin),{},{iSource:1,iLoginType:2,sEmail:n.oLogin.sEmail.toLowerCase()}),t.next=3,n.$axios.post("/v1/auth/UserLogin",data);case 3:return e=t.sent,console.log(e),localStorage.setItem("Email",n.oLogin.sEmail),Object(c.b)(e.sSessionKey),Object(l.a)(e.iUserId),localStorage.setItem("sInviteCode",e.sInviteCode),localStorage.setItem("sEmail",e.sEmail),t.next=12,n.$axios.post("/v1/udc/GetUserExten",data);case 12:n.$store.commit("SET_ISLOGIN",!0),n.$toast(n.$t("Account19")),n.$router.replace("/");case 15:case"end":return t.stop()}}),t)})))()}}},m=(e(477),e(22)),component=Object(m.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:n.$t("Account03"),"left-arrow":""},on:{"click-left":function(t){return n.$router.back()}}}),n._v(" "),e("div",{staticClass:"container"},[e("van-field",{staticClass:"txt",attrs:{placeholder:n.$t("Account01")},model:{value:n.oLogin.sEmail,callback:function(t){n.$set(n.oLogin,"sEmail",t)},expression:"oLogin.sEmail"}}),n._v(" "),e("van-field",{staticClass:"txt",attrs:{maxlength:"16",placeholder:n.$t("Account02"),type:n.showPsw?"text":"password","right-icon":n.showPsw?"eye-o":"closed-eye"},on:{"click-right-icon":function(t){n.showPsw=!n.showPsw}},model:{value:n.oLogin.sPassword,callback:function(t){n.$set(n.oLogin,"sPassword",t)},expression:"oLogin.sPassword"}}),n._v(" "),e("van-button",{staticClass:"o-login",attrs:{round:"",size:"large",disabled:n.btnDisable},on:{click:n.handleLogin}},[n._v(n._s(n.$t("Account03"))+"\n    ")]),n._v(" "),e("div",{staticClass:"tips"},[e("p",{staticStyle:{color:"#6A47FE"},on:{click:function(t){return n.$router.push("/account/forgot")}}},[n._v(n._s(n.$t("Account04")))]),n._v(" "),e("p",{staticStyle:{color:"#6A47FE"},on:{click:function(t){return n.$router.push("/account/signup")}}},[n._v(n._s(n.$t("Account05")))])])],1)],1)}),[],!1,null,"6c2dd402",null);t.default=component.exports}}]);