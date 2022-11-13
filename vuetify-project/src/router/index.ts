import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

// interface RouteRecordRawExt extends RouteRecordRaw {
// 	icon: '123';
// }

export const routes: RouteRecordRaw[] = [
	{
		path: '/a',
		name: 'home',
		component: () => import('@/views/SearchYou.vue'),
		meta: {
			title: 'home',
			icon: 'mdi-folder',
			requireAuth: false
		}
		// component: ()=> import('../ie')
	},
	{
		path: '/b',
		name: 'home2',
		component: () => import('@/views/SearchYou2.vue'),
		meta: {
			title: 'board',
			icon: 'mdi-magnify',
			requireAuth: false
		}
		// component: ()=> import('../ie')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
