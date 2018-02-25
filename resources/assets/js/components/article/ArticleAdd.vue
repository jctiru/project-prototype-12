<template>
	<div class="container py-4">
		<h3>Add Article</h3>
		<form enctype="multipart/form-data" @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="title">Title</label>
				<input placeholder="Title" class="form-control" type="text" v-model="article.title">
			</div>
			<div class="form-group">
				<label for="body">Body</label>
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
	export default {
		data(){
			return {
				article: {
					body: '',
					title: ''
				}				
			}
		},
		methods: {
			onSubmit(){
		        console.log(this.article);
		        // this.$store.dispatch('updateArticle', this.article);
			}
		}
	}
</script>