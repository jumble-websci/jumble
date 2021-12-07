<?php
session_start();
if (empty($_SESSION["email"])) {
  header("Location: login.html");
} else {
  header("Location: main.html");
}
?>