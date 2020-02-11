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
        <form action="index.php" method="post">
            <label for="firstname">First Name:</label><br>
            <input type="text" id="firstname" name="firstname" value="" required><br>

            <label for="lastname">Last Name:</label><br>
            <input type="text" id="lastname" name="lastname" value="" required><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" value="" required><br>

            <label for="country">Country:</label><br>
            <select id="country" name="country" required>
                <?php include 'countries_form.php';?>
            </select>

            <input name="submit" type="submit" id="submit" value="SUBMIT">
        </form>
    </section>

    <main id="app">
        <?php include 'nav.php';?>
        
        <router-view></router-view>

        <?php include 'footer.php';?>
    </main>
    <script src="public/js/main.js" type="module"></script>
</body>
</html>