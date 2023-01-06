import '../css/auth.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
    // runs only once, if localstorage contains user-info, it'll redirect to /member
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/member')
        }
    }, [])
    const history = useHistory();

    // set variables for our registration form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signUp(e) {
        e.preventDefault();
        let item = { name, email, password }
        // console.warn(item);

        // grab data from API I made in Laravel
        let result = await fetch('http://localhost:8000/api/register', {
            method: "POST",
            body: JSON.stringify(item),
            headers: { "Content-Type": "application/json" }     // we can find this in postman
        })
        result = await result.json();
        // console.warn("result:" , result)
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push('/login');

    }



    return (
        <>
            <div className="register-form">
                <p>註冊新帳號</p>
                <div className="logo"><img src="./imgs/logo.jpg" alt="logo" /></div>
                <form action="">

                    {/* ============ email ============= */}
                    <label htmlFor="register-email">Email</label>
                    <div>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="register-email" placeholder="請輸入Email" required />
                    </div>

                    {/* ============ password ============= */}
                    <label htmlFor="register-pwd">密碼</label>
                    <div>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} id="register-pwd" placeholder="請輸入密碼" required />
                    </div>

                    {/* ============ name ============= */}
                    <label htmlFor="register-name">姓名</label>
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="register-name" placeholder="請輸入姓名" required />
                    </div>


                    {/* <label htmlFor="register-phone">手機號碼</label>
                    <div>
                        <input type="text" id="register-phone" placeholder="請輸入手機號碼" required />
                    </div>
                    <label htmlFor="register-nickname">暱稱</label>
                    <div>
                        <input type="text" id="register-nickname" placeholder="請輸入暱稱" />
                    </div> */}

                    {/* <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>

                        <div style={{ display: "block" }}>
                            <label htmlFor="register-gender">性別</label>
                            <div>
                                <select name="gender" id="register-gender">
                                    <option value="" disabled defaultChecked hidden>請選擇性別</option>
                                    <option value="male">男生</option>
                                    <option value="female">女生</option>
                                    <option value="others">其他</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: "block" }}>
                            <label htmlFor="register-bday">生日</label>
                            <div>
                                <input type="date" id="register-bday" />
                            </div>
                        </div>
                    </div> */}

                    <div className="register-btn">
                        <input onClick={signUp} type="submit" value="註冊" />
                    </div>
                </form>


                <div className="register-options">
                    <span>已經有帳號？</span><Link to="/login">立即登入</Link>
                </div>
            </div>
        </>
    );
}

export default Register;