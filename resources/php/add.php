<?php

function add()
{
  try {
    $dbhost = 'localhost';
    $dbusername = 'root';
    $dbpassword = 'wordpass';
    $dbname = 'jumble';

    $dbconn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbusername, $dbpassword);

    $stmt = $dbconn->prepare('SELECT * FROM icons');
    $stmt->execute();
    $data = $stmt->fetchAll();
    $out = "";

    for ($i = 0; $i < count($data); $i++) {
      $out .= '<div class="el-checkbox">';
      $out .= '<input type="checkbox" id="' . $data[$i]["name"] . '" value="option">';
      $out .= '<label class="el-checkbox-style" for="' . $data[$i]["name"] . '"></label>';
      $out .= '<span class="margin-r"> ' . $data[$i]["name"] . '</span>';
      $out .= '</div>';
    }

    $test = array($out, $data);
    echo json_encode($test);



  } catch (Exception $e) {
    echo '<p class="error">Error: ' . $e->getMessage() . '</p>';
  }
}

if (isset($_POST['add'])) {
  add();
}
?>