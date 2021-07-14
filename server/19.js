exports.ids = [19];
exports.modules = {

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f9dc356c", content, true, context)
};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/complete_avatar.dc7b2e2.png";

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_id_80106414_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_id_80106414_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_id_80106414_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_id_80106414_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_id_80106414_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".o-complete .o-box[data-v-80106414] {\n  padding: 1.013333rem 0.533333rem 0;\n  text-align: center;\n}\n.o-complete .o-box .c-avatar[data-v-80106414] {\n  width: 2.133333rem;\n  height: 2.133333rem;\n  margin-bottom: 0.826667rem;\n  object-fit: cover;\n}\n.o-complete .o-box .o-field[data-v-80106414] {\n  margin: 0 auto 0.826667rem;\n  padding: 0;\n}\n.o-complete .o-box .o-field[data-v-80106414]:after {\n  border: 0;\n}\n.o-complete .o-box .o-field[data-v-80106414] .van-field__error-message {\n  padding: 0 0.4rem;\n}\n.o-complete .o-box .o-field[data-v-80106414] .van-field__body {\n  height: 1.146667rem;\n  background: #fafafa;\n  border: 0;\n  border-radius: 0.533333rem;\n  padding: 0.266667rem 0.4rem;\n}\n.o-complete .o-box .o-field.c[data-v-80106414] {\n  margin-bottom: 2.346667rem;\n}\n.o-complete .o-box .o-btn[data-v-80106414] {\n  height: 1.146667rem;\n  border-radius: 0.573333rem;\n  color: #ffffff;\n  border: 0;\n}\n.o-uploader-upload[data-v-80106414],[data-v-80106414] .van-uploader__preview-image {\n  width: 2.133333rem;\n  height: 2.133333rem;\n  text-align: center;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/account/Complete.vue?vue&type=template&id=80106414&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o-complete"},[_c('van-nav-bar',{attrs:{"title":_vm.$t('Account23'),"left-arrow":""},on:{"click-left":function($event){return _vm.$router.back()}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"o-box\" data-v-80106414>","</div>",[_c('van-form',{on:{"submit":_vm.handleSubmit}},[_c('van-uploader',{staticClass:"c-avatar",attrs:{"max-count":1,"max-size":8 * 1024 * 1024,"after-read":_vm.afterRead,"before-delete":_vm.handleDelete},on:{"oversize":_vm.onOversize}},[_c('div',{staticClass:"o-uploader-upload"},[(_vm.cForm.sAvatar)?_c('img',{staticClass:"c-avatar",attrs:{"src":_vm.cForm.sAvatar,"alt":""}}):_c('img',{staticClass:"c-avatar",attrs:{"src":__webpack_require__(233),"alt":""}})])]),_vm._v(" "),_c('van-field',{staticClass:"o-field",attrs:{"placeholder":_vm.$t('Account24'),"rules":[{ required: true, message: _vm.$t('Account26') },
                 {validator :_vm.validator, message: _vm.$t('Tip17') } ]},model:{value:(_vm.cForm.sNickName),callback:function ($$v) {_vm.$set(_vm.cForm, "sNickName", $$v)},expression:"cForm.sNickName"}}),_vm._v(" "),_c('van-field',{staticClass:"o-field c",attrs:{"placeholder":_vm.$t('Account25'),"maxlength":"100"},model:{value:(_vm.cForm.sBio),callback:function ($$v) {_vm.$set(_vm.cForm, "sBio", $$v)},expression:"cForm.sBio"}}),_vm._v(" "),_c('van-button',{staticClass:"o-btn",attrs:{"block":"","type":"primary","native-type":"submit","disabled":!_vm.cForm.sNickName}},[_vm._v(_vm._s(_vm.$t('Account14'))+"\n      ")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/Complete.vue?vue&type=template&id=80106414&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/account/Complete.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Completevue_type_script_lang_js_ = ({
  layout: 'single-container',
  name: "complete",
  computed: { ...Object(external_vuex_["mapState"])({
      userInfo: state => state.userInfo
    })
  },

  data() {
    return {
      cForm: {},
      roleInfo: {}
    };
  },

  async mounted() {
    await this.GetUserExten();
  },

  methods: {
    async GetUserExten() {
      let res = await this.$axios.post('/v1/udc/GetUserExten', {
        iUserId: this.userInfo.iUserId
      });
      this.cForm = Object.assign({}, res.stUserExtenInfo);
      this.roleInfo = res.stUserExtenInfo;
    },

    async handleSubmit() {
      let data = {
        iUserId: this.cForm.iUserId,
        sAvatar: this.cForm.sAvatar,
        sNickName: this.cForm.sNickName
      }; // await this.$axios.post('/v1/udc/ChgUserExten', data)

      await this.$axios.post('/v1/udc/ChgUserExten', this.cForm);
      this.$store.dispatch('UPDATE_USERINFO');
      this.$toast(this.$t('Account28'));

      if (this.$route.query.step) {
        this.$router.replace('/main');
      } else {
        this.$router.back();
      }
    },

    async afterRead({
      file
    }) {
      let data = new FormData();
      data.append('file', file);
      let res = await this.$axios.post('/v1/oss/PublicUpload', data);

      if (res.vUrlPath.length) {
        this.$set(this.cForm, 'sAvatar', res.vUrlPath[0]);
      }
    },

    validator(val) {
      return val.length >= 2 && val.length <= 16;
    },

    handleDelete(v) {
      this.$set(this.oAnswer, 'sAvatar', '');
      return true;
    },

    onOversize(file) {
      console.log(file);
      this.$toast(this.$t('Tip16'));
    }

  }
});
// CONCATENATED MODULE: ./pages/account/Complete.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_Completevue_type_script_lang_js_ = (Completevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/Complete.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(234)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_Completevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "80106414",
  "333daac5"
  
)

/* harmony default export */ var Complete = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=19.js.map