<?php

session_start();

$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "wordpass";
$dbname = "jumble";

$db = new PDO("mysql:host=$dbhost;dbname=$dbname","$dbusername","$dbpassword");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $email = $_SESSION['email'];
    $iconData = (($db->query("SELECT icons FROM users WHERE `email`='$email'"))->fetch())[0];
    echo($iconData);
    die();
}

if (isset($_POST['json'])) {
  $email = $_SESSION['email'];
  $json = $_POST['json'];
  $db->query("UPDATE `users` SET `icons` = '$json' WHERE `users`.`email` = '$email' ");
}

?>