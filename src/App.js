import './App.js';
import './css/style.css';
import './css/style2.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Content from './components/Content';
import Error from './components/Error.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Protected from './components/Protected.jsx';
import MainPage from './components/MainPage.jsx';

// import { faRandom } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
