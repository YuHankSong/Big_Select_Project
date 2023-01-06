import '../css/auth.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/member')
        }
    }, [])

    async function login(e) {
        e.preventDefault();
        let item = { email, password };
        let result = await fetch('http://localhost:8000/api/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        if (result.error) {
            history.push('/login')
        } else {
            localStorage.setItem("user-info", JSON.stringify(result))
            history.push('/member')
        }
    }





    return (
        <>
            <div className="login-form">
                <p>歡迎來到</p>
                <div className="logo"><img src="./imgs/logo.jpg" alt="logo" /></div>
                <form action="">
                    {/* email=============== */}
                    <label htmlFor="login-email">Email</label>
                    <div>
                        <i className="fa fa-user"></i>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} id="login-email" placeholder="請輸入Email" required />
                    </div>

                    {/* password =========== */}
                    <label htmlFor="login-pwd">密碼</label>
                    <div>
                        <i className="fa fa-unlock"></i>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id="login-pwd" placeholder="請輸入密碼" required />
                    </div>

                    <a href="">忘記密碼？</a>
                    <div className="login-btn">
                        <input onClick={login} type="submit" value="登入" />
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