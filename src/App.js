import './App.js';
import './css/style.css';
import './css/style2.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import components
import Navbar from './components/Navbar.jsx';
import Content from './components/Content';
import Error from './components/Error.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Protected from './components/Protected.jsx';
import MainPage from './components/MainPage.jsx';
// set global state and make sure it doesn't change on refresh
import { LoginContext } from './Global_State/Context.js';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // make sure it retains the previous state
  useEffect(() => {
    const data = localStorage.getItem('user_login_status');
    // console.log(data)
    if (data !== null) {
      setIsLoggedIn(JSON.parse(data))
    }
  }, [])
  // sets the isLoggedIn state when it changes
  useEffect(() => {
    localStorage.setItem('user_login_status', JSON.stringify(isLoggedIn))
  }, [isLoggedIn])


  return (
    <BrowserRouter>
      {/* share global state made with createContext */}
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/selectgo" component={MainPage} />
            <Route path="/member">
              <Protected Cmp={Content} />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </LoginContext.Provider>

    </BrowserRouter>
  );
}

export default App;