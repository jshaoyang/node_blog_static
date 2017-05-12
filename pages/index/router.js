import List from './page/list.vue';
import Login from './page/login.vue';
import Register from './page/register.vue';
import Logout from './page/logout.vue';
import Home from './page/home.vue';
import Article from './page/article.vue';
import Detail from './page/detail.vue';
import Perfect from './page/perfect.vue';

const store = sessionStorage;

const routes = [
	{ 
		path: '/',
		component: List 
	},{ 
		path: '/detail/:id', 
		component: Detail
	},{ 
		path: '/home/:name',
		component: Home ,
		beforeEnter: (to, from, next) => {
			if (!store.getItem('userId')) {
				return next('/login');
			}
			next();
		}
	},{ 
		path: '/perfect',
		component: Perfect ,
		beforeEnter: (to, from, next) => {
			if (!store.getItem('userId')) {
				return next('/login');
			}
			next();
		}
	},{ 
		path: '/login', 
		component: Login,
		beforeEnter: (to, from, next) => {
			if (store.getItem('userId')) {
				return next('/logout');
			}
			return next();
		}
	},{ 
		path: '/register', 
		component: Register,
		beforeEnter: (to, from, next) => {
			if (store.getItem('userId')) {
				return next('/logout');
			}
			next();
		}
	},{ 
		path: '/logout', 
		component: Logout,
		beforeEnter: (to, from, next) => {
			if (!store.getItem('userId')) {
				return next('/');
			}
			next();
		}
	},{ 
		path: '/article', 
		component: Article,
		beforeEnter: (to, from, next) => {
			if (!store.getItem('userId')) {
				return next('/login');
			}
			next();
		}
	}
];

export default routes;