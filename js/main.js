// 2. import components we can request and render
import SplashComponent from "./modules/SplashComponent.js";
import AppComponent from "./modules/AppComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js";

// 3. like Express Routes -> router.get ('/', ...) and do something with the request
//    create routes inside
//    order of paths is important! - Vue tries to match the routes to components from the top down
//    the wildcard must be last
const routes = [
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/app', name: 'app', component: AppComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]

// 4. Catch the route and render the component into router-view in index.html
const router = new VueRouter({
    routes // shorthand for routes: routes
})

// 1. create the vue module
const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");