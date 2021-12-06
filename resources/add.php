<?php

function add() {
    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'jumble';

    $dbconn = new PDO("mysql:host=$DATABASE_HOST;dbname=$DATABASE_NAME", $DATABASE_USER, $DATABASE_PASS);

    // $stmt = ""
}





if (isset($_POST['add'])) {
    echo "<p> querying from database now </p>";
}

// echo "this is a test";

// echo (isset($_POST['add_remove']))

?>