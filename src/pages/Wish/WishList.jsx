import React from "react";
import { Link } from "react-router-dom";

function WishList() {
  return (
    <>
      <button className="wish-a">
        <div className="wish-chat-container">
          <div className="chat-left">
            <div className="user-container">
              <div className="user-icon">
                <img src={require("../../Imgs/馬里歐.webp")} alt="" />
              </div>
              <h3>Fanny Lin</h3>
              <p>。1天前</p>
            </div>
            <h2 className="chat-title">大阪環球影城限量爆米花桶🍿</h2>
            <p className="chat-txt">
              除了東京迪士尼有超可愛的爆米花桶， 大阪的環球影城也不會輸喔👍
              <br />
              瑪利歐賽車、無敵星星🌟、小小兵還有期間限定的高
              人氣動漫咒術迴戰，每款都想要收集！
            </p>
            <div className="chat-state">
              <div>集資中</div>
              <p>。49人集氣。2人留言</p>
            </div>
          </div>
          <div className="chat-right">
            <img src={require("../../Imgs/馬里歐.webp")} alt="" />
          </div>
        </div>
      </button>
    </>
  );
}

export default WishList;
