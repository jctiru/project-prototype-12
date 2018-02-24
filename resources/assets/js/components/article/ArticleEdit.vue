<template>
	<div class="container py-4">
		<h3>Edit Article</h3>
		<form enctype="multipart/form-data" @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="title">Title</label>
				<input placeholder="Title" class="form-control" type="text" v-model="article.title">
			</div>
			<div class="form-group">
				<label for="body">Body</label>
				<!-- <textarea id="article-ckeditor" placeholder="Body Text" class="form-control" v-model="article.body"></textarea> -->
				<tinymce id="body" v-model="article.body"></tinymce>
			</div>
			<div class="form-group">
				<input type="file" name="cover_image" accept="image/*"  class="form-control-file form-control-sm">
			</div>
			<input type="submit" class="btn btn-primary" value="Submit">
		</form>
	</div>
</template>

<script>
	import axios from 'axios';
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
			}
		},
		created(){
			this.fetchArticle();
		}
	}
</script>