import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Addition from './views/Addition.vue';
import Test from './views/Test.vue';
import List from './views/List.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {path: '/', component: Home},
        {path: '/addition', component: Addition},
        {path: '/test', component: Test},
        {path: '/list', component: List},
    ],
});