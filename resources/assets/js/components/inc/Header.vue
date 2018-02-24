<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container">
			<router-link class="navbar-brand" to="/">Navbar</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarColor01">
				<ul class="navbar-nav mr-auto">
			  		<router-link class="nav-item" to="/" active-class="active" tag="li" exact>
			    		<a class="nav-link">Home</a>
		  			</router-link>
			  		<li class="nav-item dropdown">
				        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Category
				        </a>
				        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
				          <a class="dropdown-item" href="#">Gaming</a>
				          <a class="dropdown-item" href="#">Programming</a>
				          <a class="dropdown-item" href="#">Japanese</a>
				        </div>
			        </li>
			  		<router-link class="nav-item"  to="/about" active-class="active" tag="li">
			    		<a class="nav-link">About</a>
			  		</router-link>
			  		<router-link class="nav-item"  to="/dashboard" active-class="active" tag="li">
			    		<a class="nav-link">Dashboard</a>
			  		</router-link>
				</ul>
			</div>
		</div>
	</nav>
</template>