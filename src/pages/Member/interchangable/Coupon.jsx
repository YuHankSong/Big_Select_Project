import { Link } from "react-router-dom";

const Coupon = () => {
  return (
    <main>

      {/* =============================================== */}
      {/* This is where the component goes */}
      {/* =============================================== */}

      <h5>我的折價卷</h5>
      <div className="coupon-section">
        <div className="coupons">
          <div className="container mt-5">
            <div className="d-flex justify-content-center row">
              <div className="col-md-9">
                {/* <!-- coupon 1 --> */}
                <div className="coupon">
                  <div className="row no-gutters">
                    <div className="col-lg-4 text-white coupon-type">
                      <div className="d-flex flex-column align-items-center">
                        <h1 className="pt-4">免運</h1>
                        <div className="text-black-50 pt-1 mb-2">
                          運費折扣
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8 d-flex justify-content-center">
                      <div style={{ minWidth: 100 + "%" }}>
                        <div className="d-flex flex-row justify-content-start off mt-4 pl-5">
                          <h4>2023年新年優惠碼</h4>
                        </div>
                        <div className="d-flex flex-row justify-content-start off pl-5">
                          <small className="mt-3">有效期限至:</small>
                        </div>
                        <div className="d-flex flex-row justify-content-start off pl-5">
                          <small>2022-12-31 23:59:59</small>
                        </div>
                        <div className="d-flex flex-row justify-content-end off ml-5 p-2">
                          <span className="border border-danger px-3 rounded code">
                            領取
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- coupon 2 --> */}
                <div className="coupon">
                  {/* <!-- when used we can add a className to this div --> */}
                  <div className="used-coupon cover"></div>
                  <div className="row no-gutters">
                    <div className="col-lg-4 text-white coupon-type">
                      <div className="d-flex flex-column align-items-center">
                        <h1 className="pt-4">$100</h1>
                        <div className="text-black-50 pt-1 mb-2">
                          商品折扣
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8 d-flex justify-content-center">
                      <div style={{ minWidth: 100 + "%" }}>
                        <div className="d-flex flex-row justify-content-start off mt-4 pl-5">
                          <h4>日本零食優惠碼</h4>
                        </div>
                        <div className="d-flex flex-row justify-content-start off pl-5">
                          <small className="mt-3">有效期限至:</small>
                        </div>
                        <div className="d-flex flex-row justify-content-start off pl-5">
                          <small>2022-12-16 23:59:59</small>
                        </div>
                        <div className="d-flex flex-row justify-content-end off ml-5 p-2">
                          <span className="border border-danger px-3 rounded code">
                            領取
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Coupon;
