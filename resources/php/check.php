<?php
session_start();
if (isset($_SESSION['email'])) {
  echo "true";
} else {
  echo "false";
}
?>