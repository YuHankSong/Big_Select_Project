//↓↓↓↓ 導入你要用的東西 ↓↓↓↓
import React from "react";
import { useState } from 'react';
import axios from 'axios';
import "./style/up.css";
import "bootstrap";
//↑↑↑↑ 導入你要用的東西 function ↑↑↑↑

//↓↓↓↓ 宣告一些參數或是其他JS function ↓↓↓↓

//↑↑↑↑ 宣告一些參數或是其他JS function ↑↑↑↑

//↓↓↓↓ 這邊只寫HTML的畫面const ↓↓↓↓
function ProductUp() {
  //↓↓↓↓ 宣告一些參數或是其他JS function(只限給此物件用的) ↓↓↓↓
  function readURL() {
    // alert("圖片選擇成功，可供預覽");
    document.getElementById("preview_imgs").innerHTML = ""; // 清除預覽
    var input = document.getElementById("progressbarTWInput");
    if (input.files && input.files.length >= 0) {
      for (var i = 0; i < input.files.length; i++) {
        var reader = new FileReader();
        reader.onload = function (e) {
          //#function 1//
          var img1 = document.createElement("img");
          img1.width = "150";
          img1.height = "150";
          img1.src = e.target.result;
          document.getElementById("preview_imgs").append(img1);

          //#function 2//
          // var img1 = '<img src="' + e.target.result + '" style="width:120px; height:120px;">';
          // document.getElementById("preview_imgs").insertAdjacentHTML( 'beforeend', img1 );
        };
        reader.readAsDataURL(input.files[i]);
      }
    } else {
      document.getElementById("preview_imgs").append("<p>目前沒有圖片</p>");
    }
  }
  //↑↑↑↑ 宣告一些參數或是其他JS function(只限給此物件用的) ↑↑↑↑


// useState會回傳陣列 兩個值[狀態;更新狀態的函式名稱] 自行設定

  const [productType,setProductType] = useState('');
  const [productName,setProductName] = useState('');
  const [productText,setProductText] = useState('');
  const [productPrice,setProductPrice] = useState('');
  const [productqty,setProductqty] = useState('');

  const handleSubmit = () => {
    if(productType.length === 0){
      alert("尚未選擇產品類型！");
    }
    else if(productName.length === 0){
      alert("尚未輸入產品名稱！");
    }
    else if(productText.length === 0){
      alert("尚未輸入詳細資訊！");
    }
    else if(productPrice.length === 0){
      alert("尚未輸入產品價格！");
    }
    else if(productqty.length === 0){
      alert("尚未輸入產品數量！");
    }
    else{
      const url = 'http://localhost:8000/api/insert.php';
      let fData = new FormData();
      // 'productType'是我幫這個value取的名字 方便後端取資料的時候用它來取值
      // productType是value
      fData.append('productType', productType);
      fData.append('productName', productName);
      fData.append('productText', productText);
      fData.append('productPrice', productPrice);
      fData.append('productqty', productqty);
      var ins = document.getElementById('progressbarTWInput').files.length;
      for (var x = 0; x < ins; x++) {
        fData.append("fileToUpload[]", document.getElementById('progressbarTWInput').files[x]);
      }
      axios.post(url, fData)
      .then((response) => {
        clearForm();
        alert(response.data);
      })
      .catch(error => alert(error)); 
    }
  }

  function clearForm(){
    document.getElementById('productType').value='';
    document.getElementById('productName').value='';
    document.getElementById('productText').value='';
    document.getElementById('productPrice').value=0;
    document.getElementById('productqty').value=0;
    document.getElementById('progressbarTWInput').value='';
    document.getElementById("preview_imgs").innerHTML = "<p>目前沒有圖片</p>"; 
  }



  return (
    <div>
      <div className="formdiv form-group">
        <div className="form-group form-horizontal">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">上架人員：</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" value="Admin123" name="createUser" readOnly/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">商品類型：</label>
            <div className="col-sm-9">
              <select className="form-control" id="productType" name="productType" value={productType} onChange={(e) => setProductType(e.target.value)}>
              <option disabled  value="">請選擇</option>
                <option value="op1">日本零食</option>
                <option value="op2">日本藥妝</option>
                <option value="opˇ">療癒小物</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">商品名稱：</label>
            <div className="col-sm-9">
              <input
                type="text"
                id="productName"
                name="productName"
                value={productName}
                className="form-control"
                placeholder="請輸入商品標題"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">詳細資訊：</label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                placeholder="請輸入商品詳細資訊"
                id="productText"
                name="productText"
                value={productText}
                onChange={(e) => setProductText(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">商品價格：</label>
            <div className="col-sm-9">
              <input
                type="number"
                min="0"
                className="form-control"
                placeholder="請輸入商品詳細資訊"
                id="productPrice"
                name="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">商品數量</label>
            <div className="col-sm-9">
              <input
                type="number"
                min="0"
                className="form-control"
                placeholder="請輸入商品數量"
                id="productqty"
                name="productqty"
                value={productqty}
                onChange={(e) => setProductqty(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">上傳照片：</label>
            <div className="col-sm-9">
              <input
                className="form-control-file"
                type="file"
                name="productMImg"
                id="progressbarTWInput"
                accept="image/*"
                onChange={readURL}
                multiple
              />
            </div>

            <div id="preview_imgs">
              <p>目前沒有圖片</p>
            </div>
          </div>
          <div className="form-group row">
            <input
              type="submit"
              className="btn btn-primary"
              value="上傳"
              onClick={handleSubmit}
            />
          </div>

        </div>
      </div>
    </div>
  );
};
//↑↑↑↑ 這邊只寫HTML的畫面const ↑↑↑↑

//↓↓↓↓ export const的物件 ↓↓↓↓
export default ProductUp;
//↑↑↑↑ export const的物件 ↑↑↑↑
