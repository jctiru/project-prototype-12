<template>
	<div class="alert alert-success fade show alert-message">
		<button @click="close" type="button" class="close alert-close">x</button>
	    <ul class="m-0 p-0">
	    	{{alert}}
	    </ul>
	</div>
</template>

<script>
	export default {
		props: ['alert'],
		methods: {
			close(){
				this.$store.commit('setAlert', null);
				$('.alert-message').fadeOut('fast');
			}
		}
	}
</script>