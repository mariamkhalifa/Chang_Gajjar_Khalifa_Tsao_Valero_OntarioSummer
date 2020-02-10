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
    <title>Routing With Vue</title>
</head>
<body>
    <main id="app">
        <!-- nav links - get transpiled to anchor tags -->
        <router-link to="/">Go to Splash</router-link>
        <router-link to="/app">Go to App</router-link>
        <!-- router-view is like a {{{ body }}} in Handlebars -->
        <!-- components are rendered here -->
        <router-view></router-view>
    </main>
    <script src="js/main.js" type="module"></script>
</body>
</html>