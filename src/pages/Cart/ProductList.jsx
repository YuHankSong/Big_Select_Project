function ProductList() {
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
