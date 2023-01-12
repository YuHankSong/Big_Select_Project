import React, { useState, useEffect, createContext } from "react";
import Styles from "../../styles/Cart.module.scss";
const Cart = () => {
  const [productlist, setProductList] = useState([]);
  const [count, setCount] = useState(1);
  //總額total price
  const delprice = 80;
  //使用fetch抓取資料庫
  const getalldata = () => {
    fetch("http://localhost:8888/testphp/getproduct.php")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  };

  // 載入網頁時執行抓取資料庫回傳值
  useEffect(() => {
    getalldata();
  }, []);

  const handleAdd = () => {
    fetch("http://localhost:8888/testphp/additem.php").then((response) => {
      response.json();
      if (response.status == 200) {
        getalldata();
      }
    });
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count > 10) {
      alert("超過數量限制");
      setCount(1);
    }
  }, [count]);

  var ttresault = 0;
  productlist.map((val) => {
    console.log(val.id);
    ttresault += val.pprice * count;
  });

  return (
    <>
      <div id={Styles.container}>
        <div id={Styles["cart-container"]}>
          <div className={Styles["cart-select"]}>
            {/* 購物車上半部 */}
            <div className={Styles["cart-top"]}>
              {/* 購物車右側 */}
              <div className={Styles["cart-left"]}>
                {/* 購物提醒 */}
                <div className={Styles["cart-notice"]}>
                  <p>
                    出貨說明：為了節省您的運費，除有效期較短的食品外，我們會等商品到齊，將可以一起寄送的商品合併包裹出貨。若您想提早收到現貨商品，請分開下單，謝謝
                    🙏
                  </p>
                  <p>預購品：21~30 個工作天內出貨 現貨：2 個工作天內出貨</p>
                </div>
                {/* 購物車 */}
                {/* <Cartitm /> */}
                <div className={Styles["order"]}>
                  <h1>購物車</h1>
                  <div>
                    {productlist.map((product, index) => (
                      <div className={Styles["item"]} key={product.pid}>
                        <div className={Styles["item-pic"]}>
                          <img src={product.ppic_main} alt="" />
                        </div>
                        <div className={Styles["item-info"]}>
                          <div className={Styles["item-title"]}>
                            <p>{product.pname}</p>
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
                          <div className={Styles["item-qty"]}>
                            {/* 增減商品數量 */}
                            {/* <ItemCount Price={product.pprice} /> */}
                            {count === 0 ? (
                              <div onClick={handleAdd}>加入購物車</div>
                            ) : (
                              <div className={Styles["itemcount"]}>
                                <div
                                  className={Styles["lesitm"]}
                                  onClick={handleSubtract}
                                >
                                  -
                                </div>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  min="1"
                                  className={Styles["getitmcount"]}
                                  value={product.qty}
                                />
                                <div
                                  className={Styles["additm"]}
                                  onClick={handleAdd}
                                  // style={{
                                  //   visibility: count >= 10 && "hidden",
                                  // }}
                                >
                                  +
                                </div>
                                <label htmlFor="">{product.totalprice}</label>
                              </div>
                            )}
                          </div>
                          <div className={Styles["more-info"]}>
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
                {/*--------------------*/}
              </div>
              {/* 購物車右側 */}
              <div className={Styles["top-right"]}>
                {/* 優惠券 */}
                <div className={Styles["coupon"]}>
                  <input type="text" placeholder="輸入折扣碼" />
                  <button>使用</button>
                </div>
                {/*--------------------*/}
                {/* 商品小計 */}
                {/* <Price /> */}
                <div className={Styles["total"]}>
                  <div>
                    <p>商品小計</p>
                    <p>{ttresault}</p>
                  </div>
                  <div>
                    <p>運費</p>
                    <p>NT${delprice}</p>
                  </div>
                  <div>
                    <p>結帳總金額</p>
                    <p>{ttresault + delprice}</p>
                  </div>
                </div>
                {/* <div className="total">
                  <div>
                    <p>商品小計</p>
                    <p>NT$320</p>
                  </div>
                  <div>
                    <p>運費</p>
                    <p>NT$80</p>
                  </div>
                  <div>
                    <p>結帳總金額</p>
                    <p>NT$400</p>
                  </div>
                </div> */}
                {/*--------------------*/}
                <button type="submit">送出訂單</button>
              </div>
            </div>
            {/* 購物車下半部 */}
            <div className={Styles["cart-bottom"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
