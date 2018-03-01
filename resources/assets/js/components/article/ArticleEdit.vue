<template>
	<div class="container py-4">
		<button class="btn btn-primary my-3" @click="goBack"><i class="fa fa-backward"></i> Go Back</button>
		<div v-if="errors" class="row">
			<div class="col">
				<app-errors-component :errors="errors"></app-errors-component>
			</div>
		</div>
		<div class="card mb-3">
			<h4 class="card-header"><i class="fa fa-pencil-square-o"></i> Edit Article</h4>
			<div class="card-body">
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
						<input type="file" name="cover_image" accept="image/*" @change="onFileSelected" class="form-control-file form-control-sm">
					</div>
					<input type="submit" class="btn btn-primary" value="Submit">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import ErrorsComponent from './../inc/Errors.vue';
	export default {
		data(){
			return {
				selectedFile: null
			}
		},
		computed: {
			article() {
				return this.$store.getters.article;
			},
			errors(){
				return this.$store.getters.errors;
			}
		},
		methods: {
			fetchArticle(){
				this.$store.dispatch('fetchArticle', this.$route.params.id);
			},
			onSubmit(){
		        const updatedArticle = new FormData();
		        if(this.selectedFile){
					updatedArticle.append('cover_image', this.selectedFile, this.selectedFile.name);
		        }
				updatedArticle.append('body', this.article.body);
				updatedArticle.append('title', this.article.title);
		        this.$store.dispatch('updateArticle', {updatedArticle: updatedArticle, articleId: this.article.id});
		  //       for (var pair of updatedArticle.entries()) {
				//     console.log(pair[0]+ ', ' + pair[1]); 
				// }
			},
			goBack(){
				this.$store.dispatch('goBack');
			},
			onFileSelected(event){
				this.selectedFile = event.target.files[0];
			}
		},
		created(){
			this.fetchArticle();
		},
		components: {
			appErrorsComponent: ErrorsComponent
		}
	}
</script>