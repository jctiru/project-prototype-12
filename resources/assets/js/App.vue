<template>
    <div id="app">
        <app-header :token="token"/>
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
    computed: {
        token(){
            return this.$store.getters.token;
        }
    },
	beforeCreate(){
        this.$store.dispatch('tryAutoLogin');
    }
}
</script>