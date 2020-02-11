// 2. import components we can request and render
import HomeComponent from "./modules/HomeComponent.js";
import Destination1Component from "./modules/Destination1Component.js";
import Destination2Component from "./modules/Destination2Component.js";
import Destination3Component from "./modules/Destination3Component.js";
import Destination4Component from "./modules/Destination4Component.js";
import Destination5Component from "./modules/Destination5Component.js";
import Destination6Component from "./modules/Destination6Component.js";
import ErrorComponent from "./modules/ErrorComponent.js";

// 3. like Express Routes -> router.get ('/', ...) and do something with the request
//    create routes inside
//    order of paths is important! - Vue tries to match the routes to components from the top down
//    the wildcard must be last
const routes = [
    { path: '/', name: 'home', component: HomeComponent },
    { path: '/destination1', name: 'destination1', component: Destination1Component },
    { path: '/destination2', name: 'destination2', component: Destination2Component },
    { path: '/destination3', name: 'destination3', component: Destination3Component },
    { path: '/destination4', name: 'destination4', component: Destination4Component },
    { path: '/destination5', name: 'destination5', component: Destination5Component },
    { path: '/destination6', name: 'destination6', component: Destination6Component },
    { path: '*', name: 'error', component: ErrorComponent }
]

// 4. Catch the route and render the component into router-view in index.html
const router = new VueRouter({
    routes // shorthand for routes: routes
})

// 1. create the vue module
const vm = new Vue({
    data: {
        burger: {
            isExpanded: false
        },
    },

    methods: {
        expandBurger() {
            //console.log('expanded');
            this.burger.isExpanded = (this.burger.isExpanded) ? false : true;
        }
    },

    router
}).$mount("#app");