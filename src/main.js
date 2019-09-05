import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'
import {setCookie, getCookie, delCookie} from './assets/cookie.js'
import stores from './store/store'

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(ElementUI);

Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
};
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;
Vue.prototype.checkPhone = function (strphone) {
  let re = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (strphone === '') {
    this.$message({
      showClose: true,
      message: '请输入手机号！',
      type: 'error'
    });
    return false
  }
  if (!re.test(strphone)) {
    this.$message({
      showClose: true,
      message: '手机号格式不正确!',
      type: 'error'
    });
    return false
  }
  return true
};
Vue.prototype.checkPassWord = function (password, len) {
  let str = password;
  if (str == null || str.length < len) {
    this.$message({
      showClose: true,
      message: `密码不能小于${len}位数！`,
      type: 'error'
    });
    return false
  }
  let reg1 = new RegExp(/^[0-9A-Za-z]+$/);
  if (!reg1.test(str)) {
    this.$message({
      showClose: true,
      message: '密码不能有特殊字符！',
      type: 'error'
    });
    return false
  }
  let reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
  if (reg.test(str)) {
    return true
  } else {
    this.$message({
      showClose: true,
      message: '密码必须包含数字和字母!',
      type: 'error'
    });
    return false
  }
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  store: stores,
  components: { App },
  template: '<App/>'
});
