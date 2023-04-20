<?php
    
  
    // get photo data URI from POST parameter
    $dataURI = $_POST["photo"];
    
    // decode data URI into binary data
    $data = base64_decode(preg_replace("#^data:image/\w+;base64,#i", "", $dataURI));
    
    // generate unique filename
    $filename = "photo_" . time() . ".png";
    
    // save photo to file
    file_put_contents($filename, $data);
    
    // return success response
    echo "OK";
        //$img = $_GET['image'];
        //$folderPath = "D:/Projects/JS/";
        //$image_parts = explode(";base64,", $img);
        //$image_type_aux = explode("image/", $image_parts[0]);
        //$image_type = $image_type_aux[1];
    
        //$image_base64 = base64_decode($image_parts[1]);
        //$fileName = uniqid() . '.png';
    
        //$file = $folderPath . $fileName;
        //file_put_contents($file, $image_base64);
    
        //print_r($fileName); 
        //echo "file uploaded successfully";
        //header("location: webcam.php");

        //$image_data = base64_decode($_POST['image']);
        //file_put_contents('result.png', $image_data);
    
?>