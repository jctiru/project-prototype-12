<template>
	<div class="card mb-3">
		<router-link :to="{ name: 'articleShow', params: { id: article.id} }">
			<h4 class="card-header">{{article.title}}</h4>
		</router-link>
		<div class="card-body">
			<img class="w-100" :src="article.cover_image">
			<!-- <p class="card-text clamp" v-html="article.body"></p> -->
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
	</div>
</template>

<script>
	export default {
		props: ['article'],
	}
</script>