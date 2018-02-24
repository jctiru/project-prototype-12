import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/store.js'; 

import HomePage from './components/Home.vue';
import AboutPage from './components/About.vue';
import DashboardPage from './components/dashboard/dashboard.vue';
// import SignupPage from './components/auth/signup.vue';
// import SigninPage from './components/auth/signin.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/dashboard', component: DashboardPage }
  // { path: '/signup', component: SignupPage },
  // { path: '/signin', component: SigninPage },
  // { 
  // 	path: '/dashboard', 
  // 	component: DashboardPage,
  // 	beforeEnter (to, from, next){
  // 		if(store.state.idToken){
  // 			next();
  // 		} else {
  // 			next('/signin');
  // 		}
  // 	} 
  // }
];

export default new VueRouter({mode: 'history', routes});