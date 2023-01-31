<?php
// 判斷付款後的參數
if(isset($_POST['RtnCode']) && !empty($_POST['RtnCode'])&&$_POST['RtnCode']==1) {
    header("Location: http://localhost:3000/selectgo/success");
  }
  else{
    header("Location: http://localhost:3000/selectgo/fail");
  }

?>