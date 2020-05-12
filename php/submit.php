<?php
  $message = $_POST['message'];
  
  $semi_rand = md5(time());
  $mime_boundary = "==MULTIPART_BOUNDARY_$semi_rand";
  $mime_boundary_header = chr(34) . $mime_boundary . chr(34);
  
  $to = $user ."Arne Meylemans <arne.meylemans@immalle.be>";
  $from = $_POST['name'] ." <" . $_POST['email'] . ">";

  @mail($to, "Nieuw contactbericht!", $message,
  "From: " . $from . "\n" .
  "MIME-Version: 1.0\n" .
  "Content-Type: multipart/alternative;\n" .
  "     boundary=" . $mime_boundary_header)
?>