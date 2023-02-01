<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");

$conn = new mysqli("127.0.0.1", "root", "root", "selectGo", 8889);
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $sql =
        "SELECT * 
                FROM products 
                where pname like '%searchid%' 
                or pinfo like '%searchid%' 
                order by created_at";
    if (!empty($_POST)) {
            $sid = $_POST['searchid'];
            $sql =
                "SELECT * 
                        FROM products 
                        where pname like '%$sid%' 
                        or pinfo like '%$sid%' 
                        order by created_at";
    }
    
    $result = mysqli_query($conn, $sql);
        if(!$result) {
            die('The query was not successful.');
    } else {
        $res = $conn->query($sql);
        $rows = [];
        while ($row = $res->fetch_assoc()) {
            $rows[] = $row;
        }
        // 對變量進行編碼才能印出
        $json = json_encode($rows);
        echo $json;
    }

}
