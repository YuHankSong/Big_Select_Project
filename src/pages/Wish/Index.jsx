import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import WishEnd from "./UI/WishEnd";
import WishBar from "./WishBar";
import WishHot from "./UI/WishHot";
import WishMax from "./UI/WishMax";
// import WishList from "./WishList";
import WishNew from "./UI/WishNew";
import WishTure from "./UI/WishTrue";
import WishTalk from "./WishTalk";
import WishContent from "./WishContent";
import WishList from "./WishList";

const wishArticle = [{}, {}];

function Wish() {
  //輸出 許願欄位API 的狀態
  const [fake, setFake] = useState([]);
  useEffect(() => {
    QueryFakeData().then((res) => {
      setFake(res);
      console.log(res);
    });
  }, []);

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
      // 其他的找先全部(我沒時間做太多種)

      default:
        return fake;
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
                <ChildComponent
                  key={i.id}
                  id={index}
                  Img={i.images[0]}
                  Author={i.brand}
                  Content={i.description}
                  Title={i.title}
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
        {/* <WishContent /> */}
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

const param = {
  Id: "",
  Author: "",
  Title: "",
  Img: "",
  Content: "",
};
const ChildComponent = (props = param) => {
  console.log(props);
  const [isContentShow, setisContentShow] = useState(false);
  const togleModal2 = () => {
    setisContentShow(!isContentShow);
  };
  let showContent = isContentShow ? "flex" : "none";
  return (
    <>
      <button className="wish-a" onClick={togleModal2}>
        <div className="wish-chat-container">
          <div className="chat-left">
            <div className="user-container">
              <div className="user-icon">
                <img src={require("../../Imgs/馬里歐.webp")} alt="" />
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
        </div>
      </button>
      {/* 願望欄位彈窗 還有聊天室還沒做嗚嗚*/}
      <div id="chat-wrap1" style={{ display: showContent }}>
        <WishContent
          id={props.Id}
          imges={props.Img}
          author={props.Author}
          title={props.Title}
        />
        <span onClick={togleModal2}>X</span>
      </div>
    </>
  );
};

const QueryFakeData = async () => {
  const query = await fetch("https://dummyjson.com/products");
  const data = await query.json();
  return data.products;
};

export default Wish;
