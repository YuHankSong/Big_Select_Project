import React, { useState,useEffect } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  useEffect(()=>{
    if(count>10){
      alert('超過數量限制')
      setCount(1);
    }
  },[count])


  return (
    <>
      <div className="itemcount">
        <div
          className="lesitm"
          onClick={() => setCount(count - 1)}
          style={{
            visibility: count <= 1 && "hidden",
          }}
        >
          -
        </div>
        <input
          type="text"
          name=""
          id=""
          min="1"
          className="getitmcount"
          value={count}
        />
        <div
          className="additm"
          onClick={() => setCount(count + 1)}
          // style={{
          //   visibility: count >= 10 && "hidden",
          // }}
        >
          +
        </div>
      </div>
    </>
  );
}
export default ItemCount;
