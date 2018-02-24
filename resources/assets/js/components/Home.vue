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
				<!-- <pagination :data="articles" v-on:pagination-change-page="fetchArticles"></pagination> -->
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
			 this.fetchArticles();
		},
		methods: {
			fetchArticles(){
				this.$store.dispatch('fetchArticles');
			}
		},
		components: {
			appArticle: Article,
		}
	}
</script>