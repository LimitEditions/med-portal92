import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/components/LoginForm.vue';
import Registration from '@/components/Registration.vue';
import HomePage from '@/components/HomePage.vue';
import About from '@/components/About.vue';
import News from '@/components/News.vue';
import Map from '@/components/Map.vue';
import Help from '@/components/Help.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/registration',
        component: Registration
    },
    {
        path: '/login',
        component: LoginForm
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/map',
        component: Map
    },
    {
        path: '/help',
        component: Help
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router;
