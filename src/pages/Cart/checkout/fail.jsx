import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Style from "../../../styles/Sccuess.module.scss";

function Fail() {
  return (
    <>
      <div className={Style.warp}>
        <div className={Style.nav_bar}>
          <div className={Style.nav_bar_container}>
            {/* #region LOGO */}
            {/* <div className={Style.nav_bar1}>
          <a href="">
            <img src="./img/select go_logo.png" alt="" />
          </a>
        </div> */}
            <h1>訂單未成立</h1>
          </div>
        </div>
        {/* #endregion */}
        {/*#endregion 頁首-------------------------- */}
        {/*結帳頁面*/}
        {/*container結束-------------------------- */}
        <div className={Style.container}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={Style["fa-times-circle"]}
          />
          <h1>訂單失敗</h1>
          <div className={Style["back-btn"]}>
            <div className={Style["btn-in"]}>
              <a href="http://localhost:3000/">
                <div className={Style["c-btn"]}>查詢訂單</div>
              </a>
            </div>
            <div className={Style["btn-in"]}>
              <a href="http://localhost:3000/">
                <div className={Style["c-btn"]}>繼續逛逛</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fail;
