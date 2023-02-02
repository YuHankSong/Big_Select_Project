import React, { useState, useEffect } from "react";

function WishContent(props) {
  //商品的狀態  集資中 準備中 已流標 販賣中
  const [wstatus, setwStatus] = useState(props.status);
  //已流標的狀態
  const [shame, setShame] = useState(false);
  //準備中的狀態
  const [ready, setReady] = useState(false);
  //販賣中的狀態
  const [sell, setSell] = useState(false);

  useEffect(() => {
    if (wstatus === "已流標") {
      setShame(true);
    } else if (wstatus === "準備中") {
      setReady(true);
    } else if (wstatus === "販售中") {
      setSell(true);
    }
  }, [wstatus]);

  let showShame = shame ? "flex" : "none";
  let showReady = ready ? "flex" : "none";
  let showSell = sell ? "flex" : "none";

  //發文的時間 要往後十四天去計算
  const [date, setDate] = useState(new Date(props.date));
  useEffect(() => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 14);
    setDate(newDate);
    // console.log(props.date);
  }, []);

  return (
    <>
      <div id="chat-container2">
        <div className="chat-left">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
          <img id="chat-img" src={props.wimges} alt="" />
        </div>
        {/* <!-- 右邊聊天室框框 --> */}
        <div className="chat-right">
          {/* <!-- #region 右邊照片 會員 發起許願 時間 上面那一欄 --> */}
          <div className="right-user">
            <div className="right-user-icon">
              <img src={props.imges} alt="" />
            </div>
            <h3>{props.author}</h3>
            <h2>發起許願</h2>
            <p>。{props.wdate}</p>
          </div>
          {/* <!-- #endregion --> */}
          {/* <!-- #region 聊天室可以下滑的內容 --> */}
          <div className="right-container">
            <div className="chat-state">
              {wstatus === "販售中" ? (
                <div style={{ backgroundColor: "pink" }}>{wstatus}</div>
              ) : wstatus === "已流標" ? (
                <div style={{ backgroundColor: "gray" }}>{wstatus}</div>
              ) : wstatus === "準備中" ? (
                <div style={{ backgroundColor: "pink" }}>{wstatus}</div>
              ) : (
                <div>{wstatus}</div>
              )}
              {wstatus === "販售中" ? (
                <h6 style={{ color: "pink" }}>限時販售中</h6>
              ) : wstatus === "準備中" ? (
                <h6 style={{ color: "pink" }}>商品準備中～請稍等～</h6>
              ) : wstatus === "已流標" ? (
                <h6 style={{ color: "gray" }}>好可惜～殘念～</h6>
              ) : (
                <h6>{`${date.getMonth() + 1}月${date.getDate()}號截止`}</h6>
              )}
              <a href="">什麼是許願＆集氣？</a>
            </div>
            {/* <!-- 集氣截止 流標訊息 --> */}
            <div className="unsold" style={{ display: showShame }}>
              <p>
                殘念～集氣數未達標。記得多分享給親友幫你集氣，過50集氣數的話調查局就會進一步評估唷！
              </p>
            </div>
            {/* <!-- 商品準備中 訊息 --> */}
            <div className="sold" style={{ display: showReady }}>
              <p>恭喜願望成真！好物即將販售，會盡快將商品上架販售</p>
              {/* <button>訂閱開賣通知</button> */}
            </div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <h4>圖片來源：</h4>
            <h5>{props.wweb}</h5>
            {/* <!-- 商品販賣 入口  --> */}
            <div className="p-entrance" style={{ display: showSell }}>
              <div className="p-container">
                <div>
                  <h5>限時販賣</h5>
                  <h4>{props.title}</h4>
                  <a href="/selectgo/product/ProductDetail">前往賣場-&gt;</a>
                </div>
                <div className="p-pic">
                  <img src={props.wimges} alt="" />
                </div>
              </div>
            </div>
            {/* <!-- 人數及留言數 --> */}
            <div className="state-count">
              <p>0人集氣</p>
              <p>。2則留言</p>
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
            <label
              htmlFor="sendText"
              style={{ cursor: "pointer" }}
              className="state-btn-container"
            >
              <div>
                <i className="fa-thin fa-thumbs-up"></i>
              </div>
              <div>留言</div>
            </label>
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
            <div className="chat-chat-text">
              <input id="sendText" type="text" />
              <a href="">發送</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishContent;
