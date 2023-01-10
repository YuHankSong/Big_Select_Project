import React, { useState, useEffect, useContext } from "react";

import ItemCount from "./Itemcount";

const Cartitm = (props) => {
  const [productlist, setProductList] = useState([]);

  // console.log(data);
  useEffect(() => {
    fetch("http://localhost:8888/testphp/getproduct.php")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  let apple = [
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
      <div className="order">
        <h1>購物車</h1>
        <div>
          {productlist.map((product) => (
            <div className="item" key={product.pid}>
              <div className="item-pic">
                <img src={product.ppic_main} alt="" />
              </div>
              <div className="item-info">
                <div className="item-title">
                  <h2>{product.pname}</h2>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m10.884 10 3.933-3.932a.625.625 0 1 0-.885-.885L10 9.116 6.068 5.183a.625.625 0 1 0-.885.885L9.116 10l-3.933 3.932a.625.625 0 1 0 .885.884L10 10.884l3.932 3.932a.623.623 0 0 0 .885 0 .625.625 0 0 0 0-.884L10.884 10z"
                      fill="#B3B3B3"
                    ></path>
                  </svg>
                </div>
                <div className="item-qty">
                  {/* 增減商品數量 */}
                  <ItemCount Price={product.pprice} />
                </div>
                <div className="more-info">
                  <p>此商品包含以下商品</p>
                  <strong>
                    <p>{product.pname}</p>
                  </strong>
                  <p>12入</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cartitm;
