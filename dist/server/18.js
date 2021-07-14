exports.ids = [18];
exports.modules = {

/***/ 155:
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
  add("39d88b37", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_ad2292be_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_ad2292be_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_ad2292be_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_ad2292be_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_ad2292be_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(17);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(188);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".o-reward-start[data-v-ad2292be] {\n  position: relative;\n  height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n}\n.o-reward-start .o-start-box[data-v-ad2292be] {\n  position: fixed;\n  text-align: center;\n  bottom: 1.4rem;\n}\n.o-reward-start .o-start-box .o-start-content[data-v-ad2292be] {\n  padding: 0 0.933333rem;\n  font-size: 0.373333rem;\n  color: #ffffff;\n  line-height: 0.64rem;\n  margin-bottom: 1.133333rem;\n}\n.o-reward-start .o-start-box .o-start-explore[data-v-ad2292be] {\n  display: block;\n  width: 3.2rem;\n  height: 1.066667rem;\n  line-height: 1.066667rem;\n  margin: 0 auto;\n  font-size: 0.373333rem;\n  background-color: initial;\n  border: 0.013333rem solid #ffffff;\n  border-radius: 0.146667rem;\n  color: #ffffff;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reward_start_bg.f8a48f8.png";

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Start.vue?vue&type=template&id=ad2292be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o-reward-start"},[_vm._ssrNode("<div class=\"o-start-box\" data-v-ad2292be>","</div>",[_vm._ssrNode("<p class=\"o-start-content\" data-v-ad2292be>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('Main22'))+"\n    ")+"</p> "),_c('van-button',{staticClass:"o-start-explore",on:{"click":_vm.handleGo}},[_vm._v("EXPLORE")])],2),_vm._ssrNode(" "),_c('van-popup',{staticClass:"o-popup-sign",attrs:{"get-container":"body"},model:{value:(_vm.showPwd),callback:function ($$v) {_vm.showPwd=$$v},expression:"showPwd"}},[_c('div',{staticClass:"o-sign-box"},[_c('h3',{staticClass:"o-sign-txt"},[_vm._v(_vm._s(_vm.$t('Account02')))]),_vm._v(" "),_c('van-field',{staticClass:"o-form-field",attrs:{"placeholder":_vm.$t('Account29')},model:{value:(_vm.pwd),callback:function ($$v) {_vm.pwd=$$v},expression:"pwd"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('van-button',{staticClass:"o-sign-btn",on:{"click":_vm.handlePwd}},[_vm._v(_vm._s(_vm.$t('Billboard14')))])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Start.vue?vue&type=template&id=ad2292be&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Start.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Startvue_type_script_lang_js_ = ({
  name: "Start",

  data() {
    return {
      showPwd: false,
      pwd: ""
    };
  },

  mounted() {
    const theNew = localStorage.getItem('theNew');

    if (theNew) {
      this.$router.replace('/main');
    }
  },

  methods: {
    handlePwd() {
      if (this.pwd !== 'erax') {
        this.$toast(this.$t('Account30'));
        return;
      }

      localStorage.setItem('pwd', 'erax');
      this.$router.replace('/main');
    },

    handleGo() {
      // const pwd = localStorage.getItem('pwd')
      // if (pwd) {
      //   localStorage.setItem('theNew', new Date().getTime().toString())
      //   this.$router.replace('/main')
      //   return
      // }
      // this.showPwd = true
      this.$router.replace('/main');
    }

  }
});
// CONCATENATED MODULE: ./pages/Start.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Startvue_type_script_lang_js_ = (Startvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Start.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Startvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ad2292be",
  "efdb2616"
  
)

/* harmony default export */ var Start = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=18.js.map