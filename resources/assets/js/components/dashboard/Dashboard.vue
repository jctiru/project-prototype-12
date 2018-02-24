<template>
	<div class="container py-3">
		<div class="card mb-3">
		<h4 class="card-header">Dashboard</h4>
		<div class="card-body">
			<h5 class="card-title">Your Blog Posts</h5>
			<ul class="list-group list-group-flush">
			    <li 
			    v-for="article in articles.data" 
				:key="article.id"  
				class="list-group-item">{{article.title}}</li>
		    </ul>
			<div class="row">
				<div class="col-md-2">
					<a href="/posts/create" class="btn btn-info">Edit Post</a>
				</div>
				<div class="col-md-2">
					<a href="/posts/create" class="btn btn-danger">Delete Post</a>
				</div>
				<p class="card-text"></p>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return{
				
			}
		},
		computed: {
			articles() {
				return this.$store.getters.articles;
			}
		},
		methods: {
			fetchArticles(){
				this.$store.dispatch('fetchArticles');
			}
		},
		created(){
			this.fetchArticles();
		}
	}
</script>