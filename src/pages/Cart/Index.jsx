import React, { useState } from "react";
import Cartitm from "./checkout/cartitm";

const Cart = () => {
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
                {/* <div className="order">
                  <h1>購物車</h1>
                  <div className="item">
                    <div className="item-pic">
                      <img src="https://i.imgur.com/O5mP90e.jpg" />
                    </div>
                    <div className="item-info">
                      <div className="item-title">
                        <h2>札幌農学校牛奶餅乾 12枚入</h2>
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10.884 10 3.933-3.932a.625.625 0 1 0-.885-.885L10 9.116 6.068 5.183a.625.625 0 1 0-.885.885L9.116 10l-3.933 3.932a.625.625 0 1 0 .885.884L10 10.884l3.932 3.932a.623.623 0 0 0 .885 0 .625.625 0 0 0 0-.884L10.884 10z" fill="#B3B3B3"></path></svg>
                      </div>
                      <div className="item-qty">
                        <div className="itemcount">
                          <div className="lesitm" onClick={() => setCount(count - 1)} style={{
                            visibility: count <= 1 && 'hidden',
                          }}>-</div>
                          <input type="text" name="" id="" min="1" max="10" className='getitmcount' value={count} />
                          <div className="additm" onClick={() => setCount(count + 1)}
                            style={{
                              visibility: count >= 10 && 'hidden',
                            }}>+</div>
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
                  </div>

                  <div className="item">
                    <div className="item-pic">
                      <img src="https://i.imgur.com/O5mP90e.jpg" />
                    </div>
                    <div className="item-info">
                      <div className="item-title">
                        <h2>札幌農学校牛奶餅乾 12枚入</h2>
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10.884 10 3.933-3.932a.625.625 0 1 0-.885-.885L10 9.116 6.068 5.183a.625.625 0 1 0-.885.885L9.116 10l-3.933 3.932a.625.625 0 1 0 .885.884L10 10.884l3.932 3.932a.623.623 0 0 0 .885 0 .625.625 0 0 0 0-.884L10.884 10z" fill="#B3B3B3"></path></svg>
                      </div>
                      <div className="item-qty">
                        <div className="itemcount">
                          <div className="lesitm" onClick={() => setCount(count - 1)} style={{
                            visibility: count <= 1 && 'hidden',
                          }}>-</div>
                          <input type="text" name="" id="" min="1" max="10" className='getitmcount' value={count} />
                          <div className="additm" onClick={() => setCount(count + 1)}
                            style={{
                              visibility: count >= 10 && 'hidden',
                            }}>+</div>
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
                  </div>

                </div> */}
                <Cartitm />
                {/*--------------------*/}
              </div>
              {/* 購物車右側 */}
              <div className="top-right">
                {/* 優惠券 */}
                <div className="coupon">
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
      </div>{" "}
    </>
  );
};

export default Cart;
