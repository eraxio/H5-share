(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1002:function(n,t,e){"use strict";e(915)},1003:function(n,t,e){var r=e(51)(!1);r.push([n.i,".van-nav-bar[data-v-39d1945b] {\n  border-bottom: 0.013333rem solid #e5e5e5;\n}\n[data-v-39d1945b] .van-nav-bar__content {\n  height: 1.6rem;\n}\n.container[data-v-39d1945b] {\n  padding: 0.773333rem 0.533333rem 0.4rem;\n  text-align: center;\n}\n.container .qrcode[data-v-39d1945b] {\n  margin-bottom: 0.8rem;\n}\n.container .title[data-v-39d1945b] {\n  font-size: 0.453333rem;\n  font-weight: 700;\n  text-align: left;\n  color: #1b1b1b;\n  margin-bottom: 0.333333rem;\n}\n.container .txt[data-v-39d1945b] {\n  margin-bottom: 0.346667rem;\n  font-size: 0.453333rem;\n  font-weight: 400;\n  color: #979797;\n}\n.container .tips[data-v-39d1945b] {\n  font-size: 0.4rem;\n  font-weight: 400;\n  text-align: left;\n  color: #979797;\n  margin-bottom: 0.16rem;\n}\n.container .btn[data-v-39d1945b] {\n  width: 8.133333rem;\n  height: 1.186667rem;\n  opacity: 1;\n  background: #7632ff;\n  border-radius: 0.6rem;\n  border: none;\n  margin-bottom: 1.413333rem;\n  font-size: 0.453333rem;\n  font-weight: 400;\n  color: #ffffff;\n}\n.van-cell[data-v-39d1945b]::after {\n  display: none;\n}\n.van-hairline--bottom[data-v-39d1945b]::after {\n  display: none;\n}\n[data-v-39d1945b] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-39d1945b] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-weight: 700;\n  color: #1b1b1b;\n}",""]),n.exports=r},1127:function(n,t,e){"use strict";e.r(t);var r=e(14),o=(e(53),e(817)),d=e.n(o),c=e(1001),v=e.n(c),l=e(98),f={layout:"single-container",name:"Signup",components:{vueQr:v.a},data:function(){return{address:""}},computed:{},mounted:function(){this.initCopy(),this.getDepositAddress()},methods:{getDepositAddress:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$axios.post("/v1/udc/GetDepositAddress",{sChain:"Ethereum",sToken:"NERA",iChannel:0});case 2:data=t.sent,n.address=data.sAddress;case 4:case"end":return t.stop()}}),t)})))()},initCopy:function(){var n=this,t=document.getElementById("copy"),e=new d.a(t);e.on("success",(function(){n.$toast(n.$t("Mine32"))})),e.on("error",(function(n){}))},getAddress:function(n,t){return Object(l.h)(n,t)}}},m=(e(1002),e(32)),component=Object(m.a)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"signup"},[e("van-nav-bar",{attrs:{title:n.$t("Mine07"),"left-arrow":""},on:{"click-left":function(t){return n.$router.back()}}}),n._v(" "),e("div",{staticClass:"container"},[e("vue-qr",{staticClass:"qrcode",attrs:{text:n.address,size:200}}),n._v(" "),e("div",{staticClass:"txt"},[n._v(n._s(n.getAddress(n.address,24)))]),n._v(" "),e("van-button",{staticClass:"btn",attrs:{id:"copy",round:"",type:"info","data-clipboard-action":"copy","data-clipboard-text":n.address}},[n._v(n._s(n.$t("Mine19"))+"\n    ")]),n._v(" "),e("div",{staticClass:"tips"},[n._v(n._s(n.$t("Mine16")))]),n._v(" "),e("div",{staticClass:"tips"},[n._v("1，"+n._s(n.$t("Mine20"))+"https://erax.io/swap")]),n._v(" "),e("div",{staticClass:"tips"},[n._v("2，"+n._s(n.$t("Mine20-1")))]),n._v(" "),e("div",{staticClass:"tips"},[n._v("3，"+n._s(n.$t("Mine21")))])],1)],1)}),[],!1,null,"39d1945b",null);t.default=component.exports},915:function(n,t,e){var content=e(1003);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(52).default)("300bd3bb",content,!0,{sourceMap:!1})}}]);