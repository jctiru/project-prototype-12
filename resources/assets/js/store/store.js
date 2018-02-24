import Vue from 'vue';
import Vuex from 'vuex';

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
		fetchArticles({commit}, page){
			if (typeof page === 'undefined') {
				page = 1;
			}
			// axios.get('/api/articles?page=' + page)
			axios.get('/api/articles')
			.then(response => {
				console.log(response.data);
			    console.log(response.status);
			    console.log(response.statusText);
			    console.log(response.headers);
			    console.log(response.config);
				const data = response.data;
				commit('setArticles', data);
			})
			.catch(error => {
				if (error.response) {
			        // The request was made and the server responded with a status code
			        // that falls out of the range of 2xx
			        console.log(error.response.data);
			        console.log(error.response.status);
			        console.log(error.response.headers);
			    } else if (error.request) {
			        // The request was made but no response was received
			        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			        // http.ClientRequest in node.js
			        console.log(error.request);
			    } else {
			        // Something happened in setting up the request that triggered an Error
			        console.log('Error', error.message);
			    }
			    console.log(error.config);
			});
		},
		fetchArticle({commit}){
			axios.get('/api/articles/31')
			.then(response => {
				console.log(response.data);
			    console.log(response.status);
			    console.log(response.statusText);
			    console.log(response.headers);
			    console.log(response.config);
				const data = response.data;
				commit('setArticle', data);
			})
			.catch(error => {
				if (error.response) {
			        // The request was made and the server responded with a status code
			        // that falls out of the range of 2xx
			        console.log(error.response.data);
			        console.log(error.response.status);
			        console.log(error.response.headers);
			    } else if (error.request) {
			        // The request was made but no response was received
			        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			        // http.ClientRequest in node.js
			        console.log(error.request);
			    } else {
			        // Something happened in setting up the request that triggered an Error
			        console.log('Error', error.message);
			    }
			    console.log(error.config);
			});
		}
	}
});