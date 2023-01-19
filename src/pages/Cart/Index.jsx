import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Styles from "../../styles/Cart.module.scss";
import { CSSTransition } from "react-transition-group";
const Cart = () => {
  const nodeRef = useRef(null);
  const [productlist, setProductList] = useState([]);
  const [ttresault, setResult] = useState(0);
  const [chrst, setChrst] = useState(0);
  const [adds, setAdds] = useState("none");
  const [rscolor, setRscolor] = useState("");

  //總額total price
  const delprice = 80;
  //使用fetch抓取資料庫

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
  };

  function mysetrst(price) {
    // getalldata();
    setResult(ttresault + price);
    setRscolor("var(--btn-green)");
    setChrst(price);
    setAdds("inline");
  }
  function restrst(price) {
    setResult(ttresault - price);
    getalldata();
    setChrst(0);
    setAdds("none");
    setRscolor("");
  }
  function myles(price) {
    setResult(ttresault - price);
    setRscolor("var(--btn-red)");
    setChrst(price);
    setAdds("inline");
  }
  function restrst2(price) {
    if (price) {
      setResult(ttresault + price);
      getalldata();
      setChrst(0);
      setAdds("none");
      setRscolor("");
    } else {
      getalldata();
      setAdds("none");
      setRscolor("");
    }
  }
  // 載入網頁時執行抓取資料庫回傳值
  useEffect(() => {
    getalldata();
  }, []);

  const handleAdd = async (p, pq, price) => {
    try {
      let response = await fetch("http://localhost:8888/myapi/handleAdd.php", {
        method: "POST",
        body: JSON.stringify({ uid: "4", pid: p }),
      });
      await response;
      if (response.status === 200) {
        await getalldata();
        await setResult(ttresault + price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubtract = async (p, pq, price) => {
    if (pq > 2) {
      try {
        let response = await fetch(
          "http://localhost:8888/myapi/handleSubtract.php",
          {
            method: "POST",
            body: JSON.stringify({ uid: "4", pid: p }),
          }
        );
        await response;
        if (response.status === 200) {
          await getalldata();
          await setResult(ttresault - price);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (pq === 2) {
      try {
        let response = await fetch(
          "http://localhost:8888/myapi/handleSubtract.php",
          {
            method: "POST",
            body: JSON.stringify({ uid: "4", pid: p }),
          }
        );
        await response;
        if (response.status === 200) {
          await getalldata();
          // setResult(ttresault - price);
          restrst2(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRemove = async (p) => {
    try {
      let response = await fetch(
        "http://localhost:8888/myapi/handleRemove.php",
        {
          method: "POST",
          body: JSON.stringify({ uid: "4", pid: p }),
        }
      );
      await response;
      if (response.status === 200) {
        await getalldata();
        console.log("ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                              onClick={() => {
                                handleRemove(product.pid);
                              }}
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

                            <div onChange={handleRemove}></div>

                            <div className={Styles["itemcount"]}>
                              {product.qty <= 1 ? (
                                <div
                                  className={Styles["lesitm"]}
                                  style={{ opacity: 0, cursor: "default" }}
                                >
                                  -
                                </div>
                              ) : (
                                <div
                                  className={Styles["lesitm"]}
                                  onClick={() =>
                                    handleSubtract(
                                      product.pid,
                                      product.qty,
                                      product.pprice
                                    )
                                  }
                                  onMouseEnter={() => myles(product.pprice)}
                                  onMouseLeave={() => restrst2(product.pprice)}
                                >
                                  -
                                </div>
                              )}
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
                                onClick={() =>
                                  handleAdd(
                                    product.pid,
                                    product.qty,
                                    product.pprice
                                  )
                                }
                                onMouseEnter={() => mysetrst(product.pprice)}
                                onMouseLeave={() => restrst(product.pprice)}
                              >
                                +
                              </div>
                            </div>
                            <label htmlFor="">NT${product.totalprice}</label>
                          </div>
                          <div className={Styles["more-info"]}>
                            <p>此商品包含以下商品</p>
                            <strong>
                              <p>{product.pname}</p>
                            </strong>
                            <p>{product.pstyle}</p>
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
                    <p>
                      {adds == "none" ? (
                        <span>NT${ttresault}</span>
                      ) : (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >
                          NT${ttresault}
                        </span>
                      )}
                      {rscolor == "var(--btn-green)" ? (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >{`   (+${chrst})`}</span>
                      ) : (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >{`   (-${chrst})`}</span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p>運費</p>
                    <p>NT${delprice}</p>
                  </div>
                  <div>
                    <p>結帳總金額</p>
                    <p>
                      {adds == "none" ? (
                        <span>NT${ttresault + delprice}</span>
                      ) : (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >
                          NT${ttresault + delprice}
                        </span>
                      )}
                      {/* <span
                        className={Styles.myaddsrt}
                        style={{ display: adds }}
                      >{` + ${chrst}`}</span> */}
                    </p>
                  </div>
                </div>

                {/*--------------------*/}
                <Link className={Styles.butn} to="/selectgo/checkout">
                  <button type="submit">送出訂單</button>
                </Link>
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
