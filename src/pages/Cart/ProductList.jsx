function ProductList() {




  fetch('http://localhost:8888/testphp/testproduct.php', {})
  .then((response) => {
    // 這裡會得到一個 ReadableStream 的物件
    console.log(response);
    // 可以透過 blob(), json(), text() 轉成可用的資訊
    return response.json(); 
  }).then((jsonData) => {
    console.log(jsonData);
    console.log('OK');

  }).catch((err) => {
    console.log('錯誤:', err);
});






  let productlist = [
    {
      id: 0,
      name: "海苔",
      price: 229,
      image:
        "https://citiesocial.s3.amazonaws.com/apps/campaign/campaign/16983/1339_large.jpg",
    },
    {
      id: 1,
      name: "布丁",
      price: 288,
      image:
        "https://citiesocial.s3.amazonaws.com/apps/campaign/campaign/17407/2088_large.jpg",
    },
    {
      id: 2,
      name: "辣椒油",
      price: 320,
      image:
        "https://citiesocial.s3.amazonaws.com/apps/campaign/campaign/17038/1489_large.jpg",
    },
  ];
  return (
    <>
      <h1>商品清單</h1>
      <p>
        
        {productlist.map((product) => (
          <div>
            {product.name}
            {product.price}
            <img src={product.image} alt="" />
          </div>
        ))}
      </p>
    </>
  );
}
export default ProductList;
