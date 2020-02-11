<?php
function signup($fname, $lname, $email, $country, $reqtime){
    // return sprintf('You are logging in with username=>%s, password=>%s', $username, $password);

    $pdo = Database::getInstance()->getConnection();

    // check existance  SELECT * FROM "tbl_user" WHERE "user_name" =' .$username 'AND "user_pass" =' .$password
    $check_exist_query = 'SELECT COUNT(*) FROM `tbl_onsummer_user` WHERE user_email =:email';
    $user_check = $pdo->prepare($check_exist_query);
    $user_check->execute(
        array(
            ':email'=>$email
        )
    );

    if($user_check->fetchColumn()>0){
        // check if match
        $check_match_query = 'SELECT * FROM `tbl_onsummer_user` WHERE user_email =:email';
        $user_match = $pdo->prepare($check_match_query);
        $user_match->execute(
            array(
                ':email'=>$email
            )
        );
        while($founduser = $user_match->fetch(PDO::FETCH_ASSOC)){
            $id = $founduser['user_id'];
            $update_exist_query = 'UPDATE `tbl_onsummer_user` SET user_fname =:fname, user_lname =:lname, user_country =:country, user_lastdate =:lastdate WHERE user_id =:id';
            $date_update = $pdo->prepare($update_exist_query);
            $date_update->execute(
                array(
                    ':id'=>$id,
                    ':fname'=>$fname,
                    ':lname'=>$lname,
                    ':country'=>$country,
                    ':lastdate'=>$reqtime
                )
            );
            $from = "noreply@ontariosummer.ca";
            $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers = "Content-type: text/html\r\n";
            $headers .= 'From: '.$from."\r\n".
                'Reply-To: '.$fname.$lname. '<'.$email.'>' . "\r\n".
                'X-Mailer: PHP/' . phpversion();
            $recipient = $email;
            $subject = "Hello, welcome back to Ontario Summer.";
            $message = '<html><body>';
            // $message .= '<img src="/public/images/email_img.jpg" alt="email greeting">';
            $message .= '<h2>Welcome Back!</h2>';
            $message .= '<h3>We are happy to have you back agian.</h3>';
            $message .= '<h4>Have a wonderful trip in Ontario.</h4>';
            $message .= '<h5>Sincerely,</h5>';
            $message .= '<h5>Ontario Summer</h5>';
            $message .= '</body></html>';
            if(mail($recipient, $subject, $message, $headers)){
                return '<p class="echoM">Welcome back! We have sent you a welcome back email.</p>';
            }else{
                return '<p class="echoM">Sorry, something went wrong with the email address!</p>';
            }
        }
        
    }else{
        $insert_new_query = "INSERT INTO tbl_onsummer_user (user_fname, user_lname, user_email, user_country, user_subdate, user_lastdate) VALUES (:fname, :lname, :email, :country, :subdate, :lastdate);";
        $user_add = $pdo->prepare($insert_new_query);
        $user_add->execute(
            array(
                ':fname'=>$fname,
                ':lname'=>$lname,
                ':email'=>$email,
                ':country'=>$country,
                ':subdate'=>$reqtime,
                ':lastdate'=>$reqtime,
            )
        );
        $from = "noreply@ontariosummer.ca";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers = "Content-type: text/html\r\n";
        $headers .= 'From: '.$from."\r\n".
            'Reply-To: '.$fname.$lname. '<'.$email.'>' . "\r\n".
            'X-Mailer: PHP/' . phpversion();
        $recipient = $email;
        $subject = "Hello, welcome to Ontario Summer.";
        $message = '<html><body>';
        // $message .= '<img src="/public/images/email_img.jpg" alt="email greeting">';
        $message .= '<h2>Welcome!</h2>';
        $message .= '<h3>We are happy to have you.</h3>';
        $message .= '<h4>Have a wonderful trip in Ontario.</h4>';
        $message .= '<h5>Sincerely,</h5>';
        $message .= '<h5>Ontario Summer</h5>';
        $message .= '</body></html>';
        if(mail($recipient, $subject, $message, $headers)){
            return '<p class="echoM">Subscribed! We have sent you an welcome email!</p>';
        }else{
            return '<p class="echoM">Sorry, something went wrong with the email address!</p>';
        }
        
    }

}