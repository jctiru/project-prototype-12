import Vue from 'vue';
import Vuex from 'vuex';
import router from './../router.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		articles: {},
		article: {},
		errors: null,
		alert: null,
		tokenPayload: null,
		token: null,
		appUrl: 'http://project-prototype-12.test'
		// appUrl: 'https://project-prototype-12.000webhostapp.com'
	},
	getters: {
		articles(state){
    		return state.articles;
    	},
    	article(state){
    		return state.article;
    	},
    	errors(state){
    		return state.errors;
    	},
    	alert(state){
    		return state.alert;
    	},
    	tokenPayload(state){
    		return state.tokenPayload;
    	},
    	token(state){
    		return state.token;
    	},
    	appUrl(state){
    		return state.appUrl;
    	}
	},
	mutations: {
		setArticles(state, articles){
			state.articles = articles;
		},
		setArticle(state, article){
			state.article = article;
		},
		setErrors(state, errors){
			state.errors = errors;
		},
		setAlert(state, alert){
			state.alert = alert;
		},
		setTokenPayload(state, token){
			const base64Url = token.split('.')[1];
			const base64 = base64Url.replace('-', '+').replace('_', '/');
			const tokenPayload = JSON.parse(window.atob(base64));
			state.tokenPayload = tokenPayload;
		},
		setToken(state, token){
			state.token = token;
		}
	},
	actions: {
		signIn({commit}, {email, password}){
			axios.post('/api/user/signin',
				{email: email, password: password},
				{headers: {'X-Requested-With': 'XMLHttpRequest'}})
			.then(response => {
				commit('setToken', response.data.token);
				commit('setTokenPayload', response.data.token);
				commit('setErrors', null);
				commit('setAlert', 'Log-in Successful');
				localStorage.setItem('token', response.data.token);
				router.push('/dashboard');
			})
			.catch(error => {
				if (error.response) {
			        if(error.response.status == 400){
			        	this.commit('setErrors', error.response.data.error);
				        // this.dispatch('printErrorMsg', {error: error.response.data.error});
			        } else {
			        	const errors = [error.response.data.error];
			        	this.commit('setErrors', errors);
			        }
			    } else if (error.request) {
			        console.log(error.request);
			    } else {
			        console.log('Error', error.message);
			    }
			});
		},
		logOut({commit}){
			localStorage.removeItem('token');
			this.state.token = null;
			this.state.tokenPayload = null;
			router.push('/signin');
		},
		tryAutoLogin({commit}){
	        const token = localStorage.getItem('token');
	        if(!token){
	        	// alert('Token absent');
	        	return;
	      	}
	      	// alert('Token present');
	      	this.commit('setToken', token);
	      	this.commit('setTokenPayload', token);
	      	const tokenPayload = this.getters.tokenPayload;
	      	const expirationDate = tokenPayload.exp;
	      	const now = Math.floor(Date.now() / 1000);
	      	if(now >= expirationDate){
	        	return;
	      	}
	    },
		printErrorMsg({commit}, {error}) {
	        $.each(error, function(key, value) {
	            console.log(value);
	        });
	    },
		fetchArticles({commit}, {page}){
			if (typeof page === 'undefined') {
				page = 1;
			}
			axios.get('/api/articles?page=' + page)
			.then(response => {
				const data = response.data;
				console.log(response.data);
				if(response.data.last_page < page || page <= 0){
					router.push('/404');
				} else {
					commit('setArticles', data);
				}
			})
			.catch(error => {
				if (error.response) {
			        console.log(error.response.data);
			    } else if (error.request) {
			        console.log(error.request);
			    } else {
			        console.log('Error', error.message);
			    }
			});
		},
		fetchArticle({commit}, articleId){
			axios.get('/api/articles/' + articleId)
			.then(response => {
				const data = response.data;
				commit('setArticle', data);
			})
			.catch(error => {
				if (error.response) {
			        if(error.response.status == 404){
			        	router.push('/404');
			        }
			    } else if (error.request) {
			        console.log(error.request);
			    } else {
			        console.log('Error', error.message);
			    }
			});
		},
		updateArticle({commit}, {updatedArticle, articleId}){
			// for (var pair of updatedArticle.entries()) {
			//     console.log(pair[0]+ ', ' + pair[1]); 
			// }
			// PHP Limitations: multipart/form-data is not visible in php://input if the method is PUT
			// Use axios.post instead of axios.put but still PUT in API Routes
			// Add _method PUT for Laravel to treat POST request as PUT request in routes
			updatedArticle.append('_method', 'PUT');
			const token = this.getters.token;
			axios.post('/api/articles/' + articleId + "?token=" + token, updatedArticle)
			.then(response => {
				console.log(response.data);
				commit('setAlert', 'Article updated');
				this.dispatch('goBack');
			})
			.catch(error => {
				if (error.response) {
					this.commit('setErrors', error.response.data.error);
					console.log(error.response.data);
				    console.log(error.response.status);
				    console.log(error.response.headers);
			    } else if (error.request) {
			        console.log(error.request);
			    } else {
			        console.log('Error', error.message);
			    }
			});
		},
		createArticle({commit}, newArticle){
			// for (var pair of newArticle.entries()) {
			//     console.log(pair[0]+ ', ' + pair[1]); 
			// }
			const token = this.getters.token;
			axios.post('/api/articles?token='+token, newArticle)
			.then(response => {
				console.log(response.data);
				commit('setAlert', 'Article created');
				router.push('/dashboard');
			})
			.catch(error => {
				if (error.response) {
					this.commit('setErrors', error.response.data.error);
					console.log(error.response.data);
				    console.log(error.response.status);
				    console.log(error.response.headers);
			    } else if (error.request) {
			        console.log(error.request);
			    } else {
			        console.log('Error', error.message);
			    }
			});
		},
		deleteArticle({commit}, {id}){
			const token = this.getters.token;
			// 000webhost doesn't support PUT and DELETE request must use POST and spoof to Laravel
			// Add _method DELETE for Laravel to treat POST request as DELETE request in routes
			// axios.delete('/api/articles/' + id + '?token=' + token)
			const deleteArticle = new FormData();
			deleteArticle.append('_method', 'DELETE');
			axios.post('/api/articles/' + id + '?token=' + token, deleteArticle)
			.then(response => {
				console.log(response.data);
				commit('setAlert', 'Article deleted');
				if(this.state.articles.from == this.state.articles.to){
					const page = this.state.articles.current_page - 1;
					router.push({ path: '/dashboard', query: { page: page }});
				} else {
					const page = this.state.articles.current_page;
					this.dispatch('fetchArticles', {page: page});
				}
			})
			.catch(error => {
				if (error.response) {
					console.log(error.response.data);
				    console.log(error.response.status);
				    console.log(error.response.headers);
			    } else if (error.request) {
			        console.log(error.request);
			    } else {
			        console.log('Error', error.message);
			    }
			});
		},
		goBack({commit}){
			router.go(-1);
		}
	}
});