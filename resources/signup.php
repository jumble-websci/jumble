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

if (isset($_POST['email']) && isset($_POST['password'])) {
    function validate($data) {
       $data = trim($data);
       $data = stripslashes($data);
       $data = htmlspecialchars($data);
       return $data;
    }

    // Clean up the input
    $clean_email = validate($_POST['email']);
    $clean_pass = validate($_POST['password']);

    // Double check inputs aren't empty
    if (empty($clean_email)) {
        echo("Error: Please enter an email");
        die();    
    } else if (empty($clean_pass)) {
        echo("Error: Please enter a password");
        die();    
    }

    // Check length of password
    if (strlen($clean_pass) < 10) {
        echo("Error: Password too short (min length of 10)");
        die();
    }

    // Check length of email
    if (strlen($clean_email) > 255) {
        echo("Error: Please use a shorter email");
        die();
    }

    // Check that email is an email format
    if (!filter_var($clean_email, FILTER_VALIDATE_EMAIL)) {
        echo("Error: Invalid email format");
        die();
    }

    // Check to see if the email already exists
    $count = count( ($db->query("SELECT * FROM users WHERE email='$clean_email'"))->fetchAll() ) != 0;

    if ($count != 0) { 
        echo("Error: Can't create account");
        die();
    }

    // Insert into the database
    $encoded_password = password_hash($clean_pass, PASSWORD_DEFAULT);
    $sql = "INSERT INTO `users` (`id`, `email`, `password`, `fname`, `lname`) VALUES (NULL, '$clean_email', '$encoded_password', NULL, NULL)";
    $db->query($sql);
    die();
}
