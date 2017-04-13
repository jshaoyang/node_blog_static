import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Routers from './router.js';
import Start from './main.vue';
import State from './indexVuex.js';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(Routers);
const store = new Vuex.Store(State);

new Vue({ 
	router , store ,
	template:`<Start/>`,
	created () {
		console.log(this.$store)
	},
	components:{
		Start
	}
}).$mount('#app');