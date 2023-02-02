import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";
// import WishList from "./WishList";
// import WishTalk from "./WishTalk";
import WishContent from "./WishContent";
import WishList from "./WishList";
import userEvent from "@testing-library/user-event";
import Axios from "axios";

const wishArticle = [{}, {}];

function Wish() {
  //輸出 許願欄位API 的狀態
  const [fake, setFake] = useState([]);
  useEffect(() => {
    QueryFakeData().then((res) => {
      console.log(fake);
      setFake(res);
    });
  }, []);

  // 改變顯示彈窗的狀態 利用true跟false來控制display  需要理解一下 跟好好運用三元判斷
  const [isPlzShow, setisPlzShow] = useState(false);
  const togleModal = () => {
    setisPlzShow(!isPlzShow);
  };
  let showPlz = isPlzShow ? "flex" : "none";

  //Bar的狀態
  const [currentPage, setCurrentPage] = useState(0);

  // 利用Filter的方法做Bar的篩選（熱門，最新....
  const FilterFunction = useCallback(() => {
    switch (currentPage) {
      // 假設0是要找三星的
      case 1:
        return fake.filter((i) => i.brand === "Samsung");
      // 1 找蘋果
      case 2:
        return fake.sort((rowA, rowB) => {
          const b = rowA.created_at;
          const a = rowB.created_at;
          return a > b ? 1 : b > a ? -1 : 0;
        });
      // 2
      case 3:
        return fake.filter((i) => i.brand === "OPPO");
      // 3
      case 4:
        return fake.filter((i) => i.brand === "Huawei");
      // 其他的找先全部

      default:
        return fake.sort((rowA, rowB) => {
          const a = rowA.winfo.length;
          const b = rowB.winfo.length;
          return a > b ? 1 : b > a ? -1 : 0;
        });
    }
  }, [currentPage, fake]);

  return (
    <>
      {/* 主畫面 */}
      <div id="wish-wrap">
        <div className="wish-container">
          {/* 左邊bar顯示 及 底下許願欄顯示 */}
          <div className="wish-chat">
            {/* <WishBar /> */}
            <div className="wish-bar">
              {navList.map((i) => {
                return (
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCurrentPage(i.ID);
                    }}
                    key={i.ID}
                  >
                    {i.Name}
                  </a>
                );
              })}
            </div>
            {FilterFunction(fake).map((i, index) => {
              return (
                // 許願欄位的元件
                <ChildComponent
                  key={i.id}
                  id={index}
                  Img={i.user_pic}
                  wImg={i.wpic_main}
                  Author={i.user_info}
                  Content={i.winfo}
                  Title={i.wname}
                  Wdate={i.created_at}
                  Status={i.wstatus}
                  Wweb={i.wweb}
                />
              );
            })}
          </div>

          {/* 右邊法起許願地方 */}
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
      {/* 許願彈窗 */}
      <div id="chat-wrap1" style={{ display: showPlz }}>
        <WishTalk togleModal={togleModal} />

        <span onClick={togleModal}>X</span>
      </div>
    </>
  );
}

//bar的欄位
const navList = [
  {
    ID: 1,
    Name: "熱門許願",
  },
  {
    ID: 2,
    Name: "最新許願",
  },
  {
    ID: 3,
    Name: "最多集氣",
  },
  {
    ID: 4,
    Name: "即將截止",
  },
  {
    ID: 5,
    Name: "許願成真",
  },
];

