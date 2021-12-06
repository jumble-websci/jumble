<?php

function add() {
    try {
        $DATABASE_HOST = 'localhost';
        $DATABASE_USER = 'root';
        $DATABASE_PASS = '';
        $DATABASE_NAME = 'jumble';

        $dbconn = new PDO("mysql:host=$DATABASE_HOST;dbname=$DATABASE_NAME", $DATABASE_USER, $DATABASE_PASS);

        $stmt = $dbconn->prepare('SELECT name FROM icons');
        $stmt->execute();
        $data = $stmt->fetchAll();

        // echo count($data);
        // var_dump($data);
        // echo '<div class="">';

        echo '<div class="el-checkbox">';
                    
            echo '<input type="checkbox" id="add_group" value="option">';
            echo '<label class="el-checkbox-style" for="add_group"></label>';
            echo '<span class="margin-r"> group </span>';
        echo '</div>';

        for ($i = 0; $i < count($data); $i++) {

            echo '<div class="el-checkbox">';
                
                echo '<input type="checkbox" id="' . $data[$i]["name"] .'" value="option">';
                echo '<label class="el-checkbox-style" for="' . $data[$i]["name"] .'"></label>';
                echo '<span class="margin-r"> ' . $data[$i]["name"]. '</span>';
            echo '</div>';
        }

        // echo '</div>';

    } catch (Exception $e) {
        echo '<p class="error">Error: ' . $e->getMessage() . '</p>';
    }

}





if (isset($_POST['add'])) {
    echo "<p> querying from database now </p>";
    add();
}

// echo "this is a test";

// echo (isset($_POST['add_remove']))

?>