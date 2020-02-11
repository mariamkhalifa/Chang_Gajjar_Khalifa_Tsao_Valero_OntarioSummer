<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <link rel=“stylesheet” href=“https://use.typekit.net/fzo1xgx.css”>
    <link rel="stylesheet" href="css/main.css">
    <!-- see Vue Router: Introduction (https://router.vuejs.org/guide/#html) -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="https://kit.fontawesome.com/cfa5b23a00.js" crossorigin="anonymous"></script>
    <title>Ontario Summer</title>
</head>
<body>
    <main id="app">
        <header class="header">
            <router-link to="/" class="logo"><img src="logo.svg" alt="logo"></router-link>
            <i v-on:click="expandBurger" class="fa fa-bars fa-2x" :class="{'rotated':burger.isExpanded}"></i>
            <ul class="nav" :class="{'visible':burger.isExpanded}">
                <li class="nav-link"><router-link to="/">Home</router-link></li>
                <li class="nav-link"><a href="#about">About</a></li>
                <li class="nav-link"><a href="#destinations">Destinations</a></li>
                <li class="nav-link"><a href="includes/admin/signup.php">Sign Up</a></li>
            </ul>
        <header>
        
        <router-view></router-view>

        <footer>
            <ul class="f-social-media">
                <li><a href=# target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-facebook"></i></a></li>
            </ul>
            <p>&copy; Summer Ontario 2020. All Rights Reserved.</p>
        </footer>
    </main>
    <script src="js/main.js" type="module"></script>
</body>
</html>