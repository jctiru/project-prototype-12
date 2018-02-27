import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/store.js'; 

import HomePage from './components/Home.vue';
import AboutPage from './components/About.vue';
import DashboardPage from './components/dashboard/dashboard.vue';
import ArticleShowPage from './components/article/ArticleShow.vue';
import ArticleEditPage from './components/article/ArticleEdit.vue';
import ArticleAddPage from './components/article/ArticleAdd.vue';
import Page404 from './components/Page404.vue';
// import SignupPage from './components/auth/signup.vue';
// import SigninPage from './components/auth/signin.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { path: '/home'} },
  { path: '/home', component: HomePage },
  { path: '/article/:id', component: ArticleShowPage, name: 'articleShow' },
  { path: '/about', component: AboutPage },
  { path: '/dashboard', component: DashboardPage},
  { path: '/dashboard/edit/:id', component: ArticleEditPage, name: 'articleEdit' },
  { path: '/dashboard/add', component: ArticleAddPage, name: 'articleAdd' },
  { path: '/404', component: Page404 },
  { path: '*', redirect: { path: '/404'}}
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

export default new VueRouter({
  mode: 'history', 
  routes: routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      return savedPosition;
    }
    if (to.hash){
      return { selector: to.hash};
    }
    return { x: 0, y: 0};
  },
});