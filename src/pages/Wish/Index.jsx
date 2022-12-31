import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import WishEnd from "./UI/WishEnd";
import WishBar from "./WishBar";
import WishHot from "./UI/WishHot";
import WishMax from "./UI/WishMax";
// import WishList from "./WishList";
import WishNew from "./UI/WishNew";
import WishTure from "./UI/WishTrue";

function Wish() {
  return (
    <>
      <div id="wish-wrap">
        <div className="wish-container">
          <div className="wish-chat">
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
            <input type="button" value="發起許願" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Wish;
