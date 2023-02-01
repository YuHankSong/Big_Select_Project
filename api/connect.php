<?php 

//通常會將資料庫資料設定變數比較直觀
$servername = 'localhost';
$username='root';
$password='root';
$db_name='BigSelectProject';



// new mysqli() 建立新的連線 
//(遠端地址,資料庫帳號,資料庫密碼,資料庫名稱)
$conn=new mysqli($servername,$username,$password,$db_name);

//因為mysqli為物件底下帶有一個error的屬性可以用來判斷是否連線到資料庫
//PHP用'->'來表示存取物件底下的屬性

//die指令用來表示輸出完最後一口氣的指令後面就死了程式碼不會繼續跑


if($conn->connect_error){
   die("資料庫連線錯誤" . $conn->connect_error . '<br/>');
}

//echo $conn->$connect_error;

//設定伺服器編碼
$conn->query('SET NAMES UTF8');
//設定伺服器時區
$conn->query('SET time_zone = "+8:00"');

?>