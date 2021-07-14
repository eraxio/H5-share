exports.ids = [6];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5f545aba", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_OReward_vue_vue_type_style_index_0_id_64f67ca4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_OReward_vue_vue_type_style_index_0_id_64f67ca4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_OReward_vue_vue_type_style_index_0_id_64f67ca4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_OReward_vue_vue_type_style_index_0_id_64f67ca4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_OReward_vue_vue_type_style_index_0_id_64f67ca4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".o-year-line[data-v-64f67ca4] {\n  position: relative;\n  padding: 0.853333rem 0.293333rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.o-year-line[data-v-64f67ca4]:after {\n  content: \"\";\n  position: absolute;\n  height: 0.026667rem;\n  left: 0.586667rem;\n  right: 0.586667rem;\n  background: rgba(49, 49, 49, 0.1);\n}\n.o-year-line .o-year[data-v-64f67ca4] {\n  position: relative;\n  font-weight: 700;\n  border-radius: 0.133333rem;\n  font-size: 0.453333rem;\n  text-align: center;\n  font-family: Arial, Arial-Regular, serif;\n}\n.o-year-line .o-year.--0[data-v-64f67ca4] {\n  background: #ffffff;\n  border: 0.026667rem solid #e5e5e5;\n  padding: 0 0.32rem;\n  color: #1d1d1d;\n  line-height: 0.8rem;\n  position: absolute;\n  z-index: 1;\n}\n.o-year-line .o-year.--0 .o-clock[data-v-64f67ca4] {\n  position: absolute;\n  font-size: 0.24rem;\n  bottom: -0.173333rem;\n  left: 0;\n  right: 0;\n  color: #1D1D1D;\n}\n.o-year-line .o-year.--1[data-v-64f67ca4] {\n  line-height: 0.8rem;\n  color: #bfbfbf;\n  font-weight: 600;\n}\n.o-year-line .o-year.--2[data-v-64f67ca4] {\n  font-size: 0.373333rem;\n  line-height: 0.8rem;\n  color: #e9e9e9;\n  font-weight: 400;\n}\n.o-year-line .o-year.--3[data-v-64f67ca4] {\n  width: 1.706667rem;\n}\n.o--bottom[data-v-64f67ca4] {\n  position: absolute;\n  bottom: 0.693333rem;\n  left: 0;\n  right: 0;\n}\n.o--bottom .o--answer[data-v-64f67ca4] {\n  padding: 0.08rem 0.186667rem;\n  height: 0.56rem;\n  background: #ffffff;\n  border: 0.013333rem solid #eeeeee;\n  border-radius: 0.133333rem;\n  font-size: 0.32rem;\n  color: #BFBFBF;\n}\n.o--bottom .o--answer .o--count[data-v-64f67ca4] {\n  color: #1d1d1d;\n}\n.o--bottom .o-tip[data-v-64f67ca4] {\n  padding-top: 0.2rem;\n  font-size: 0.293333rem;\n  color: #d3d3d3;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/cell/OReward.vue?vue&type=template&id=64f67ca4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o-issue-box main reward",on:{"click":function($event){return _vm.$router.push(("/reward/detail/" + (_vm.vReward.iRewardId)))}}},[_vm._ssrNode("<div class=\"o-reward-box\" data-v-64f67ca4><p class=\"o-for-reward\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm.$t('Main34')))+"</p> <div class=\"o-nera\" data-v-64f67ca4><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt class=\"o-icon-nera\" data-v-64f67ca4> <span class=\"o-nera-prise\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm._f("formatNera")(_vm.vReward.iReward)))+"</span></div> <p class=\"o-for-dollar\" data-v-64f67ca4>"+_vm._ssrEscape("$"+_vm._s(_vm._f("formatNera")(_vm.vReward.iReward * _vm.nera)))+"</p></div> "),_vm._ssrNode("<div class=\"o-reward-user\" data-v-64f67ca4>","</div>",[_c('o-head',{staticClass:"o-reward-user-avatar",attrs:{"avatar-url":_vm.stUser.sAvatar}}),_vm._ssrNode(" <span class=\"o-reward-user-nickname\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm.stUser.sName))+"</span>")],2),_vm._ssrNode(" <div class=\"o-year-line\" data-v-64f67ca4><p class=\"o-year --2\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(_vm.vReward.sDate,-2)))+"</p> <p class=\"o-year --1\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(_vm.vReward.sDate,-1)))+"</p> <p class=\"o-year --3\" data-v-64f67ca4></p> <p class=\"o-year --0\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(_vm.vReward.sDate)))+"<i class=\"far fa-clock o-clock\" data-v-64f67ca4></i></p> <p class=\"o-year --1\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(_vm.vReward.sDate,1)))+"</p> <p class=\"o-year --2\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(_vm.vReward.sDate,2)))+"</p></div> <p class=\"o-issue van-multi-ellipsis--l2\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm.vReward.sSubject))+"</p> <div class=\"o--bottom\" data-v-64f67ca4><span class=\"o--answer\" data-v-64f67ca4><span class=\"o--count\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm.vReward.vAnswer.length))+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('Billboard22')))+"</span> "+((_vm.isLogin ? (_vm.userInfo.iUserId !== _vm.vReward.iUserId) : true)?("<p class=\"o-tip\" data-v-64f67ca4>"+_vm._ssrEscape(_vm._s(_vm.$t('Main21')))+"</p>"):"<!---->")+"</div> "),(_vm.userInfo.iUserId !== _vm.vReward.iUserId)?_vm._ssrNode("<div class=\"o-reward-answer-box\" data-v-64f67ca4>","</div>",[_c('van-button',{staticClass:"o-reward-btn answer",on:{"click":function($event){$event.stopPropagation();return _vm.goAnswer(_vm.vReward)}}},[_vm._v(_vm._s(_vm.$t('Main02'))+"\n    ")])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/cell/OReward.vue?vue&type=template&id=64f67ca4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/cell/OReward.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ORewardvue_type_script_lang_js_ = ({
  name: "OReward",
  props: ['vReward', 'rate'],
  filters: {
    filterDate(date, cut = 0) {
      return new Date(date).getFullYear() + cut;
    }

  },
  computed: { ...Object(external_vuex_["mapState"])({
      userInfo: state => state.userInfo,
      isLogin: state => state.isLogin,
      nera: state => state.nera
    }),

    stUser() {
      return this.vReward.stUser || {};
    },

    canAnswer() {}

  },
  watch: {
    nera(v) {
      return v;
    }

  },
  methods: {
    goAnswer(vReward) {
      // console.log(key);
      this.$router.push({
        path: '/answer',
        query: {
          iRewardId: vReward.iRewardId
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/cell/OReward.vue?vue&type=script&lang=js&
 /* harmony default export */ var cell_ORewardvue_type_script_lang_js_ = (ORewardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/cell/OReward.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cell_ORewardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "64f67ca4",
  "7d1c5d96"
  
)

/* harmony default export */ var OReward = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cell-o-reward.js.map