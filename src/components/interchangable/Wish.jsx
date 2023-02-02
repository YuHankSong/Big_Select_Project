
const Wish = () => {
  const products = [
    {
      "name": "神奇寶貝：皮卡丘絨毛玩偶",
      "id": 1
    },
  ]


  let user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      {/* =============================================== */}
      {/* This is where the component goes */}
      {/* =============================================== */}

      <h5>許願紀錄</h5>
      <div className="wish-section">
        <div className="wish-item-container">

          <div className="wish-item">
            <div className="wish-item-user">
              <div>
                <img src={user && user.photoURL ? user.photoURL : '/imgs/avatar.png'} referrerPolicy="no-referrer" alt='user icon' />
              </div>
              <div style={{ 'fontWeight': 'bold' }}>{user && user.displayName}</div>
            </div>
            <div className="wish-item-product">
              {/* 大阪環球影城限量爆米花桶 */}
              {products[0].name}
            </div>
            <div className="wish-item-popularity">
              <div>集氣中</div>
              <span>
                <span>49</span>人集氣
              </span>
              <span>
                <span>2</span>人留言
              </span>
            </div>
            <div className="wish-item-pic">
              <img src="/imgs/product.jpg" alt="product" />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Wish;
