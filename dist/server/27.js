exports.ids = [27];
exports.modules = {

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("26bca1f4", content, true, context)
};

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1edfa5b6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1edfa5b6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1edfa5b6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1edfa5b6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1edfa5b6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-nav-bar[data-v-1edfa5b6] {\n  padding-top: 0.773333rem;\n}\n.container[data-v-1edfa5b6] {\n  padding: 0.666667rem 0.533333rem;\n  text-align: center;\n}\n.container .tips[data-v-1edfa5b6] {\n  margin-top: 0.533333rem;\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.4rem;\n  font-weight: 400;\n  text-align: left;\n  color: #1b1b1b;\n  line-height: 0.706667rem;\n}\n.container .tips .link[data-v-1edfa5b6] {\n  color: #6A47FE;\n  text-decoration: underline;\n}\n.container .send[data-v-1edfa5b6] {\n  font-size: 0.373333rem;\n  font-weight: 400;\n  color: #6a47fe;\n}\n.container .txt[data-v-1edfa5b6] {\n  height: 1.146667rem;\n  background: #fafafa;\n  border-radius: 0.533333rem;\n  border: none;\n  margin-bottom: 0.853333rem;\n}\n.container .o-login[data-v-1edfa5b6] {\n  margin-top: 1.013333rem;\n  width: 8.933333rem;\n  height: 1.146667rem;\n  line-height: 1.146667rem;\n  border-radius: 0.573333rem;\n  background-color: #7632ff;\n  font-size: 0.48rem;\n  color: #FFFFFF;\n  border: none;\n}\n.van-hairline--bottom[data-v-1edfa5b6]::after {\n  display: none;\n}\n[data-v-1edfa5b6] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-1edfa5b6] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-weight: 700;\n  color: #1b1b1b;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/account/Login.vue?vue&type=template&id=1edfa5b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_c('van-nav-bar',{attrs:{"title":_vm.$t('Account03'),"left-arrow":""},on:{"click-left":function($event){return _vm.$router.back()}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-1edfa5b6>","</div>",[_c('van-field',{staticClass:"txt",attrs:{"placeholder":_vm.$t('Account01')},model:{value:(_vm.oLogin.sEmail),callback:function ($$v) {_vm.$set(_vm.oLogin, "sEmail", $$v)},expression:"oLogin.sEmail"}}),_vm._ssrNode(" "),_c('van-field',{staticClass:"txt",attrs:{"maxlength":"16","placeholder":_vm.$t('Account02'),"type":!_vm.showPsw ? 'password' : 'text',"right-icon":_vm.showPsw ? 'eye-o' : 'closed-eye'},on:{"click-right-icon":function($event){_vm.showPsw = !_vm.showPsw}},model:{value:(_vm.oLogin.sPassword),callback:function ($$v) {_vm.$set(_vm.oLogin, "sPassword", $$v)},expression:"oLogin.sPassword"}}),_vm._ssrNode(" "),_c('van-button',{staticClass:"o-login",attrs:{"round":"","size":"large","disabled":_vm.btnDisable},on:{"click":_vm.handleLogin}},[_vm._v(_vm._s(_vm.$t('Account03'))+"\n    ")]),_vm._ssrNode(" <div class=\"tips\" data-v-1edfa5b6><p style=\"color: #6A47FE;\" data-v-1edfa5b6>"+_vm._ssrEscape(_vm._s(_vm.$t('Account04')))+"</p> <p style=\"color: #6A47FE;\" data-v-1edfa5b6>"+_vm._ssrEscape(_vm._s(_vm.$t('Account05')))+"</p></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/Login.vue?vue&type=template&id=1edfa5b6&scoped=true&

// EXTERNAL MODULE: ./plugins/auth.js
var auth = __webpack_require__(13);

// EXTERNAL MODULE: ./plugins/initWebsocket.js
var initWebsocket = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/account/Login.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  name: "Login",
  layout: 'single-container',

  data() {
    return {
      showPsw: false,
      oLogin: {}
    };
  },

  computed: {
    btnDisable() {
      var reg = new RegExp("^[a-zA-Z0-9]+([._\\-]*[A-Za-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

      if (!this.oLogin.sEmail || !reg.test(this.oLogin.sEmail)) return true; // return !this.oLogin.sPassword || this.oLogin.sPassword.length < 16;

      return !this.oLogin.sPassword;
    }

  },
  methods: {
    async handleLogin() {
      let data = { ...this.oLogin,
        iSource: 1,
        //来源：1-web 2-app
        iLoginType: 2 //登录类型：1-手机号 2-邮箱

      };
      let res = await this.$axios.post('/v1/auth/UserLogin', data);
      console.log(res);
      localStorage.setItem('Email', this.oLogin.sEmail);
      Object(auth["b" /* setToken */])(res.sSessionKey);
      Object(initWebsocket["a" /* initWebSocket */])(res.iUserId);
      localStorage.setItem('sInviteCode', res.sInviteCode);
      localStorage.setItem('sEmail', res.sEmail);
      await this.$axios.post('/v1/udc/GetUserExten', data);
      this.$store.commit('SET_ISLOGIN', true);
      this.$toast(this.$t('Account19'));
      this.$router.replace('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/account/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/Login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(192)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1edfa5b6",
  "020ae2e6"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=27.js.map