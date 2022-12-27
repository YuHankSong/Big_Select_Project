import React from 'react';
import "./Cart.scss";

function Cart() {
  return (
    <>
      <div id="container">
        <div id="cart-container">
          <div className="cart-select">
            {/* 購物車上半部 */}
            <div className="cart-top">
              {/* 購物車右側 */}
              <div className="cart-left">
                {/* 購物提醒 */}
                <div className="cart-notice">
                  <p>
                    出貨說明：為了節省您的運費，除有效期較短的食品外，我們會等商品到齊，將可以一起寄送的商品合併包裹出貨。若您想提早收到現貨商品，請分開下單，謝謝
                    🙏
                  </p>
                  <p>預購品：21~30 個工作天內出貨 現貨：2 個工作天內出貨</p>
                </div>
                {/* 購物車 */}
                <div className="order">
                  <h1>購物車</h1>
                  <div className="item">
                    <div className="item-pic">
                      <img src="https://i.imgur.com/O5mP90e.jpg" />
                    </div>
                    <div className="item-info">
                      <div className="item-title">
                        <h2>札幌農学校牛奶餅乾 12枚入</h2>
                        <input type="button" defaultValue="X" />
                      </div>
                      <div className="item-qty">
                        <input type="button" defaultValue="-" />
                        <input type="text" name="" id="" />
                        <input type="button" defaultValue="+" />
                        NT$<label htmlFor="">400元</label>
                      </div>
                      <div className="more-info">
                        <p>此商品包含以下商品</p>
                        <strong>
                          <p>北海道札幌農学校 （12枚） x1</p>
                        </strong>
                        <p>12入</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*--------------------*/}
              </div>
              {/* 購物車右側 */}
              <div className="top-right">
                {/* 優惠券 */}
                <div className="coupun">
                  <input type="text" placeholder="輸入折扣碼" />
                  <button>使用</button>
                </div>
                {/*--------------------*/}
                {/* 商品小計 */}
                <div className="total">
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
                {/*--------------------*/}
                <button type="submit">送出訂單</button>
              </div>
            </div>
            {/* 購物車下半部 */}
            <div className="cart-bottom" />
          </div>
        </div>

      </div> </>);



}

export default Cart;
