<?php
// 跨域資源共享
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");

$conn = new mysqli("127.0.0.1", "root", "root", "selectGo", 8889);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    // 先宣告一個參數名稱
    $statusMsg = '';
    $imgNames = [];

    //宣告存圖片路徑
    $targetDir = '../public/uploads/';
    //路徑不存在時就新增
    if (!file_exists($targetDir)) {
        mkdir($targetDir);
    }

    if (isset($_FILES['fileToUpload1'])) {
        $count1 = count($_FILES['fileToUpload1']['name']);
        if ($count1 > 0) {
            $fileName = basename($_FILES['fileToUpload1']['name'][0]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
            if (!empty($_FILES["fileToUpload1"]["name"][0])) {
                $allowTypes = array('jpg', 'png', 'jpeg', 'gif', 'pdf');
                if (in_array($fileType, $allowTypes)) {
                    if (move_uploaded_file($_FILES["fileToUpload1"]["tmp_name"][0], $targetFilePath)) {
                        $imgNames[0] = $_FILES["fileToUpload1"]["name"][0];
                        $statusMsg = "檔案上傳成功！";
                    } else {
                        $statusMsg = "檔案上傳失敗喔！";
                    }
                } else {
                    $statusMsg = '檔案格式不符喔！只支援圖片檔！';
                }
            } else {
                $statusMsg = '請上傳圖片喔！';
            }
        }
    }
    if (isset($_FILES['fileToUpload2'])) {
        $count2 = count($_FILES['fileToUpload2']['name']);
        if ($count2 > 0) {
            $fileName = basename($_FILES['fileToUpload2']['name'][0]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
            if (!empty($_FILES["fileToUpload2"]["name"][0])) {
                $allowTypes = array('jpg', 'png', 'jpeg', 'gif', 'pdf');
                if (in_array($fileType, $allowTypes)) {
                    if (move_uploaded_file($_FILES["fileToUpload2"]["tmp_name"][0], $targetFilePath)) {
                        $imgNames[1] = $_FILES["fileToUpload2"]["name"][0];
                        $statusMsg = "檔案上傳成功！";
                    } else {
                        $statusMsg = "檔案上傳失敗喔！";
                    }
                } else {
                    $statusMsg = '檔案格式不符喔！只支援圖片檔！';
                }
            } else {
                $statusMsg = '請上傳圖片喔！';
            }
        }
    }
    if (isset($_FILES['fileToUpload3'])) {
        $count3 = count($_FILES['fileToUpload3']['name']);
        if ($count3 > 0) {
            $fileName = basename($_FILES['fileToUpload3']['name'][0]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
            if (!empty($_FILES["fileToUpload3"]["name"][0])) {
                $allowTypes = array('jpg', 'png', 'jpeg', 'gif', 'pdf');
                if (in_array($fileType, $allowTypes)) {
                    if (move_uploaded_file($_FILES["fileToUpload3"]["tmp_name"][0], $targetFilePath)) {
                        $imgNames[2] = $_FILES["fileToUpload3"]["name"][0];
                        $statusMsg = "檔案上傳成功！";
                    } else {
                        $statusMsg = "檔案上傳失敗喔！";
                    }
                } else {
                    $statusMsg = '檔案格式不符喔！只支援圖片檔！';
                }
            } else {
                $statusMsg = '請上傳圖片喔！';
            }
        }
    }
    if (isset($_FILES['fileToUpload4'])) {
        $count4 = count($_FILES['fileToUpload4']['name']);
        if ($count4 > 0) {
            $fileName = basename($_FILES['fileToUpload4']['name'][0]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
            if (!empty($_FILES["fileToUpload4"]["name"][0])) {
                $allowTypes = array('jpg', 'png', 'jpeg', 'gif', 'pdf');
                if (in_array($fileType, $allowTypes)) {
                    if (move_uploaded_file($_FILES["fileToUpload4"]["tmp_name"][0], $targetFilePath)) {
                        $imgNames[3] = $_FILES["fileToUpload4"]["name"][0];
                        $statusMsg = "檔案上傳成功！";
                    } else {
                        $statusMsg = "檔案上傳失敗喔！";
                    }
                } else {
                    $statusMsg = '檔案格式不符喔！只支援圖片檔！';
                }
            } else {
                $statusMsg = '請上傳圖片喔！';
            }
        }
    }
    if (isset($_FILES['fileToUpload5'])) {
        $count5 = count($_FILES['fileToUpload5']['name']);
        if ($count5 > 0) {
            $fileName = basename($_FILES['fileToUpload5']['name'][0]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
            if (!empty($_FILES["fileToUpload5"]["name"][0])) {
                $allowTypes = array('jpg', 'png', 'jpeg', 'gif', 'pdf');
                if (in_array($fileType, $allowTypes)) {
                    if (move_uploaded_file($_FILES["fileToUpload5"]["tmp_name"][0], $targetFilePath)) {
                        $imgNames[4] = $_FILES["fileToUpload5"]["name"][0];
                        $statusMsg = "檔案上傳成功！";
                    } else {
                        $statusMsg = "檔案上傳失敗喔！";
                    }
                } else {
                    $statusMsg = '檔案格式不符喔！只支援圖片檔！';
                }
            } else {
                $statusMsg = '請上傳圖片喔！';
            }
        }
    }




    $pid = $_POST['pid'];
    $productType = $_POST['productType'];
    $productName = $_POST['productName'];
    $productText = $_POST['productText'];
    $productPrice = $_POST['productPrice'];
    $productqty = $_POST['productqty'];
    $psts = $_POST['pstatus'];
    $ppic_main = '';
    if (array_key_exists(0, $imgNames)) {
        $ppic_main = $imgNames[0];
    }
    $ppic_1 = '';
    if (array_key_exists(1, $imgNames)) {
        $ppic_1 = $imgNames[1];
    }
    $ppic_2 = '';
    if (array_key_exists(2, $imgNames)) {
        $ppic_2 = $imgNames[2];
    }
    $ppic_3 = '';
    if (array_key_exists(3, $imgNames)) {
        $ppic_3 = $imgNames[3];
    }
    $ppic_4     = '';
    if (array_key_exists(4, $imgNames)) {
        $ppic_4 = $imgNames[4];
    }

    $sqla = "UPDATE products SET pname = '$productName', pinfo = '$productText', pprice = '$productPrice', pqty = '$productqty'";
    $sqlb = "";
    $sqlc = "";
    $sqld = "";
    $sqle = "";
    $sqlf = "";
    if($ppic_main != ''){
        $sqlb = ",ppic_main = '$ppic_main'";
    }
    if($ppic_1 != ''){
        $sqlc = ",ppic_1 = '$ppic_1'";
    }
    if($ppic_2 != ''){
        $sqld = ",ppic_2 = '$ppic_2'";
    }
    if($ppic_3 != ''){
        $sqle = ",ppic_3 = '$ppic_3'";
    }
    if($ppic_4 != ''){
        $sqlf = ",ppic_4 = '$ppic_4'";
    }
    
    $sqlg = ",updated_at = CURRENT_TIMESTAMP WHERE pid = '$pid'";
    $sql = $sqla . $sqlb . $sqlc . $sqld . $sqle . $sqlf . $sqlg;
    $res = mysqli_query($conn, $sql);
    
    $sql2 = "UPDATE product_status SET ptype = '$productType', pstatus = '$psts' WHERE pid = '$pid'";
    $res2 = mysqli_query($conn, $sql2);
    // 圖片上傳後的狀態訊息提示
    echo $statusMsg;

    // 是否成功寫入資料庫a
    if ($res && $res2) {
        echo "\nSuccess!";
    } else {
        echo "\nError!";
    }
    echo $pid;
    // 關閉與資料庫的連結
    $conn->close();
}
