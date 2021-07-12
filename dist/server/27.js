exports.ids = [27];
exports.modules = {

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7a45f6de", content, true, context)
};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recharge_vue_vue_type_style_index_0_id_11e1de0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recharge_vue_vue_type_style_index_0_id_11e1de0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recharge_vue_vue_type_style_index_0_id_11e1de0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recharge_vue_vue_type_style_index_0_id_11e1de0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recharge_vue_vue_type_style_index_0_id_11e1de0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-nav-bar[data-v-11e1de0a] {\n  border-bottom: 0.013333rem solid #e5e5e5;\n}\n[data-v-11e1de0a] .van-nav-bar__content {\n  height: 1.6rem;\n}\n.container[data-v-11e1de0a] {\n  padding: 0.773333rem 0.533333rem 0.4rem;\n  text-align: center;\n}\n.container .qrcode[data-v-11e1de0a] {\n  margin-bottom: 0.8rem;\n}\n.container .title[data-v-11e1de0a] {\n  font-size: 0.453333rem;\n  font-weight: 700;\n  text-align: left;\n  color: #1b1b1b;\n  margin-bottom: 0.333333rem;\n}\n.container .txt[data-v-11e1de0a] {\n  margin-bottom: 0.346667rem;\n  font-size: 0.453333rem;\n  font-weight: 400;\n  color: #979797;\n}\n.container .tips[data-v-11e1de0a] {\n  font-size: 0.4rem;\n  font-weight: 400;\n  text-align: left;\n  color: #979797;\n  margin-bottom: 0.16rem;\n}\n.container .btn[data-v-11e1de0a] {\n  width: 8.133333rem;\n  height: 1.186667rem;\n  opacity: 1;\n  background: #7632ff;\n  border-radius: 0.6rem;\n  border: none;\n  margin-bottom: 1.413333rem;\n  font-size: 0.453333rem;\n  font-weight: 400;\n  color: #ffffff;\n}\n.van-cell[data-v-11e1de0a]::after {\n  display: none;\n}\n.van-hairline--bottom[data-v-11e1de0a]::after {\n  display: none;\n}\n[data-v-11e1de0a] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-11e1de0a] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-weight: 700;\n  color: #1b1b1b;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/Recharge.vue?vue&type=template&id=11e1de0a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"signup"},[_c('van-nav-bar',{attrs:{"title":_vm.$t('Mine07'),"left-arrow":""},on:{"click-left":function($event){return _vm.$router.back()}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-11e1de0a>","</div>",[_c('vue-qr',{staticClass:"qrcode",attrs:{"text":_vm.address,"size":200}}),_vm._ssrNode(" <div class=\"txt\" data-v-11e1de0a>"+_vm._ssrEscape(_vm._s(_vm.getAddress(_vm.address, 24)))+"</div> "),_c('van-button',{staticClass:"btn",attrs:{"id":"copy","round":"","type":"info","data-clipboard-action":"copy","data-clipboard-text":_vm.address}},[_vm._v(_vm._s(_vm.$t('Mine19'))+"\n    ")]),_vm._ssrNode(" <div class=\"tips\" data-v-11e1de0a>"+_vm._ssrEscape(_vm._s(_vm.$t('Mine16')))+"</div> <div class=\"tips\" data-v-11e1de0a>"+_vm._ssrEscape("1，"+_vm._s(_vm.$t('Mine20'))+"https://erax.io/swap")+"</div> <div class=\"tips\" data-v-11e1de0a>"+_vm._ssrEscape("2，"+_vm._s(_vm.$t('Mine20-1')))+"</div> <div class=\"tips\" data-v-11e1de0a>"+_vm._ssrEscape("3，"+_vm._s(_vm.$t('Mine21')))+"</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/Recharge.vue?vue&type=template&id=11e1de0a&scoped=true&

// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__(92);
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// EXTERNAL MODULE: external "vue-qr"
var external_vue_qr_ = __webpack_require__(94);
var external_vue_qr_default = /*#__PURE__*/__webpack_require__.n(external_vue_qr_);

// EXTERNAL MODULE: ./plugins/utils.js
var utils = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/Recharge.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Rechargevue_type_script_lang_js_ = ({
  layout: "single-container",
  name: "Signup",
  components: {
    vueQr: external_vue_qr_default.a
  },

  data() {
    return {
      address: ''
    };
  },

  computed: {},

  mounted() {
    this.initCopy();
    this.getDepositAddress();
  },

  methods: {
    async getDepositAddress() {
      let data = await this.$axios.post('/v1/udc/GetDepositAddress', {
        sChain: 'Ethereum',
        sToken: 'NERA',
        iChannel: 0
      });
      this.address = data.sAddress;
    },

    initCopy() {
      let btn = document.getElementById("copy");
      let clipboard = new external_clipboard_default.a(btn);
      clipboard.on("success", () => {
        // this.$message.success(this.$t('message.lang_62'));
        this.$toast(this.$t('Mine32'));
      });
      clipboard.on("error", function (e) {});
    },

    getAddress(str, len) {
      return Object(utils["d" /* hideStrMid */])(str, len);
    }

  }
});
// CONCATENATED MODULE: ./pages/account/Recharge.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_Rechargevue_type_script_lang_js_ = (Rechargevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/Recharge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_Rechargevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11e1de0a",
  "3f768944"
  
)

/* harmony default export */ var Recharge = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=27.js.map