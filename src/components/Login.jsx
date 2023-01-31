import '../css/auth.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { signInWithFacebook } from '../Firebase';
import { signInWithGoogle } from '../Firebase';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { LoginContext } from '../Global_State/Context';

// ========================================================================================
// Component 分界線
// ========================================================================================
const Login = () => {
    // use global state
    const { setIsLoggedIn } = useContext(LoginContext);
    // useHistory to redirect
    const history = useHistory();
    // 在 React 中 value 若是 undefined，等同於沒有傳 value
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [ishidden, setIsHidden] = useState(true);
    // login form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/login', { email: email, password: password },
            {
                headers: {
                    'Content-type': 'application/json',
                }
            }
        )
            .then((res) => {
                // console.log(res.data);
                localStorage.setItem('token', JSON.stringify(res.data.access_token));
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setIsLoggedIn(true);
                history.push('/member');
                setError(false);
            })
            // * localStorage.setItem(key, value):save key-value pair in the browser's localStorage
            // * when we store the user information in localStorage using localStorage.setItem('user', JSON.stringify(user)), 
            // * we stringify the user object to store it as a string in localStorage. 
            // * To use the user object in our application, we need to parse it back to an object using JSON.parse(userString).
            .catch((err) => {
                console.log(err);
                setError(true);
            })
    }

    // only for knowing which auth type to show
    const showAuth = () => {
        setIsHidden(!ishidden);
    }

    const googleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                // console.log(res.user)
                localStorage.setItem('token', JSON.stringify(res.user.accessToken));
                localStorage.setItem('user', JSON.stringify(res.user));
                setIsLoggedIn(true);
                history.push('/member')
                // window.location.reload(false);
            })
            .catch((err) => {
                alert(err)
            })
    }

    const facebookLogin = () => {
        signInWithFacebook()
            .then((res) => {
                console.log(res.user)
                localStorage.setItem('token', JSON.stringify(res.user.accessToken))
                localStorage.setItem('user', JSON.stringify(res.user))
                setIsLoggedIn(true);
                history.push('/member')
            })
            .catch((err) => {
                alert(err)
            })
    }


    return (
        <>
            {/* outside */}
            <div className="login-bg-box d-flex justify-content-center align-items-center">
                <div className='login-pic-form d-flex align-items-center justify-content-between'>
                    {/* ===== left side =====*/}
                    <div className='ml-5 w-50'>
                        <Carousel
                            interval={3000}
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            transitionTime={1000}
                            showIndicators={true}
                        >
                            {/* step 1 */}
                            <div>
                                {/* <div className='howTo-bg'>
                                    <div className='howTo-corner'>
                                        <div className='corner-num'>1</div>
                                        <div className='corner-txt'>許願！</div>
                                    </div>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div className='howTo-icon'>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className='w-75'>
                                            登入後進入「許願池」，點擊「發起許願」。只要你有想要的日本好物，都可以許願哦！
                                        </div>
                                    </div>
                                </div> */}
                                <img src="/imgs/steps/step1.png" alt="step1" />
                            </div>
                            {/* step 2 */}
                            <div>
                                {/* <div className='howTo-bg'>
                                    <div className='howTo-corner'>
                                        <div className='corner-num'>2</div>
                                        <div className='corner-txt'>集氣！</div>
                                    </div>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div className='howTo-icon'>
                                            <i className="fa-solid fa-hands-clapping"></i>
                                        </div>
                                        <div className='w-75'>
                                            許願完成後將會有 14 天時間讓大家集氣，集氣結束後，只要集氣數超過 50 的願望，我們就會進行評估，並找相關原廠商洽談！</div>
                                    </div>
                                </div> */}
                                <img src="/imgs/steps/step2.png" alt="step2" />
                            </div>
                            {/* step 3 */}
                            <div>
                                {/* <div className='howTo-bg'>
                                    <div className='howTo-corner'>
                                        <div className='corner-num'>3</div>
                                        <div className='corner-txt'>開賣！</div>
                                    </div>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div className='howTo-icon'>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                        <div className='w-75'>
                                            Select Go 會收集這些高人氣願望逐一向日本原廠商洽談採購，確認過後許願就能成真，大家就可以購入想要的願望商品了！
                                        </div>
                                    </div>
                                </div> */}
                                <img src="/imgs/steps/step3.png" alt="step3" />
                            </div>
                        </Carousel>
                    </div>


                    {/* =================================================================== */}
                    {/* ======================== Normal Login ============================= */}
                    {/* =================================================================== */}
                    <div className={`${ishidden ? "hidden" : ""}`}>

                        {/* form in here */}
                        <div className="login-form">
                            <p>歡迎來到</p>
                            <div className="logo"><img src="./imgs/logo.png" alt="logo" /></div>
                            {/* form start */}
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
                                {/* error message ========= */}
                                <div className={`${!error ? "hidden" : ""}`}>
                                    <div id="error" className='error-msg'>&#9888; 帳號或密碼不正確，請再試一次</div>
                                </div>
                                {/* forget ========= */}
                                <a href="/">忘記密碼？</a>
                                <div className="login-btn">
                                    <input type="button" className='btn' onClick={handleSubmit} value="登入" />
                                </div>
                            </form>

                            {/* other options */}
                            <div className="login-options">
                                <input type="button" onClick={showAuth} value='使用其他方式登入' />
                                <div>
                                    <span>還沒加入嗎？</span><Link to="/register" style={{ 'textDecoration': 'underline' }}>立即註冊</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* =================================================================== */}
                    {/* ======================== Third Party Auth ========================= */}
                    {/* =================================================================== */}
                    <div className={`${!ishidden ? "hidden" : ""}`}>

                        {/* form in here */}
                        <div className="login-form third-party-form">
                            <p>歡迎來到</p>
                            <div className="logo"><img src="./imgs/logo.png" alt="logo" /></div>
                            <div className='third-party-text mt-4 mb-1 small'>使用以下帳號繼續</div>
                            <div className='third-party-btn'>
                                <div className='facebookbtn'>
                                    <FacebookLoginButton onClick={facebookLogin}
                                        style={{ padding: `20px 30px`, }}>
                                        <span className='m-3'> 使用 Facebook 帳號</span>
                                    </FacebookLoginButton>
                                </div>
                                <div className='googlebtn'>
                                    <GoogleLoginButton onClick={googleLogin}
                                        style={{ padding: `20px 30px`, border: `1px solid rgba(0,0,0,0.25)` }}>
                                        <span className='m-3'> 使用 Google 帳號</span>
                                    </GoogleLoginButton>
                                </div>
                            </div>
                            <div className='third-party-text mt-3 small' >或使用Select Go帳號</div>
                            <div>
                                <input className='btn third-party-login-btn' onClick={showAuth} type="button" value="登入" />
                            </div>
                            <div className='login-options'>
                                <div>
                                    <span>還沒加入嗎？</span><Link to="/register" style={{ 'textDecoration': 'underline' }}>立即註冊</Link>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </>
    );
}

export default Login;