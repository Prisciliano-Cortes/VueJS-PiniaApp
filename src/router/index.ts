import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'counter-one',
            component: () => import('../counter/pages/CounterOnePage.vue')
        },
        {
            path: '/setup',
            name: 'counter-two',
            component: () => import('../counter/pages/CounterTwoPage.vue')
        },
        {
            path: '/clients',
            name: 'clients',
            component: () => import('../clients/layout/ClientLayout.vue'),
            redirect: { name: 'list' },
            children: [
                {
                    path: 'list',
                    name: 'list',
                    component: () => import('../clients/pages/ListPage.vue'),
                },
                {
                    path: '/clients/:id',
                    name: 'client-id',
                    component: () => import('../clients/pages/ClientPage.vue'),
                }
            ]
        }
    ]
})

export default router
