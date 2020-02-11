<header class="header">
    <router-link to="/" class="logo"><img src="public/images/logo_v2.svg" alt="logo"></router-link>
    <i v-on:click="expandBurger" class="fa fa-bars fa-2x" :class="{'rotated':burger.isExpanded}"></i>
    <ul class="nav" :class="{'visible':burger.isExpanded}">
        <li class="nav-link"><router-link to="/">Home</router-link></li>
        <li class="nav-link"><a href="#about">About</a></li>
        <li class="nav-link"><a href="#destinations">Destinations</a></li>
        <li class="nav-link"><a id="suOpen" href="#">Sign Up</a></li>
    </ul>
</header>