//預設顯示wish list欄位
const param = {
  Id: "",
  Author: "",
  Title: "",
  Img: "",
  wImg: "",
  Content: "",
  Wweb: "",
  Status: "",
  Wdate: "",
  Collect: "",
  ChatNum: "",
};
// 許願欄位每一個區塊 再利用map方式去印出每格
const ChildComponent = (props = param) => {
  // console.log(props);
  const [isContentShow, setisContentShow] = useState(false);
  const togleModal2 = () => {
    setisContentShow(!isContentShow);
  };
  let showContent = isContentShow ? "flex" : "none";

  //時間幾天前發文的
  const [Wdate, setWDate] = useState("");
  useEffect(() => {
    const now = new Date();
    const wdate = new Date(props.Wdate);
    const date = new Date(Date.parse(wdate) - 8 * 60 * 60 * 1000);
    const difference = now - date;
    // console.log(now);
    // console.log(date);
    const minutes = Math.floor(difference / 1000 / 60);
    if (minutes < 60) {
      setWDate(`${minutes} 分鐘前`);
    } else {
      const hours = Math.floor(difference / 1000 / 60 / 60);
      if (hours < 24) {
        setWDate(`${hours} 小時前`);
      } else {
        const days = Math.floor(difference / 1000 / 60 / 60 / 24);
        setWDate(`${days} 天前`);
      }
    }
  }, []);
  return (
    <>
      <button className="wish-a" onClick={togleModal2}>
        <div className="wish-chat-container">
          <div className="chat-left">
            <div className="user-container">
              <div className="user-icon">
                <img src={props.Img} alt="" />
              </div>
              <h3>{props.Author}</h3>
              <p>。{`${Wdate}`}</p>
            </div>
            <h2 className="chat-title">{props.Title}</h2>
            <p className="chat-txt">{props.Content}</p>
            <div className="chat-state">
              <div>{props.Status}</div>
              <p>。0人集氣。2人留言</p>
            </div>
          </div>
          <div className="chat-right">
            <img src={props.wImg} alt="" />
          </div>
        </div>
      </button>
      {/* 願望欄位彈窗 還有聊天室還沒做嗚嗚*/}
      <div id="chat-wrap1" style={{ display: showContent }}>
        <WishContent
          id={props.Id}
          imges={props.Img}
          wimges={props.wImg}
          author={props.Author}
          title={props.Title}
          content={props.Content}
          date={props.Wdate}
          wdate={`${Wdate}`}
          status={props.Status}
          wweb={props.Wweb}
        />
        <span onClick={togleModal2}>X</span>
      </div>
    </>
  );
};

