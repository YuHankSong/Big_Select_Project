import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  useHistory,
} from "react-router-dom";
import { Link } from "react-router-dom";
// import WishList from "./WishList";
// import WishTalk from "./WishTalk";
import WishContent from "./WishContent";
import WishList from "./WishList";
import userEvent from "@testing-library/user-event";
import Axios from "axios";

const wishArticle = [{}, {}];

function Wish() {
  const history = useHistory();
  //輸出 許願欄位API 的狀態
  const [fake, setFake] = useState([]);
  useEffect(() => {
    QueryFakeData().then((res) => {
      setFake(res);
      // console.log(res);
    });
  }, []);

  //下滑fixed的狀態
  // const [isFixed, setIsFixed] = useState(false);
  // useEffect(() => {
  //   function handleScroll() {
  //     if (window.pageYOffset > 200) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // let scrollFixed = setIsFixed ? "static" : "sticky";

  //輸入進去資料庫  許願欄位
  // const [wishTable, setWishTable] = useState([]);
  // useEffect(() => {
  //   AddWishTable().then((req) => {
  //     setWishTable(req);
  //   });
  // });

  // 改變顯示彈窗的狀態 利用true跟false來控制display 這裡有夠難～ 需要理解一下 跟好好運用三元判斷
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
        return fake.filter((i) => i.brand === "Apple");
      // 2
      case 3:
        return fake.filter((i) => i.brand === "OPPO");
      // 3
      case 4:
        return fake.filter((i) => i.brand === "Huawei");
      // 其他的找先全部

      default:
        return fake.sort((rowA, rowB) => {
          const a = rowA.price;
          const b = rowB.price;
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
                  Img={i.wpic_main}
                  Author={i.wname}
                  Content={i.winfo}
                  Title={i.wname}
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
        <WishTalk />

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
  Content: "",
};
// 許願欄位每一個區塊 再利用map方式去印出每格
const ChildComponent = (props = param) => {
  // console.log(props);
  const [isContentShow, setisContentShow] = useState(false);
  const togleModal2 = () => {
    setisContentShow(!isContentShow);
  };
  let showContent = isContentShow ? "flex" : "none";
  return (
    <>
      <button className="wish-a" onClick={togleModal2}>
        <divxx className="wish-chat-container">
          <div className="chat-left">
            <div className="user-container">
              <div className="user-icon">
                <img src={props.Img} alt="" />
              </div>
              <h3>{props.Title}</h3>
              <p>。1天前</p>
            </div>
            <h2 className="chat-title">{props.Title}</h2>
            <p className="chat-txt">{props.Content}</p>
            <div className="chat-state">
              <div>集資中</div>
              <p>。49人集氣。2人留言</p>
            </div>
          </div>
          <div className="chat-right">
            <img src={props.Img} alt="" />
          </div>
        </divxx>
      </button>
      {/* 願望欄位彈窗 還有聊天室還沒做嗚嗚*/}
      <div id="chat-wrap1" style={{ display: showContent }}>
        <WishContent
          id={props.Id}
          imges={props.Img}
          author={props.Author}
          title={props.Title}
          content={props.Content}
        />
        <span onClick={togleModal2}>X</span>
      </div>
    </>
  );
};

//接上傳許願到資料庫API
const WishTalk = () => {
  const url = "http://localhost:8000/api/wish/add";
  const [formValue, setFormValue] = useState({
    wname: "",
    winfo: "",
    wstyle: "",
    wweb: "",
    // wpic_main: "",
  });

  //圖片上傳狀態
  const [file, setfile] = useState();

  //立即預覽圖片 一張
  // const [files, setFiles] = useState(null);
  // const [preViewUrls, setPreViewUrls] = useState(null);
  //立即預覽圖片 多張
  const [files, setFiles] = useState([]);
  const [preViewUrls, setPreViewUrls] = useState([]);

  //立即預覽事件 一張
  // const handlePicView = (e) => {
  //   const selectedFiles = e.target.files[0];
  //   setFiles(selectedFiles);

  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setPreViewUrls(reader.result);
  //   };
  //   reader.readAsDataURL(selectedFiles);
  // };

  //立即預覽事件 多張
  const handlePicView = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);

    const reader = new FileReader();
    for (let i = 0; i < selectedFiles.length; i++) {
      reader.onload = () => {
        setPreViewUrls((preViewUrls) => [...preViewUrls, reader.result]);
      };
      reader.readAsDataURL(selectedFiles[i]);
    }
    console.log(preViewUrls);
  };

  // 上傳許願資料到資料庫 axios

  async function submit(e) {
    console.log(file);
    e.preventDefault();
    try {
      const res = await Axios.post(
        url,
        {
          wname: formValue.wname,
          winfo: formValue.winfo,
          wstyle: formValue.wstyle,
          wweb: formValue.wweb,
          wpic_main: file,
        }
        // {
        //   headers: {
        //     Accept: "application/json",
        //   },
        // }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  // const createWish = async () => {
  //   let res = await Axios.post(url, {
  //     wname: formValue.wname,
  //     winfo: formValue.winfo,
  //     wstyle: formValue.wstyle,
  //     wweb: formValue.wweb,
  //     wpic_main: formValue.wpic_main,
  //   }).then((res) => {
  //     setFormValue([res.data, ...formValue]);
  //   });
  // .then(() => {
  //   history.push("/selectgo/Wish");
  // });
  // };

  //可以讓打出來的字即時改變在前端狀態
  const handleInput = (e) => {
    const newdata = { ...formValue };
    newdata[e.target.name] = e.target.value;
    setFormValue(newdata);
    console.log(newdata);
  };

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
            {preViewUrls.length != 0 ? <img src={preViewUrls} alt="" /> : null}
            {/* {preViewUrls.map((preViewUrls, index) => {
              <img key={index} src={preViewUrls} alt="" />;
            })} */}
          </div>
          <input
            type="file"
            name="wpic_main"
            id="wpic_main"
            onChange={handlePicView}
            //   {(e) => {
            //     // console.log(e.target.files[0]);
            //     setfile(e.target.files[0]);
            //   }
            // }
            // value={formValue.wpic_main}
          ></input>
        </div>
        {/* <!-- 右邊聊天室框框 --> */}
        <div className="chat-right">
          {/* <!-- #region 右邊照片 會員 發起許願 時間 上面那一欄 --> */}
          <div className="right-user">
            <div className="right-user-icon">
              {preViewUrls && <img src={preViewUrls} alt="" />}
              {/* {preViewUrls.map((preViewUrls, index) => {
                <img key={index} src={preViewUrls} alt="preview" />;
              })} */}
            </div>
            <h3>Fanny Lin</h3>
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
              onChange={(e) => handleInput(e)}
              id="winfo"
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
              <button>發起14天集氣之旅</button>
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
  // alert("data");
  // return data;
  // console.log(data);
};

export default Wish;
