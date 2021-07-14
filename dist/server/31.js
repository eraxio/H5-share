exports.ids = [31];
exports.modules = {

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Activity/ShareForWebItemDetail.vue?vue&type=template&id=1908c2ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Activity/ShareForWebItemDetail.vue?vue&type=template&id=1908c2ec&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Activity/ShareForWebItemDetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ShareForWebItemDetailvue_type_script_lang_js_ = ({
  name: "Share",
  components: {},

  async asyncData(context) {
    let {
      route,
      $axios,
      app
    } = context;
    let sContractAddress = route.params.sContractAddress;
    let sTokenId = route.params.sTokenId;

    if (sContractAddress && sTokenId) {
      let res = await $axios.post('/v1/emall/GetItemDetail', {
        sContractAddress: sContractAddress,
        sTokenId: sTokenId
      });
      let stItem = res.stItem;
      let url = 'https://erax.io';
      app.head.meta = app.head.meta.concat([{
        name: 'twitter:card',
        content: "summary_large_image"
      }, {
        property: 'og:type',
        content: "website"
      }, {
        property: 'og:title',
        content: stItem.sName
      }, {
        property: 'og:description',
        content: stItem.sName
      }, {
        property: 'og:url',
        content: url
      }, {
        property: 'og:image',
        content: stItem.sDataUrl
      }]); // console.log(app.head.meta);

      return {
        stItem
      };
    }
  },

  data() {
    return {};
  },

  computed: {},

  async mounted() {
    setTimeout(() => {
      let sContractAddress = this.$route.params.sContractAddress;
      let sTokenId = this.$route.params.sTokenId; // let url = 'http://192.168.30.147:8080/assets/';

      let url = 'https://erax.io/assets/';
      window.open(`${url}${sContractAddress}/${sTokenId}`);
    }, 500);
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/Activity/ShareForWebItemDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var Activity_ShareForWebItemDetailvue_type_script_lang_js_ = (ShareForWebItemDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Activity/ShareForWebItemDetail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Activity_ShareForWebItemDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c3c9dbe"
  
)

/* harmony default export */ var ShareForWebItemDetail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=31.js.map