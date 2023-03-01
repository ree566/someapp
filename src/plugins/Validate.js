import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_TW from "vee-validate/dist/locale/zh_TW";

Vue.use(VeeValidate);

VeeValidate.Validator.localize("zh_TW", {
  messages: {
    ...zh_TW.messages,
    is: (field) => `${field}必須與密碼相同`,
  },
  attributes: {
    phone: "手機號碼",
    code: "驗證碼",
    password: "密碼",
    confirmedPassword: "確認密碼",
    agreement: "協議",
  },
});

VeeValidate.Validator.extend("ag", {
  validate: (value) => {
    return value;
  },
  getMessage: (field) => field + "必須同意",
});
