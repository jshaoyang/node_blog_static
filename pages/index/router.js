import List from './page/list.vue';
import Login from './page/login.vue';
import Register from './page/register.vue';
import Logout from './page/logout.vue';
const store = sessionStorage;

const routes = [
	{ 
		path: '/',
		component: List 
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
		component: Logout
	}
];

export default routes;