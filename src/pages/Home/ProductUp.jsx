import React from "react";
import { useEffect, useRef  } from 'react';
import axios from 'axios';
import "./style/up.css";
import "bootstrap";
import { Link } from "react-router-dom";

function ProductUp() {
  const dataFetchedRef = useRef(false);

  useEffect(() => {//載入畫面先做的事：判斷有沒有決定是新增頁還是修改頁，如果是修改頁要用pid撈出資料放到畫面
    if ("pid" in sessionStorage && window.sessionStorage.getItem("pid") != null && window.sessionStorage.getItem("pid") != undefined && window.sessionStorage.getItem("pid") != "") {
      if (dataFetchedRef.current) {
        //做過了不要再撈，滾
        return;
      } else {
        dataFetchedRef.current = true;
        getProductList();
        document.getElementById("progressbarTWInput1").addEventListener("change", function(){readURLe(0)});
        document.getElementById("progressbarTWInput2").addEventListener("change", function(){readURLe(1)});
        document.getElementById("progressbarTWInput3").addEventListener("change", function(){readURLe(2)});
        document.getElementById("progressbarTWInput4").addEventListener("change", function(){readURLe(3)});
        document.getElementById("progressbarTWInput5").addEventListener("change", function(){readURLe(4)});
      }
    }else{
      clearForm();
    }
  }, []);

  function getProductList() {
    let fData = new FormData();
    fData.append('pid', window.sessionStorage.getItem("pid"));
    const url = 'http://localhost:8000/api/queryProducts.php';
    axios.post(url,fData)
      .then((response) => {
        var d = response.data[0];
        document.getElementById('pid').value = d['pid'];
        document.getElementById('productType').value = d['ptype'];
        document.getElementById('productName').value = d['pname'];
        document.getElementById('productText').value = d['pinfo'];
        document.getElementById('productPrice').value = d['pprice'];
        document.getElementById('productqty').value = d['pqty'];
        document.getElementById('pstatus').value = d['pstatus'];
        //圖片的部分
        document.getElementById('oriName1').value = d['ppic_main'];
        document.getElementById("preview_imgs1").innerHTML = "";
        var img1 = '<img id="ori_ppic_1" src="/uploads/' + d['ppic_main'] + '" style="width:120px; height:120px;">';
        document.getElementById("preview_imgs1").insertAdjacentHTML( 'beforeend', img1 );

        if(d['ppic_1'] != null && d['ppic_1'] != ''){
          document.getElementById('oriName2').value = d['ppic_1'];
          document.getElementById("preview_imgs2").innerHTML = "";
          var img2 = '<img id="ori_ppic_2" src="/uploads/' + d['ppic_1'] + '" style="width:120px; height:120px;">';
          document.getElementById("preview_imgs2").insertAdjacentHTML( 'beforeend', img2 );
        }
        if(d['ppic_2'] != null && d['ppic_2'] != ''){
          document.getElementById('oriName3').value = d['ppic_2'];
          document.getElementById("preview_imgs3").innerHTML = "";
          var img3 = '<img id="ori_ppic_3" src="/uploads/' + d['ppic_2'] + '" style="width:120px; height:120px;">';
          document.getElementById("preview_imgs3").insertAdjacentHTML( 'beforeend', img3 );
        }
        if(d['ppic_3'] != null && d['ppic_3'] != ''){
          document.getElementById('oriName4').value = d['ppic_3'];
          document.getElementById("preview_imgs4").innerHTML = "";
          var img4 = '<img id="ori_ppic_4" src="/uploads/' + d['ppic_3'] + '" style="width:120px; height:120px;">';
          document.getElementById("preview_imgs4").insertAdjacentHTML( 'beforeend', img4 );
        }
        if(d['ppic_4'] != null && d['ppic_4'] != ''){
          document.getElementById('oriName5').value = d['ppic_4'];
          document.getElementById("preview_imgs5").innerHTML = "";
          var img5 = '<img id="ori_ppic_5" src="/uploads/' + d['ppic_4'] + '" style="width:120px; height:120px;">';
          document.getElementById("preview_imgs5").insertAdjacentHTML( 'beforeend', img5 );
        }

        window.sessionStorage.removeItem("pid");
      })
      .catch(error => alert(error));
  }

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

  function readURLe(idx) {
    document.getElementsByName('preview_imgs')[idx].innerHTML = ""; // 清除預覽
    var input = document.getElementsByName('productMImg')[idx];
    if (input.files && input.files.length >= 0) {
      for (var i = 0; i < input.files.length; i++) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var img1 = '<img id="ori_ppic_' + idx + '" src="' + e.target.result + '" style="width:120px; height:120px;">';
          document.getElementsByName('preview_imgs')[idx].insertAdjacentHTML( 'beforeend', img1 );
        };
        reader.readAsDataURL(input.files[i]);
      }
    } else {
      document.getElementById('preview_imgs')[idx].append("<p>目前沒有圖片</p>");
    }
  }

  // useState會回傳陣列 兩個值[狀態;更新狀態的函式名稱] 自行設定

  const handleSubmit = () => {
    if (document.getElementById('productType').value === '') {
      alert("尚未選擇產品類型！");
    }
    else if (document.getElementById('productName').value === '') {
      alert("尚未輸入產品名稱！");
    }
    else if (document.getElementById('productText').value === '') {
      alert("尚未輸入詳細資訊！");
    }
    else if (document.getElementById('productPrice').value === 0) {
      alert("尚未輸入產品價格！");
    }
    else if (document.getElementById('progressbarTWInput').value === 0) {
      alert("尚未輸入產品數量！");
    }
    else if (document.getElementById('pstatus').value === '') {
      alert("尚未輸入產品狀態！");
    }
    else {
      const url = 'http://localhost:8000/api/insert.php';
      let fData = new FormData();
      // 'productType'是我幫這個value取的名字 方便後端取資料的時候用它來取值
      // productType是value
      fData.append('productType', document.getElementById('productType').value);
      fData.append('productName', document.getElementById('productName').value);
      fData.append('productText', document.getElementById('productText').value);
      fData.append('productPrice', document.getElementById('productPrice').value);
      fData.append('productqty', document.getElementById('productqty').value);
      fData.append('pstatus', document.getElementById('pstatus').value);
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

  function clearForm() {
    document.getElementById('productType').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productText').value = '';
    document.getElementById('productPrice').value = 0;
    document.getElementById('productqty').value = 0;
    document.getElementById('pstatus').value = '';
    document.getElementById('progressbarTWInput').value = '';
    document.getElementById("preview_imgs").innerHTML = "<p>目前沒有圖片</p>";
  }

  // ========================

  const editProduct = () => {
    if (document.getElementById('productType').value === '') {
      alert("尚未選擇產品類型！");
    }
    else if (document.getElementById('productName').value === '') {
      alert("尚未輸入產品名稱！");
    }
    else if (document.getElementById('productText').value === '') {
      alert("尚未輸入詳細資訊！");
    }
    else if (document.getElementById('pstatus').value === '') {
      alert("尚未輸入產品狀態！");
    }
    // else if (document.getElementById('productPrice').value === 0) {
    //   alert("尚未輸入產品價格！");
    // }
    // else if (document.getElementById('progressbarTWInput').value === 0) {
    //   alert("尚未輸入產品數量！");
    // }
    else {
      const url = 'http://localhost:8000/api/editProduct.php';
      let fData = new FormData();
      fData.append('pid', document.getElementById('pid').value);
      fData.append('productType', document.getElementById('productType').value);
      fData.append('productName', document.getElementById('productName').value);
      fData.append('productText', document.getElementById('productText').value);
      fData.append('productPrice', document.getElementById('productPrice').value);
      fData.append('productqty', document.getElementById('productqty').value);
      fData.append('pstatus', document.getElementById('pstatus').value);
      
      fData.append("fileToUpload1[]", document.getElementById('progressbarTWInput1').files[0]);
      fData.append("fileToUpload2[]", document.getElementById('progressbarTWInput2').files[0]);
      fData.append("fileToUpload3[]", document.getElementById('progressbarTWInput3').files[0]);
      fData.append("fileToUpload4[]", document.getElementById('progressbarTWInput4').files[0]);
      fData.append("fileToUpload5[]", document.getElementById('progressbarTWInput5').files[0]);

      axios.post(url, fData)
        .then((response) => {
          alert(response.data);
          window.location.href = "http://localhost:3000/selectgo/product/ProductList";
        })
        .catch(error => alert(error));
    }
  }

  // ========================

  let typeDiv;
  let submitBtn;
  //edit
  if ("pid" in sessionStorage && window.sessionStorage.getItem("pid") != null && window.sessionStorage.getItem("pid") != undefined && window.sessionStorage.getItem("pid") != "") {
    typeDiv =
      <div className="form-group row" id="editImgs">
        <label className="col-sm-3 col-form-label">上傳照片：</label>
        <div className="col-sm-9">
          <input id="oriName1" type="hidden" />
          <input
            className="form-control-file"
            type="file"
            name="productMImg"
            id="progressbarTWInput1"
            accept="image/*"
            // onChange={readURLe(0)}
          />
          <div id="preview_imgs1" name="preview_imgs">
            <p>目前沒有圖片</p>
          </div>
        </div>
        <div className="col-sm-9">
          <input id="oriName2" type="hidden" />
          <input
            className="form-control-file"
            type="file"
            name="productMImg"
            id="progressbarTWInput2"
            accept="image/*"
            // onChange={readURLe(1)}
          />
          <div id="preview_imgs2" name="preview_imgs">
            <p>目前沒有圖片</p>
          </div>
        </div>
        <div className="col-sm-9">
          <input id="oriName3" type="hidden" />
          <input
            className="form-control-file"
            type="file"
            name="productMImg"
            id="progressbarTWInput3"
            accept="image/*"
            // onChange={readURLe(2)}
          />
          <div id="preview_imgs3" name="preview_imgs">
            <p>目前沒有圖片</p>
          </div>
        </div>
        <div className="col-sm-9">
          <input id="oriName4" type="hidden" />
          <input
            className="form-control-file"
            type="file"
            name="productMImg"
            id="progressbarTWInput4"
            accept="image/*"
            // onChange={readURLe(3)}
          />
          <div id="preview_imgs4" name="preview_imgs">
            <p>目前沒有圖片</p>
          </div>
        </div>
        <div className="col-sm-9">
          <input id="oriName5" type="hidden" />
          <input
            className="form-control-file"
            type="file"
            name="productMImg"
            id="progressbarTWInput5"
            accept="image/*"
            // onChange={readURLe(4)}
          />
          <div id="preview_imgs5" name="preview_imgs">
            <p>目前沒有圖片</p>
          </div>
        </div>
      </div>;

    submitBtn =
      <div className="form-group row">
        <input id="pid" type="hidden"/>
        <input
          type="submit"
          className="btn btn-primary"
          value="編輯完成"
          onClick={editProduct}
        />
      </div>;
  } else {//new add
    typeDiv =
      <div className="form-group row" id="addImgs">
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
      </div>;

    submitBtn =
      <div className="form-group row">
        <input
          type="submit"
          className="btn btn-primary"
          value="上傳"
          onClick={handleSubmit}
        />
      </div>;
  }

  return (
    <div>
      <div className="formdiv form-group">
        <div className="form-group form-horizontal">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">上架人員：</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" value="Admin123" name="createUser" readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">商品類型：</label>
            <div className="col-sm-9">
              <select className="form-control" id="productType" name="productType">
                <option disabled value="">請選擇</option>
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
                id="productText"
                name="productText"
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
              />
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
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">商品狀態：</label>
            <div className="col-sm-9">
              <select className="form-control" id="pstatus" name="pstatus">
                <option disabled value="">請選擇</option>
                <option value="1">上架</option>
                <option value="2">下架</option>
              </select>
            </div>
            </div>

          {typeDiv}

          {submitBtn}

          <div className="form-group row">
            <Link to={"/selectgo/product/ProductList"}>
              <input
                type="submit"
                className="btn btn-primary"
                value="回到列表"
              // onClick={handleSubmit}
              />
            </Link>
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
