import React, { useState, useEffect } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  let handleAdd = () => {
    setCount(count + 1);
  }

  let handleSubtract = () => {
    setCount(count - 1);
  }


  useEffect(() => {
    if (count > 10) {
      alert('超過數量限制')
      setCount(1);
    }
  }, [count])


  return (
    <>
      {(count === 0) ?
        <div onClick={handleAdd}>加入購物車</div> :
        <div className="itemcount">
          <div
            className="lesitm"
            onClick={handleSubtract}
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
            onClick={handleAdd}
          // style={{
          //   visibility: count >= 10 && "hidden",
          // }}
          >
            +
          </div>
        </div>
      }
    </>
  );
}
export default ItemCount;
