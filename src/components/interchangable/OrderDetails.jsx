import { Link } from "react-router-dom";

const OrderDetails = () => {
  return (
    <>
      {/* =============================================== */}
      {/* This is where the component goes */}
      {/* =============================================== */}

      <h5 style={{ marginBottom: 20 + "px" }}>訂單明細</h5>

      <div className="order-details order-details-product">
        <h6>訂單商品</h6>
        <div id="detail1">
          <img src="/imgs/product.jpg" />
          <div id="qtyPrice">
            <p>皮卡丘抱枕(限量發售)</p>
            <div>
              選項：<span>黃色 XXL</span>
            </div>
            <div>
              商品價錢：NT$<span>480</span>
            </div>
            <div>
              數量：x<span>1</span>
            </div>
          </div>
        </div>
        <div id="detail1-info">
          <div>
            <span>商品金額</span>
            <div>
              <span>NT$</span>
              <span>480</span>
            </div>
          </div>
          <div>
            <span>運費</span>
            <div>
              <span>NT$</span>
              <span>80</span>
            </div>
          </div>
          <div id="order-total">
            <span>訂單總金額</span>
            <div>
              <span>NT$</span>
              <span>560</span>
            </div>
          </div>
        </div>
      </div>

      <div className="order-details order-details-info">
        <h6>訂單資訊</h6>
        <div id="detail2">
          <div>
            訂單編號：<span>xp356</span>
          </div>
          <div>
            購買時間：<span>Insert Date here</span>
          </div>
        </div>
      </div>

      <div className="order-details order-details-payment">
        <h6>付款資訊</h6>
        <div id="detail3">
          <div>
            付款方式：<span>貨到付款</span>
          </div>
        </div>
      </div>

      <div className="order-details order-details-send">
        <h6>運送資訊</h6>
        <div id="detail4">
          <div>
            運送方式：<span>一般宅配</span>
          </div>
        </div>
      </div>

      <div className="order-details order-details-receive">
        <h6>收件資訊</h6>
        <div id="detail5">
          <div>
            姓名：<span>王小明</span>
          </div>
          <div>
            手機號碼：<span>0912345678</span>
          </div>
          <div>
            收件地址：<span>台中市lala區哈哈路987號</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
