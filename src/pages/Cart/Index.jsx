import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Styles from "../../styles/Cart.module.scss";
const Cart = () => {
  const NT$ = "NT$";
  const USD$ = "USD$";
  const [productlist, setProductList] = useState([]);
  const [ttresault, setResult] = useState(0);
  const [chrst, setChrst] = useState(0);
  const [adds, setAdds] = useState("none");
  const [rscolor, setRscolor] = useState("");
  const [myusd, setUsd] = useState(1);
  const [mymoney, setMoney] = useState("TWD");
  const [myCoupon, setCoupon] = useState("");
  const [Coupons, SetCoupons] = useState(false);
  const itemref = useRef([]);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
    console.log(productlist.length);
  };
  const useCoupon = () => {
    SetCoupons(!Coupons);
    setResult(ttresault * 0.8 * 100);
  };
  //抓取匯率資料
  const getusd = async () => {
    let response = await fetch("https://tw.rter.info/capi.php", {
      method: "POST",
      body: JSON.stringify({ uid: "4" }),
    });
    let data = await response.json();
    setUsd(data.USDTWD.Exrate);
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
    getusd();
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

  const handleRemove = async (p, mykey) => {
    itemref.current[mykey].style.opacity = 0;
    setTimeout(async () => {
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
    }, 500);
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
                      <div
                        ref={(el) => {
                          itemref.current[index] = el;
                        }}
                        className={Styles["item"]}
                        key={product.pid}
                      >
                        <div className={Styles["item-pic"]}>
                          <img src={product.ppic_main} alt="" />
                        </div>
                        <div className={Styles["item-info"]}>
                          <div className={Styles["item-title"]}>
                            <p>{product.pname}</p>
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
                                    product.pprice,
                                    index
                                  )
                                }
                                onMouseEnter={() => mysetrst(product.pprice)}
                                onMouseLeave={() => restrst(product.pprice)}
                              >
                                +
                              </div>
                            </div>
                            <label htmlFor="">
                              {mymoney === "TWD"
                                ? NT$ + numberWithCommas(product.totalprice)
                                : USD$ +
                                  (
                                    Math.round(
                                      (product.totalprice / myusd) * 100
                                    ) / 100
                                  ).toFixed(2)}
                            </label>
                          </div>
                          <div className={Styles["more-info"]}>
                            <p>此商品包含以下商品</p>
                            <strong>
                              <p>{product.pname}</p>
                            </strong>
                            <p>{product.pstyle}</p>
                          </div>
                        </div>
                        <svg
                          onClick={() => {
                            handleRemove(product.pid, index);
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
                    ))}
                  </div>
                </div>
                {/*--------------------*/}
              </div>
              {/* 購物車右側 */}
              <div className={Styles["top-right"]}>
                {/* 優惠券 */}
                <div className={Styles["coupon"]}>
                  <input
                    type="text"
                    placeholder="輸入折扣碼"
                    value={myCoupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button onClick={useCoupon}>使用</button>
                </div>
                {Coupons && (
                  <div className={Styles["coupon-success"]}>
                    成功套用優惠券{myCoupon} 8折優惠
                  </div>
                )}
                {/*--------------------*/}
                {/* 商品小計 */}
                {/* <Price /> */}
                <div className={Styles["total"]}>
                  <select
                    value={mymoney}
                    onChange={(event) => setMoney(event.target.value)}
                  >
                    <option value="TWD">TWD</option>
                    <option value="USD">USD</option>
                  </select>
                  <div>
                    <p>商品小計</p>
                    <p>
                      {adds == "none" ? (
                        <span>
                          {mymoney === "TWD"
                            ? NT$ + numberWithCommas(ttresault)
                            : USD$ +
                              numberWithCommas((ttresault / myusd).toFixed(2))}
                        </span>
                      ) : (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >
                          {mymoney === "TWD"
                            ? NT$ + numberWithCommas(ttresault)
                            : USD$ +
                              numberWithCommas((ttresault / myusd).toFixed(2))}
                        </span>
                      )}
                      {rscolor == "var(--btn-green)" ? (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >
                          {mymoney === "TWD"
                            ? `+${chrst}`
                            : `+${(chrst / myusd).toFixed(2)}`}
                        </span>
                      ) : (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >
                          {mymoney === "TWD"
                            ? `-${chrst}`
                            : `-${(chrst / myusd).toFixed(2)}`}
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p>運費</p>
                    <p>
                      {mymoney === "TWD"
                        ? NT$ + delprice
                        : USD$ + (delprice / myusd).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p>結帳總金額</p>
                    <p>
                      {adds == "none" ? (
                        <span>
                          {mymoney === "TWD"
                            ? NT$ + numberWithCommas(ttresault + delprice)
                            : USD$ +
                              numberWithCommas(
                                ((ttresault + delprice) / myusd).toFixed(2)
                              )}
                        </span>
                      ) : (
                        <span
                          className={Styles.myaddsrt}
                          style={{
                            display: adds,
                            color: rscolor,
                          }}
                        >
                          {mymoney === "TWD"
                            ? NT$ + numberWithCommas(ttresault + delprice)
                            : USD$ +
                              numberWithCommas(
                                ((ttresault + delprice) / myusd).toFixed(2)
                              )}
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
