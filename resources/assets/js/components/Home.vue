<template>
	<div class="container">
		<div class="row py-4">
			<div class="offset-md-1 col-md-6">
				<div v-for="article in articles.data" :key="article.id" class="col-12 py-2">
					<app-article 
					:article="article"
					></app-article>
				</div>
			</div>
			<div class="col-md-3">
				Sidebar
				<div>
					<v-calendar
				    :attributes='attrs'>
				  	</v-calendar>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		<div class="row">
			<div class="offset-md-1 col-md-6">
				<pagination :limit="2" :data="articles" v-on:pagination-change-page="fetchNewArticles"></pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import ArticleHome from './article/ArticleHome.vue';
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
			
		}
	}
</script>