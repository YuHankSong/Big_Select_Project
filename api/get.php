<?php 
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$data = json_decode(file_get_contents("php://input"), true);
$userId=$data['uid'];
$stmt = $conn->prepare("SELECT *, (qty * pprice) AS totalprice
FROM cart 
JOIN products 
  ON cart.pid = products.id 
JOIN users 
  ON cart.uid = users.id 
WHERE uid = ?");
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
if(!$result){
    die($conn->error);
}
$items = array();
while ($row = $result->fetch_assoc()) {
    array_push($items, $row);
}




echo json_encode($items);
// var_dump($userId);

?>