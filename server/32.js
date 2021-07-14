exports.ids = [32];
exports.modules = {

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Reward/Publish.vue?vue&type=template&id=0cf140bb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"r-offer"}},[_vm._ssrNode("<div class=\"o-offer-bbox\" data-v-0cf140bb>","</div>",[_vm._ssrNode("<div class=\"o-offer-box\" data-v-0cf140bb>","</div>",[_vm._ssrNode("<div class=\"o-offer-title\" data-v-0cf140bb><span data-v-0cf140bb>"+_vm._ssrEscape(_vm._s(_vm.$t('Main09')))+"</span></div> "),_c('van-form',{ref:"oForm",attrs:{"validate-first":""},on:{"submit":_vm.handleSubmit}},[_c('div',{staticClass:"o-offer-content"},[_c('div',{staticClass:"o-form"},[(_vm.step === 0)?[_c('div',{staticClass:"o-form-item"},[_c('p',{staticClass:"o-form-item-label"},[_vm._v(_vm._s(_vm.$t('Main10')))]),_vm._v(" "),_c('p',{staticClass:"o-form-item-des"},[_vm._v("Ex. I want to find some pictures of Elon Musk's at Paypal, 2004.")]),_vm._v(" "),_c('van-field',{staticClass:"o-form-field",attrs:{"type":"textarea","placeholder":_vm.$t('Main45'),"autosize":{ minHeight: 20,maxHeight: 80},"rules":[{required:true}],"show-word-limit":"","maxlength":"100"},model:{value:(_vm.oReward.sSubject),callback:function ($$v) {_vm.$set(_vm.oReward, "sSubject", $$v)},expression:"oReward.sSubject"}})],1),_vm._v(" "),_c('div',{staticClass:"o-form-item"},[_c('van-field',{staticClass:"o-form-choice border",attrs:{"type":"number","placeholder":_vm.$t('Main11'),"rules":[{required:true}],"maxlength":"4"},model:{value:(_vm.oReward.sDate),callback:function ($$v) {_vm.$set(_vm.oReward, "sDate", $$v)},expression:"oReward.sDate"}}),_vm._v(" "),_c('van-popup',{staticClass:"o-popup-f",attrs:{"position":"bottom","overlay":true},model:{value:(_vm.sDateShow),callback:function ($$v) {_vm.sDateShow=$$v},expression:"sDateShow"}},[_c('van-datetime-picker',{attrs:{"type":"date","title":_vm.$t('Main11'),"min-date":_vm.minDate,"max-date":_vm.minCurrentDate,"cancel-button-text":_vm.$t('picker1'),"confirm-button-text":_vm.$t('picker2')},on:{"cancel":_vm.handleCancel,"confirm":_vm.handleDateConfirm},model:{value:(_vm.oReward.sDate2),callback:function ($$v) {_vm.$set(_vm.oReward, "sDate2", $$v)},expression:"oReward.sDate2"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"o-form-item"},[_c('van-field',{staticClass:"o-form-choice border",attrs:{"is-link":"","readonly":"","name":"iReward","clickable":"","placeholder":_vm.$t('Main12'),"rules":[{required:true, validator: _vm.asyncValidator}]},nativeOn:{"touchstart":function($event){$event.stopPropagation();_vm.iRewardShow = true}},model:{value:(_vm.oReward.iReward),callback:function ($$v) {_vm.$set(_vm.oReward, "iReward", $$v)},expression:"oReward.iReward"}}),_vm._v(" "),_c('van-number-keyboard',{attrs:{"theme":"custom","extra-key":['00', '.'],"show":_vm.iRewardShow,"close-button-text":_vm.$t('Main44')},on:{"blur":function($event){_vm.iRewardShow = false},"close":_vm.onClose,"input":_vm.onInput,"delete":_vm.onDelete},scopedSlots:_vm._u([{key:"title-left",fn:function(){return [(_vm.oReward.iReward)?_c('span',[_vm._v(_vm._s(_vm._f("formatNera")(_vm.oReward.iReward))+"Nera ($"+_vm._s(_vm._f("formatNera")(_vm.oReward.iReward * _vm.nera))+")")]):_vm._e()]},proxy:true}],null,false,286704835)})],1),_vm._v(" "),_c('div',{staticClass:"o-form-item"},[_c('van-cell',{class:['o-form-choice',{'through':_vm.iAmountCount < 0}],attrs:{"title":_vm.$t('Main16'),"value":(_vm.iAmountCount + " NERA")}})],1)]:_vm._e(),_vm._v(" "),(_vm.step === 1)?[_c('div',{staticClass:"o-form-item"},[_c('p',{staticClass:"o-form-item-label"},[_vm._v(_vm._s(_vm.$t('Main13')))]),_vm._v(" "),_c('van-field',{staticClass:"o-form-field",attrs:{"type":"textarea","autosize":{ minHeight: 20,maxHeight: 160},"show-word-limit":"","maxlength":"1000"},model:{value:(_vm.oReward.sDescription),callback:function ($$v) {_vm.$set(_vm.oReward, "sDescription", $$v)},expression:"oReward.sDescription"}})],1),_vm._v(" "),_c('div',{staticClass:"o-form-item"},[_c('van-field',{staticClass:"o-form-choice border",attrs:{"placeholder":_vm.$t('Main14'),"maxlength":"50"},model:{value:(_vm.oReward.sLocation),callback:function ($$v) {_vm.$set(_vm.oReward, "sLocation", $$v)},expression:"oReward.sLocation"}})],1),_vm._v(" "),_c('div',{staticClass:"o-form-item"},[_c('van-field',{staticClass:"o-form-choice border",attrs:{"readonly":"","placeholder":_vm.$t('Main15'),"is-link":"","rules":[{required:true}]},on:{"click":function($event){_vm.iExpirationDateShow = true}},model:{value:(_vm.oReward.iExpirationDate),callback:function ($$v) {_vm.$set(_vm.oReward, "iExpirationDate", $$v)},expression:"oReward.iExpirationDate"}}),_vm._v(" "),_c('van-popup',{staticClass:"o-popup-f",attrs:{"position":"bottom","overlay":true},model:{value:(_vm.iExpirationDateShow),callback:function ($$v) {_vm.iExpirationDateShow=$$v},expression:"iExpirationDateShow"}},[_c('van-picker',{attrs:{"title":_vm.$t('Main15'),"show-toolbar":"","cancel-button-text":_vm.$t('picker1'),"confirm-button-text":_vm.$t('picker2'),"columns":_vm.columns},on:{"confirm":_vm.handleDate2Confirm,"cancel":_vm.handleCancel}})],1)],1)]:_vm._e()],2)]),_vm._v(" "),_c('div',{staticClass:"o-offer-submit"},[(_vm.step === 0)?_c('van-button',{staticClass:"o-btn-submit",attrs:{"native-type":"submit"}},[_vm._v(_vm._s(_vm.$t('Main17')))]):_vm._e(),_vm._v(" "),(_vm.step === 1)?_c('van-button',{staticClass:"o-btn-submit",attrs:{"native-type":"submit"}},[_vm._v(_vm._s(_vm.$t('Main33')))]):_vm._e()],1)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Reward/Publish.vue?vue&type=template&id=0cf140bb&scoped=true&

// EXTERNAL MODULE: ./plugins/utils.js + 2 modules
var utils = __webpack_require__(9);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/Reward/Publish.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Publishvue_type_script_lang_js_ = ({
  name: "Publish",

  data() {
    return {
      // step: 0,
      minDate: new Date(1888, 0, 1),
      minCurrentDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      maxDate: new Date(2099, 12, 31),
      sDateShow: false,
      iRewardShow: false,
      iExpirationDateShow: false,
      sLocationShow: false,
      iAmountCount: 0,
      NeraList: [50, 100, 200, 500, 1000],
      dateList: [],
      columns: [{
        text: this.$t('Day01'),
        value: 3,
        type: 1
      }, {
        text: this.$t('Day02'),
        value: 5,
        type: 1
      }, {
        text: this.$t('Day03'),
        value: 7,
        type: 1
      }, {
        text: this.$t('Day04'),
        value: 1,
        type: 2
      }, {
        text: this.$t('Day05'),
        value: 2,
        type: 2
      }, {
        text: this.$t('Day06'),
        value: 3,
        type: 2
      }, {
        text: this.$t('Day07'),
        value: 4,
        type: 2
      }, {
        text: this.$t('Day08'),
        value: 5,
        type: 2
      }, {
        text: this.$t('Day09'),
        value: 6,
        type: 2
      }, {
        text: this.$t('Day10'),
        value: 7,
        type: 2
      }, {
        text: this.$t('Day11'),
        value: 8,
        type: 2
      }, {
        text: this.$t('Day12'),
        value: 9,
        type: 2
      }, {
        text: this.$t('Day13'),
        value: 10,
        type: 2
      }, {
        text: this.$t('Day14'),
        value: 11,
        type: 2
      }, {
        text: this.$t('Day15'),
        value: 1,
        type: 3
      }],
      oReward: {
        sDate2: new Date(),
        sSubject: 'I want to find some pictures of ' // "sWallet": "0x1B1432B715638d520bd6C20e4fb5C8De65D8ae47",
        // "sSubject": new Date().getTime() + "年的星空照片,要4k以上",
        // "sDate": "1205/04/01",
        // "sLocation": "beijing",
        // "iReward": "40.36",
        // "iExpirationDate": 1625021721000,
        // "sDescription": "压死猫啦"

      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      step: state => state.reward.step,
      nera: state => state.nera
    }),

    publishStep1() {
      return this.iAmountCount < 0 || !this.oReward.sSubject || !this.oReward.iReward;
    }

  },
  watch: {
    step(v) {
      return v;
    },

    nera(v) {
      return v;
    }

  },

  mounted() {
    this.getAmountCount(0);
  },

  methods: {
    asyncValidator(val, rule) {
      return new Promise(async resolve => {
        // console.log(val, rule);
        if (val < 1 || val > 10000) {
          rule['message'] = this.$t('Main12');
          resolve(false);
        }

        this.$toast.loading(this.$t('Main31'));
        let iAmountCount = await this.getAmountCount(val);
        this.$toast.clear();

        if (iAmountCount < 0) {
          rule['message'] = this.$t('Main32');
          resolve(false);
        }

        resolve(true);
      });
    },

    async handleSubmit() {
      if (this.step === 0) {
        this.$store.commit('reward/SET_STEP', 1);
        return;
      }

      let data = { ...this.oReward,
        iExpirationDate: new Date(this.oReward.iExpirationDate.replace(/-/g, '/') + " 23:59:59").getTime()
      };
      delete data.sDate2;
      let res = await this.$axios.post('/v1/emall/CreateRewardsInfo', data);
      this.$router.replace({
        name: 'Main',
        params: {
          iRewardId: res.iRewardId
        }
      });
      this.$toast(this.$t('Tip01'));
      this.$store.dispatch('UPDATE_USERINFO');
      this.$store.commit('reward/SET_STEP', 0);
      console.log(res);
    },

    async getAmountCount(val) {
      let {
        vBalance
      } = await this.$axios.post('/v1/udc/GetUserBalance', {
        iAcctType: 0
      }); // console.log(vBalance);

      if (vBalance.length) {
        vBalance = vBalance[0];
        let iAmount = Object(utils["c" /* formatNera */])(vBalance.iAvailableAmount); // console.log(iAmount - val);

        this.iAmountCount = Object(utils["c" /* formatNera */])(iAmount - val);
        return this.iAmountCount;
      }
    },

    onFinish() {},

    handleCancel() {
      this.sDateShow = false;
      this.iExpirationDateShow = false;
      this.sLocationShow = false;
    },

    handleDateConfirm(value) {
      let date = Object(utils["d" /* formatTimeToStr */])(value, 'yyyy-MM-dd');
      this.$set(this.oReward, 'sDate', date);
      this.$set(this.oReward, 'sDate2', date); // console.log(date);

      this.handleCancel();
    },

    handleDate2Confirm(value) {
      //  type 1 - 日,  2 - 月, 3 - 年
      let today = new Date();

      switch (value.type) {
        case 1:
          today.setDate(today.getDate() + value.value);
          break;

        case 2:
          today.setMonth(today.getMonth() + value.value);
          break;

        case 3:
          today.setFullYear(today.getFullYear() + value.value);
          break;
      }

      let date = Object(utils["d" /* formatTimeToStr */])(today, 'yyyy-MM-dd');
      this.$set(this.oReward, 'iExpirationDate', date);
      this.$set(this.oReward, 'iExpirationDate2', date); //

      this.handleCancel();
    },

    handleLocationConfirm(value, index) {
      // console.log(value.join());
      this.$set(this.oReward, 'sLocation', value.join('/'));
      this.handleCancel();
    },

    onClose(vv) {
      if (!this.oReward.iReward) {
        this.getAmountCount(0);
      }

      this.$refs.oForm.validate('iReward');
    },

    onInput(v) {
      let value = this.oReward.iReward || '';
      value = value + '';

      if (value === '' && v === '.') {
        value = '0';
      } else if (value.indexOf('.') !== -1 && v === '.') {
        return;
      } else if (value.indexOf('0') !== -1 && value.length === 1 && v === 0) {
        return;
      } else if (/\.\d{2}$/.test(value)) {
        return;
      }

      value += v;
      this.$set(this.oReward, 'iReward', value);
    },

    onDelete() {
      let value = this.oReward.iReward || '';

      if (!value) {
        return;
      }

      value = value.substring(0, value.length - 1);
      this.$set(this.oReward, 'iReward', value);
    }

  }
});
// CONCATENATED MODULE: ./pages/Reward/Publish.vue?vue&type=script&lang=js&
 /* harmony default export */ var Reward_Publishvue_type_script_lang_js_ = (Publishvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Reward/Publish.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Reward_Publishvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0cf140bb",
  "98960b82"
  
)

/* harmony default export */ var Publish = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=32.js.map