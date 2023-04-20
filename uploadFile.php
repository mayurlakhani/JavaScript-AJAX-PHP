<?php
if (isset($_FILES['file']) && $_FILES['file']['error'] == UPLOAD_ERR_OK) {
  $filename = $_FILES['file']['name'];
  echo $filename;
  $tmpname = $_FILES['file']['tmp_name'];
  echo $tmpname ;
  move_uploaded_file($tmpname, 'D:/Projects/JS/' . $filename);
  echo "uploaded successfully";
}
?>
