import Vue from 'vue';
import Vuex from 'vuex';
import router from './../router.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		articles: {},
		article: {}
	},
	getters: {
		articles (state){
    		return state.articles;
    	},
    	article (state){
    		return state.article;
    	}
	},
	mutations: {
		setArticles(state, articles){
			state.articles = articles;
		},
		setArticle(state, article){
			state.article = article;
		}
	},
	actions: {
		fetchArticles({commit}, {page, requestingPage}){
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
		updateArticle({commit}, article){
			const updatedArticle = {
				id: article.id,
				title: article.title,
				body: article.body,
			};
			axios.put('/api/articles/' + updatedArticle.id, updatedArticle)
			.then(response => {
				console.log(response.data);
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
		}
	}
});