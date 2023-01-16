import '../css/auth.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
    const history = useHistory();
    // 在 React 中 value 若是 undefined，等同於沒有傳 value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password);
        axios.post('http://localhost:8000/api/login', {
            email: email,
            password: password
        },
            {
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
            .then((res) => {
                // console.log(res.data.user);
                // console.log(res.data.access_token);
                localStorage.setItem('token', JSON.stringify(res.data.access_token));
                localStorage.setItem('user', JSON.stringify(res.data.user));
                alert('Successfully logged in!');
                history.push('/member');
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                alert(err.response.data.error.message)
            })
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
                        <input onClick={handleSubmit} type="button" value="登入" />
                    </div>
                </form>




                <div className="login-options">
                    {/* <a href="">使用其他方式登入</a> */}
                    <div>
                        <span>還沒加入嗎？</span><Link to="/register">立即註冊</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;