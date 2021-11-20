import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

// 公用 css 样式
import "./assets/css/public.css"
// 用户管理状态
import utils from "./utils/index"
// 鼠标点击特效
import "./assets/js/MouseClick"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// MarkdownEditor 富文本编辑器  预览
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
VMdPreview.use(githubTheme)
Vue.use(VMdPreview);

// MarkdownEditor 富文本编辑器  编辑
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor)

//swiper 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.utils = utils;

Vue.directive('title',{
  inserted(dom){
    document.title = dom.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

