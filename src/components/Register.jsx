import '../css/auth.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { signInWithFacebook } from '../Firebase';
import { signInWithGoogle } from '../Firebase';
import { useContext } from 'react';
import { LoginContext } from '../Global_State/Context';

const Register = () => {
    const history = useHistory();
    // runs only once, if localstorage contains user-info, it'll redirect to /member
    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push('/');
        }
    }, [history])
    // useRef is a React Hook that allows you to create a reference to a DOM element or a JavaScript object
    const buttonRef = useRef(null);

    // set variables for our registration form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user_phone, setUser_Phone] = useState("");
    const [user_gender, setUser_Gender] = useState("");
    const [user_birthday, setUser_Birthday] = useState("");
    const [error, setError] = useState(false);
    const [errorMsgs, setErrorMsgs] = useState('');
    const [errorType, setErrorType] = useState({ email: false, password: false, phone: false })

    // direct login from register page
    const { setIsLoggedIn } = useContext(LoginContext);
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

    // submit form
    const handleErrorReset = () => {
        setErrorType({ email: false, password: false, phone: false });

    }

    async function handleSubmit(e) {
        e.preventDefault();
        let isValid = true;
        // checks if the required fields are filled in 
        if (!name || !email || !password) {
            isValid = false;
            setError(true);
            if (!name) {
                setErrorMsgs('請填寫姓名欄位！')
            } else if (!email) {
                setErrorMsgs('請填寫信箱欄位！')
            } else if (!password) {
                setErrorMsgs('請填寫密碼欄位！')
            }
            buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', alignToTop: false });
        }
        // only sends request if the required fields are filled
        if (isValid) {
            try {
                // 會帶入的 data
                let item = { name, email, password, user_phone, user_gender, user_birthday }
                await axios.post('http://localhost:8000/api/register', item, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(() => {
                        axios.post('http://localhost:8000/api/login', { email: email, password: password },
                            {
                                headers: { 'Content-type': 'application/json', }
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
                    })
            } catch (error) {
                console.log(error);
                setError(true);
                switch (error.response.data.message) {
                    case "wrong email format":
                    case "wrong email format (and 1 more error)":
                    case "wrong email format (and 2 more errors)":
                        setErrorMsgs('Email格式不正確！');
                        setErrorType({ ...errorType, email: true });

                        break;
                    case "wrong password format":
                    case "wrong password format (and 1 more error)":
                    case "wrong password format (and 2 more errors)":
                        setErrorMsgs('密碼長度至少需要 8 碼！');
                        setErrorType({ ...errorType, password: true });
                        break;
                    case "email taken":
                    case "email taken (and 1 more error)":
                    case "email taken (and 2 more errors)":
                        setErrorMsgs('這個信箱已經有人使用了！');
                        setErrorType({ ...errorType, email: true });
                        break;
                    case "wrong phone format":
                    case "wrong phone format (and 1 more error)":
                    case "wrong phone format (and 2 more errors)":
                        setErrorMsgs('手機格式不符合呦！');
                        setErrorType({ ...errorType, phone: true });
                        break;
                    default:
                        break;
                }
                buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', alignToTop: false });
                // go to div that shows error
            }
        }
    }

    return (
        <>
            <div className="register-bg-box d-flex justify-content-center align-items-center">
                <div className='register-pic-form d-flex align-items-center justify-content-between'>
                    {/* ===== left side =====*/}
                    <div className='ml-5  w-50' style={{ 'overflow': 'hidden' }}>
                        <Carousel
                            interval={3000}
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            transitionTime={1000}
                        >
                            <div>
                                <img src="/imgs/register/toy.jpeg" alt='carousel' />
                                <p className="legend">被官稲荷神社狐狸使者お姿</p>
                            </div>
                            <div>
                                <img src="/imgs/register/strawberry.jpeg" alt='carousel' />
                                <p className="legend">【春櫻草莓季】永井園 草莓鹽洋芋片🍓🧂🥔</p>
                            </div>
                            <div>
                                <img src="/imgs/register/chocolate.jpeg" alt='carousel' />
                                <p className='legend'>天然著色！Shodai Bio Nature~繽紛花瓣巧克力薄片</p>
                            </div>
                            <div>
                                <img src="/imgs/register/cookie.jpeg" alt='carousel' />
                                <p className='legend'>【各地の日本食】岩手縣納豆仙貝🍘</p>
                            </div>
                            <div>
                                <img src="/imgs/register/mushroom.jpeg" alt='carousel' />
                                <p className='legend'>滾動菇菇木偶🍄從山坡上輕輕地滾下來了</p>
                            </div>
                            <div>
                                <img src="/imgs/register/pudding.jpeg" alt='carousel' />
                                <p className='legend'>【春櫻草莓季】櫻花漬果凍布丁🌸🍮</p>
                            </div>
                            <div>
                                <img src="/imgs/register/shampoo.jpeg" alt='carousel' />
                                <p className="legend"> Maa honey Shampoo 洗髮乳👸🏻被滿滿蜂蜜和花草香氣圍繞</p>
                            </div>
                            <div>
                                <img src="/imgs/register/cat.jpeg" alt='carousel' />
                                <p className='legend'>necono 貓項圈 『 Luce Bell 』🔔鈴鈴鈴我在這裡喔！</p>
                            </div>
                        </Carousel>
                    </div>

                    {/* ===== right side ===== */}
                    <div className="register-form">
                        <p>註冊新帳號</p>
                        <div className='d-flex justify-content-between'>
                            <div className='rlogin btn btn-light' onClick={facebookLogin}><i className="fa-brands fa-facebook-f">註冊</i></div>
                            <div className='rlogin btn btn-light' onClick={googleLogin}><i className="fa-brands fa-google">註冊</i></div>
                        </div>
                        {/* error message */}
                        <div ref={buttonRef}></div>
                        <div className={`${!error ? "hidden" : ""}`}>
                            <div className='bg-danger px-2 py-3 text-center text-white small mt-3'
                                style={{ 'width': `300px`, 'borderRadius': `5px`, 'border': `1px solid black` }}>
                                {errorMsgs}
                            </div>
                        </div>

                        <form>
                            {/* ============ name ============= */}
                            <label>姓名*</label>
                            <div >
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="register-name" placeholder="請輸入姓名" required />
                            </div>
                            {/* ============ email ============= */}
                            <label>Email*</label>
                            <div>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="register-email" placeholder="請輸入Email"
                                    required className={`${error && errorType.email ? "highlight" : ""}`} />
                            </div>
                            {/* ============ password ============= */}
                            <label>密碼*</label>
                            <div>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="register-pwd" placeholder="請輸入密碼"
                                    required className={`${error && errorType.password ? "highlight" : ""}`} />
                            </div>
                            {/* ============ phone ============= */}
                            <label>手機號碼</label>
                            <div>
                                <input type="text" value={user_phone} onChange={(e) => setUser_Phone(e.target.value)} id="register-phone"
                                    placeholder="請輸入手機號碼" className={`${error && errorType.phone ? "highlight" : ""}`} />
                            </div>

                            <div className='d-flex justify-content-between'>
                                {/* ============ gender ============= */}
                                <div className='d-flex flex-column'>
                                    <label>性別</label>
                                    <div>
                                        <select id="form-gender" name="form-gender" className="custom-select" style={{ opacity: '0.6' }}
                                            value={user_gender} onChange={e => setUser_Gender(e.target.value)}>
                                            <option value="male">男</option>
                                            <option value="female">女</option>
                                            <option value="others">其他</option>
                                        </select>
                                    </div>
                                </div>


                                {/* ============ birthday ============= */}
                                <div className='d-flex flex-column'>
                                    <label>生日</label>
                                    <div>
                                        <input type="date" value={user_birthday} style={{ opacity: '0.5' }}
                                            onChange={(e) => setUser_Birthday(e.target.value)} id="register-birthday" placeholder="請輸入手機號碼" />
                                    </div>
                                </div>
                            </div>


                            <div className="register-btn">
                                <input onClick={handleSubmit}
                                    type="submit" value="註冊" />
                            </div>
                        </form>


                        <div className="register-options d-flex flex-column align-items-center">
                            <div className='mt-2'>
                                <span>已經有帳號？</span>
                                <Link className='text-danger' to="/login" style={{ textDecoration: 'underline' }}>立即登入</Link>
                            </div>
                            <div className='text-center mt-4 mb-3' style={{ fontSize: `5px` }}>
                                點擊註冊，即表示您已閱讀並同意Select Go的
                                <br />
                                服務條款 與 隱私權政策
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        </>
    );
}

export default Register;