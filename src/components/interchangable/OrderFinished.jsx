import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";

const OrderFinished = () => {
  let user = JSON.parse(localStorage.getItem("user"));

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
          {user.id === 1 ?
            <>
              <div className="order-item">
                <div className="order-item-pic">
                  <div>
                    <img src="/imgs/product.jpg" alt="product" />
                  </div>
                </div>
                <div className="order-item-info">
                  <div className="bg-danger">完成</div>
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
            </>
            :
            <>
              <div className="d-flex flex-column align-items-center p-5 mt-5">
                <img src="/imgs/others/emptybox.png" alt="pic" style={{ 'width': `100px` }} />
                <p className="mt-3 ml-3 font-weight-bold text-dark">空空如也，快去逛逛吧！</p>
              </div>
            </>
          }

        </div>
      </div>

    </main >
  );
};

export default OrderFinished;
