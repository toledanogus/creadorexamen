<?php
$conn=mysqli_connect('localhost', 'gustavich', 'toledano', 'toledanok') or die(mysqli_error($conn));
$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);
$respuestax2 = mysqli_query($conn, "SELECT respuestas, id_pregunta, correcta FROM banco_respuestas WHERE tema='mate'");
$row2 = mysqli_fetch_all($respuestax2);
echo json_encode ($row2);
?>