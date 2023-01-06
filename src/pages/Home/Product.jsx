import React from 'react';
import { Link } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';
import './style/all.css';
import 'bootstrap';
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
const Frontpage = () => {
    return (
        <div>
            {/* products banner */}
            <div className="active123">
                <img src="/imgs/活動b1.jpg" />
            </div>

            {/* events news1 */}
            <div class="container">
            <div class="row hot-post-row">
                <div class="col hot-post-col">
                    <img src="/imgs/新年拼拼樂.jpeg" alt=""/>
                </div>
                <div class="col hot-post-col">
                   <img src="/imgs/暖冬吃好_商品頁用拼拼樂.jpeg" alt=""/>
                </div>
            </div>
        </div>

        {/* events news2 */}
        <div class="group-pic">
            <img src="/imgs/Group_227.jpeg" alt=""/>
        </div>

        {/* products */}
        <div className="wrapper">
        <div className="container">
          <div className="row product-row">
            <div className=" outer col">
              <div className="container1">
                <div id="myCarousel0" className="carousel slide" data-ride="carousel" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel0" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel0" data-slide-to="1"></li>
                    <li data-target="#myCarousel0" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src="/imgs/product/療癒小物/紅包袋-0.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/療癒小物/紅包袋-0.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/療癒小物/紅包袋-0.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                  </div><button className="carousel-control-prev" type="button" data-target="#myCarousel0"
                    data-slide="prev"><span className="carousel-control-prev-icon"
                      aria-hidden="true"></span><span className="sr-only">Previous</span></button><button
                        className="carousel-control-next" type="button" data-target="#myCarousel0"
                        data-slide="next"><span className="carousel-control-next-icon"
                          aria-hidden="true"></span><span className="sr-only">Next</span></button>
                </div>
              </div>
              <div className="product-text ">
                <p id="product-name">【日本百貨店】最佳飯友！遠忠食品 佃煮山珍海味</p>
                <button className="product-check-more"><Link to={"/selectgo/product/ProductDetail"}>查看更多</Link></button>
                
               

              </div>
            </div>
            <div className=" outer col">
              <div className="container1">
                <div id="myCarousel2" className="carousel slide" data-ride="carousel" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel2" data-slide-to="1"></li>
                    <li data-target="#myCarousel2" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src="/imgs/product/日本零食/咖啡歐蕾專用濃縮液1.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/咖啡歐蕾專用濃縮液2.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/咖啡歐蕾專用濃縮液3.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                  </div><button className="carousel-control-prev" type="button" data-target="#myCarousel2"
                    data-slide="prev"><span className="carousel-control-prev-icon"
                      aria-hidden="true"></span><span className="sr-only">Previous</span></button><button
                        className="carousel-control-next" type="button" data-target="#myCarousel2"
                        data-slide="next"><span className="carousel-control-next-icon"
                          aria-hidden="true"></span><span className="sr-only">Next</span></button>
                </div>
              </div>
              <div className="product-text ">
                <p id="product-name">愛知縣必買伴手禮！名古屋仙貝故里 綜合蝦餅</p><button
                  className="product-check-more">查看更多</button>
              </div>
            </div>
            <div className=" outer col">
              <div className="container1">
                <div id="myCarousel1" className="carousel slide" data-ride="carousel" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel1" data-slide-to="1"></li>
                    <li data-target="#myCarousel1" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src="/imgs/product/日本零食/綜合蝦餅1.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/綜合蝦餅2.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/綜合蝦餅3.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                  </div><button className="carousel-control-prev" type="button" data-target="#myCarousel1"
                    data-slide="prev"><span className="carousel-control-prev-icon"
                      aria-hidden="true"></span><span className="sr-only">Previous</span></button><button
                        className="carousel-control-next" type="button" data-target="#myCarousel1"
                        data-slide="next"><span className="carousel-control-next-icon"
                          aria-hidden="true"></span><span className="sr-only">Next</span></button>
                </div>
              </div>
              <div className="product-text ">
                <p id="product-name">【日本百貨店】咖啡濃淡由我主宰！pushipushina 咖啡歐蕾專用濃縮液</p><button
                  className="product-check-more">查看更多</button>
              </div>
            </div>
          </div>

          <div className="row product-row">
            <div className=" outer col">
              <div className="container1">
                <div id="myCarousel3" className="carousel slide" data-ride="carousel" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel3" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel3" data-slide-to="1"></li>
                    <li data-target="#myCarousel3" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src="/imgs/product/日本零食/栗子最中1.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/栗子最中2.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/栗子最中3.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                  </div><button className="carousel-control-prev" type="button" data-target="#myCarousel3"
                    data-slide="prev"><span className="carousel-control-prev-icon"
                      aria-hidden="true"></span><span className="sr-only">Previous</span></button><button
                        className="carousel-control-next" type="button" data-target="#myCarousel3"
                        data-slide="next"><span className="carousel-control-next-icon"
                          aria-hidden="true"></span><span className="sr-only">Next</span></button>
                </div>
              </div>
              <div className="product-text ">
                <p id="product-name">【日本百貨店】直接吃到一顆完整栗子！荒木屋 栗子最中</p><button
                  className="product-check-more">查看更多</button>
              </div>
            </div>
            <div className=" outer col">
              <div className="container1">
                <div id="myCarousel5" className="carousel slide" data-ride="carousel" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel5" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel5" data-slide-to="1"></li>
                    <li data-target="#myCarousel5" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src="/imgs/product/日本零食/奶油柿子1.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/奶油柿子2.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/奶油柿子3.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                  </div><button className="carousel-control-prev" type="button" data-target="#myCarousel5"
                    data-slide="prev"><span className="carousel-control-prev-icon"
                      aria-hidden="true"></span><span className="sr-only">Previous</span></button><button
                        className="carousel-control-next" type="button" data-target="#myCarousel5"
                        data-slide="next"><span className="carousel-control-next-icon"
                          aria-hidden="true"></span><span className="sr-only">Next</span></button>
                </div>
              </div>
              <div className="product-text ">
                <p id="product-name">【日本百貨店】想不到柿子可以這樣吃！石井物産 柿子點心系列</p><button
                  className="product-check-more">查看更多</button>
              </div>
            </div>
            <div className=" outer col">
              <div className="container1">
                <div id="myCarousel4" className="carousel slide" data-ride="carousel" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel4" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel4" data-slide-to="1"></li>
                    <li data-target="#myCarousel4" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src="/imgs/product/日本零食/莓之戀白巧克力草莓乾1.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/莓之戀白巧克力草莓乾2.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item"><img src="/imgs/product/日本零食/莓之戀白巧克力草莓乾3.jpeg"
                      className="d-block w-100" alt="" />
                    </div>
                  </div><button className="carousel-control-prev" type="button" data-target="#myCarousel4"
                    data-slide="prev"><span className="carousel-control-prev-icon"
                      aria-hidden="true"></span><span className="sr-only">Previous</span></button><button
                        className="carousel-control-next" type="button" data-target="#myCarousel4"
                        data-slide="next"><span className="carousel-control-next-icon"
                          aria-hidden="true"></span><span className="sr-only">Next</span></button>
                </div>
              </div>
              <div className="product-text ">
                <p id="product-name">【日本百貨店】酸酸甜甜～好像初戀♡ 静⾵ 莓之戀白巧克力草莓乾</p><button
                  className="product-check-more">查看更多</button>
              </div>
            </div>
          </div>
        </div>
      </div>





        </div>
    );
};

export default Frontpage;
