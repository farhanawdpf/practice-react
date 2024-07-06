<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "react-php");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$id = $_GET['id'];

// $data = $db_conn->query('delete from users where id=' . $id);

// echo json_encode(['status' => true]);


$result= mysqli_query($db_conn, "DELETE FROM users WHERE id=' . $id ");
if($result)
{
  echo json_encode(["success"=>"User Record Deleted Successfully"]);
  return;
} else {
  echo json_encode(["Please Check the User Data!"]);
  return;
}