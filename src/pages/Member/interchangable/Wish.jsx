import { Link } from "react-router-dom";

const Wish = () => {
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
                <img src="/imgs/icon.jpg" />
              </div>
              <div>Fanny Lin</div>
            </div>
            <div className="wish-item-product">
              大阪環球影城限量爆米花桶
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
              <img src="/imgs/product.jpg" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Wish;
