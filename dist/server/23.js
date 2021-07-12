exports.ids = [23];
exports.modules = {

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6f902df6", content, true, context)
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a22f4f3e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a22f4f3e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a22f4f3e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a22f4f3e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a22f4f3e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".o-uploader[data-v-a22f4f3e] {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  margin: 0 auto;\n  margin-bottom: 0.266667rem;\n  position: relative;\n}\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview {\n  margin: 0;\n}\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview .van-uploader__preview-delete {\n  border-radius: 0 0.133333rem 0 0.32rem;\n}\n.o-uploader .o-delete[data-v-a22f4f3e] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0.506667rem;\n  height: 0.453333rem;\n  background: #c7c7c7;\n  line-height: 0.453333rem;\n  border-radius: 0 0 0 50%;\n  z-index: 999;\n}\n.o-uploader .img[data-v-a22f4f3e],\n.o-uploader #o-video[data-v-a22f4f3e] {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  object-fit: cover;\n}\n.o-uploader .o-uploader-upload[data-v-a22f4f3e],\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview-image {\n  width: 3.066667rem;\n  height: 3.066667rem;\n  background: #ffffff;\n  border-radius: 0.133333rem;\n  box-shadow: 0 0 0.2rem 0 rgba(5, 0, 0, 0.15);\n  text-align: center;\n  margin-bottom: 0.666667rem;\n}\n.o-uploader .o-uploader-upload .icon-image[data-v-a22f4f3e],\n.o-uploader[data-v-a22f4f3e] .van-uploader__preview-image .icon-image {\n  font-size: 2.133333rem;\n  line-height: 3.066667rem;\n  color: #E7E7E7;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Reward/Answer.vue?vue&type=template&id=a22f4f3e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"r-offer"}},[_vm._ssrNode("<div class=\"o-offer-bbox\" data-v-a22f4f3e>","</div>",[_vm._ssrNode("<div class=\"o-offer-box\" data-v-a22f4f3e>","</div>",[_vm._ssrNode("<div class=\"o-offer-title\" data-v-a22f4f3e><span data-v-a22f4f3e>"+_vm._ssrEscape(_vm._s(_vm.$t('Main02')))+"</span></div> "),_c('van-form',{ref:"oForm",staticClass:"o-offer-content o-form",on:{"submit":_vm.handleSubmit}},[(_vm.step === 0)?_c('div',{staticClass:"o-form-item center"},[(!_vm.fileList.length)?_c('van-uploader',{staticClass:"o-uploader",attrs:{"accept":"image/*,video/*,.webm","max-count":1,"max-size":100 * 1024 * 1024,"after-read":_vm.afterRead,"before-delete":_vm.handleDelete},on:{"oversize":_vm.onOversize},model:{value:(_vm.fileList),callback:function ($$v) {_vm.fileList=$$v},expression:"fileList"}},[_c('div',{staticClass:"o-uploader-upload"},[_c('i',{staticClass:"iconfont icon-image"})])]):_c('div',{staticClass:"o-uploader"},[_vm._l((_vm.fileList),function(v){return [_c('div',{staticClass:"o-delete",on:{"click":_vm.handleRemove}},[_c('i',{staticClass:"fas fa-times"})]),_vm._v(" "),(v.content.includes('image'))?_c('img',{staticClass:"img",attrs:{"src":v.content,"alt":""}}):_vm._e(),_vm._v(" "),(v.content.includes('video'))?_c('video',{attrs:{"id":"o-video","src":v.content,"muted":""},domProps:{"muted":true},on:{"click":_vm.handlePlay}}):_vm._e()]})],2),_vm._v(" "),_c('p',{staticClass:"o-form-item-label uploader"},[_vm._v(_vm._s(_vm.$t('Main03')))]),_vm._v(" "),_c('p',{staticClass:"o-form-item-des uploader"},[_vm._v(_vm._s(_vm.$t('Main04')))])],1):_vm._e(),_vm._v(" "),(_vm.step === 1)?[_c('div',{staticClass:"o-form-item"},[_c('p',{staticClass:"o-form-item-label"},[_vm._v(_vm._s(_vm.$t('Main05')))]),_vm._v(" "),_c('van-field',{staticClass:"o-form-field",attrs:{"type":"textarea","autosize":"","autosize":{ minHeight: 20,maxHeight: 160},"show-word-limit":"","maxlength":"50"},model:{value:(_vm.oAnswer.sTitleName),callback:function ($$v) {_vm.$set(_vm.oAnswer, "sTitleName", $$v)},expression:"oAnswer.sTitleName"}})],1),_vm._v(" "),_c('div',{staticClass:"o-form-item flex",staticStyle:{"margin-bottom":".13rem"}},[_c('p',{staticClass:"o-form-item-label clear nft"},[_vm._v(_vm._s(_vm.$t('Main18')))]),_vm._v(" "),_c('p',{staticClass:"o-form-item-icon",on:{"click":function($event){_vm.showNFT = true}}},[_c('i',{staticClass:"far fa-question-circle"})]),_vm._v(" "),_c('van-switch',{staticClass:"o-form-switch",attrs:{"size":"0.53333rem"},model:{value:(_vm.oAnswer.iCreateNFTFlag),callback:function ($$v) {_vm.$set(_vm.oAnswer, "iCreateNFTFlag", $$v)},expression:"oAnswer.iCreateNFTFlag"}})],1),_vm._v(" "),(_vm.oAnswer.iCreateNFTFlag)?_c('div',{staticClass:"o-form-item"},[_c('van-field',{staticClass:"o-form-choice border",attrs:{"is-link":"","name":"iPrice","rules":[{required:true, validator: _vm.asyncValidator}],"placeholder":_vm.$t('Main08')},nativeOn:{"touchstart":function($event){$event.stopPropagation();_vm.iRewardShow = true}},model:{value:(_vm.oAnswer.iPrice),callback:function ($$v) {_vm.$set(_vm.oAnswer, "iPrice", $$v)},expression:"oAnswer.iPrice"}}),_vm._v(" "),_c('p',{staticClass:"o-form-des"},[_vm._v(_vm._s(_vm.$t('Main26')))]),_vm._v(" "),_c('van-number-keyboard',{attrs:{"theme":"custom","get-container":"body","extra-key":['00', '.'],"show":_vm.iRewardShow,"close-button-text":_vm.$t('Main44')},on:{"blur":function($event){_vm.iRewardShow = false},"close":_vm.onClose,"input":_vm.onInput,"delete":_vm.onDelete},model:{value:(_vm.oAnswer.iPrice),callback:function ($$v) {_vm.$set(_vm.oAnswer, "iPrice", $$v)},expression:"oAnswer.iPrice"}})],1):_vm._e()]:_vm._e(),_vm._v(" "),_c('div',{staticClass:"o-offer-submit"},[(_vm.step === 0)?_c('van-button',{staticClass:"o-btn-submit",attrs:{"disabled":!_vm.oAnswer.sFileUrl},on:{"click":_vm.handleStep}},[_vm._v(_vm._s(_vm.$t('Main17'))+"\n          ")]):_vm._e(),_vm._v(" "),(_vm.step === 1)?_c('van-button',{staticClass:"o-btn-submit",attrs:{"disabled":_vm.disabledStep2,"native-type":"submit"}},[_vm._v(_vm._s(_vm.$t('Main07'))+"\n          ")]):_vm._e()],1)],2)],2)]),_vm._ssrNode(" "),_c('van-popup',{staticClass:"o-footer-popup",attrs:{"closeable":"","position":"bottom","overlay":false},model:{value:(_vm.showNFT),callback:function ($$v) {_vm.showNFT=$$v},expression:"showNFT"}},[_c('p',{staticClass:"o-popup-content"},[_vm._v(_vm._s(_vm.$t('Main19')))])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Reward/Answer.vue?vue&type=template&id=a22f4f3e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Reward/Answer.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Answervue_type_script_lang_js_ = ({
  name: "Answer",

  data() {
    return {
      // step: 1,
      fileList: [],
      showNFT: false,
      iRewardShow: false,
      NeraList: [50, 100, 200, 500, 1000],
      oAnswer: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      step: state => state.reward.step
    }),

    disabledStep2() {
      /**
       * 如果选择创建NFT那必须填钱包地址 用户如果绑定过钱包 可以自动获取
       */
      let {
        sTitleName,
        iCreateNFTFlag,
        iPrice
      } = this.oAnswer;
      return !sTitleName || iCreateNFTFlag && !iPrice;
    }

  },
  watch: {
    step(v) {
      return v;
    }

  },

  mounted() {
    this.$store.commit('reward/SET_STEP', 0);
  },

  methods: {
    asyncValidator(val, rule) {
      return new Promise(async resolve => {
        // console.log(val, rule);
        if (val < 1 || val > 10000) {
          rule['message'] = this.$t('Main42');
          resolve(false);
        }

        resolve(true);
      });
    },

    handleStep() {
      this.$store.commit('reward/SET_STEP', 1);
    },

    async handleSubmit() {
      // console.log(this.oAnswer);
      let data = { ...this.oAnswer,
        iRewardId: +this.$route.query.iRewardId,
        iCreateNFTFlag: this.oAnswer.iCreateNFTFlag ? 1 : 0
      };
      this.$axios.post('/v1/emall/CreateRewardsAnswer', data).then(res => {
        this.$toast(this.$t('Tip02'));
        this.$router.go(-1);
        console.log(res);
      }).catch(err => {}).finally(() => {
        this.$store.commit('reward/SET_STEP', 0);
        this.$store.dispatch('UPDATE_USERINFO');
      });
    },

    async afterRead({
      file
    }) {
      // console.log(file);
      let data = new FormData();
      data.append('file', file); // alert(JSON.stringify(file.type))

      let res = await this.$axios.post('/v1/oss/PublicUpload', data); // console.log(res);
      // alert(JSON.stringify(res))

      if (res.vUrlPath.length) {
        // this.fileList.push(res.vUrlPath[0])
        this.$set(this.oAnswer, 'sFileUrl', res.vUrlPath[0]);
      }
    },

    handleRemove() {
      this.fileList = [];
      this.$set(this.oAnswer, 'sFileUrl', '');
    },

    handleDelete(v) {
      this.$set(this.oAnswer, 'sFileUrl', '');
      return true;
    },

    onOversize(file) {
      // console.log(file);
      this.$toast(this.$t('Tip04'));
    },

    onClose(vv) {
      // console.log(vv);
      this.$refs.oForm.validate('iPrice');
    },

    handleDiy(v) {
      // console.log(v);
      this.$set(this.oAnswer, 'iPrice', v.toString());
    },

    onInput() {},

    onDelete() {},

    handlePlay() {
      document.getElementById('o-video').play();
    }

  }
});
// CONCATENATED MODULE: ./pages/Reward/Answer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Reward_Answervue_type_script_lang_js_ = (Answervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Reward/Answer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Reward_Answervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a22f4f3e",
  "3bf8dfcd"
  
)

/* harmony default export */ var Answer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=23.js.map