<template>
	<div class="container">
		<p>This is the Home</p>
		<div class="row">
				<div v-for="article in articles.data" :key="article.id" class="col-md-4 py-3">
					<app-article 
					:title="article.title"
					:body="article.body"
					:data="article.created_at"
					></app-article>
				</div>
		</div>
		<div class="row">
			<div class="col-12">
				<pagination :limit="2" :data="articles" v-on:pagination-change-page="fetchNewArticles"></pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import Article from './Article.vue';
	export default {
		data(){
			return {
				
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
			appArticle: Article,
		}
	}
</script>