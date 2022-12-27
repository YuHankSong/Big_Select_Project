import { Link } from "react-router-dom";

const Wish = () => {
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
          <h5>許願紀錄</h5>
          <div className="wish-section">
            <div className="wish-item-container">
              <div className="wish-item">
                <div className="wish-item-user">
                  <div>
                    <img src="/imgs/icon.jpg" />
                  </div>
                  <div>Fanny Lin</div>
                </div>
                <div className="wish-item-product">
                  大阪環球影城限量爆米花桶
                </div>
                <div className="wish-item-popularity">
                  <div>集氣中</div>
                  <span>
                    <span>49</span>人集氣
                  </span>
                  <span>
                    <span>2</span>人留言
                  </span>
                </div>
                <div className="wish-item-pic">
                  <img src="/imgs/product.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Wish;
