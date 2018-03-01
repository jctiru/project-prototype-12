<template>
	<div class="container mt-3 mb-4">
		<div class="row">
			<div class="col-md-6 mx-auto my-3">
				<img class="w-100" :src="article.cover_image">
			</div>
		</div>
		<div class="row py-4">
			<div class="offset-md-1 col-md-6">
				<h6 class="text-muted mb-0">
					{{article.created_at | date}}
				</h6>
				<h3>{{article.title}}</h3>
				<div class="pt-3" v-html="article.body"></div>
			</div>
			<div class="col-md-3 offset-md-1">
				<app-sidebar></app-sidebar>
			</div>
		</div>
		<div class="row my-3 pb-5">
			<div class="offset-md-1 col-md-6">
				<vue-disqus 
				shortname="project-prototype-12" 
				:identifier="article.id"
				:title="article.title" 
				:url="url">
				</vue-disqus>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from './../inc/Sidebar.vue';
	export default {
		data(){
			return {
				
			}
		},
		computed: {
			article() {
				return this.$store.getters.article;
			},
			url(){
				const fullUrl = this.$store.getters.appUrl + this.$route.fullPath;
				return fullUrl;  
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
		},
		components: {
			appSidebar: Sidebar
		}
	}
</script>