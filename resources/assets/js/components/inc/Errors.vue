<template>
	<div class="alert alert-danger">
	    <ul v-for="error in errors" class="m-0 p-0">
	    	{{error}}
	    </ul>
	</div>
</template>

<script>
	export default {
		props: ['errors'],
	}
</script>