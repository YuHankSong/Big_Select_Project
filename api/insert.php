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
    // 先宣告一個參數名稱
    $statusMsg = '';
    $imgNames = [];
    
    // 算fileToUpload裡面有幾個檔案(用name算的))
    $count = count($_FILES['fileToUpload']['name']);
    //用迴圈存每一張圖
    for ($i = 0; $i < $count; $i++) {
        //宣告存圖片路徑
        $targetDir = '../public/uploads/';
        //路徑不存在時就新增
        if (!file_exists($targetDir)) {
            mkdir($targetDir);
        }
        //檔名 (basename絕對路徑) 上傳的全部檔案的名字 第i個
        $fileName = basename($_FILES['fileToUpload']['name'][$i]);
        //存擋完整路徑 根目錄＋檔名
        $targetFilePath = $targetDir . $fileName;
        //檔案類型 副檔名PATHINFO_EXTENSION
        $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
        //開始存圖片
        if(!empty($_FILES["fileToUpload"]["name"][$i])){
          //允許某幾種檔案格式
          $allowTypes = array('jpg','png','jpeg','gif','pdf');
          if(in_array($fileType, $allowTypes)){
              // Upload file
              if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"][$i], $targetFilePath)){
                // 把 imgNames 裡面的檔案名字 登記為數字i(0)
                $imgNames[$i] = $_FILES["fileToUpload"]["name"][$i];
                $statusMsg = "檔案上傳成功！";
              }else{
                $statusMsg = "檔案上傳失敗喔！";
              }
          }else{
              $statusMsg = '檔案格式不符喔！只支援圖片檔！';
          }
        }else{
            $statusMsg = '請上傳圖片喔！';
        }
    }
    
    $productType = $_POST['productType'];
		$productName = $_POST['productName'];
		$productText = $_POST['productText'];
		$productPrice = $_POST['productPrice'];
		$productqty = $_POST['productqty'];
    $psts = $_POST['pstatus'];
    
    $ppic_main = '';
    if (array_key_exists(0,$imgNames)){
      $ppic_main = $imgNames[0];
    }
    $ppic_1 = '';
    if (array_key_exists(1,$imgNames)){
      $ppic_1 = $imgNames[1];
    }
    $ppic_2 = '';
    if (array_key_exists(2,$imgNames)){
      $ppic_2 = $imgNames[2];
    }
    $ppic_3 = '';
    if (array_key_exists(3,$imgNames)){
      $ppic_3 = $imgNames[3];
    }
    $ppic_4	 = '';
    if (array_key_exists(4,$imgNames)){
      $ppic_4 = $imgNames[4];
    }

		$sql = "INSERT INTO products(pname,pinfo,pprice,pqty,ppic_main,ppic_1,ppic_2,ppic_3,ppic_4,created_at,updated_at) 
    VALUES('$productName','$productText','$productPrice','$productqty','$ppic_main','$ppic_1','$ppic_2','$ppic_3','$ppic_4',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);";
		$res = mysqli_query($conn, $sql);
    $pid = mysqli_insert_id($conn);
    $sql2 = "INSERT INTO product_status(pid, ptype, pstatus, iswish) VALUES ('$pid','$productType',$psts,2)";
    $res2 = mysqli_query($conn, $sql2);
    // 圖片上傳後的狀態訊息提示
    echo $statusMsg;

    // 是否成功寫入資料庫a
		if($res && $res2){
			echo "\nSuccess!";
		}
		else{
			echo "\nError!";
		}
  echo $pid;
    // 關閉與資料庫的連結
		$conn->close();
	}
