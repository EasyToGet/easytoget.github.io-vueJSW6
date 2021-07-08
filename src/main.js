import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import {
  defineRule, Form, Field, ErrorMessage, configure,
} from 'vee-validate';
// import { required, email, min } from '@vee-validate/rules'; // 加入部分規則
import rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

// 加入部分規則
// defineRule('required', required);
// defineRule('email', email);
// defineRule('min', min);

// 加入全部規則
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
