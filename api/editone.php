<?php
    // 跨域資源共享
    header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: *');
    header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");

	$conn = new mysqli("127.0.0.1","root","root","selectGo",8889);
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
        $sql = 
        "SELECT p.pname,p.pprice,p.pinfo,p.ppic_main, ct.qty, ct.date, ct.uid 
        FROM products AS p LEFT JOIN cart AS c
        ON p.pid = c.pid
        ORDER BY c.id DESC";
        if (!empty($_POST)) {
            $pid = $_POST['pid'];
            $sql = 
            "SELECT p.*, ps.ptype, ps.pstatus, ps.iswish 
            FROM products AS p LEFT JOIN product_status AS ps 
            ON p.pid = ps.pid
            WHERE p.pid = '$pid'
            ORDER BY p.created_at DESC";
        }
        $result = mysqli_query($conn, $sql);
        if(!$result) {
            die('The query was not successful.');
        } else {
            $res = $conn->query($sql);
            $rows = [];
            while($row = $res->fetch_assoc()){
                $rows[] = $row;
            }
            // 對變量進行編碼才能印出
            $json = json_encode($rows);
            echo $json;
        }
	}
