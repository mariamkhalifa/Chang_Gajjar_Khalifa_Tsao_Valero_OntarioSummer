<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.css">
    <!-- see Vue Router: Introduction (https://router.vuejs.org/guide/#html) -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <title>Ontario Summer</title>
</head>
<body>
    <main id="app">
        <header class="header">
            <router-link to="/"><img src="logo.svg" alt="logo"></router-link>
            <ul class="nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/destinations">Destinations</router-link></li>
                <li><router-link to="/subscribe">Subscribe</router-link></li>
            </ul>
        <header>
        
        <router-view></router-view>

        <footer>
            <p>&copy; Ontario Summer 2020. All Rights Reserved.</p>
        </footer>
    </main>
    <script src="js/main.js" type="module"></script>
</body>
</html>