exports.ids = [20];
exports.modules = {

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1f4c3993", content, true, context)
};

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_detail_vue_vue_type_style_index_0_id_58ceadda_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_detail_vue_vue_type_style_index_0_id_58ceadda_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_detail_vue_vue_type_style_index_0_id_58ceadda_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_detail_vue_vue_type_style_index_0_id_58ceadda_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_detail_vue_vue_type_style_index_0_id_58ceadda_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-nav-bar[data-v-58ceadda] {\n  padding-top: 0.773333rem;\n}\n.container[data-v-58ceadda] {\n  padding: 0.666667rem 0.533333rem;\n  text-align: center;\n}\n.van-hairline--bottom[data-v-58ceadda]::after {\n  display: none;\n}\n[data-v-58ceadda] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-58ceadda] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-weight: 700;\n  color: #1b1b1b;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Activity/Activity-detail.vue?vue&type=template&id=58ceadda&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-detail"},[_c('van-nav-bar',{attrs:{"title":_vm.$t('Nav03'),"left-arrow":""},on:{"click-left":function($event){return _vm.$router.back()}}}),_vm._ssrNode(" <div class=\"container\" data-v-58ceadda>"+(_vm._s(_vm.item.sContentDescription))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Activity/Activity-detail.vue?vue&type=template&id=58ceadda&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Activity/Activity-detail.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Activity_detailvue_type_script_lang_js_ = ({
  name: "activity-detail",
  layout: 'single-container',

  data() {
    return {
      item: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      activityDetail: state => state.activityDetail
    })
  },

  mounted() {
    let ary = [];
    let temp = localStorage.getItem('ActivityList');

    if (temp) {
      ary = JSON.parse(temp);
    }

    if (ary.indexOf(this.activityDetail.iListId) < 0) {
      ary.push(this.activityDetail.iListId);
      localStorage.setItem('ActivityList', JSON.stringify(ary));
    }
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/Activity/Activity-detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var Activity_Activity_detailvue_type_script_lang_js_ = (Activity_detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Activity/Activity-detail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(226)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Activity_Activity_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "58ceadda",
  "5e8a08a0"
  
)

/* harmony default export */ var Activity_detail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=20.js.map