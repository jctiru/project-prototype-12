
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.moment = require('moment');

window.Vue = require('vue');
import App from './App.vue';
import axios from 'axios';
import router from './router.js'; 
import {store} from './store/store.js';
import tinymce from 'vue-tinymce-editor';
import truncate from 'html-truncate';
import VueDisqus from 'vue-disqus/VueDisqus.vue';
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';

Vue.use(VCalendar);
Vue.component('tinymce', tinymce);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('vue-disqus', VueDisqus);

axios.defaults.baseURL = 'http://project-prototype-12.test';

Vue.filter('date', date => moment(date).format('MMMM Do, YYYY'));
Vue.filter('longDate', date => moment(date).format('MMM Do YYYY, h:mm a'));
Vue.filter('truncate', text => truncate(text, 700, {ellipsis: ' . . .'}));

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
