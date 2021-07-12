exports.ids = [22];
exports.modules = {

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("018b8194", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpCenter_vue_vue_type_style_index_0_id_929e1076_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpCenter_vue_vue_type_style_index_0_id_929e1076_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpCenter_vue_vue_type_style_index_0_id_929e1076_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpCenter_vue_vue_type_style_index_0_id_929e1076_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpCenter_vue_vue_type_style_index_0_id_929e1076_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".o-help[data-v-929e1076] {\n  padding: 0 0.4rem 0.533333rem;\n}\n.o-help ul li[data-v-929e1076] {\n  list-style: disc inside;\n  margin-bottom: 0.133333rem;\n}\n.o-help .o-co[data-v-929e1076] {\n  margin-bottom: 0.4rem;\n}\n.o-help .o-li3 ul[data-v-929e1076] {\n  padding-left: 4em;\n}\n.o-help .o-li3 ul li[data-v-929e1076] {\n  list-style: disc outside;\n}\n.o-help .o-title-1[data-v-929e1076] {\n  font-size: 0.533333rem;\n  text-align: center;\n  font-weight: 700;\n  padding: 0.4rem 0;\n}\n.o-help .o-title-2[data-v-929e1076] {\n  font-size: 0.4rem;\n  font-weight: 700;\n  margin-bottom: 0.066667rem;\n}\n.o-help .o-title-3[data-v-929e1076] {\n  font-size: 0.373333rem;\n  font-weight: 600;\n  text-indent: 1em;\n  margin-bottom: 0.026667rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/HelpCenter/HelpCenter.vue?vue&type=template&id=929e1076&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o-help"},[_vm._ssrNode("<h1 class=\"o-title-1\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help01')))+"</h1> <div class=\"o-co\" data-v-929e1076><h2 class=\"o-title-2\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help02')))+"</h2> <ul data-v-929e1076><li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help03')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help04')))+"</li></ul></div> <div class=\"o-co o-li3\" data-v-929e1076><h2 class=\"o-title-2\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help05')))+"</h2> <h3 class=\"o-title-3\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help06')))+"</h3> <ul data-v-929e1076><li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help07')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help08')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help09')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help10')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help11')))+"</li></ul> <h3 class=\"o-title-3\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help12')))+"</h3> <ul data-v-929e1076><li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help13')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help14')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help15'))+" https://erax.io/erac")+"</li></ul> <h3 class=\"o-title-3\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help16')))+"</h3> <ul data-v-929e1076><li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help17')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help18')))+"</li></ul></div> <div class=\"o-co\" data-v-929e1076><h2 class=\"o-title-2\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help19')))+"</h2> <ul data-v-929e1076><li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help20')))+"</li></ul></div> <div class=\"o-co\" data-v-929e1076><h2 class=\"o-title-2\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help21'))+" ")+"</h2> <ul data-v-929e1076><li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help22')))+"</li> <li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help23')))+"</li></ul></div> <div class=\"o-co\" data-v-929e1076><h2 class=\"o-title-2\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help24')))+"</h2> <ul data-v-929e1076><li data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help25')))+"</li></ul></div> <div class=\"o-co\" data-v-929e1076><h2 class=\"o-title-2\" data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help26')))+"</h2> <p data-v-929e1076>"+_vm._ssrEscape(_vm._s(_vm.$t('Help27')))+"</p> <p data-v-929e1076>TELEGRAM：<a href=\"https://t.me/EraxNFT\" data-v-929e1076>https://t.me/EraxNFT</a></p> <p data-v-929e1076>Twitter：<a href=\"https://twitter.com/ERAXNFT\" data-v-929e1076>https://twitter.com/ERAXNFT</a></p> <p data-v-929e1076>E-MAIL：<a href=\"mailto:infor@erax.com\" data-v-929e1076>infor@erax.com</a></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/HelpCenter/HelpCenter.vue?vue&type=template&id=929e1076&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/HelpCenter/HelpCenter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HelpCentervue_type_script_lang_js_ = ({
  name: "HelpCenter"
});
// CONCATENATED MODULE: ./pages/HelpCenter/HelpCenter.vue?vue&type=script&lang=js&
 /* harmony default export */ var HelpCenter_HelpCentervue_type_script_lang_js_ = (HelpCentervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/HelpCenter/HelpCenter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HelpCenter_HelpCentervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "929e1076",
  "26f37844"
  
)

/* harmony default export */ var HelpCenter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=22.js.map