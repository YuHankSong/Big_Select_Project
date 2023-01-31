import { useState } from "react";

const Member = () => {
  let user = JSON.parse(localStorage.getItem('user'));

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    // console.log(phone, name, nickname, gender)
    e.preventDefault();
    localStorage.setItem('phone', JSON.stringify(phone));
  }

  return (
    <main>
      {/* =============================================== */}
      {/* This is where the component goes */}
      {/* =============================================== */}

      <h5>帳戶資料</h5>
      <div className="member-section">
        <p>
          以下資訊僅用於結帳時自動填寫您的個人資料，您的資料會被安全的保存且不會公開
        </p>

        <form>
          {/* ===== Email ====== */}
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
                defaultValue={user.email}
                disabled
              />
            </div>
          </div>

          {/* ===== Phone number ====== */}
          <div className="form-group">
            <label>手機號碼</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-phone"></i>
                </div>
              </div>
              <input id="form-phonenum" name="form-phonenum" placeholder="請輸入手機號碼" type="text"
                required="required" className="form-control" onChange={e => setPhone(e.target.value)}
                defaultValue={JSON.parse(localStorage.getItem('phone'))}
              />
            </div>
          </div>

          {/* ===== Name ====== */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>姓名</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <input id="form-name" name="form-name" placeholder="請輸入名字" type="text"
                  className="form-control" onChange={e => setName(e.target.value)} />
              </div>
            </div>

            {/* ===== Nickname ====== */}
            <div className="form-group col-md-6">
              <label>暱稱</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-address-book"></i>
                  </div>
                </div>
                <input id="form-nickname" name="form-nickname" placeholder="請輸入暱稱" type="text"
                  className="form-control" onChange={e => setNickName(e.target.value)} />
              </div>
            </div>
          </div>

          {/* ===== Gender ====== */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>性別</label>
              <div>
                <select id="form-gender" name="form-gender" className="custom-select"
                  value={gender} onChange={e => setGender(e.target.value)}>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="others">其他</option>
                </select>
              </div>
            </div>
            {/* </div> */}

            {/* ===== City ====== */}
            {/* <div className="form-row"> */}
            <div className="form-group col-md-6">
              <label>城市</label>
              <div>
                <select id="form-city" name="form-city" className="custom-select"
                  value={city} onChange={e => setCity(e.target.value)}>
                  <option value="臺北市">臺北市</option>
                  <option value="新北市">新北市</option>
                  <option value="桃園市">桃園市</option>
                  <option value="臺中市">臺中市</option>
                  <option value="臺南市">臺南市</option>
                  <option value="高雄市">高雄市</option>
                  <option value="新竹縣">新竹縣</option>
                  <option value="苗栗縣">苗栗縣</option>
                  <option value="彰化縣">彰化縣</option>
                  <option value="南投縣">南投縣</option>
                  <option value="雲林縣">雲林縣</option>
                  <option value="嘉義縣">嘉義縣</option>
                  <option value="屏東縣">屏東縣</option>
                  <option value="宜蘭縣">宜蘭縣</option>
                  <option value="花蓮縣">花蓮縣</option>
                  <option value="臺東縣">臺東縣</option>
                  <option value="澎湖縣">澎湖縣</option>
                  <option value="金門縣">金門縣</option>
                  <option value="連江縣">連江縣</option>
                  <option value="基隆市">基隆市</option>
                  <option value="新竹市">新竹市</option>
                  <option value="嘉義市">嘉義市</option>

                </select>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <button name="submit" type="button" className="btn btn-primary submit-button"
            onClick={handleSubmit}>
            更新</button>
        </form>
      </div>
    </main>
  );
};

export default Member;
