import React, { useState, useEffect } from "react";

const Home = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 更新頁面標題
    document.title = `You clicked ${count} times`;
    return () => {};
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Home;
