<template>
	<div class="container py-3">
		<div class="card mb-3">
		<h3 class="card-header">Dashboard</h3>
		<div class="card-body">
			<div class="card-title">
				<div class="row">
					<div class="col-md-6">
						<h4 class="">Your Blog Posts</h4>
					</div>
					<div class="col-md-6">
						<router-link :to="{ name: 'articleAdd' }" class="btn btn-primary">Create Post</router-link>
					</div>
				</div>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<div class="row">
						<div class="col-md-6">
							<h5>Title</h5>	
						</div>
						<div class="col-md-2">
							<h5>Created</h5>
						</div>
						<div class="col-md-2">
							<h5>Updated</h5>
						</div>
					</div>
				</li>
			    <li 
			    v-for="article in articles.data" 
				:key="article.id"  
				class="list-group-item">
					<div class="row">
						<div class="col-md-6">
							{{article.title}}	
						</div>
						<div class="col-md-2">
							{{article.created_at}}
						</div>
						<div class="col-md-2">
							{{article.created_at}}
						</div>
						<div class="col-md-1">
							<router-link :to="{ name: 'articleEdit', params: { id: article.id}}" class="btn btn-info">Edit</router-link>
						</div>
						<div class="col-md-1">
							<button class="btn btn-danger">Delete</button>
						</div>
					</div>
				</li>
		    </ul>
			<div class="row">
				<div class="col-md-2">
					
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
				this.$store.dispatch('fetchArticles', { page: undefined, requestingPage: 'Dashboard'});
			}
		},
		created(){
			this.fetchArticles();
		}
	}
</script>