//接上傳許願到資料庫API
const WishTalk = (e) => {
  const url = "http://localhost:8000/api/wish/add";
  const [formValue, setFormValue] = useState({
    wname: "",
    winfo: "",
    wstyle: "",
    wweb: "",
    wpic_main: "",
  });

  //準備要送出去照片檔案的狀態
  const [files, setFiles] = useState([]);
  //立即預覽圖片 多張
  const [preViewUrls, setPreViewUrls] = useState([]);
  // 上傳圖片 >1 的時候， 需要可以做換頁的功能
  const [filePage, setFilePage] = useState(0);

  //立即預覽事件 多張
  const handlePicView = (e) => {
    const selectedFiles = e.target.files;
    // prev = 原先的狀態
    // 用concat的方式組合起來原來的狀態
    // 有疑惑的話可以console出prev是啥
    setFiles((prev) => {
      console.log(prev);
      return [...prev, selectedFiles];
    });
    //
    const reader = new FileReader();
    for (let i = 0; i < selectedFiles.length; i++) {
      reader.onload = () => {
        setPreViewUrls((preViewUrls) => [...preViewUrls, reader.result]);
      };
      reader.readAsDataURL(selectedFiles[i]);
    }
  };

  // 上傳許願資料到資料庫 axios
  async function submit(e) {
    e.preventDefault();
    try {
      const res = await Axios.post(url, {
        wname: formValue.wname,
        winfo: formValue.winfo,
        wstyle: formValue.wstyle,
        wweb: formValue.wweb,
      });
      setFormValue("");
      console.log(res);
      // 這邊用for迴圈 來跑一張一張進去資料庫
      for (let file of files) {
        // const pic = await Axios.post(urlPic, {
        //   id: res.id,
        //   wpic_main: file,
        // });
        console.log(file);
      }
    } catch (err) {
      console.log(err);
    }
  }

  //可以讓打出來的字即時改變在前端狀態
  const handleInput = (e) => {
    const newdata = { ...formValue };
    newdata[e.target.name] = e.target.value;
    setFormValue(newdata);
    // console.log(newdata);
  };

  //刪除按鈕 可以讓預覽 上傳 跟被刪除的不會顯示出來
  const handleDelete = (param) => {
    // 用filter來做可以確保原陣列不被影響

    setFiles((prev) => {
      return prev.filter((item, index) => index !== param);
    });

    setPreViewUrls((prev) => {
      return prev.filter((item, index) => index !== param);
    });
    // 如果現在不處於第一張(index !== 0)，就把filePage做遞減就好，不然就歸0，免得變成負1
    setFilePage((prev) => {
      return prev !== 0 ? prev - 1 : 0;
    });
  };

  // 透過統一管制的方式，可以統一設定所有限制數出現的地方
  const textLimit = useMemo(() => 1800, []);

  return (
    <>
      <form
        method="POST"
        id="chat-container1"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <div className="chat-left">
          <div>
            {preViewUrls.length > 1 && (
              <>
                <button
                  id="prev2"
                  onClick={() => {
                    // 如果檔案上傳的陣列長度等於0，就設定回讚後一張，不然就 - 1就好
                    setFilePage((prev) => {
                      return prev === 0 ? files.length - 1 : prev - 1;
                    });
                  }}
                >
                  &lt;
                </button>
                <button
                  id="next2"
                  onClick={() => {
                    // 如果超過檔案上傳的陣列長度，就設定回第一張，不然就 + 1就好
                    setFilePage((next) => {
                      return next + 1 === files.length ? 0 : next + 1;
                    });
                  }}
                >
                  &gt;
                </button>
              </>
            )}
            {preViewUrls.length > 0 && (
              <>
                <button id="del" onClick={() => handleDelete(filePage)}>
                  X刪除此照片
                </button>
                <img src={preViewUrls[filePage]} alt="" />
              </>
            )}
          </div>

          <label htmlFor="wpic_main" className="custom-file-upload">
            上傳圖片
          </label>
          <input
            type="file"
            name="wpic_main"
            id="wpic_main"
            onChange={handlePicView}
          ></input>
          {preViewUrls.length > 0 && (
            <div className="picNumber">
              {filePage + 1}/{preViewUrls.length}
            </div>
          )}
        </div>
        {/* <!-- 右邊聊天室框框 --> */}
        <div className="chat-right">
          {/* <!-- #region 右邊照片 會員 發起許願 時間 上面那一欄 --> */}
          <div className="right-user">
            <div className="right-user-icon">
              <img
                src="https://sites.google.com/site/s10511135/_/rsrc/1495466027439/research/na-mei/%E9%8C%A2.png?height=224&width=400"
                alt=""
              />
            </div>
            <h3>娜美</h3>
            <h2>發起許願</h2>
          </div>
          {/* <!-- #endregion --> */}
          {/* <!-- #region 聊天室可以下滑的內容 輸入資料--> */}
          <div className="right-container">
            <textarea
              placeholder="請輸入許願標題"
              type="text"
              id="wname"
              name="wname"
              value={formValue.wname}
              onChange={(e) => handleInput(e)}
            ></textarea>
            <textarea
              placeholder="請輸入內容 : 介紹一下您想許願的商品～集氣的人越多，越容易開團成功喔！小提醒：如果圖片取自網路，記得在下方加上圖片來源並附上原始連結喔！"
              name="winfo"
              value={formValue.winfo}
              onChange={(e) => {
                // 這樣就可以達到只能刪不能多了
                if (e.target.value.length <= textLimit) {
                  handleInput(e);
                }
              }}
              id="winfo"
            ></textarea>
            <div className="wish-qa">
              <a href="">
                <h4>什麼是許願&集氣？</h4>
              </a>
              <h5>
                {formValue.winfo.length}/{textLimit}
              </h5>
            </div>
          </div>
          {/* <!-- 許願類型 參考網址 發起之旅 --> */}
          <div className="state-select">
            <div>
              <p>許願類型</p>
              <select
                name="wstyle"
                id="wstyle"
                value={formValue.wstyle}
                onChange={(e) => handleInput(e)}
              >
                {/* <optgroup label="請選擇品項" selected> */}
                <option value="日本零食">請選擇品項</option>
                <option value="日本零食">日本零食</option>
                <option value="日本藥妝">日本藥妝</option>
                <option value="療癒小物">療癒小物</option>
                {/* </optgroup> */}
              </select>
            </div>
            <div>
              <p>參考網址</p>
              <input
                name="wweb"
                id="wweb"
                value={formValue.wweb}
                onChange={(e) => handleInput(e)}
              ></input>
            </div>
            <div>
              <button onClick={e.togleModal}>發起14天集氣之旅</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const QueryFakeData = async () => {
  const query = await fetch("http://localhost:8000/api/wish/list");
  const data = await query.json();
  return data;
};

const AddWishTable = async () => {
  const add = await fetch("http://localhost:8000/api/wish/add");
  const data = await add.json();
};

export default Wish;
