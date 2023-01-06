import '../css/auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="login-form">
                <p>歡迎來到</p>
                <div className="logo"><img src="./imgs/logo.jpg" alt="logo" /></div>
                <form action="">
                    <label htmlFor="login-email">Email</label>
                    <div>
                        <i className="fa fa-user"></i>
                        <input type="text" id="login-email" placeholder="請輸入Email" required />
                    </div>
                    <label htmlFor="login-pwd">密碼</label>
                    <div>
                        <i className="fa fa-unlock"></i>
                        <input type="text" id="login-pwd" placeholder="請輸入密碼" required />
                    </div>
                    <a href="">忘記密碼？</a>
                    <div className="login-btn">
                        <input type="submit" value="登入" />
                    </div>
                </form>

                <div className="login-options">
                    <a href="">使用其他方式登入</a>
                    <div>
                        <span>還沒加入嗎？</span><Link to="/register">立即註冊</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;