import { Carousel } from "./lib";

function App() {
  const data = [
    // caption
    {
      image:
        "/imgs/product/療癒小物/紅包袋-0.jpeg",
    },
    {
      image:
        "/imgs/product/療癒小物/紅包袋-1.jpeg",
    },
    {
      image:
        "/imgs/product/療癒小物/紅包袋-2.jpeg",
    },
    {
      image:
        "/imgs/product/療癒小物/紅包袋-3.jpeg",
    },
    // {
    //   image:
    //     "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    //   caption: "<div>San Francisco</div>",
    // }
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <div className="row">
            <div className="col">
              <Carousel
                data={data}
                time={2000}
                width="480px"
                height="480px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                showNavBtn={true}
                style={{
                  // textAlign: "center",
                  maxWidth: "480px",
                  margin: "40px auto",
                }}
              />
            </div>

            <div className="col apple">

            <div class="product-one-p">
              <h3>
                【2023 謹賀新年】 讓祝福長久保存的可愛小心機~ 大成製紙
                兔年紅包筒 & 紅包袋
              </h3>
              <span>
                ◆
                大阪百年造紙廠出品，打破傳統紅包「袋」平面限制，以「紙筒」傳遞心意{" "}
                <br />
                ◆ 設計精巧可愛，保存更長久 <br />
                ◆ 也可以作為收納筒存放小物 <br />
                ◆內容物： <br />
                - 喜迎福兔 紅包紙筒三入組 淺藍 <br />
                - 福兔賀歲 紅包紙筒三入組 正紅 <br />
                - 松竹梅 紅包紙筒三入組 <br />
                - 招財猫 紅包紙筒三入組 <br />
                - 日式傳統 紅包紙筒三入組 <br />
                - 櫻花限定 紅包紙筒三入組 <br />
                - EMBOSS POCHI 櫻花兔兔紅包袋 三入/袋 <br />
              </span>
              <br />
              <br />
              <p>
                ＊【日本百貨店專屬拼拼樂】凡購買日本百貨店品項滿 1000
                元，結帳輸入代碼 HAPPYBOX ，現折 80 元！
              </p>
              <select>
                <option selected>喜迎福兔 紅包紙筒三入組 淺藍</option>
                <option>福兔賀歲 紅包紙筒三入組 正紅</option>
                <option>松竹梅 紅包紙筒三入組</option>
                <option>招財猫 紅包紙筒三入組</option>
                <option>日式傳統 紅包紙筒三入組</option>
                <option>EMBOSS POCHI 櫻花兔兔紅包袋 三入/袋</option>
              </select>
              <span class="product-one-sold">已售出 10</span>
            </div>

            <div class="row add-to-cart-div">
              <button class="add-to-cart">加入購物車</button>
            </div>
            </div>




            {/* row的 */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
