import React from "react";
import { Link } from "react-router-dom";

function Wish() {
  return (
    <>
      <div id="wish-wrap">
        <div className="wish-container">
          <div className="wish-chat">
            <div className="wish-bar">
              <a href="">熱門許願</a>
              <a href="">最新許願</a>
              <a href="">最多集氣</a>
              <a href="">即將截止</a>
              <a href="">許願成真</a>
            </div>

            <Link className="wish-a" to="">
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
                    除了東京迪士尼有超可愛的爆米花桶，
                    大阪的環球影城也不會輸喔👍
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
            </Link>
            <a className="wish-a" href="">
              <div className="wish-chat-container">
                <div className="chat-left">
                  <div className="user-container">
                    <div className="user-icon">
                      <img src="./img/馬里歐.webp" alt="" />
                    </div>
                    <h3>Fanny Lin</h3>
                    <p>。1天前</p>
                  </div>
                  <h2 className="chat-title">大阪環球影城限量爆米花桶🍿</h2>
                  <p className="chat-txt">
                    除了東京迪士尼有超可愛的爆米花桶，
                    大阪的環球影城也不會輸喔👍
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
                  <img src="./img/馬里歐.webp" alt="" />
                </div>
              </div>
            </a>
            <a className="wish-a" href="">
              <div className="wish-chat-container">
                <div className="chat-left">
                  <div className="user-container">
                    <div className="user-icon">
                      <img src="./img/馬里歐.webp" alt="" />
                    </div>
                    <h3>Fanny Lin</h3>
                    <p>。1天前</p>
                  </div>
                  <h2 className="chat-title">大阪環球影城限量爆米花桶🍿</h2>
                  <p className="chat-txt">
                    除了東京迪士尼有超可愛的爆米花桶，
                    大阪的環球影城也不會輸喔👍
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
                  <img src="./img/馬里歐.webp" alt="" />
                </div>
              </div>
            </a>
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
