import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/a',
		name: 'home',
		component: () => import('@/views/SearchYou.vue')
		// component: ()=> import('../ie')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
