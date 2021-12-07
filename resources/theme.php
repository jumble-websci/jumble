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


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $email = $_SESSION['email'];
  $themeNum = (($db->query("SELECT theme FROM users WHERE `email`='$email'"))->fetch())[0];
  echo($themeNum);
  die();
}

echo("past");

if (isset($_POST['num'])) {
  $email = $_SESSION['email'];
  $num = $_POST['num'];
  $db->query("UPDATE `users` SET `theme` = '$num' WHERE `users`.`email` = '$email' ");
}

?>