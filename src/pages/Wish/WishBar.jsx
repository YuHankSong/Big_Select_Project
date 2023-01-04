import React from "react";
import { Link } from "react-router-dom";

function WishBar() {
  return (
    <>
      <div className="wish-bar">
        <Link to="/selectgo/Wish/Hot">熱門許願</Link>
        <Link to="/selectgo/Wish/New">最新許願</Link>
        <Link to="/selectgo/Wish/Max">最多集氣</Link>
        <Link to="/selectgo/Wish/End">即將截止</Link>
        <Link to="/selectgo/Wish/Ture">許願成真</Link>
      </div>
    </>
  );
}

export default WishBar;
