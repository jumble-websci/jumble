<?php

session_start();



$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "jumble";

$db = new PDO("mysql:host=$dbhost;dbname=$dbname","$dbusername","$dbpassword");

if (isset($_POST['getIcons'])) {
    $email = $_SESSION['email'];
    $stmt = $db->prepare("SELECT `layout` FROM `users` WHERE `email`='$email'");
    $stmt->execute();
    
    $iconData = $stmt->fetchAll();
    // var_dump($iconData[0]['layout']);
    // echo $iconData[0]['layout'];
    // $iconData = (($db->query("SELECT icons FROM users WHERE `email`='$email'"))->fetch())[0];
    echo(json_encode($iconData[0]['layout']));
    // die();
}


if (isset($_POST['json'])) {
  echo "something";
  try {
  $email = $_SESSION['email'];
  $json = $_POST['json'];
  // $db->query("UPDATE `users` SET `icons` = '$json' WHERE `users`.`email` = '$email' ");
  $stmt = $db->prepare("UPDATE `users` SET `layout` = '$json' WHERE `users`.`email` = '$email' ");
  $stmt->execute();
  echo "this worked";
  } catch (Exception $e) {
    echo '<p class="error">Error: ' . $e->getMessage() . '</p>';
  }
}

?>