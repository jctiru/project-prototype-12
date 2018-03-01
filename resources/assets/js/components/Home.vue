<template>
	<div class="container mt-2">
		<div class="row py-4">
			<div class="offset-md-1 col-md-6">
				<div v-for="article in articles.data" :key="article.id" class="col-12 pb-3">
					<app-article 
					:article="article"
					></app-article>
				</div>
			</div>
			<div class="col-md-3 offset-md-1">
				<app-sidebar></app-sidebar>	
			</div>
		</div>
		<div class="row">
			<div class="offset-md-1 col-md-6 mb-5">
				<pagination :limit="2" :data="articles" v-on:pagination-change-page="fetchNewArticles"></pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import ArticleHome from './article/ArticleHome.vue';
	import Sidebar from './inc/Sidebar.vue';
	export default {
		data(){
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
			articles() {
				return this.$store.getters.articles;
			}
		},
		created(){
			 if(this.$route.query.page){
			 	this.fetchArticles(this.$route.query.page)
			 } else {
				this.fetchArticles();
			 }
		},
		methods: {
			fetchArticles(page){
				if (typeof page === 'undefined') {
					page = 1;
				}
				this.$store.dispatch('fetchArticles', {page: page});
			},
			fetchNewArticles(page) {
				this.$router.push({ path: '/', query: { page: page }});
			}
		},
		components: {
			appArticle: ArticleHome,
			appSidebar: Sidebar
		}
	}
</script>