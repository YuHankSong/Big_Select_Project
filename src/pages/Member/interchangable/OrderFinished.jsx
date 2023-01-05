import { Link } from "react-router-dom";

const OrderFinished = () => {
  return (
    <main>
      {/* =============================================== */}
      {/* This is where the component goes */}
      {/* =============================================== */}


      <h5>訂單紀錄</h5>
      <div className="order-status">
        <Link to={"/member"}>
          未完成
        </Link>
        <Link to={"/member/OrderFinished"} className="bolded">已完成</Link>
        <hr />
      </div>
      <div className="order-section">
        <div className="order-item-container">

          {/* each item here */}
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

        </div>
      </div>

    </main>
  );
};

export default OrderFinished;
