(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{521:function(n,e,t){var content=t(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(35).default)("0cf17755",content,!0,{sourceMap:!1})},692:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsSAAALEgHS3X78AAACBElEQVRYw9WZzW2DMBTH/6CqZ249lg3CBmGDMgIjZARGoBOUY49ce6MbkA049pioA7weYuiLZSN/JTh/yRI4iv2Ln+33kYSIEEglgE8AL6zvCGAEMIg2WY9KRDatJKKeLuqIKGefzf1r6sUYxnPagA2KCflkORH9kpkGU1ATuFYzyWTwo2qx0ifNGK0PYEZEo+bX15ZbA0RUaawwirmsAXvFilUOYCrQSTF2YQs4SJs7CwDHraNagMwG8CAgm4BgcusU5nY6xbgjZBsboGq/L1dQEtCT+CgTHudVvH8Lz4RUdOQAWuGOttAJwIG972dA1RKXG5pavjkwuyiuakPASmLJ02UpLzoD6D1MVYvmql4wLBGSDOgDVwH4EK3yhLwCLFiHzyEpNM+24gxFCmDHOqYIrhzOsEvo+iJMHMxasIh6z+6xeSVGh61DPKLmsjlxNZnLNjxblCJyPZyJfbxIw8bxCdFK2cRHRp5HYFXOcEyFCXhu66pR8+ySX/+PI53GydOX1o4JFW88A6znYGEKsHduESxkPIlpAidGwcKtWFqlulEeJuTfWh2DA4BmfnjSfKFhuUJ7B7g39v5+FXIZbNYuxsR9UNT1oip9FJoCT1TFo7XyWx5D+W2tgNkaRiU3LWCulYAnzbb42aIELIPqXOJNiughPUkJ4AvAs+ZviF7cq1b6A0/HXQYuE/zFAAAAAElFTkSuQmCC"},693:function(n,e,t){"use strict";t(521)},694:function(n,e,t){var o=t(34)(!1);o.push([n.i,".o-cell-item[data-v-62483d79] {\n  height: 1.333333rem;\n  padding: 0;\n  line-height: 1.333333rem;\n  font-size: 0.373333rem;\n}\n.o-cell-item[data-v-62483d79]:after {\n  border-bottom: 0;\n}\n.o-cell-item.selected[data-v-62483d79] {\n  background-color: #eeeeee;\n}\n.o-cell-item.selected .van-cell__value[data-v-62483d79] {\n  color: #1D1D1D;\n}\n.o-cell-item .van-cell__value[data-v-62483d79] {\n  text-align: center;\n  color: #DCDCDC;\n}\n[data-v-62483d79] .van-dropdown-menu__bar {\n  padding: 0 0.6rem;\n}\n[data-v-62483d79] .van-dropdown-menu__bar .van-dropdown-menu__title .van-ellipsis {\n  text-overflow: initial;\n}\n[data-v-62483d79] .van-dropdown-menu__bar .van-dropdown-menu__title::after {\n  border-color: transparent transparent #7632FF #7632FF;\n}\n[data-v-62483d79] .van-dropdown-menu__bar .van-dropdown-menu__title--active::after {\n  border-color: transparent transparent currentColor currentColor !important;\n}\n.page-list-box[data-v-62483d79] {\n  display: flex;\n  flex-direction: column;\n}\n#o-reward-container[data-v-62483d79] {\n  flex: 1;\n  overflow-y: scroll;\n  padding: 0 0.333333rem 2.266667rem 0.333333rem;\n}\n.o-new-offer-box[data-v-62483d79] {\n  position: fixed;\n  bottom: 0.533333rem;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n.o-new-offer[data-v-62483d79] {\n  width: 1.84rem;\n  margin: 0 auto;\n  padding: 0 0.266667rem 0 0.133333rem;\n  height: 0.8rem;\n  background: linear-gradient(122deg, #c75bff 0%, #7632ff 100%);\n  border: 0.066667rem solid #ffffff;\n  border-radius: 0.466667rem;\n  box-shadow: 0 0 0.2rem 0 rgba(5, 0, 0, 0.3);\n  color: #FFFFFF;\n  font-size: 0.32rem;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  line-height: 0.8rem;\n  box-sizing: content-box;\n}\n.o-new-offer .o-tianjia[data-v-62483d79] {\n  margin-right: 0.133333rem;\n  width: 0.533333rem;\n  height: 0.533333rem;\n}",""]),n.exports=o},994:function(n,e,t){"use strict";t.r(e);t(85),t(52),t(71);var o={name:"Billboard",data:function(){return{oBillboardIndex:this.$route.params.type||"recommend",oBillboardList:{recommend:{text:"Billboard01",icon:"far fa-lightbulb"},unconfirmed:{text:"Billboard02",icon:"far fa-calendar"},unanswered:{text:"Billboard04",icon:"far fa-comment"},confirmed:{text:"Billboard03",icon:"far fa-calendar-check"}},isShow:!0,timer:null}},mounted:function(){},methods:{handleScrollStart:function(){var n=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){n.isShow=!0,clearTimeout(n.timer)}),300),this.isShow=!1},handleSelect:function(n,i){this.oBillboardIndex=i,this.$refs.BillboardNav.toggle(),this.$route.path!=="/billboard/".concat(i)&&this.$router.replace("/billboard/".concat(i))}},beforeDestroy:function(){clearTimeout(this.timer)}},r=(t(693),t(22)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"page-list-box"},[o("van-dropdown-menu",[o("van-dropdown-item",{ref:"BillboardNav",scopedSlots:n._u([{key:"title",fn:function(){return[o("i",{class:n.oBillboardList[n.oBillboardIndex].icon}),n._v(" "+n._s(n.$t(n.oBillboardList[n.oBillboardIndex].text))+"\n      ")]},proxy:!0}])},[n._v(" "),n._l(n.oBillboardList,(function(e,i){return o("van-cell",{key:i,class:["o-cell-item",{selected:n.oBillboardIndex===i}],on:{click:function(t){return n.handleSelect(e,i)}}},[o("i",{class:e.icon}),n._v(" "),o("span",[n._v(n._s(n.$t(e.text)))])])}))],2)],1),n._v(" "),o("div",{attrs:{id:"o-reward-container"},on:{scroll:n.handleScrollStart}},[o("nuxt-child",{attrs:{"keep-alive":""}})],1),n._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"o-new-offer-box"},[o("div",{staticClass:"o-new-offer",on:{click:function(e){return n.$router.push({name:"Publish"})}}},[o("img",{staticClass:"o-tianjia",attrs:{src:t(692),alt:""}}),n._v("OFFER\n    ")])])],1)}),[],!1,null,"62483d79",null);e.default=component.exports}}]);