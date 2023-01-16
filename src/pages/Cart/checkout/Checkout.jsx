import React, { useState, useEffect, useCallback } from "react";
import Style from "../../../styles/Checkout.module.scss";
import City from "./city.json";

function Checkout() {
  const [productlist, setProductList] = useState([]);

  const [mycity, setCity] = useState("臺北市");
  const [mymail, setMail] = useState("filed");
  const [myname, setName] = useState("filed-name");
  const [myphone, setPhone] = useState("filed");
  const [myaddress, setAddress] = useState("filed");
  const [ttresault, setResult] = useState(null);
  //取的商品金額和運費
  let delv = 80;
  async function goform() {
    // const data = new URLSearchParams();
    // data.append("itname", "item name");
    // data.append("itprice", "100");
    // data.append("itqty", "10");
    // const head = { credentials: "include" };
    // const senurl =
    //   "http://localhost:8888/ECPayAIO_PHP-master/AioSDK/example/sample_All_CreateOrder.php";
    // const init = {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   body: data, // must match 'Content-Type' header
    //   headers: {
    //     "user-agent": "Mozilla/4.0 MDN Example",
    //     "content-type": "application/x-www-form-urlencoded",
    //     Accept: "application/json",
    //   },
    //   cache: "no-cache",
    //   mode: "cors", // no-cors, cors, *same-origin
    //   redirect: "manual", // *manual, follow, error
    //   referrer: "no-referrer", // *client, no-referrer
    // };
    // const response = await fetch(senurl, init);
    // console.log(response);
    // if (response.status == 200) {
    //   window.location.href =
    //     "http://localhost:8888/ECPayAIO_PHP-master/AioSDK/example/sample_All_CreateOrder.php";
    // }

    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "http://localhost:8888/ECPayAIO_PHP-master/AioSDK/example/sample_All_CreateOrder.php";
    form.style.display = "none";
    let icount = productlist.length;

    const inputFields = [];
    productlist.forEach((val, index) => {
      inputFields.push({ name: "itname[]", value: val.pname });
      inputFields.push({ name: "itprice[]", value: val.pprice });
      inputFields.push({ name: "itqty[]", value: val.qty });
    });

    inputFields.push({ name: "itcount", value: icount });

    inputFields.forEach((field) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  //確認電子信箱合法
  function isEmailValid(email) {
    //email validation
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  const getalldata = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8888/testphp/get.php");
      const data = await response.json();
      console.log(data.length);
      setProductList(data);
      let mylo = 0;
      productlist.map((val) => {
        return (mylo += val.pprice * val.qty);
      });
      setResult(mylo);
    } catch (error) {
      console.error(error);
    }
  }, [productlist]);

  const handleSetCity = (event) => {
    setCity(event.target.value);
    console.log(City.嘉義市);
  };
  // 載入網頁時執行抓取資料庫回傳值
  useEffect(() => {
    getalldata();
    // 設定總額
  }, [ttresault]);

  // 送出表單
  function handleSubmit() {
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
      goform();
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
  }
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
                  defaultValue="蕭"
                  placeholder="收件人姓氏"
                />
                <input
                  type="text"
                  name=""
                  id="lastname"
                  defaultValue="胖胖"
                  placeholder="收件人姓名"
                />
              </div>
              {myname === "filed-fail-name" && (
                <div className={Style["filed-fail-name"]}>
                  <p>姓名錯誤</p>
                </div>
              )}
              <div className={Style[myphone]}>
                <label htmlFor="">手機號碼</label>
                <input
                  type="tel"
                  name=""
                  id="phone"
                  defaultValue="0987654321"
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
                  defaultValue="abcdefghijklmnb"
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
                  <img src={product.ppic_main} alt="商品圖片" />
                </div>
                <div className={Style["item-info"]}>
                  <div className={Style["item-title"]}>
                    <h2>{product.pname}</h2>
                  </div>
                  <div className={Style["item-qty"]}>
                    <label htmlFor="">數量：{product.qty}</label>
                    {"\u00A0"}
                    {"\u00A0"}
                    <label htmlFor="">
                      NT${product.pprice * product.qty}元
                    </label>
                  </div>
                  <div className={Style["more-info"]}>
                    <p>此商品包含以下商品</p>
                    <strong>
                      <p>{product.pname}</p>
                    </strong>
                    {/* <p>12入</p> */}
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
              <p>NT${delv}</p>
            </div>
            <div>
              <p>結帳總金額</p>
              <p>NT${ttresault + delv}</p>
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
