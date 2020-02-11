// (()=> {


// })();

// 2. import components we can request and render
import HomeComponent from "./modules/HomeComponent.js";
import DestinationsComponent from "./modules/DestinationsComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js";

// 3. like Express Routes -> router.get ('/', ...) and do something with the request
//    create routes inside
//    order of paths is important! - Vue tries to match the routes to components from the top down
//    the wildcard must be last
const routes = [
    { path: '/', name: 'home', component: HomeComponent },
    { path: '/destinations', name: 'destinations', component: DestinationsComponent },
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


const   su = document.querySelector("#subscription"),
        suExit = document.querySelector("#subExit"),
        suOpen = document.querySelector("#suOpen"),
        subNo = document.querySelector("#submit");


function openSU() {
    su.classList.remove("hidden");
    console.log("please sign up");
}

function keepSU() {
    su.classList.remove("hidden");
    console.log("still signing up");
}

function closeSU() {
    su.classList.add("hidden");
    console.log("close sign up");
}

subNo.addEventListener("click", keepSU);
suOpen.addEventListener("click", openSU);
suExit.addEventListener("click", closeSU);

const echoM = document.querySelector(".echoM");

if(echoM === null) {
    console.log('sign up ready');
} else {
    echoM.classList.add("flip-out-hor-top");
}
