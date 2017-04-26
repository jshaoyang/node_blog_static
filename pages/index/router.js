import List from './page/list.vue';
import Login from './page/login.vue';
import Register from './page/register.vue';

const routes = [
    { path: '/', component: List },
    { path: '/login', component: Login },
	{ path: '/register', component: Register }
];

export default routes;