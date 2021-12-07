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
$e = $_SESSION['email'];

$sql = "SELECT * FROM users WHERE email='$e'";
$result = ($db->query($sql))->fetchAll();
$row = $result[0];


        $val = "";
   
        if($row['fname'] == NULL && $row['lname'] == NULL){
        $val = "Hello " . $_SESSION['email'] . "!";
        }
        else{
            $val ="Hello " . $row['fname'] . " " . $row['lname'] . "!";
        }
        echo($val);


?>