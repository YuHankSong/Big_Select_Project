import { Link } from "react-router-dom";

const Member = () => {
  return (
    <main>
      <div className="main-container">
        <div className="left-div">
          <div className="user-icon">
            <img src="/imgs/icon.jpg" />
          </div>
          <div className="choose-pic">
            <a href="">選擇照片</a>
          </div>
          <div className="user-name">
            <p>Johnny</p>
          </div>
          <div className="left-nav">
            <ul>
              <li>
                <i className="fas fa-clipboard-list"></i>
                <Link to={"/member"}>&nbsp;&nbsp;&nbsp;&nbsp;訂單查詢</Link>
              </li>
              <li>
                <i className="fas fa-birthday-cake"></i>
                <Link to={"/member/Wish"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;許願紀錄
                </Link>
              </li>
              <li>
                <i className="fas fa-user"></i>
                <Link to={"/member/Info"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;帳戶資料
                </Link>
              </li>
              <li>
                <i className="fas fa-percentage"></i>
                <Link to={"/member/Coupon"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;我的折價卷
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout-btn">
            <a href="#">登出</a>
          </div>
        </div>

        {/* =============================================== */}
        {/* This is where the component goes */}
        {/* =============================================== */}

        <div className="right-div">
          <h5>帳戶資料</h5>
          <div className="member-section">
            <p>
              以下資訊僅用於結帳時自動填寫您的個人資料，您的資料會被安全的保存且不會公開
            </p>
            <form>
              <div className="form-group">
                <label>Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </div>
                  <input
                    id="form-email"
                    name="form-email"
                    placeholder="請輸入email"
                    type="text"
                    required="required"
                    className="form-control"
                    defaultValue="ispan123@gmail.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>手機號碼</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </div>
                  </div>
                  <input
                    id="form-phonenum"
                    name="form-phonenum"
                    placeholder="請輸入手機號碼"
                    type="text"
                    required="required"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>姓名</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                    <input
                      id="form-name"
                      name="form-name"
                      placeholder="請輸入名字"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label>暱稱</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-address-book"></i>
                      </div>
                    </div>
                    <input
                      id="form-nickname"
                      name="form-nickname"
                      placeholder="請輸入暱稱"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>性別</label>
                  <div>
                    <select
                      id="form-gender"
                      name="form-gender"
                      className="custom-select"
                    >
                      <option value="male">男</option>
                      <option value="female">女</option>
                      <option value="others">其他</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label>性別</label>
                  <div>
                    <select
                      id="form-gender"
                      name="form-gender"
                      className="custom-select"
                    >
                      <option value="male">男</option>
                      <option value="female">女</option>
                      <option value="others">其他</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                name="submit"
                type="submit"
                className="btn btn-primary submit-button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Member;
