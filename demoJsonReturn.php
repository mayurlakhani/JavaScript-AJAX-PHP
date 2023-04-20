<?php
// create an array to encode as JSON
$response = array('message' => 'Hello, world!');

// set the content type to JSON
header('Content-Type: application/json');

// encode the response as JSON and print it
echo json_encode($response);
?>
