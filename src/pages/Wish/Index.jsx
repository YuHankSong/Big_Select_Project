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
            <div className="wish-bar">
              {pages.map((page, index) => (
                <Link
                  onClick={() => {
                    setcurrent(index);
                  }}
                >
                  {page}
                </Link>
              ))}
            </div>

            {/* {pages[current]} */}
            {/* <WishBar />
            <Switch>
              <Route path="/selectgo/Wish/hot" component={WishHot} />
              <Route path="/selectgo/Wish/New" component={WishNew} />
              <Route path="/selectgo/Wish/Max" component={WishMax} />
              <Route path="/selectgo/Wish/End" component={WishEnd} />
              <Route path="/selectgo/Wish/Ture" component={WishTure} />
              <Route path="/selectgo/Wish/" component={WishHot} />
            </Switch> */}
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
      {/* <div style={{ display: showPlz }}></div> */}
    </>
  );
}

export default Wish;
