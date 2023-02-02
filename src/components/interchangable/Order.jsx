import { Link, useHistory } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import { Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoginContext } from "../../Global_State/Context";
import { useContext } from "react";


const Order = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const [products, setProducts] = useState([]);
  let user = JSON.parse(localStorage.getItem('user'));
  let uid = user.id;
  // console.log(uid)
  

  const fetchUserProducts = async () => {
    try {
      await axios.get(`http://localhost:8000/api/findUserProduct/${uid}`)
        .then((res) => {
          // console.log(res.data)
          setProducts(res.data)
        })
    } catch (error) {
      alert('error')
    }
  }

  // run the fetchUserProducts function to get data array
  useEffect(() => {
    if (user) {
      if (products === []) return;
      fetchUserProducts();
    }
  }, [isLoggedIn]);

  return (
    <>
      {/* =============================================== */}
      {/* This is where the component goes */}
      {/* =============================================== */}
      <h5>訂單紀錄</h5>
      <div className="order-status">
        <Link to={"/member"} className="bolded">未完成</Link>
        <Link to={"/member/OrderFinished"}>已完成</Link>
        <hr />
      </div>
      <div className="order-section">
        <div className="order-item-container">

          {/* each item here */}
          {
            products.length > 0 ?
              (
                products.map((product) => {
                  return (
                    <div key={product.id} className="order-item">
                      <div className="order-item-pic">
                        <div>
                          <img src={product.ppic_main} alt="product" />
                        </div>
                      </div>
                      <div className="order-item-info">
                        <div>未出貨</div>
                        <div>購買日期:<span> {product.order_date}</span></div>
                        <div>訂單金額:＄<span>{product.pprice}</span></div>
                      </div>
                      <div className="order-item-details">
                        <Route path='/member/orderdetails' component={OrderDetails} />
                        <Link to="/member/orderdetails">
                          <div>查看明細</div>
                        </Link>
                      </div>
                    </div>
                  )
                })
              )
              :
              (
                <div className="d-flex flex-column align-items-center p-5 mt-5">
                  <img src="/imgs/others/emptybox.png" alt="pic" style={{ 'width': `100px` }} />
                  <p className="mt-3 ml-3 font-weight-bold text-dark">空空如也，快去逛逛吧！</p>
                </div>
              )
          }

        </div>
      </div>
    </>
  );
};

export default Order;