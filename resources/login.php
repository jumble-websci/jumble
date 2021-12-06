<?php

session_start(); 

$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "wordpass";
$dbname = "jumble";

try {
    $db = new PDO("mysql:host=$dbhost;dbname=$dbname","$dbusername","$dbpassword");
} 
catch (Exception $e) {
    echo("Error: Failed to connect to database -> $e");
    die();
}

if (isset($_GET['email']) && isset($_GET['password'])) {
    function validate($data) {
       $data = trim($data);
       $data = stripslashes($data);
       $data = htmlspecialchars($data);
       return $data;
    }

    // Clean up the input
    $clean_email = validate($_GET['email']);
    $clean_pass = validate($_GET['password']);

    // Double check inputs aren't empty
    if (empty($clean_email)) {
        echo("Error: Please enter an email");
        die();    
    } else if (empty($clean_pass)) {
        echo("Error: Please enter a password");
        die();    
    }

    // Allow no more than 3 attempts in a minute 
    //  -Minute lockout starts after the 3rd failed
    //  -Successful login will set attempts back to 0

    // Set var
    if(!isset($_SESSION['numAttempts'])) {
        $_SESSION['numAttempts'] = 0;
    }

    // Lockout if over 3
    if ($_SESSION['numAttempts'] >= 3) {
        // If lockout time isn't made yet
        if(empty($_SESSION['attemptsLockoutTime'])) {
            $_SESSION['attemptsLockoutTime'] = time();
        }
        // If a minute hasn't passed
        else if ($_SESSION['attemptsLockoutTime'] > (time() - 60) ) {
            echo("Error: More than 3 attempts. Please wait a minute to try again.");
            die();
        } 
        // Reset back to normal
        else {
            $_SESSION['attemptsLockoutTime'] = NULL;
            $_SESSION['numAttempts'] = 0;
        }
    }

    // Check password
    else {
        $sql = "SELECT * FROM users WHERE email='$clean_email'";
        $result = ($db->query($sql))->fetchAll();

        if (count($result) != 0) {
            $row = $result[0];

            // If password is good then login
            if (password_verify($clean_pass, $row['password'])) {
                echo("Logged in!");

                $_SESSION['email'] = $row['email'];
                $_SESSION['fname'] = $row['fname'];
                $_SESSION['lname'] = $row['lname'];
                $_SESSION['numAttempts'] = 0;

                die();
            } else {
                $_SESSION['numAttempts'] += 1;
                $attemptsLeft = 3 - $_SESSION['numAttempts'];
                $pluralWord = ($attemptsLeft == 1 ? "attempt" : "attempts");
                echo("Error: Incorrect Password. You have $attemptsLeft $pluralWord left before you must wait a minute to try again.");
                die();        
            }
        } else {
            $_SESSION['numAttempts'] += 1;
            $attemptsLeft = 3 - $_SESSION['numAttempts'];
            $pluralWord = ($attemptsLeft == 1 ? "attempt" : "attempts");
            echo("Error: Incorrect Email. You have $attemptsLeft $pluralWord left before you must wait a minute to try again.");
        die();        
    }
  }
}
?> 