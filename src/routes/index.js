import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/feed',
        name: 'Feed',
        component: Feed
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;