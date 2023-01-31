import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { LoginContext } from '../Global_State/Context';

const MainPage = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    return (
        <div className='container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
            <h1>Main Page</h1>
            <img src="/imgs/webshopping.png" alt="page" />
        </div>
    );
}

export default MainPage;