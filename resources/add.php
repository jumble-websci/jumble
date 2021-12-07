<?php

function add() {
    try {
        $DATABASE_HOST = 'localhost';
        $DATABASE_USER = 'root';
        $DATABASE_PASS = '';
        $DATABASE_NAME = 'jumble';

        $dbconn = new PDO("mysql:host=$DATABASE_HOST;dbname=$DATABASE_NAME", $DATABASE_USER, $DATABASE_PASS);

        $stmt = $dbconn->prepare('SELECT * FROM icons');
        $stmt->execute();
        $data = $stmt->fetchAll();
        $out = "";

        for ($i = 0; $i < count($data); $i++) {

            // echo '<div class="el-checkbox">';
            $out .= '<div class="el-checkbox">';
                
                // echo '<input type="checkbox" id="' . $data[$i]["name"] .'" value="option">';
                $out .='<input type="checkbox" id="' . $data[$i]["name"] .'" value="option">';
                // echo '<label class="el-checkbox-style" for="' . $data[$i]["name"] .'"></label>';
                $out .='<label class="el-checkbox-style" for="' . $data[$i]["name"] .'"></label>';
                // echo '<span class="margin-r"> ' . $data[$i]["name"]. '</span>';
                $out .='<span class="margin-r"> ' . $data[$i]["name"]. '</span>';
            // echo '</div>';
            $out .='</div>';
        }

        $test = array($out, $data);
        echo json_encode($test);
        // var_dump($data);
        // echo $out;
        // echo $test;
        

    } catch (Exception $e) {
        echo '<p class="error">Error: ' . $e->getMessage() . '</p>';
    }

}





if (isset($_POST['add'])) {
    // echo "<p> querying from database now </p>";
    add();
}

// echo "this is a test";

// echo (isset($_POST['add_remove']))

?>