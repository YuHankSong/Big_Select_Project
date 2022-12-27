import { Link } from "react-router-dom";

const Order = () => {
  return (
    <main>
      <div className="main-container">
        <div className="left-div">
          <div className="user-icon">
            <img src="/imgs/icon.jpg" />
          </div>
          <div className="choose-pic">
            <a href="">選擇照片</a>
          </div>
          <div className="user-name">
            <p>Johnny</p>
          </div>
          <div className="left-nav">
            <ul>
              <li>
                <i className="fas fa-clipboard-list"></i>
                <Link to={"/member"}>&nbsp;&nbsp;&nbsp;&nbsp;訂單查詢</Link>
              </li>
              <li>
                <i className="fas fa-birthday-cake"></i>
                <Link to={"/member/Wish"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;許願紀錄
                </Link>
              </li>
              <li>
                <i className="fas fa-user"></i>
                <Link to={"/member/Info"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;帳戶資料
                </Link>
              </li>
              <li>
                <i className="fas fa-percentage"></i>
                <Link to={"/member/Coupon"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;我的折價卷
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout-btn">
            <a href="#">登出</a>
          </div>
        </div>

        {/* =============================================== */}
        {/* This is where the component goes */}
        {/* =============================================== */}

        <div className="right-div">
          <h5>訂單紀錄</h5>
          <div className="order-status">
            <Link to={"/member"} className="bolded">
              未完成
            </Link>
            <Link to={"/member/OrderFinished"}>已完成</Link>
            <hr />
          </div>
          <div className="order-section">
            <div className="order-item-container">
              <div className="order-item">
                <div className="order-item-pic">
                  <div>
                    <img src="/imgs/product.jpg" />
                  </div>
                </div>
                <div className="order-item-info">
                  <div>未出貨</div>
                  <div>
                    購買日期:<span>2022-12-23</span>
                  </div>
                  <div>
                    訂單金額:＄<span>250</span>
                  </div>
                </div>
                <div className="order-item-details">
                  <Link to={"/member/OrderDetails"}>
                    <div>查看明細</div>
                  </Link>
                </div>
              </div>

              <div className="order-item">
                <div className="order-item-pic">
                  <div>
                    <img src="/imgs/product.jpg" />
                  </div>
                </div>
                <div className="order-item-info">
                  <div>未出貨</div>
                  <div>
                    購買日期:<span>2022-12-23</span>
                  </div>
                  <div>
                    訂單金額:＄<span>250</span>
                  </div>
                </div>
                <div className="order-item-details">
                  <a href="">
                    <div>查看明細</div>
                  </a>
                </div>
              </div>

              <div className="order-item">
                <div className="order-item-pic">
                  <div>
                    <img src="/imgs/product.jpg" />
                  </div>
                </div>
                <div className="order-item-info">
                  <div>未出貨</div>
                  <div>
                    購買日期:<span>2022-12-23</span>
                  </div>
                  <div>
                    訂單金額:＄<span>250</span>
                  </div>
                </div>
                <div className="order-item-details">
                  <a href="">
                    <div>查看明細</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Order;
