<template>
	<div class="container my-5 pb-5">
		<div v-if="errors" class="row">
			<div class="col-md-6 mx-auto">
				<app-errors-component :errors="errors"></app-errors-component>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 mx-auto">
				<div class="card card-body mb-5">
					<h2>Login</h2>
					<p>Please fill in your credentials to log in</p>
					<form @submit.prevent = "signIn">
						<div class="form-group">
							<label for="email">Email: <sup>*</sup></label>
							<input 
							type="email" 
							name="email" 
							class="form-control"
							v-model="email">
						</div>
						<div class="form-group">
							<label for="password">Password: <sup>*</sup></label>
							<input 
							type="password" 
							name="password" 
							class="form-control"
							v-model="password">
						</div>
						<div class="row">
							<div class="col">
								<input type="submit" value="Login" class="btn btn-success btn-block">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ErrorsComponent from './inc/Errors.vue';
export default {
	data() {
		return {
			email: '',
			password: ''
		}
	},
	computed: {
		errors(){
			return this.$store.getters.errors;
		}
	},
	methods: {
		signIn(){
			this.$store.dispatch('signIn', {email: this.email, password: this.password});
		}
	},
	components: {
		appErrorsComponent: ErrorsComponent
	}
}	
</script>

