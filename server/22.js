exports.ids = [22];
exports.modules = {

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2e3b2f05", content, true, context)
};

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_style_index_0_id_764c10f2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_style_index_0_id_764c10f2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_style_index_0_id_764c10f2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_style_index_0_id_764c10f2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_style_index_0_id_764c10f2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".badge[data-v-764c10f2] {\n  position: absolute;\n  right: 0.133333rem;\n  top: 0.133333rem;\n}\n.o-activity[data-v-764c10f2] {\n  min-height: 100vh;\n  background-color: #F9F9F9;\n}\n.o-activity .o-img-box[data-v-764c10f2] {\n  margin-bottom: 0.266667rem;\n  position: relative;\n}\n.o-activity .o-img-box .o-img[data-v-764c10f2] {\n  width: 100%;\n  height: 5.226667rem;\n}\n.o-activity .o-img-box .o-des[data-v-764c10f2] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  padding: 0 1.866667rem;\n}\n.o-activity .o-img-box .o-des.o-preparation[data-v-764c10f2] {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.o-activity .o-img-box .o-des.o-preparation .icon-alarm[data-v-764c10f2] {\n  font-size: 1.066667rem;\n  margin-right: 0.266667rem;\n  color: #ffffff;\n}\n.o-activity .o-img-box .o-des.o-preparation .o--title[data-v-764c10f2] {\n  font-size: 0.453333rem;\n  color: #ffffff;\n  line-height: 0.613333rem;\n}\n.o-activity .o-img-box .o-des.o-end[data-v-764c10f2] {\n  top: 0.333333rem;\n  right: 0.533333rem;\n  padding: 0 0.333333rem;\n  height: 0.64rem;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 0.213333rem;\n  font-size: 0.453333rem;\n  color: #ffffff;\n  line-height: 0.64rem;\n}\n.o-activity .o-activity-list[data-v-764c10f2] {\n  padding: 0.453333rem 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Activity/Activity.vue?vue&type=template&id=764c10f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o-activity"},[_vm._ssrNode("<div class=\"o-activity-list\" data-v-764c10f2>","</div>",_vm._l((_vm.activityList),function(v,i){return _vm._ssrNode("<div class=\"o-img-box\" data-v-764c10f2>","</div>",[_c('van-badge',{staticClass:"badge",attrs:{"dot":_vm.checkRed(v)}}),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",v.sCoverImg))+" alt class=\"o-img\" data-v-764c10f2> "+((v.iType === 1)?("<div class=\"o-des o-preparation\" data-v-764c10f2><i class=\"iconfont icon-alarm\" data-v-764c10f2></i> <p class=\"o--title\" data-v-764c10f2>In preparation, coming soon</p></div>"):"<!---->")+" "+((v.iType === 3)?("<div class=\"o-des o-end\" data-v-764c10f2><span data-v-764c10f2>Over</span></div>"):"<!---->"))],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Activity/Activity.vue?vue&type=template&id=764c10f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Activity/Activity.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Activityvue_type_script_lang_js_ = ({
  name: "Activity",

  // layout: 'single-container',
  data() {
    return {
      activityList: []
    };
  },

  computed: {},

  mounted() {
    this.getList();
  },

  methods: {
    checkRed(v) {
      if (true) {
        return false;
      }

      let ary = [];
      let temp = this.$cookies.get('ActivityList');

      if (temp) {
        ary = temp;

        if (ary.indexOf(v.iListId) > -1) {
          return false;
        }
      }

      return true;
    },

    async getList() {
      let {
        vActivity
      } = await this.$axios.post('v1/emall/GetActivityList', {
        iPageNo: 0,
        iPageNum: 100
      });

      if (vActivity.length) {
        this.activityList = vActivity;
      }
    },

    toActivity(item) {
      // this.$store.commit('CHANGE_DATA',{key:'activityDetail',val:item});
      // this.$nextTick(()=>{
      //
      // })
      this.$router.push({
        path: '/activity-detail',
        query: {
          info: JSON.stringify(item)
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/Activity/Activity.vue?vue&type=script&lang=js&
 /* harmony default export */ var Activity_Activityvue_type_script_lang_js_ = (Activityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Activity/Activity.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(238)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Activity_Activityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "764c10f2",
  "1720446f"
  
)

/* harmony default export */ var Activity = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=22.js.map