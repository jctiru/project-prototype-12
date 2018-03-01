<template>
	<div class="container pt-5 pb-5 mb-5">
	    <div class="row">
	        <div class="offset-md-1 col-md-4 mb-3">
	            <img :src="imgUrl" class="w-100">
	        </div>
	        <div class="col-md-6">
	            <div class="card border-dark">
	                <div class="card-body">
	                    <h2 class="card-title text-dark">About and Disclaimer</h2>
	                    <div class="card-text text-dark">
	                        <p>This simple website/project is created as a practice/excercise for full-stack WebDev and solely for educational purposes. Almost all resources used are from the internet. The project's main theme is Blog Site <strong><em>but some sections may or may not</em></strong> adhere to the whole theme.</p>
	                        <p><strong><em>Disclaimer: No copyright infringement is intended. This is only for educational purposes and not for profit. Some asset/s used are not owned by the developer/s unless otherwise stated; the credit goes to the owner/s.</em></strong></p>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgUrl: '/storage/owl.jpg'
			}
		}
	}
</script>