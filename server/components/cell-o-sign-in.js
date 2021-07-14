exports.ids = [8];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/cell/OSignIn.vue?vue&type=template&id=2dcd1924&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('van-popup',{staticClass:"o-popup-sign",attrs:{"get-container":"body"},on:{"closed":_vm.handleClose},model:{value:(_vm.showSign),callback:function ($$v) {_vm.showSign=$$v},expression:"showSign"}},[_c('div',{staticClass:"o-sign-box"},[_c('h3',{staticClass:"o-sign-txt"},[_vm._v(_vm._s(_vm.$t('Mine25')))]),_vm._v(" "),_c('img',{staticClass:"o-sign-nera",attrs:{"src":__webpack_require__(33),"alt":""}}),_vm._v(" "),_c('p',{staticClass:"o-oo-txt"},[_vm._v(_vm._s(_vm.$t('Mine26')))]),_vm._v(" "),_c('van-button',{staticClass:"o-sign-btn",on:{"click":_vm.handleSign}},[_vm._v(_vm._s(_vm.$t('Mine27')))])],1),_vm._v(" "),_c('div',{staticClass:"o-icon-close",on:{"click":_vm.handlePopClose}},[_c('i',{staticClass:"fas fa-times"})])]),_vm._ssrNode(" "),_c('van-popup',{staticClass:"o-popup-sign",attrs:{"get-container":"body"},model:{value:(_vm.showSignSuccess),callback:function ($$v) {_vm.showSignSuccess=$$v},expression:"showSignSuccess"}},[_c('div',{staticClass:"o-sign-box"},[_c('h3',{staticClass:"o-sign-txt"},[_vm._v(_vm._s(_vm.$t('Mine28')))]),_vm._v(" "),_c('div',{staticClass:"o-right-box"},[_c('i',{staticClass:"fas fa-check check"})]),_vm._v(" "),_c('p',{staticClass:"o-nera-get"},[_vm._v(_vm._s(_vm.$t('Mine29'))+" "),_c('span',{staticClass:"o-nera"},[_vm._v(_vm._s(_vm._f("formatNera")(_vm.iAmount))+" NERA")])]),_vm._v(" "),_c('p',{staticClass:"o-nera-get"},[_vm._v(_vm._s(_vm.$t('Mine30')))])]),_vm._v(" "),_c('div',{staticClass:"o-icon-close",on:{"click":_vm.handlePopClose}},[_c('i',{staticClass:"fas fa-times"})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/cell/OSignIn.vue?vue&type=template&id=2dcd1924&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/cell/OSignIn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OSignInvue_type_script_lang_js_ = ({
  name: "OSignIn",
  props: ['value'],

  data() {
    return {
      showSignSuccess: false,
      iAmount: 0,
      showSign: this.value
    };
  },

  watch: {
    value(v) {
      this.showSign = v;
    }

  },
  methods: {
    handleClose() {
      this.$emit('input', false);
      this.showSign = false;
    },

    handlePopClose() {
      this.$emit('input', false);
      this.showSign = false;
      this.showSignSuccess = false;
    },

    async handleSign() {
      let res = await this.$axios.post('/v1/emall/CheckIn', {});
      this.showSign = false;
      this.showSignSuccess = true;
      this.iAmount = res.iAmount;
      this.$store.dispatch('UPDATE_USERINFO');
    }

  }
});
// CONCATENATED MODULE: ./components/cell/OSignIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var cell_OSignInvue_type_script_lang_js_ = (OSignInvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/cell/OSignIn.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cell_OSignInvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2dcd1924",
  "19fd2770"
  
)

/* harmony default export */ var OSignIn = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cell-o-sign-in.js.map