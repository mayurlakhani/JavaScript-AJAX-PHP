<?php
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);
    // Now you can access the data using the keys
    $value1 = $data['fname'];
    $value2 = $data['lname'];
    echo "recieved value firstname= $value1, lastname= $value2";
?>
