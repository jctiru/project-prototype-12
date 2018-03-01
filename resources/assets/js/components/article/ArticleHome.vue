<template>
	<div class="container mb-5">
		<div class="row">
			<div class="col">
				<h6 class="text-muted mb-0">
					{{article.date | date}}
				</h6>
			</div>
		</div>
		<div class="row pb-2">
			<div class="col">
				<router-link class="text-primary" :to="{ name: 'articleShow', params: { id: article.id} }">
					<h4>{{article.title}}</h4>
				</router-link>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="col">
				<img class="w-100" :src="article.cover_image">
			</div>
		</div>		
		<div class="row">
			<div class="col">
				<div class="pt-3" v-html="this.$options.filters.truncate(article.body)"></div>
			</div>
		</div>
		<div class="row pt-3">
			<div class="col">
				<router-link class="text-primary" :to="{ name: 'articleShow', params: { id: article.id} }">
					<u>Continue Reading</u>
				</router-link>
			</div>
		</div>
	</div>

	<!-- <div class="card mb-3">
		<router-link :to="{ name: 'articleShow', params: { id: article.id} }">
			<h4 class="card-header">{{article.title}}</h4>
		</router-link>
		<div class="card-body">
			<img class="w-100" :src="article.cover_image">
			<p class="card-text clamp" v-html="this.$options.filters.truncate(article.body)"></p>
			<div>
				<router-link :to="{ name: 'articleShow', params: { id: article.id} }">
					Continue Reading
				</router-link>
			</div>
		</div>
		<div class="card-footer text-muted">
			{{article.date | date}}
		</div>
	</div> -->
</template>

<script>
	export default {
		props: ['article'],
	}
</script>

<style scoped>
.no-gutters {
	margin-right: 0;
	margin-left: 0;

	> .col,
	> [class*="col-"] {
	padding-right: 0;
	padding-left: 0;
	}
}
</style>