const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <div className="footer">
          <h5>關於我們</h5>
          <ul>
            <a href="">
              <li>關於SELECT GO</li>
            </a>
            <a href="">
              <li>隱私政策</li>
            </a>
            <a href="">
              <li>服務條款</li>
            </a>
          </ul>
        </div>

        <div className="footer">
          <h5>追蹤我們</h5>
          <ul>
            <a href="">
              <li>
                <i class="fa-brands fa-facebook"></i> Facebook
              </li>
            </a>
            <a href="">
              <li>
                <i class="fa-brands fa-instagram"></i> Instagram
              </li>
            </a>
            <a href="">
              <li>
                <i class="fa-brands fa-youtube"></i> Youtube
              </li>
            </a>
          </ul>
        </div>

        <div className="footer">
          <h5>加入 SELECT GO</h5>
          <p>隨時掌握最新情報</p>
          <button className="btn btn-success">立即加入</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
