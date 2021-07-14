exports.ids = [20];
exports.modules = {

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d8d13eba", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/success.f32dfb5.png";

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_f35a2e16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_f35a2e16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_f35a2e16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_f35a2e16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_f35a2e16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-popup[data-v-f35a2e16] {\n  background: transparent;\n  overflow: hidden;\n}\n.van-popup .container[data-v-f35a2e16] {\n  width: 7.333333rem;\n  opacity: 1;\n  background: #ffffff;\n  border: 0.013333rem solid #707070;\n  border-radius: 1rem;\n  padding: 0.666667rem 0.266667rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.van-popup .container img[data-v-f35a2e16] {\n  width: 1.893333rem;\n}\n.van-popup .container .van-icon-checked[data-v-f35a2e16] {\n  font-size: 1.893333rem;\n}\n.van-popup .container .txt1[data-v-f35a2e16] {\n  font-size: 0.453333rem;\n  font-family: PingFang SC, PingFang SC-Bold;\n  font-weight: 700;\n  color: #1b1b1b;\n  margin-top: 0.533333rem;\n}\n.van-popup .container .txt2[data-v-f35a2e16] {\n  font-size: 0.453333rem;\n  font-family: PingFang SC, PingFang SC-Bold;\n  font-weight: 700;\n  color: #6a47fe;\n  margin-top: 0.093333rem;\n}\n.van-popup .container .txt3[data-v-f35a2e16] {\n  font-size: 0.4rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #979797;\n  margin-top: 0.333333rem;\n  margin-bottom: 0.533333rem;\n}\n.van-popup .container .txt4[data-v-f35a2e16] {\n  font-size: 0.4rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #1b1b1b;\n  margin-bottom: 0.533333rem;\n}\n.van-popup .container .successBtn[data-v-f35a2e16] {\n  width: 3.093333rem;\n  height: 0.893333rem;\n  opacity: 1;\n  background: #6a47fe;\n  border-radius: 0.453333rem;\n  border: none;\n}\n.van-popup .line[data-v-f35a2e16] {\n  width: 0.04rem;\n  height: 0.8rem;\n  background: #ffffff;\n  margin: 0 auto;\n}\n.van-popup .fa-clone[data-v-f35a2e16] {\n  margin-left: 0.066667rem;\n  color: #979797;\n}\n.van-popup .close[data-v-f35a2e16] {\n  width: 0.746667rem;\n  height: 0.746667rem;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n.txt-login[data-v-f35a2e16] {\n  font-size: 0.4rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  text-align: left;\n  color: #1b1b1b;\n}\n.txt-login .back-login[data-v-f35a2e16] {\n  color: #6A47FE;\n  cursor: pointer;\n}\n.van-nav-bar[data-v-f35a2e16] {\n  padding-top: 0.773333rem;\n}\n.container[data-v-f35a2e16] {\n  padding: 0.666667rem 0.533333rem;\n  text-align: center;\n}\n.container .tips[data-v-f35a2e16] {\n  font-size: 0.346667rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #1b1b1b;\n  margin-top: 0.533333rem;\n}\n.container .tips .link[data-v-f35a2e16] {\n  color: #6A47FE;\n  text-decoration: underline;\n}\n.container .send[data-v-f35a2e16] {\n  font-size: 0.373333rem;\n  font-family: PingFang SC, PingFang SC-Regular;\n  font-weight: 400;\n  color: #6a47fe;\n}\n.container .txt[data-v-f35a2e16] {\n  height: 1.146667rem;\n  background: #fafafa;\n  border-radius: 0.533333rem;\n  border: none;\n  margin-bottom: 0.6rem;\n}\n.container .txtnomargin[data-v-f35a2e16] {\n  margin-bottom: 0;\n}\n.container .error-tips[data-v-f35a2e16] {\n  height: 0.6rem;\n  font-size: 0.373333rem;\n  font-family: PingFang SC, PingFang SC-Medium;\n  font-weight: 500;\n  text-align: left;\n  color: #fe4747;\n  padding-left: 0.4rem;\n}\n.container .signin[data-v-f35a2e16] {\n  margin-top: 0.8rem;\n  width: 8.933333rem;\n  height: 1.146667rem;\n  border-radius: 0.573333rem;\n  border: none;\n}\n.van-cell[data-v-f35a2e16]::after {\n  display: none;\n}\n.van-hairline--bottom[data-v-f35a2e16]::after {\n  display: none;\n}\n[data-v-f35a2e16] .van-nav-bar .van-icon {\n  color: #000000 !important;\n}\n[data-v-f35a2e16] .van-nav-bar__title {\n  font-size: 0.64rem;\n  font-family: PingFang SC, PingFang SC-Bold;\n  font-weight: 700;\n  color: #1b1b1b;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/account/Signup.vue?vue&type=template&id=f35a2e16&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"signup"},[_c('van-nav-bar',{attrs:{"title":_vm.$t('Account05'),"left-arrow":""},on:{"click-left":function($event){return _vm.$router.back()}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-f35a2e16>","</div>",[_c('van-field',{staticClass:"txt",attrs:{"placeholder":_vm.$t('Account01')},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._ssrNode(" "),_c('van-field',{staticClass:"txt",attrs:{"maxlength":"6","placeholder":_vm.$t('Account06')},scopedSlots:_vm._u([{key:"button",fn:function(){return [_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.daley),expression:"!daley"}],staticClass:"send",on:{"click":_vm.getCode}},[_vm._v(_vm._s(_vm.$t('Account12')))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.daley),expression:"daley"}],staticClass:"send"},[_vm._v(_vm._s(_vm.daley)+"s")])]},proxy:true}]),model:{value:(_vm.code),callback:function ($$v) {_vm.code=$$v},expression:"code"}}),_vm._ssrNode(" "),_c('van-field',{staticClass:"txt txtnomargin",attrs:{"maxlength":"16","type":!_vm.eye1?'password':'text',"placeholder":_vm.$t('Account07'),"right-icon":_vm.eye1?'eye-o':'closed-eye'},on:{"click-right-icon":_vm.showPassword1,"blur":_vm.onBlur},model:{value:(_vm.word1),callback:function ($$v) {_vm.word1=$$v},expression:"word1"}}),_vm._ssrNode(" <div class=\"error-tips\" data-v-f35a2e16><div"+(_vm._ssrStyle(null,null, { display: (_vm.isError) ? '' : 'none' }))+" data-v-f35a2e16>"+_vm._ssrEscape(_vm._s(_vm.$t('Tip14')))+"</div></div> "),_c('van-field',{staticClass:"txt",attrs:{"placeholder":_vm.$t('Account08')},model:{value:(_vm.sInviteCode),callback:function ($$v) {_vm.sInviteCode=$$v},expression:"sInviteCode"}}),_vm._ssrNode(" <div class=\"txt-login\" data-v-f35a2e16>"+_vm._ssrEscape(_vm._s(_vm.$t('Account09'))+"\n      ")+"<span class=\"back-login\" data-v-f35a2e16>"+_vm._ssrEscape(_vm._s(_vm.$t('Account21')))+"</span></div> "),_c('van-button',{staticClass:"signin",attrs:{"type":"primary","round":"","size":"large","disabled":_vm.btnDisable},on:{"click":_vm.userRegister}},[_vm._v("\n      "+_vm._s(_vm.$t('Account05'))+"\n    ")]),_vm._ssrNode(" <div class=\"tips\" data-v-f35a2e16>"+_vm._ssrEscape(_vm._s(_vm.$t('Account10')))+"<span class=\"link\" data-v-f35a2e16>"+_vm._ssrEscape(_vm._s(_vm.$t('Account11')))+"</span></div>")],2),_vm._ssrNode(" "),_c('van-popup',{model:{value:(_vm.regesterSuc),callback:function ($$v) {_vm.regesterSuc=$$v},expression:"regesterSuc"}},[_c('div',{staticClass:"pop-container"},[_c('div',{staticClass:"container"},[_c('img',{attrs:{"src":__webpack_require__(194),"alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt1"},[_vm._v("SUCCEED")]),_vm._v(" "),(_vm.gift)?_c('div',{staticClass:"txt2"},[_vm._v(_vm._s(_vm.$t('Account16', {nera: _vm.gift})))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"txt3"},[_vm._v(_vm._s(_vm.$t('Account17')))]),_vm._v(" "),_c('div',{staticClass:"txt4"},[_vm._v(_vm._s(_vm.$t('Account18'))+": "+_vm._s(_vm.inviteCode)+"\n          "),_c('i',{staticClass:"far fa-clone",attrs:{"id":"copy","data-clipboard-action":"copy","data-clipboard-text":_vm.inviteCode}})]),_vm._v(" "),_c('van-button',{staticClass:"successBtn",attrs:{"round":"","type":"info"},on:{"click":_vm.onClose}},[_vm._v(_vm._s(_vm.$t('Account22')))])],1),_vm._v(" "),_c('div',{staticClass:"line"}),_vm._v(" "),_c('div',{staticClass:"close",on:{"click":_vm.onClose}},[_c('i',{staticClass:"fas fa-times"})])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/Signup.vue?vue&type=template&id=f35a2e16&scoped=true&

// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__(93);
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// EXTERNAL MODULE: ./plugins/auth.js
var auth = __webpack_require__(13);

// EXTERNAL MODULE: ./plugins/initWebsocket.js
var initWebsocket = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/account/Signup.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Signupvue_type_script_lang_js_ = ({
  layout: 'single-container',
  name: "Signup",

  data() {
    return {
      email: '',
      eye1: false,
      eye2: false,
      word1: '',
      code: '',
      daley: 0,
      deleyTimeId: null,
      sInviteCode: '',
      inviteCode: '',
      gift: 0,
      regesterSuc: false,
      isError: false
    };
  },

  computed: {
    btnDisable() {
      var reg = new RegExp("^[a-zA-Z0-9]+([._\\-]*[A-Za-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

      let wordReg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$');
      if (!this.email || !reg.test(this.email)) return true;
      if (!wordReg.test(this.word1)) return true;
      if (!this.code || this.code.length < 6) return true;
      return false;
    }

  },

  beforeDestroy() {
    clearInterval(this.deleyTimeId);
  },

  mounted() {// this.initCopy();
  },

  methods: {
    initCopy() {
      let btn = document.getElementById('copy');
      let clipboard = new external_clipboard_default.a(btn);
      clipboard.on('success', () => {
        // this.$message.success(this.$t('message.lang_62'));
        this.$toast(this.$t('Mine32'));
      });
      clipboard.on('error', function (e) {});
    },

    onClose() {
      this.regesterSuc = false;
      this.$router.replace('/account/complete?step=1');
    },

    showPassword1() {
      this.eye1 = !this.eye1;
    },

    onBlur() {
      let wordReg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$');

      if (!wordReg.test(this.word1)) {
        this.isError = true;
        return;
      }

      this.isError = false;
    },

    async userRegister() {
      let data = await this.$axios.post('/v1/auth/UserRegister', {
        iSource: 1,
        iRegisterType: 2,
        sPassword: this.word1,
        sEmail: this.email,
        sEmailVerifyCode: this.code,
        sInviteCode: this.sInviteCode
      });
      localStorage.setItem('Email', this.email);
      Object(auth["b" /* setToken */])(data.sSessionKey);
      this.$store.commit('SET_ISLOGIN', true);
      localStorage.setItem('sInviteCode', data.sInviteCode);
      localStorage.setItem('sEmail', data.sEmail);
      let user = await this.$axios.post('/v1/udc/GetUserExten', {});
      this.gift = parseInt(user.sAwardAmount);
      Object(initWebsocket["a" /* initWebSocket */])(data.iUserId);
      this.inviteCode = data.sInviteCode;
      this.regesterSuc = true;
      this.$nextTick(() => {
        this.initCopy();
      }); // console.log('注册成功');
    },

    showPassword2() {
      this.eye2 = !this.eye2;
    },

    toRouter() {
      this.$router.push('/account/protocol');
    },

    async getCode() {
      var reg = new RegExp("^[a-zA-Z0-9]+([._\\-]*[A-Za-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

      if (!this.email || !reg.test(this.email)) return;
      await this.$axios.post('/v1/auth/CheckRegistered', {
        iRegisterType: 2,
        sEmail: this.email
      });
      await this.$axios.post('/v1/auth/SendEmailVerifyCode', {
        iSource: 1,
        iSendMethod: 2,
        iVerifyBusi: 1,
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
// CONCATENATED MODULE: ./pages/account/Signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_Signupvue_type_script_lang_js_ = (Signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/Signup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_Signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f35a2e16",
  "2cb13024"
  
)

/* harmony default export */ var Signup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=20.js.map