exports.ids = [28];
exports.modules = {

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("41d7fa52", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_style_index_0_id_d9f3d950_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_style_index_0_id_d9f3d950_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_style_index_0_id_d9f3d950_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_style_index_0_id_d9f3d950_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_style_index_0_id_d9f3d950_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-nav-bar[data-v-d9f3d950] {\n  border-bottom: 0.013333rem solid #e5e5e5;\n}\n[data-v-d9f3d950] .van-nav-bar__content {\n  height: 1.6rem;\n}\n.container[data-v-d9f3d950] {\n  padding: 0.48rem 0.533333rem;\n  text-align: center;\n}\n.container .title[data-v-d9f3d950] {\n  font-size: 0.453333rem;\n  font-weight: 700;\n  text-align: left;\n  color: #1b1b1b;\n  margin-bottom: 0.333333rem;\n}\n.container .value[data-v-d9f3d950] {\n  color: #6a47fe !important;\n}\n.container .send[data-v-d9f3d950] {\n  font-size: 0.373333rem;\n  font-weight: 400;\n  color: #6a47fe;\n}\n.container .txt[data-v-d9f3d950] {\n  height: 1.146667rem;\n  background: #fafafa;\n  border-radius: 0.533333rem;\n  border: none;\n  margin-bottom: 0.6rem;\n}\n.container .tips[data-v-d9f3d950] {\n  font-size: 0.4rem;\n  font-weight: 400;\n  text-align: left;\n  color: #979797;\n  margin-bottom: 0.16rem;\n}\n.container .btn[data-v-d9f3d950] {\n  margin-top: 1.333333rem;\n  width: 8.133333rem;\n  height: 1.186667rem;\n  opacity: 1;\n  background: #7632ff;\n  border-radius: 0.6rem;\n  border: none;\n  margin-bottom: 1.066667rem;\n}\n.van-cell[data-v-d9f3d950]::after {\n  display: none;\n}\n.van-hairline--bottom[data-v-d9f3d950]::after {\n  display: none;\n}\n[data-v-d9f3d950] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-d9f3d950] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-weight: 700;\n  color: #1b1b1b;\n}\n.down-tips[data-v-d9f3d950] {\n  font-size: 0.4rem;\n  font-weight: 400;\n  text-align: left;\n  color: #979797;\n  margin-bottom: 0.16rem;\n}\n.van-popup[data-v-d9f3d950] {\n  background: transparent;\n  overflow: hidden;\n}\n.van-popup .container[data-v-d9f3d950] {\n  width: 7.866667rem;\n  opacity: 1;\n  background: #ffffff;\n  border: 0.013333rem solid #707070;\n  border-radius: 1rem;\n  padding: 0.666667rem 0.266667rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.van-popup .container img[data-v-d9f3d950] {\n  width: 1.893333rem;\n}\n.van-popup .container .van-icon-checked[data-v-d9f3d950] {\n  font-size: 1.893333rem;\n}\n.van-popup .container .txt1[data-v-d9f3d950] {\n  font-size: 0.453333rem;\n  font-weight: 700;\n  color: #1b1b1b;\n  margin-top: 0.533333rem;\n}\n.van-popup .container .txt2[data-v-d9f3d950] {\n  font-size: 0.453333rem;\n  font-weight: 700;\n  color: #6a47fe;\n  margin-top: 0.093333rem;\n}\n.van-popup .container .txt3[data-v-d9f3d950] {\n  font-size: 0.4rem;\n  font-weight: 400;\n  color: #979797;\n  margin-top: 0.333333rem;\n  margin-bottom: 0.533333rem;\n}\n.van-popup .container .txt4[data-v-d9f3d950] {\n  font-size: 0.4rem;\n  font-weight: 400;\n  color: #1b1b1b;\n  margin-bottom: 0.533333rem;\n}\n.van-popup .container .successBtn[data-v-d9f3d950] {\n  width: 3.093333rem;\n  height: 0.893333rem;\n  opacity: 1;\n  background: #6a47fe;\n  border-radius: 0.453333rem;\n  border: none;\n}\n.van-popup .line[data-v-d9f3d950] {\n  width: 0.04rem;\n  height: 0.8rem;\n  background: #ffffff;\n  margin: 0 auto;\n}\n.van-popup .fa-clone[data-v-d9f3d950] {\n  margin-left: 0.066667rem;\n  color: #979797;\n}\n.van-popup .close[data-v-d9f3d950] {\n  width: 0.746667rem;\n  height: 0.746667rem;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/Withdraw.vue?vue&type=template&id=d9f3d950&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"signup"},[_c('van-nav-bar',{attrs:{"title":_vm.$t('Mine06'),"left-arrow":""},on:{"click-left":function($event){return _vm.$router.back()}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-d9f3d950>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-d9f3d950>"+_vm._ssrEscape(_vm._s(_vm.$t('Mine10')))+"</div> "),_c('van-field',{staticClass:"txt",attrs:{"placeholder":_vm.$t('Mine12')},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}}),_vm._ssrNode(" <div class=\"title\" data-v-d9f3d950>"+_vm._ssrEscape(_vm._s(_vm.$t('Mine11')))+"</div> "),_c('van-field',{staticClass:"txt",attrs:{"placeholder":_vm.$t('Mine13',{nera:_vm.minDraw})},on:{"input":_vm.onInput},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}}),_vm._ssrNode(" <div class=\"tips\" data-v-d9f3d950>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('Mine14'))+"：\n      ")+"<span class=\"value\" data-v-d9f3d950>"+_vm._ssrEscape(_vm._s(_vm._f("formatNera")(_vm.limit.sUsableWithdrawQty)))+"</span>NERA\n    </div> <div class=\"tips\" data-v-d9f3d950>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('Mine15'))+"：")+"<span class=\"value\" data-v-d9f3d950>"+_vm._ssrEscape(_vm._s(_vm.getFee()))+"</span>NERA\n    </div> "),_c('van-button',{staticClass:"btn",attrs:{"round":"","type":"info","disabled":_vm.btnDisable},on:{"click":function($event){_vm.showPop = true}}},[_vm._v(_vm._s(_vm.$t('Mine06'))+"\n    ")]),_vm._ssrNode(" <div class=\"down-tips\" data-v-d9f3d950>"+_vm._ssrEscape(_vm._s(_vm.$t('Mine16')))+"</div> <div class=\"down-tips\" data-v-d9f3d950>"+_vm._ssrEscape("1."+_vm._s(_vm.$t('Mine17')))+"</div> <div class=\"down-tips\" data-v-d9f3d950>"+_vm._ssrEscape("2."+_vm._s(_vm.$t('Mine18')))+"</div>")],2),_vm._ssrNode(" "),_c('van-popup',{model:{value:(_vm.showPop),callback:function ($$v) {_vm.showPop=$$v},expression:"showPop"}},[_c('div',{staticClass:"pop-container"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"txt1"},[_vm._v(_vm._s(_vm.$t('Mine22')))]),_vm._v(" "),_c('div',{staticClass:"txt3"},[_vm._v(_vm._s(_vm.email))]),_vm._v(" "),_c('van-field',{staticClass:"txt",attrs:{"maxlength":"6","placeholder":_vm.$t('Mine24')},scopedSlots:_vm._u([{key:"button",fn:function(){return [_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.daley),expression:"!daley"}],staticClass:"send",on:{"click":_vm.getCode}},[_vm._v("\n              "+_vm._s(_vm.$t('Mine23'))+"\n            ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.daley),expression:"daley"}],staticClass:"send"},[_vm._v(_vm._s(_vm.daley)+"s")])]},proxy:true}]),model:{value:(_vm.code),callback:function ($$v) {_vm.code=$$v},expression:"code"}}),_vm._v(" "),_c('van-button',{staticClass:"successBtn",attrs:{"disabled":_vm.code.length < 6,"round":"","type":"info"},on:{"click":_vm.withDraw}},[_vm._v("complete\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"line"}),_vm._v(" "),_c('div',{staticClass:"close",on:{"click":function($event){_vm.showPop = false}}},[_c('i',{staticClass:"fas fa-times"})])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/Withdraw.vue?vue&type=template&id=d9f3d950&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/Withdraw.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Withdrawvue_type_script_lang_js_ = ({
  layout: "single-container",
  name: "Signup",

  data() {
    return {
      email: "",
      address: "",
      value: "",
      code: "",
      daley: 0,
      deleyTimeId: null,
      showPop: false,
      limit: {},
      minDraw: 0
    };
  },

  computed: {
    btnDisable() {
      if (!this.address || !this.value) return true;
      if (this.value < parseFloat(this.limit.sMinWithdrawQty)) return true;
      return false;
    }

  },

  beforeDestroy() {
    clearInterval(this.deleyTimeId);
  },

  mounted() {
    this.email = localStorage.getItem("Email");
    this.getLimit();
  },

  methods: {
    async withDraw() {
      await this.$axios.post("/v1/udc/UserWithdraw", {
        iMethod: 1,
        sChain: "Ethereum",
        sToken: "NERA",
        sWithdrawAmount: this.value,
        sAddress: this.address,
        sEmailVerifyCode: this.code,
        iSource: 1
      });
      this.showPop = false;
      this.value = "";
      this.code = "";
      this.getLimit();
      this.$toast(this.$t('Mine36'));
    },

    getFee() {
      if (!this.value || !this.limit.sWithdrawFee) return 0;
      let temp = parseFloat(this.value) * parseFloat(this.limit.sWithdrawFee);
      return parseFloat(temp.toFixed(3));
    },

    onInput() {
      this.value = this.value.match(/^\d*(\.?\d{0,4})/g)[0] || null;

      if (this.value > Math.min(parseFloat(this.limit.sUsableWithdrawQty), parseFloat(this.limit.sMaxWithdrawQty))) {
        this.value = Math.min(parseFloat(this.limit.sUsableWithdrawQty), parseFloat(this.limit.sMaxWithdrawQty));
      }
    },

    async getLimit() {
      let data = await this.$axios.post("/v1/udc/GetWithdrawLimit", {
        sChain: "Ethereum",
        sToken: "NERA"
      });
      this.limit = data;
      this.minDraw = parseFloat(this.limit.sMinWithdrawQty);
    },

    async getCode() {
      var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

      await this.$axios.post("/v1/auth/SendEmailVerifyCode", {
        iSource: 1,
        iSendMethod: 2,
        iVerifyBusi: 17,
        sEmail: this.email
      });
      this.daley = 60;
      this.deleyTimeId = setInterval(() => {
        this.daley--;

        if (this.daley <= 0) {
          clearInterval(this.deleyTimeId);
        }
      }, 1000);
    }

  }
});
// CONCATENATED MODULE: ./pages/account/Withdraw.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_Withdrawvue_type_script_lang_js_ = (Withdrawvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/Withdraw.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_Withdrawvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d9f3d950",
  "20c62c27"
  
)

/* harmony default export */ var Withdraw = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=28.js.map