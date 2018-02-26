<template>
	<div class="container py-4">
		<button class="btn btn-primary my-2" @click="goBack"><i class="fa fa-backward"></i> Go Back</button>
		<h3>Add Article</h3>
		<form enctype="multipart/form-data" @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="title">Title</label>
				<input placeholder="Title" class="form-control" type="text" v-model="newArticle.title">
			</div>
			<div class="form-group">
				<label for="body">Body</label>
				<tinymce id="body" v-model="newArticle.body"></tinymce>
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
				newArticle: {
					body: '',
					title: ''
				}				
			}
		},
		methods: {
			onSubmit(){
		        this.$store.dispatch('createArticle', this.newArticle);
			},
			goBack(){
				this.$store.dispatch('goBack');
			}
		}
	}
</script>