import { Link, useHistory } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Order from "./interchangable/Order";
import Wish from "./interchangable/Wish";
import Info from "./interchangable/Info";
import Coupon from "./interchangable/Coupon";
import OrderDetails from "./interchangable/OrderDetails";
import OrderFinished from "./interchangable/OrderFinished";

import { LoginContext } from "../Global_State/Context";
import { useContext } from "react";


const Content = () => {
    const { setIsLoggedIn } = useContext(LoginContext);

    const history = useHistory();
    // access the data inside our local storage
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);

    const logOut = () => {
        localStorage.clear();
        setIsLoggedIn(false)
        history.push('/');
        // window.location.reload(false);
    }

    return (
        <main>
            <div className="main-container">
                <div className="left-div">
                    <div className="user-icon">
                        <img src={user && user.photoURL ? user.photoURL : '/imgs/avatar.png'} referrerPolicy="no-referrer" alt='user icon' />
                    </div>
                    <div className="choose-pic">
                        <a href="/">選擇照片</a>
                    </div>
                    <div className="user-name">
                        <p>{user && user.displayName}</p>
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
                            {/* <li>
                                <i className="fas fa-question"></i>
                                <Link to={"/member/Coupon"}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;常見問題
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* =============================== Logout from here!!!! ========================================= */}
                    <div className="logout-btn">
                        {/* we make sure it doesn't show undefined so we add user */}
                        <button className="btn btn-danger px-4 py-2" onClick={logOut}>登出</button>
                    </div>
                </div>

                {/* =============================================== */}
                {/* This is where the component goes */}
                {/* =============================================== */}

                <div className="right-div">
                    <Switch>
                        <Route exact path="/member" component={Order} />
                        <Route exact path="/member/orderdetails" component={OrderDetails} />
                        <Route exact path="/member/orderfinished" component={OrderFinished} />
                        <Route path="/member/wish" component={Wish} />
                        <Route path="/member/info" component={Info} />
                        <Route path="/member/coupon" component={Coupon} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default Content;