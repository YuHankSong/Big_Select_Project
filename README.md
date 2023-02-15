# Big Select Project - 購物車



## 頁面

![image-20230215202713702](https://i.imgur.com/Q6FbCXv.png)



## CRUD 資料

React 使用 useEffect 串接 php DB

```jsx
  const getalldata = async () => {
    let response = await fetch("http://localhost:8888/myapi/get.php", {
      method: "POST",
      body: JSON.stringify({ uid: "4" }),
    });
    let data = await response.json();
    setProductList(data);
    let mylo = 0;
    data.map((val) => {
      return (mylo += val.pprice * val.qty);
    });
    setResult(mylo);
    console.log(productlist.length);
  };
```

```php
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


?>
```



## 串接即時匯率 API

使用 fetch 方式取得資料，並使用 useState 於前端處理資料

```jsx
const getusd = async () => {
    let response = await fetch("https://tw.rter.info/capi.php", {
      method: "POST",
      body: JSON.stringify({ uid: "4" }),
    });
    let data = await response.json();
    setUsd(data.USDTWD.Exrate);
  };
```



## 串接第三方金流

於 php api 內使用 POST 接收資料並使用 for 迴圈將資料輸入到後端處理

```php
        //訂單的商品資料
        for ($i = 0; $i < $itemcount ;$i++) {
            array_push($obj->Send['Items'], array('Name' => 
            $pname[$i],'Price' => (int)$pprice[$i],
            'Currency' => "元", 'Quantity' => (int) $pqty[$i], 'URL' => "dedwed")); 
            echo $pname[$i];
        }
```



## How to use

1. clone project
2. `npm i`

2. `nmp start` 
