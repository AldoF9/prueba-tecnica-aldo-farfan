import Vue from 'vue';
import VueRouter from 'vue-router';
import Shoping from "@/components/pages/Shoping";

Vue.use(VueRouter);

let routes = [
    {
        path: '/shoping',
        name: 'Shoping',
        component: Shoping,
    },

];

export default new VueRouter({
    mode: 'history',
    routes: routes
});
