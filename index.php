<?php

    require_once './includes/config/database.php';
    require_once './includes/admin/scripts/login.php';
    // $reqtime = $_SERVER['REQUEST_TIME'];
    $reqtime = date("Y-m-d H:i:s");

    if(isset($_POST['submit'])) {
        $fname = trim($_POST['firstname']);
        $lname = trim($_POST['lastname']);
        // $email = trim($_POST['email']);
        $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
        $email = filter_var($email,FILTER_VALIDATE_EMAIL);
        $country = $_POST['country'];
        
        if(!empty($fname) && !empty($lname) && !empty($email) && !empty($country)) {
            //do the login
            $message = signup($fname, $lname, $email, $country, $reqtime);
        }else{
            $message = 'Please fill out the required fields';
        }
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="/public/images/favicon.ico">
    <link rel="stylesheet" href="https://use.typekit.net/fzo1xgx.css">
    <link rel="stylesheet" href="public/css/main.css">
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="https://kit.fontawesome.com/cfa5b23a00.js" crossorigin="anonymous"></script>
    <title>Ontario Summer</title>
</head>
<body>
    
    <section class="subscription">
        <?php echo !empty($message)?$message: ''; ?>
        <img id="subBg" src="public/images/sub_ocean.jpg" alt="subscription box background">
        <h2 id="subHead">Subscribe To Travel Tips & Deals</h2>
        <form action="index.php" method="post">
            <label for="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" value="" required><br>

            <label for="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" value="" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="" required><br>

            <label for="country">Country:</label>
            <select id="country" name="country" required>
                <?php include 'countries_form.php';?>
            </select>

            <input name="submit" type="submit" id="submit" value="SUBMIT">
        </form>
    </section>

    <main id="app">
        <header class="header">
            <router-link to="/" class="logo"><img src="public/images/logo.svg" alt="logo"></router-link>
            <i v-on:click="expandBurger" class="fa fa-bars fa-2x" :class="{'rotated':burger.isExpanded}"></i>
            <ul class="nav" :class="{'visible':burger.isExpanded}">
                <li class="nav-link"><router-link to="/">Home</router-link></li>
                <li class="nav-link"><a href="#about">About</a></li>
                <li class="nav-link"><a href="#destinations">Destinations</a></li>
                <li class="nav-link"><a href="includes/admin/signup.php">Sign Up</a></li>
            </ul>
        </header>
        
        <router-view></router-view>

        <footer>
            <ul class="f-social-media">
                <li><a href=# target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-facebook"></i></a></li>
            </ul>
            <p>&copy; Ontario Summer 2020. All Rights Reserved.</p>
        </footer>
    </main>
    <script src="public/js/main.js" type="module"></script>
</body>
</html>