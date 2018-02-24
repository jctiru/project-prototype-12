<template>
	<div class="container">
		<h1>Create Article</h1>
		<form enctype="multipart/form-data" @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="title">Title</label>
				<input v-model="title" placeholder="Title" class="form-control" type="text" name="title">
			</div>
			<div class="form-group">
				<label for="body">Body</label>
				<textarea id="article-ckeditor" placeholder="Body Text" class="form-control" name="body"></textarea>
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
				title: '',
				body: '',
				img: ''
			}
		},
		methods: {
			onSubmit(){
				const formData = {
		        	title: this.title,
		        	body: this.body,
		        }
		        console.log(formData);
		        // this.$store.dispatch('signup', formData);
			}
		}
	}
</script>