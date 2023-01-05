import React, { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

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
          max="10"
          className="getitmcount"
          value={count}
        />
        <div
          className="additm"
          onClick={() => setCount(count + 1)}
          style={{
            visibility: count >= 10 && "hidden",
          }}
        >
          +
        </div>
      </div>
    </>
  );
}
export default ItemCount;
