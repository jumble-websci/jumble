<?php

session_start();

$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "wordpass";
$dbname = "jumble";

$db = new PDO("mysql:host=$dbhost;dbname=$dbname", "$dbusername", "$dbpassword");

if (isset($_POST['getIcons'])) {
  $email = $_SESSION['email'];
  $stmt = $db->prepare("SELECT `icons` FROM `users` WHERE `email`='$email'");
  $stmt->execute();

  $iconData = $stmt->fetchAll();
  echo (json_encode($iconData[0]['icons']));
}

if (isset($_POST['json'])) {
  try {
    $email = $_SESSION['email'];
    $json = $_POST['json'];
    $stmt = $db->prepare("UPDATE `users` SET `icons` = '$json' WHERE `users`.`email` = '$email' ");
    $stmt->execute();
  } catch (Exception $e) {
    echo '<p class="error">Error: ' . $e->getMessage() . '</p>';
  }
}
?>