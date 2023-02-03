import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import 'jquery';
import "../pages/Home/style/header.css";

const element = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const element1 = <FontAwesomeIcon icon={faCartShopping} />;

const Header = () => {


  var searchInput = document.getElementById("searchid");
  var searchGo = document.querySelector(".searchgoid");

  function searchvalue(value) {
    var str = "";
    var submitValue = searchInput.value;
    str = submitValue;
  }

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
                <img src={require("../Imgs/select go_logo.png")} alt="" />
              </Link>
            </div>
            {/* #endregion  */}
            {/* #region 導覽頁 */}
            <div className="nav_bar2">
              <Link to="/selectgo/" onClick={() => {
                  setCurrentPage("Popular");
                }}  className={currentPage === "Popular" ? "selected" : ""}>熱門動態</Link>
              <Link to="/selectgo/wishproduct" onClick={() => {
                  setCurrentPage("Limit");
                }} className={currentPage === "Limit" ? "selected" : ""}>限時發售</Link>
              <Link to="/selectgo/Wish" onClick={() => {
                  setCurrentPage("Wish");
                }} className={currentPage === "Wish" ? "selected" : ""}>許願池</Link>
              <Link to="/selectgo/Product" onClick={() => {
                  setCurrentPage("Product");
                }} className={currentPage === "Product" ? "selected" : ""}>百貨商場</Link>
            </div>
            {/* #endregion  */}


            {/*  #region 搜尋欄  */}
            <div className="searchdiv">
              <input type="text" id="searchid" />
              <a id="searchgoid" onClick={() => {
                window.sessionStorage.setItem('searchid', document.getElementById("searchid").value); window.location.href = "http://localhost:3000/selectgo/product/SearchResults";
              }}>{element}</a>
            </div>
            {/*  #endregion  */}


            {/*  #region 購物車及登入註冊按鈕 */}
            {/* <div className="nav_bar3">
              <a onClick={() => { }}>{element1}</a>
              <input type="button" src="" name="" id="" value="登入/註冊" />
            </div> */}
            {/* johnny */}
            <div className="d-flex align-items-center">
              {/* <a href="/selectgo/cart">
                <i className="nav-icon fas fa-shopping-cart"></i>
              </a> */}
              <a onClick={() => { }} style={{'fontSize':`25px`,'color':'black','marginRight':`40px`}}>{element1}</a>
              <div className="dropdown">
                <div id="member-icon">
                  <Link to="/member">
                    <img
                      src="/imgs/icon.jpg"
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
                    <Link to="#">登出</Link>
                  </div>
                </div>
              </div>
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
