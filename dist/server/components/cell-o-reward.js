exports.ids = [5];
exports.modules = {

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cell/OReward.vue?vue&type=template&id=0c0c3801&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o-issue-box main",on:{"click":function($event){return _vm.$router.push(("/reward/detail/" + (_vm.vReward.iRewardId)))}}},[_vm._ssrNode("<div class=\"o-reward-box\" data-v-0c0c3801><p class=\"o-for-reward\" data-v-0c0c3801>"+_vm._ssrEscape(_vm._s(_vm.$t('Main34')))+"</p> <div class=\"o-nera\" data-v-0c0c3801><img"+(_vm._ssrAttr("src",__webpack_require__(16)))+" alt class=\"o-icon-nera\" data-v-0c0c3801> <span class=\"o-nera-prise\" data-v-0c0c3801>"+_vm._ssrEscape(_vm._s(_vm._f("formatNera")(_vm.vReward.iReward)))+"</span></div> <p class=\"o-for-dollar\" data-v-0c0c3801>"+_vm._ssrEscape("$"+_vm._s(_vm._f("formatNera")(_vm.vReward.iReward * _vm.rate)))+"</p></div> "),_vm._ssrNode("<div class=\"o-reward-user\" data-v-0c0c3801>","</div>",[_c('o-head',{staticClass:"o-reward-user-avatar",attrs:{"avatar-url":_vm.stUser.sAvatar}}),_vm._ssrNode(" <span class=\"o-reward-user-nickname\" data-v-0c0c3801>"+_vm._ssrEscape(_vm._s(_vm.stUser.sName))+"</span>")],2),_vm._ssrNode(" <div class=\"o-reward-q\" data-v-0c0c3801><p class=\"o-year\" data-v-0c0c3801>"+_vm._ssrEscape(_vm._s(_vm.vReward.sDate))+"</p> <p class=\"o-issue\" data-v-0c0c3801>"+_vm._ssrEscape(_vm._s(_vm.vReward.sSubject))+"</p></div> "+((_vm.isLogin ? _vm.userInfo.iUserId !== _vm.vReward.iUserId : true)?("<p class=\"o-tip\" data-v-0c0c3801>"+_vm._ssrEscape(_vm._s(_vm.$t('Main21')))+"</p>"):"<!---->")+" "),(_vm.userInfo.iUserId !== _vm.vReward.iUserId)?_vm._ssrNode("<div class=\"o-reward-answer-box\" data-v-0c0c3801>","</div>",[_c('van-button',{staticClass:"o-reward-btn answer",on:{"click":function($event){$event.stopPropagation();return _vm.goAnswer(_vm.vReward)}}},[_vm._v(_vm._s(_vm.$t('Main02'))+"\n    ")])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/cell/OReward.vue?vue&type=template&id=0c0c3801&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cell/OReward.vue?vue&type=script&lang=js&
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
  computed: { ...Object(external_vuex_["mapState"])({
      userInfo: state => state.userInfo,
      isLogin: state => state.isLogin
    }),

    stUser() {
      return this.vReward.stUser || {};
    },

    canAnswer() {}

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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/cell/OReward.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cell_ORewardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0c0c3801",
  "69f64978"
  
)

/* harmony default export */ var OReward = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cell-o-reward.js.map