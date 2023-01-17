import React, { Component,useState } from 'react'

const Testphp = ()=> {
    const [jsdata,setData]=useState('');

   fetch('http://localhost:8888/testphp/test.php', {})
    .then((response) => {
      // 這裡會得到一個 ReadableStream 的物件
    // console.log(response);
      // 可以透過 blob(), json(), text() 轉成可用的資訊
      return response.json(); 
    }).then((jsonData) => {
      console.log(jsonData);
    //   let apple = JSON.stringify(jsonData);
    //   setData(JSON.stringify(jsonData));
// return jsonData;
    }).catch((err) => {
      console.log('錯誤:', err);
    })
   

  return (
    <>
    <p></p>
    </>
  )
}
export default Testphp