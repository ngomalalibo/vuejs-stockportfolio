import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store/store'
import VuewResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VuewResource);

Vue.http.options.root = 'https://vuejs-stock-trader-d28bc-default-rtdb.firebaseio.com/';

Vue.filter('currency', (value) =>
{
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    store: store
})
