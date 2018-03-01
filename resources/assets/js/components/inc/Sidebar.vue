<template>
	<div class="container">
		<div class="row py-1">
			<v-calendar
			    :attributes='attrs'>
		  	</v-calendar>
		</div>
	  	<div class="row py-1 text-white">
	  		<vue-goodshare-facebook 
			    :page_url="url" 
			    title_social="Facebook"
			    has_counter
			    has_icon>
			</vue-goodshare-facebook>
	  	</div>
	  	<div class="row py-1 text-white">
	  		<vue-goodshare-tumblr 
			    :page_url="url" 
			    title_social="Tumblr"
			    has_counter
			    has_icon>
			</vue-goodshare-tumblr>
	  	</div>
	  	<div class="row py-1 text-white">
	  		<vue-goodshare-pinterest 
			    :page_url="url" 
			    title_social="Pinterest"
			    has_counter
			    has_icon>
			</vue-goodshare-pinterest>
	  	</div>
	  	<div class="row py-1 text-white">
	  		<vue-goodshare-reddit 
			    :page_url="url" 
			    title_social="Reddit"
			    has_counter
			    has_icon>
			</vue-goodshare-reddit>
	  	</div>
	  	<div class="row py-1 text-white">
	  		<vue-goodshare-twitter 
			    :page_url="url" 
			    title_social="Twitter"
			    has_counter
			    has_icon>
			</vue-goodshare-twitter>
	  	</div>
	  	<div class="row py-1 text-white">
	  		<vue-goodshare-google-plus 
			    :page_url="url" 
			    title_social="Google Plus"
			    has_counter
			    has_icon>
			</vue-goodshare-google-plus>
	  	</div>
	</div>
</template>

<script>
// import VueGoodshare from 'vue-goodshare';
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
import VueGoodshareTumblr from 'vue-goodshare/src/providers/Tumblr.vue';
import VueGoodsharePinterest from 'vue-goodshare/src/providers/Pinterest.vue';
import VueGoodshareReddit from 'vue-goodshare/src/providers/Reddit.vue';
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue';
import VueGoodshareGooglePlus from 'vue-goodshare/src/providers/GooglePlus.vue';

export default {
	data() {
		return {
			attrs: [
		        {
		        	key: 'today',
		        	highlight: {
		            	backgroundColor: '#ff8080',
		        	},
		        	contentStyle: {
        				color: '#fafafa',
		          	},
		          	popover: {
        				label: 'Today',
		          	},
		        	dates: new Date()
		        }
	        ],
		}
	},
	computed: {
		url(){
			const fullUrl = this.$store.getters.appUrl + this.$route.fullPath;
			return fullUrl;  
		}
	},
	components: {
		VueGoodshareFacebook,
		VueGoodshareTumblr,
		VueGoodsharePinterest,
		VueGoodshareReddit,
		VueGoodshareTwitter,
		VueGoodshareGooglePlus
	}
}

</script>