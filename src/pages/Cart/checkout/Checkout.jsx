import React, { Component } from "react";
import Style from "../../../styles/Checkout.module.scss";
function Checkout() {
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
            <form action="">
              <div className={Style["filed"]}>
                <label htmlFor="">電子信箱</label>
                <input type="text" name="" id="" defaultValue="abc@gmail.com" />
              </div>
              <div className={Style["filed"]}>
                <label htmlFor="">運送方式</label>
                <select name="" id="">
                  <option>一般宅配</option>
                </select>
              </div>
              <div className={Style["filed-name"]}>
                <label htmlFor="">姓氏</label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="收件人姓氏"
                />
                <label htmlFor="">姓名</label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="收件人姓名"
                />
              </div>
              <div className={Style["filed"]}>
                <label htmlFor="">手機號碼</label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="範例：0978666111"
                />
              </div>
              <div className={Style["filed-name"]}>
                <label htmlFor="">縣市</label>
                <select name="" id="">
                  <option>台北市</option>
                </select>
                <label htmlFor="">鄉鎮市區</label>
                <select name="" id="">
                  <option>信義區</option>
                  <option>天龍區</option>
                </select>
              </div>
              <div className={Style["filed"]}>
                <label htmlFor="">地址</label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="請輸入地址"
                />
              </div>
              <div className={Style["filed"]}>
                <p>
                  為確保日本直送商品順利通關，本國人士請填寫與身分證相同之中文姓名，外籍人士請填寫與護照相符之英文姓名。
                </p>
              </div>
              <div className={Style["filed"]}>
                <h1>下一步：選擇付款方式→</h1>
              </div>
            </form>
          </div>
        </div>
        {/* 右邊頁面 */}
        <div className={Style["right"]}>
          {/* 商品資訊 */}
          <div className={Style["item"]}>
            <div>
              <img src="https://fakeimg.pl/100x100/?text=Pic" />
            </div>
            <div className={Style["item-info"]}>
              <div className={Style["item-title"]}>
                <h2>札幌農学校牛奶餅乾 12枚入</h2>
              </div>
              <div className={Style["item-qty"]}>
                數量：<label htmlFor="">10</label>
                NT$<label htmlFor="">400元</label>
              </div>
              <div className={Style["more-info"]}>
                <p>此商品包含以下商品</p>
                <strong>
                  <p>北海道札幌農学校 （12枚） x1</p>
                </strong>
                <p>12入</p>
              </div>
            </div>
          </div>
          {/* ------------------------------ */}
          <hr />
          {/* 商品小計 */}
          <div className={Style["total"]}>
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
