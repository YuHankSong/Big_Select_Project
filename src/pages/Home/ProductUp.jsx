//↓↓↓↓ 導入你要用的東西 ↓↓↓↓
import React from "react";
import "./style/up.css";
import "bootstrap";
//↑↑↑↑ 導入你要用的東西 function ↑↑↑↑

//↓↓↓↓ 宣告一些參數或是其他JS function ↓↓↓↓

//↑↑↑↑ 宣告一些參數或是其他JS function ↑↑↑↑

//↓↓↓↓ 這邊只寫HTML的畫面const ↓↓↓↓
const ProductUp = () => {
  //↓↓↓↓ 宣告一些參數或是其他JS function(只限給此物件用的) ↓↓↓↓
  function readURL() {
    alert("圖片選擇成功，可供預覽");
    document.getElementById("preview_imgs").innerHTML = ""; // 清除預覽
    var input = document.getElementById("progressbarTWInput");
    if (input.files && input.files.length >= 0) {
      for (var i = 0; i < input.files.length; i++) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var img1 = document.createElement("img");
          img1.width = "150";
          img1.height = "150";
          img1.src = e.target.result;
          document.getElementById("preview_imgs").append(img1);
        };
        reader.readAsDataURL(input.files[i]);
      }
    } else {
      document.getElementById("preview_imgs").append("<p>目前沒有圖片</p>");
    }
  }
  //↑↑↑↑ 宣告一些參數或是其他JS function(只限給此物件用的) ↑↑↑↑

  return (
    <div>
      <div className="formdiv form-group">
        <div className="form-group form-horizontal">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">上架人員：</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" value="Admin123" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">商品類型：</label>
            <div className="col-sm-9">
              <select className="form-control">
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
                className="form-control"
                placeholder="請輸入商品標題"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">詳細資訊：</label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                placeholder="請輸入商品詳細資訊"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">參考網址：</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="請輸入參考來源網址"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">上傳照片：</label>
            <div className="col-sm-9">
              <input
                className="form-control-file"
                type="file"
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
              name=""
              id=""
              value="上傳"
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
