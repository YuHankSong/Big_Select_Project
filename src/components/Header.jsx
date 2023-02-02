import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import "jquery";
// import global state
import { LoginContext } from "../Global_State/Context";
import { useContext } from "react";

const element = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const element1 = <FontAwesomeIcon icon={faCartShopping} />;

const Header = () => {
  const history = useHistory();
  // use the global state isLoggedIn to decide which navbar to show
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  // access user info for user icon
  let user = JSON.parse(localStorage.getItem("user"));
  const logOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
    // window.location.reload(false);
  };

  const [currentPage, setCurrentPage] = useState("Popular");

  return (
    <React.Fragment>
      {/* #region 頁首*/}
      <div id="page">
        <div className="top_bar">
          2023 謹賀新年！名店禮盒🎁兔年限定款🐰日式年味小物🍡都在這！
        </div>
        {/* #region 頁首(LOGO,導覽頁,搜尋欄,購物車,登入註冊)  */}
        <div className="nav_bar">
          <div className="nav_bar_container">
            {/*  #region LOGO  */}
            <div className="nav_bar1">
              <Link to="/selectgo/">
                <img src="/imgs/logo.png" alt="" />
              </Link>
            </div>
            {/* #endregion  */}
            {/* #region 導覽頁 */}
            <div className="nav_bar2">
              <Link
                onClick={() => {
                  setCurrentPage("Popular");
                }}
                to="/selectgo/"
                className={currentPage === "Popular" ? "selected" : ""}
              >
                熱門動態
              </Link>
              <Link
                onClick={() => {
                  setCurrentPage("Limit");
                }}
                to="/selectgo/wishproduct"
                className={currentPage === "Limit" ? "selected" : ""}
              >
                限時發售
              </Link>
              <Link
                onClick={() => {
                  setCurrentPage("Wish");
                }}
                to="/selectgo/Wish"
                className={currentPage === "Wish" ? "selected" : ""}
              >
                許願池
              </Link>
              <Link
                onClick={() => {
                  setCurrentPage("Product");
                }}
                to="/selectgo/Product"
                className={currentPage === "Product" ? "selected" : ""}
              >
                百貨商場
              </Link>
            </div>
            {/* #endregion  */}
            {/*  #region 搜尋欄  */}
            <div className="searchdiv">
              <input type="text" />
              <a onClick={() => {}}>{element}</a>
            </div>
            {/*  #endregion  */}
            {/*  #region 購物車及登入註冊按鈕 */}
            <div className="nav_bar3">
              {/* <a onClick={() => { }}>{element1}</a> */}

              {/* <a href="/selectgo/cart">
                <i className="nav-icon fas fa-shopping-cart"></i>
              </a> */}
              {/* ============================ */}
              {/* interchangable part */}
              {/* ============================ */}
              {isLoggedIn ? (
                <>
                  <a href="/selectgo/cart">
                    <i className="nav-icon fas fa-shopping-cart"></i>
                  </a>
                  <div className="dropdown">
                    <div id="member-icon">
                      <Link to="/member">
                        <img
                          src={
                            user && user.photoURL
                              ? user.photoURL
                              : "/imgs/avatar.png"
                          }
                          referrerPolicy="no-referrer"
                          className="dropbtn border border-warning"
                          style={{ backgroundColor: "white" }}
                          alt="user icon"
                        />
                      </Link>

                      <div className="dropmenu">
                        <Link to={"/member"}>訂單查詢</Link>
                        <Link to={"/member/Wish"}>許願紀錄</Link>
                        <Link to={"/member/Info"}>帳戶資料</Link>
                        <Link to={"/member/Coupon"}>我的折價卷</Link>
                        <Link to="#" onClick={logOut}>
                          登出
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <i className="nav-icon fas fa-shopping-cart"></i>
                  </Link>
                  <Link to="/login">
                    <input type="button" value="登入 / 註冊" className="ml-4" />
                  </Link>
                </>
              )}
            </div>
            {/* #endregion */}
          </div>
        </div>
      </div>
      {/* #endregion */}

      {/* -#endregion 頁首-------------------------- */}
    </React.Fragment>
  );
};

export default Header;
