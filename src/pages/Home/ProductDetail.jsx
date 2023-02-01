import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useRef, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import $ from 'jquery';

function App() {
  // 設定一個參數 初始資料是false 不會因為資料更新而而重新創造一次
  const dataFetchedRef = useRef(false);
  // 設定data是變數,setData是是改變變數的函式
  const [data, setData] = useState([]);
  function getProductDetail() {
    let fData = new FormData();
    // 在新資料後面增加一個欄位叫做pid ,值從sessionStorage裡面存的拿
    fData.append('pid', window.sessionStorage.getItem("pid"));
    const url = 'http://localhost:8000/api/queryProducts.php';
    axios.post(url, fData)
      .then((response) => {
        var inseertHtml = '';
        var d = response.data[0];

        var tmp = [];
        if (d['ppic_main'] != null && d['ppic_main'] != '') {
          tmp.push("/uploads/" + d['ppic_main'])
        }
        if (d['ppic_1'] != null && d['ppic_1'] != '') {
          tmp.push("/uploads/" + d['ppic_1'])
        }
        if (d['ppic_2'] != null && d['ppic_2'] != '') {
          tmp.push("/uploads/" + d['ppic_2'])
        }
        if (d['ppic_3'] != null && d['ppic_3'] != '') {
          tmp.push("/uploads/" + d['ppic_3'])
        }
        if (d['ppic_4'] != null && d['ppic_4'] != '') {
          tmp.push("/uploads/" + d['ppic_4'])
        }
        console.log(tmp)
        setData(tmp);
        inseertHtml
          += '<h3>'+ d['pname'] +'</h3>'
          + '<p>'+ (d['pinfo'].replaceAll('\r\n','</br>')) +'</p>'
          + '<span className="product-one-sold">已售出 ' + d['psold'] + '</span>'
          + '<input type="hidden" id="pid" value="' + d['pid'] + '"/>'
          + '&emsp;購買數量 <input id="amount" type="number" value="1" max="' + (d['pqty'] - d['psold']) + '" min="1"/>'
        $("#pList").html(inseertHtml);

        $("a.next").trigger('click');
        $("a.prev").trigger('click');
      });
  }

  useEffect(() => {
    if (dataFetchedRef.current) {
      return;
    } else {
      dataFetchedRef.current = true;
      getProductDetail();
    }
  }, []);

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <div className="row">
            <div className="col">
              <Carousel>
                {data.map((image) => {
                  return <div><img src={image} /></div>
                })
                }
              </Carousel>
            </div>
            <div className="col apple">
              <div className="product-one-p" id="pList" ß>
                {/* 放拼接的資料 */}
              </div>
              <div className="row add-to-cart-div">
                <button className="add-to-cart">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
