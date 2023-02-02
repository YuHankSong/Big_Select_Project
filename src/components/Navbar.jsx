import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// useContext to share global state
import { LoginContext } from "../Global_State/Context";

const Navbar = () => {
  // use the global state isLoggedIn to decide which navbar to show
  const { isLoggedIn } = useContext(LoginContext);
  // access user info for user icon
  let user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="style.css"></link>
      </div>

      <div id="body">
        <nav>
          <header>
            2023 謹賀新年！名店禮盒🎁兔年限定款🐰日式年味小物🍡都在這！
          </header>
          <div className="nav_bar">
            <div className="nav_bar_container">
              <div className="nav_bar1">
                <a href="/">
                  <img src="/imgs/logo.png" alt="logo" />
                </a>
              </div>
              <div className="nav_bar2">
                <NavLink to='/'>熱門動態</NavLink>
                <NavLink to='/'>限時發售</NavLink>
                <NavLink to='/'>許願池</NavLink>
                <NavLink to='/'>百貨商場</NavLink>
              </div>
              <div className="searchdiv">
                <input type="text" />
                <a href="/">
                  <i className="nav-icon fa-solid fa-magnifying-glass"></i>
                </a>
              </div>

              {/* ========================== */}
              {/* This is the interchangable part */}
              {/* ========================== */}
              <div className="nav_bar3">
                <a href="/">
                  <i className="nav-icon fas fa-shopping-cart"></i>
                </a>

                {isLoggedIn ?
                  <>
                    <div className="dropdown">
                      <div id="member-icon">
                        <Link to="/member">
                          <img src={user && user.photoURL ? user.photoURL : '/imgs/avatar.png'}
                            referrerPolicy="no-referrer"
                            className="dropbtn border border-warning"
                            style={{ 'backgroundColor': 'white' }}
                            alt='user icon' />
                        </Link>

                        <div className="dropmenu">
                          <Link to={"/member"}>訂單查詢</Link>
                          <Link to={"/member/Wish"}>許願紀錄</Link>
                          <Link to={"/member/Info"}>帳戶資料</Link>
                          <Link to={"/member/Coupon"}>我的折價卷</Link>
                        </div>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    <Link to='/login' className="nav-login-btn btn btn-sm bg-light ml-3">登入／註冊</Link>
                  </>
                }


              </div>
            </div>
          </div>
        </nav>
      </div >
    </>
  );
};


export default Navbar;