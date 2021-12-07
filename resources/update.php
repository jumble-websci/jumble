<?php
session_start(); 

$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "Oneplusone=2";
$dbname = "jumble";

try {
    $db = new PDO("mysql:host=$dbhost;dbname=$dbname","$dbusername","$dbpassword");
} 
catch (Exception $e) {
    echo("Error: Failed to connect to database -> $e");
    die();
}

if (isset($_POST['email']) || isset($_POST['fname']) || isset($_POST['lname'])) {
    function validate($data) {
       $data = trim($data);
       $data = stripslashes($data);
       $data = htmlspecialchars($data);
       return $data;
    }

    // Clean up the input
    $clean_email = validate($_POST['email']);
    $clean_fname = validate($_POST['fname']);
    $clean_lname = validate($_POST['lname']);

    // Double check inputs aren't empty
    if (empty($clean_email) && empty($clean_fname) && empty($clean_lname)) {
        echo("Error: No Changes entered");
        die();    
    } 

    // Check to see if the email already exists
    $count = count( ($db->query("SELECT * FROM users WHERE email='$clean_email'"))->fetchAll() ) != 0;

    if ($count != 0) { 
        echo("Error: That email is already in use. ");
        die();
    }

    $currEmail = $_SESSION['email'];
    // Insert into the database
   if(!empty($clean_email)){
    $sql = "UPDATE users
    SET email = '$clean_email'
    WHERE email='$currEmail'";
    $db->query($sql);
    $_SESSION['email'] = $clean_email;
    $currEmail = $_SESSION['email'];
   }
   if(!empty($clean_fname)){
    $sql = "UPDATE users
    SET fname = '$clean_fname'
    WHERE email='$currEmail'";
    $db->query($sql);
    $_SESSION['fname'] = $clean_fname;
   }
   if(!empty($clean_lname)){
    $sql = "UPDATE users
    SET lname = '$clean_lname'
    WHERE email='$currEmail'";
    $db->query($sql);
    $_SESSION['lname'] = $clean_lname;
   }
   
    die();
}

?>