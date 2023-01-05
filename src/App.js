import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home/Index";
import Wish from "./pages/Wish/Index";
import Cart from "./pages/Cart/Index";
import Member from "./pages/Member/Index";
import Backend from "./pages/Backend/Index";
import Error from "./components/Error";
import Header from "./components/Header";
import WishProduct from "./pages/Wish/WishProduct";

import Checkout from "./pages/Cart/checkout/Checkout";

import "./styles/Cart.scss";
// import "./styles/Header.scss";
import "./styles/Checkout.scss";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/selectgo/" component={Home} exact />
            <Route path="/selectgo/wishproduct" component={WishProduct} />
            <Route path="/selectgo/Wish" component={Wish} />

        


            <Route path="/selectgo/Wish/:id" component={Wish} />
            <Route path="/selectgo/Cart" component={Cart} exact />
            <Route path="/selectgo/Cart/checkout" component={Checkout} exact />

            <Route path="/selectgo/Member" component={Member} />
            <Route path="/selectgo/Backend" component={Backend} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
