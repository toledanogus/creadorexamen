<?php
$conn=mysqli_connect('localhost', 'gustavich', 'toledano', 'toledanok') or die(mysqli_error($conn));
$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);
$respuestax = mysqli_query($conn, "SELECT $jsonObj->tema, id FROM banco_preguntas");
$row = mysqli_fetch_all($respuestax);
echo json_encode ($row);
?>