<template>
	<div class="card mb-3">
		<h4 class="card-header">{{title}}</h4>
		<div class="card-body">
			<img class="w-100" :src="cover_image">
			<p class="card-text" v-html="body"></p>
		</div>
		<div class="card-footer text-muted">
			{{date}}
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'body', 'date', 'cover_image'],
	}
</script>