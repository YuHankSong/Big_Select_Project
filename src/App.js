import React, { Component } from 'react';
import './App.js';
import './css/style.css';
import './css/style2.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Info from './components/Info.jsx';
import Wish from './components/Wish.jsx';
import Order from './components/Order.jsx';
import OrderFinished from './components/OrderFinished.jsx';
import OrderDetails from './components/OrderDetails.jsx';
import Coupon from './components/Coupon.jsx'
import Error from './components/Error.jsx';
import Footer from './components/Footer.jsx';
// import { faRandom } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/" component={Order} />
          <Route exact path="/member" component={Order}/>
          <Route path="/member/Order" component={Order}/>
          <Route path="/member/OrderDetails" component={OrderDetails}/>
          <Route path="/member/OrderFinished" component={OrderFinished}/>
          <Route path="/member/Wish" component={Wish} />
          <Route path="/member/Info" component={Info} />
          <Route path="/member/Coupon" component={Coupon} />
          <Route component={Error} />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
