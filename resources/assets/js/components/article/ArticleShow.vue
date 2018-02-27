<template>
	<div class="container">
		<div class="card mb-3">
			<h4 class="card-header">{{article.title}}</h4>
			<div class="card-body">
				<img class="w-100" :src="article.cover_image">
				<p class="card-text" v-html="article.body"></p>
			</div>
			<div class="card-footer text-muted">
				{{article.created_at | date}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		computed: {
			article() {
				return this.$store.getters.article;
			}
		},
		methods: {
			fetchArticle(){
				this.$store.dispatch('fetchArticle', this.$route.params.id);
			},
			onSubmit(){
		        console.log(this.article);
		        this.$store.dispatch('updateArticle', this.article);
			},
			goBack(){
				this.$store.dispatch('goBack');
			}
		},
		created(){
			this.fetchArticle();
		}
	}
</script>