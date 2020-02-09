import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

new Vue({
  el: '#app',
  // register store. Similar to store: store
  store,
  render: h => h(App)
})
