import React, { Component, useState, useEffect } from "react";
import Style from "../../../styles/Checkout.module.scss";
import City from "./city.json";
function Checkout() {
  Object.values(City);

  const [productlist, setProductList] = useState([]);
  const [count, setCount] = useState(1);
  const [mycity, setCity] = useState("臺北市");
  const [mymail, setMail] = useState("filed");
  const [myname, setName] = useState("filed-name");
  const [myphone, setPhone] = useState("filed");
  const [myaddress, setAddress] = useState("filed");
  //確認電子信箱合法
  function isEmailValid(email) {
    //email validation
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // 確認欄位為字串
  function isString(value) {
    var re = /^[a-zA-Z\u4e00-\u9fa5]+$/;
    return re.test(value);
  }
  // 確認手機號碼
  function checkPhone(val) {
    let re = /^09\d{2}-?\d{3}-?\d{3}$/;
    return re.test(val);
  }

  //使用fetch抓取資料庫
  const getalldata = () => {
    fetch("http://localhost:8888/testphp/getproduct.php")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  };
  const handleSetCity = (event) => {
    setCity(event.target.value);
    console.log(City.嘉義市);
  };
  // 載入網頁時執行抓取資料庫回傳值
  useEffect(() => {
    getalldata();
    // console.log(Object.values(City));
  }, []);
  productlist.map(function (v) {
    // console.log(v.ppic_main);
  });
  //取的商品金額
  var ttresault = 0;
  productlist.map((val) => {
    // console.log(val.id);
    ttresault += val.pprice * count;
  });
  // 送出表單
  const handleSubmit = () => {
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let pho = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (
      isEmailValid(email) &&
      isString(firstname) &&
      isString(lastname) &&
      checkPhone(pho) &&
      address
    ) {
      // 表單驗證完成後執行的動作
      setMail("filed");
      setName("filed-name");
      setPhone("filed");
      setAddress("filed");
      alert("資料都正常我要送出ㄌ");
    } else if (!isEmailValid(email)) {
      setMail("filed-fail");
    }
    if (!isString(firstname) || !isString(lastname)) {
      setName("filed-fail-name");
    }
    if (!checkPhone(pho)) {
      setPhone("filed-fail");
    }
    if (!address) {
      setAddress("filed-fail");
    }
  };
  return (
    <>
      <div id={Style["warp-c"]}>
        {/*結帳頁面*/}

        {/* 左邊頁面 */}
        <div className={Style["left"]}>
          <div className={Style["bread-warp"]}>
            <ul className={Style["breadcrumb"]}>
              <li className={Style["breadlist"]}>購物車</li>
              <li className={Style["breadlist"]}>相關資訊</li>
              <li className={Style["breadlist"]}>付款方式</li>
            </ul>
          </div>

          <div className={Style.info}>
            <h1 className={Style["indotext"]}>運送與收件資訊</h1>
            <form>
              <div className={Style[mymail]}>
                <label htmlFor="">電子信箱</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue="abc@gmail.com"
                  required
                />
                {mymail === "filed-fail" && <p>email錯誤</p>}
              </div>
              <div className={Style["filed"]}>
                <label htmlFor="">運送方式</label>
                <select name="" id="">
                  <option>一般宅配</option>
                </select>
              </div>

              <div className={Style["filed-name"]}>
                <label htmlFor="">姓氏</label>
                <label htmlFor="">姓名</label>
              </div>
              <div className={Style[myname]}>
                <input
                  type="text"
                  name=""
                  id="firstname"
                  defaultValue=""
                  placeholder="收件人姓氏"
                />
                <input
                  type="text"
                  name=""
                  id="lastname"
                  defaultValue=""
                  placeholder="收件人姓名"
                />
              </div>
              {myname === "filed-fail-name" && (
                <div className={Style["filed-fail"]}>
                  <p>姓名錯誤</p>
                </div>
              )}
              <div className={Style[myphone]}>
                <label htmlFor="">手機號碼</label>
                <input
                  type="tel"
                  name=""
                  id="phone"
                  defaultValue=""
                  placeholder="範例：0978666111"
                />
                {myphone === "filed-fail" && <p>號碼錯誤</p>}
              </div>

              <div className={Style["filed-name"]}>
                <label htmlFor="">縣市</label>
                <label htmlFor="">鄉鎮市區</label>
              </div>
              <div className={Style["filed-name"]}>
                <select name="" id="city" onChange={handleSetCity}>
                  {Object.keys(City).map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
                <select id="dist">
                  {City[mycity] &&
                    City[mycity].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>
              <div className={Style[myaddress]}>
                <label htmlFor="">地址</label>
                <input
                  type="text"
                  name=""
                  id="address"
                  defaultValue=""
                  placeholder="請輸入地址"
                  required
                />
              </div>
              <div className={Style["filed"]}>
                <p>
                  為確保日本直送商品順利通關，本國人士請填寫與身分證相同之中文姓名，外籍人士請填寫與護照相符之英文姓名。
                </p>
              </div>
              <div className={Style["nextsub"]} onClick={handleSubmit}>
                <h1>下一步：選擇付款方式→</h1>
              </div>
            </form>
          </div>
        </div>
        {/* 右邊頁面 */}
        <div className={Style["right"]}>
          {/* 商品資訊 */}
          {productlist.map(function (product, index) {
            return (
              <div className={Style["item"]} key={index}>
                <div className={Style["ppic"]}>
                  <img src={product.ppic_main} />
                </div>
                <div className={Style["item-info"]}>
                  <div className={Style["item-title"]}>
                    <h2>{product.pname}</h2>
                  </div>
                  <div className={Style["item-qty"]}>
                    <label htmlFor="">數量：{product.qty}</label>
                    <label htmlFor="">NT$400元</label>
                  </div>
                  <div className={Style["more-info"]}>
                    <p>此商品包含以下商品</p>
                    <strong>
                      <p>{product.pname}</p>
                    </strong>
                    <p>12入</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* ------------------------------ */}
          <hr />
          {/* 商品小計 */}
          <div className={Style["total"]}>
            <div>
              <p>商品小計</p>
              <p>NT${ttresault}</p>
            </div>
            <div>
              <p>運費</p>
              <p>NT$80</p>
            </div>
            <div>
              <p>結帳總金額</p>
              <p>NT$400</p>
            </div>
          </div>
          {/* -------------------------- */}
        </div>
        {/*Right結束-------------------------- */}

        {/*container結束-------------------------- */}
      </div>
    </>
  );
}

export default Checkout;
