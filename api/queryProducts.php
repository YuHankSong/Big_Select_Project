<?php
    // 跨域資源共享
    header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: *');
    header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");

	$conn = new mysqli("127.0.0.1","root","root","selectGo",8889);
	// 如果沒有成功連接到資料庫 報錯
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
    // 有連接到資料庫做以下的事
    // 如果有取得資料並且資料不是空的
    // 如果傳入的參數是pid,把這個當作值填入剛剛合併的表的pid欄位

	else{
        $sql = 
        "SELECT p.*, ps.ptype, ps.pstatus, ps.iswish 
        FROM products AS p LEFT JOIN product_status AS ps 
        ON p.pid = ps.pid
        ORDER BY p.created_at DESC";
        if (!empty($_POST)) {
            if (isset($_POST['pid'])) {
                $pid = $_POST['pid'];
                $sql = 
                "SELECT p.*, ps.ptype, ps.pstatus, ps.iswish 
                FROM products AS p LEFT JOIN product_status AS ps 
                ON p.pid = ps.pid
                WHERE p.pid = '$pid'
                ORDER BY p.created_at DESC";
                // 以下目前沒用到
            } else if (isset($_POST['iswish'])) {
                $iswish = $_POST['iswish'];
                $sql = 
                "SELECT p.*, ps.ptype, ps.pstatus, ps.iswish 
                FROM products AS p LEFT JOIN product_status AS ps 
                ON p.pid = ps.pid
                WHERE ps.iswish = '$iswish'
                ORDER BY p.created_at DESC";
            }
        }
        // 如果沒有連上資料庫並兩個表格合併成功 報錯
        $result = mysqli_query($conn, $sql);
        if(!$result) {
            die('The query was not successful.');
        // 如果連上了 跑迴圈
        // 把資料填進去剛剛合併的那個表
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
