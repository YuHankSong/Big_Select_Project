import React from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Link to="/selectgo/">熱門動態</Link>
              <Link to="/selectgo/wishlist">限時發售</Link>
              <Link to="/selectgo/Wish">許願池</Link>
              <Link to="">百貨商場</Link>
            </div>
            {/* #endregion  */}
            {/*  #region 搜尋欄  */}
            <div className="searchdiv">
              <input type="text" />
              <Link to="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
            {/*  #endregion  */}
            {/*  #region 購物車及登入註冊按鈕 */}
            <div className="nav_bar3">
              <a href="">
                <i className="fa-sharp fa-solid fa-store"></i>
              </a>
              <input type="button" src="" name="" id="" value="登入/註冊" />
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
