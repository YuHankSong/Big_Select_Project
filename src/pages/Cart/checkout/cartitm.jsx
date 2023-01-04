import React, { Component, useState } from "react";

const Cartitm = () => {
  const [count, setCount] = useState(1);
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
      <div className="order">
        <h1>購物車</h1>
        <div>
          {productlist.map((product) => (
            <div className="item" key={product.id}>
              <div className="item-pic">
                <img src={product.image} alt="" />
              </div>
              <div className="item-info">
                <div className="item-title">
                  <h2>{product.name}</h2>
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
                  <div className="itemcount">
                    <div
                      className="lesitm"
                      onClick={() => setCount(count - 1)}
                      style={{
                        visibility: count <= 1 && "hidden",
                      }}
                    >
                      -
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      min="1"
                      max="10"
                      className="getitmcount"
                      value={count}
                    />
                    <div
                      className="additm"
                      onClick={() => setCount(count + 1)}
                      style={{
                        visibility: count >= 10 && "hidden",
                      }}
                    >
                      +
                    </div>
                  </div>
                  <label htmlFor="">{product.price}</label>
                </div>
                <div className="more-info">
                  <p>此商品包含以下商品</p>
                  <strong>
                    <p>{product.name}</p>
                  </strong>
                  <p>12入</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="item">
          <div className="item-pic">
            <img src="https://i.imgur.com/O5mP90e.jpg" />
          </div>
          <div className="item-info">
            <div className="item-title">
              <h2>札幌農学校牛奶餅乾 12枚入</h2>
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
              <div className="itemcount">
                <div
                  className="lesitm"
                  onClick={() => setCount(count - 1)}
                  style={{
                    visibility: count <= 1 && "hidden",
                  }}
                >
                  -
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  min="1"
                  max="10"
                  className="getitmcount"
                  value={count}
                />
                <div
                  className="additm"
                  onClick={() => setCount(count + 1)}
                  style={{
                    visibility: count >= 10 && "hidden",
                  }}
                >
                  +
                </div>
              </div>
              <label htmlFor="">400元</label>
            </div>
            <div className="more-info">
              <p>此商品包含以下商品</p>
              <strong>
                <p>北海道札幌農学校 （12枚） x1</p>
              </strong>
              <p>12入</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};
export default Cartitm;
