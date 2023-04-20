<?php
// Check if a file was uploaded
if (isset($_FILES["image"])) {
  // Get the file data
  $file = $_FILES["image"];
  
  // Get the file name and path
  $filename = $file["name"];
  $tmp_path = $file["tmp_name"];
  $dest_path = "D:/Projects/JS/" . $filename;
  
  // Move the file to the permanent location
  if (move_uploaded_file($tmp_path, $dest_path)) {
    echo "The file " . basename( $filename) . " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>
