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
				<pagination :limit="2" :data="articles" v-on:pagination-change-page="fetchArticles"></pagination>
			</div>
		</div>
		<!-- <p>{{articles}}</p> -->
	</div>
</template>

<script>
	import axios from 'axios';
	import Article from './Article.vue';
	// import { mapGetters } from 'vuex';
	export default {
		data(){
			return {
				
			}
		},
		computed: {
			// ...mapGetters({
			// 	articles: 'articles' 
			// })
			articles() {
				return this.$store.getters.articles;
			}
		},
		created(){
			 // this.articles = this.$store.getters.articles;
			 // this.$store.dispatch('fetchArticles');
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
				this.$store.dispatch('fetchArticles', page);
			}
		},
		components: {
			appArticle: Article,
		}
	}
</script>

<style scoped>
	.pagination {
		justify-content: center;
	}
</style>