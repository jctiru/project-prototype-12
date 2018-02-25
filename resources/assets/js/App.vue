<template>
  <div id="app">
  	<app-header/>
    <router-view :key="$route.fullPath"></router-view>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/inc/Header.vue';
import Footer from './components/inc/Footer.vue';

export default {
	components: {
		appHeader: Header,
		appFooter: Footer
	},
}
</script>