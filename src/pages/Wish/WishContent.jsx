import React from "react";

function WishContent(props) {
  return (
    <>
      <div id="chat-container2">
        <div className="chat-left">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
          <img id="chat-img" src={props.imges} alt="" />
        </div>
        {/* <!-- 右邊聊天室框框 --> */}
        <div className="chat-right">
          {/* <!-- #region 右邊照片 會員 發起許願 時間 上面那一欄 --> */}
          <div className="right-user">
            <div className="right-user-icon">
              <img src="./img/馬里歐.webp" alt="" />
            </div>
            <h3>{props.author}</h3>
            <h2>發起許願</h2>
            <p>。1天前</p>
          </div>
          {/* <!-- #endregion --> */}
          {/* <!-- #region 聊天室可以下滑的內容 --> */}
          <div className="right-container">
            <div className="chat-state">
              <div>集資中</div>
              <h6>12月23日截止</h6>
              <a href="">什麼是許願＆集氣？</a>
            </div>
            {/* <!-- 集氣截止 流標訊息 --> */}
            <div className="unsold">
              <p>
                殘念～集氣數未達標。記得多分享給親友幫你集氣，過50集氣數的話調查局就會進一步評估唷！
              </p>
            </div>
            {/* <!-- 商品準備中 訊息 --> */}
            <div className="sold">
              <p>
                恭喜願望成真！好物即將販售，趕緊點擊下方按鈕，開賣時馬上通知你
              </p>
              <button>訂閱開賣通知</button>
            </div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <h4>圖片來源：</h4>
            <h5>
              https://www.usj.co.jp/web/ja/jp/restaurants/winter-2022/popcorn
            </h5>
            {/* <!-- 商品販賣 入口  --> */}
            <div className="p-entrance">
              <div className="p-container">
                <div>
                  <h5>限時販賣</h5>
                  <h4>大阪環球影城限量爆米花桶</h4>
                  <button>前往賣場-&gt;</button>
                </div>
                <div className="p-pic">
                  <img src="./img/馬里歐.webp" alt="" />
                </div>
              </div>
            </div>
            {/* <!-- 人數及留言數 --> */}
            <div className="state-count">
              <p>60人集氣</p>
              <p>。3則留言</p>
            </div>
            {/* <!-- 第一個聊天室 --> */}
            <div className="chatroom">
              {/* <!-- 聊天室大頭街 --> */}
              <div className="chatroom-pic">
                <img src="./img/馬里歐.webp" alt="" />
              </div>
              {/* <!-- 聊天室窗內容 --> */}
              <div className="chatroom-container">
                <div className="chatroom-container-c">
                  <h4>Fanny Lin</h4>
                  <p>聊天內容</p>
                </div>
                <h3>7天前</h3>
              </div>
            </div>
            {/* <!-- 第二個聊天室 --> */}
            <div className="chatroom">
              {/* <!-- 聊天室大頭街 --> */}
              <div className="chatroom-pic">
                <img src="./img/馬里歐.webp" alt="" />
              </div>
              {/* <!-- 聊天室窗內容 --> */}
              <div className="chatroom-container">
                <div className="chatroom-container-c">
                  <h4>Fanny Lin</h4>
                  <p>聊天內容</p>
                </div>
                <h3>7天前</h3>
              </div>
            </div>
          </div>
          {/* <!-- 集氣 留言 分享 --> */}
          <div className="state-btn">
            <a href="" className="state-btn-container">
              <div>
                <i className="fa-thin fa-thumbs-up"></i>
              </div>
              <div>集氣</div>
            </a>
            <a href="" className="state-btn-container">
              <div>
                <i className="fa-thin fa-thumbs-up"></i>
              </div>
              <div>留言</div>
            </a>
            <a href="" className="state-btn-container">
              <div>
                <i className="fa-thin fa-thumbs-up"></i>
              </div>
              <div>分享</div>
            </a>
          </div>
          {/* <!-- 最下面會員照片 聊天發送 --> */}
          <div className="chat-chat">
            <div className="chat-chat-pic">
              <div className="chat-chat-img">
                <img src="./img/馬里歐.webp" alt="" />
              </div>
            </div>
            <input type="text" />
            <a href="">發送</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishContent;
