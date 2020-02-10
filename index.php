<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
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
            <router-link to="/"><img src="logo.svg" alt="logo"></router-link>
            <i class="fa fa-bars fa-2x"></i>
            <ul class="nav">
                <li><router-link to="/">Home</router-link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#destinations">Destinations</a></li>
                <li><router-link to="/subscribe">Subscribe</router-link></li>
            </ul>
        <header>
        
        <router-view></router-view>

        <footer>
            <ul class="social-media">
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