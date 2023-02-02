import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import "jquery";

const element = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const element1 = <FontAwesomeIcon icon={faCartShopping} />;

const Header = () => {
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
              <a onClick={() => {}}>{element1}</a>
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
