import React from "react";

function WishTalk() {
  return (
    <>
      <form action="" id="chat-container1">
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
    </>
  );
}

export default WishTalk;
