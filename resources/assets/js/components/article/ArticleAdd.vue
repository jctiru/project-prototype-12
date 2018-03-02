<template>
	<div class="container py-4">
		<button class="btn btn-primary my-2" @click="goBack"><i class="fa fa-backward"></i> Go Back</button>
		<div v-if="errors" class="row">
			<div class="col">
				<app-errors-component :errors="errors"></app-errors-component>
			</div>
		</div>
		<div class="card mb-3">
			<h4 class="card-header"><i class="fa fa-pencil"></i> Write Article</h4>
			<div class="card-body">
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
						<input type="file" name="cover_image" accept="image/*" @change="onFileSelected" class="form-control-file form-control-sm">
					</div>
					<div class="col-md-6 mx-auto py-2">
						<img id="output" class="w-100">
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
				newArticle: {
					body: '',
					title: '',
				},
				selectedFile: null				
			}
		},
		computed: {
			errors(){
				return this.$store.getters.errors;
			}
		},
		methods: {
			onSubmit(){
				const newArticle = new FormData();
				if(this.selectedFile){
					newArticle.append('cover_image', this.selectedFile, this.selectedFile.name);
				}
				newArticle.append('body', this.newArticle.body);
				newArticle.append('title', this.newArticle.title);
		        this.$store.dispatch('createArticle', newArticle);
				// for (var pair of newArticle.entries()) {
				//     console.log(pair[0]+ ', ' + pair[1]); 
				// }
			},
			goBack(){
				this.$store.dispatch('goBack');
			},
			onFileSelected(event){
				this.selectedFile = event.target.files[0];
				const output = document.getElementById('output');
		    	output.src = URL.createObjectURL(event.target.files[0]);
			}
		},
		components: {
			appErrorsComponent: ErrorsComponent
		}
	}
</script>