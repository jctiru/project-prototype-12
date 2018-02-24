
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import App from './App.vue';
import axios from 'axios';
import router from './router.js'; 
import {store} from './store/store.js';
import tinymce from 'vue-tinymce-editor';

Vue.component('tinymce', tinymce);
Vue.component('pagination', require('laravel-vue-pagination'));

axios.defaults.baseURL = 'http://project-prototype-12.test';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
});
