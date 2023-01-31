<?php 
require_once('connect.php');
$data = json_decode(file_get_contents("php://input"), true);
$userId=$data['uid'];
$productId=$data['pid'];
$stmt = $conn->prepare("DELETE FROM `cart` WHERE uid = ? AND pid = ?");
$stmt->bind_param("ii", $userId,$productId);


$stmt->execute();
// if (!$result) {
//     die($conn->error);
// }
// $items = array();
// while ($row = $result->fetch_assoc()) {
//     array_push($items, $row);
// }


header('Content-Type: application/json');

// echo json_encode($items);
// var_dump($userId);
header("Access-Control-Allow-Origin: *");
?>