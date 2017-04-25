import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routers from './router.js';
import Start from './main.vue';
import State from './indexVuex.js';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

const router = new VueRouter({ routes : Routers , mode : 'history' });
const store = new Vuex.Store(State);

new Vue({ 
	router , store ,
	template:`<Start/>`,
	created () {
		//console.log(this.$store)
	},
	components:{
		Start
	}
}).$mount('#app');