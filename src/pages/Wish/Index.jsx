import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import WishEnd from "./UI/WishEnd";
import WishBar from "./WishBar";
import WishHot from "./UI/WishHot";
import WishMax from "./UI/WishMax";
// import WishList from "./WishList";
import WishNew from "./UI/WishNew";
import WishTure from "./UI/WishTrue";

const wishArticle = [{}, {}];

function Wish() {
  const [isPlzShow, setisPlzShow] = useState(false);
  const togleModal = () => {
    setisPlzShow(!isPlzShow);
  };
  let showPlz = isPlzShow ? "flex" : "none";

  const [pages, setPages] = useState([
    "熱門許願",
    "最新許願",
    "最多集氣",
    "即將截止",
    "許願成真",
  ]);
  // const randomNumber = useMemo(() => {
  //   const number = Math.round(Math.random() * 10);
  //   return number > pages.length ? 1 : number;
  // }, [pages]);

  const [current, setcurrent] = useState(() => {
    const number = Math.round(Math.random() * 10);
    return number > pages.length ? 1 : number;
  });

  return (
    <>
      <div id="wish-wrap">
        <div className="wish-container">
          <div className="wish-chat">
            {/* <div className="wish-bar">
              {pages.map((page, index) => (
                <Link
                  onClick={() => {
                    setcurrent(index);
                  }}
                >
                  {page}
                </Link>
              ))}
            </div> */}

            {/* {pages[current]} */}
            <WishBar />
            <Switch>
              <Route path="/selectgo/Wish/hot" component={WishHot} />
              <Route path="/selectgo/Wish/New" component={WishNew} />
              <Route path="/selectgo/Wish/Max" component={WishMax} />
              <Route path="/selectgo/Wish/End" component={WishEnd} />
              <Route path="/selectgo/Wish/Ture" component={WishTure} />
              <Route path="/selectgo/Wish/" component={WishHot} />
            </Switch>
          </div>

          <div className="wish-list">
            <h2>說出你的願望～大家幫你實現</h2>
            <p>
              發文許願你想買的日本商品～
              <br />
              累積超過 50 集氣，願望就有機會成真！
              <br />
              正式開賣許願者即享 8 折優惠
            </p>
            <input type="button" onClick={togleModal} value="發起許願" />
          </div>
        </div>
      </div>
      <div id="chat-wrap" style={{ display: showPlz }}>
        <form action="" className="chat-container">
          <div className="chat-left">
            <input type="file"></input>
          </div>
          {/* <!-- 右邊聊天室框框 --> */}
          <div className="chat-right">
            {/* <!-- #region 右邊照片 會員 發起許願 時間 上面那一欄 --> */}
            <div className="right-user">
              <div className="right-user-icon">
                <img src="./img/馬里歐.webp" alt="" />
              </div>
              <h3>Fanny Lin</h3>
              <h2>發起許願</h2>
            </div>
            {/* <!-- #endregion --> */}
            {/* <!-- #region 聊天室可以下滑的內容 輸入資料--> */}
            <div className="right-container">
              <textarea placeholder="請輸入許願標題" type="text"></textarea>
              <textarea
                placeholder="請輸入內容 : 介紹一下您想許願的商品～集氣的人越多，越容易開團成功喔！小提醒：如果圖片取自網路，記得在下方加上圖片來源並附上原始連結喔！"
                name=""
                id=""
              ></textarea>
              <div className="wish-qa">
                <a href="">
                  <h4>什麼是許願&集氣？</h4>
                </a>
                <h5>0/1800</h5>
              </div>
            </div>
            {/* <!-- 許願類型 參考網址 發起之旅 --> */}
            <div className="state-select">
              <div>
                <p>許願類型</p>
                <select name="" id="">
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                </select>
              </div>
              <div>
                <p>參考網址</p>
                <input></input>
              </div>
              <div>
                <button>發起14天集氣之旅</button>
              </div>
            </div>
          </div>
        </form>
        <span onClick={togleModal}>X</span>
      </div>
    </>
  );
}

export default Wish;
