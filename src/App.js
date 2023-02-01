import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Index from "./pages/Home/Index";
import Product from "./pages/Home/Product";
import ProductUp from "./pages/Home/ProductUp";
import ProductList from "./pages/Home/ProductList";
import ProductDetail from "./pages/Home/ProductDetail";
import Wish from "./pages/Wish/Index";
import Cart from "./pages/Cart/Index";
import Member from "./pages/Member/Index";
import Backend from "./pages/Backend/Index";
import Error from "./components/Error";
import Header from "./components/Header";

import WishProduct from "./pages/Wish/WishProduct";

import Checkout from "./pages/Cart/checkout/Checkout";
import Upload from "./pages/Wish/img";
import Success from "./pages/Cart/checkout/Success";
import Fail from "./pages/Cart/checkout/fail";
// import "./styles/Cart.scss";
// import "./styles/Header.scss";
// import "./styles/Checkout.scss";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/selectgo/" component={Index} exact />
            <Route path="/selectgo/product" component={Product} exact />
            <Route
              path="/selectgo/product/Productup"
              component={ProductUp}
              exact
            />
            <Route
              path="/selectgo/product/ProductList"
              component={ProductList}
              exact
            />
            <Route
              path="/selectgo/product/ProductDetail"
              component={ProductDetail}
              exact
            />
            <Route path="/selectgo/wishproduct" component={WishProduct} />
            <Route path="/selectgo/Wish" component={Wish} />

            <Route path="/selectgo/Wish/:id" component={Wish} />
            <Route path="/selectgo/Cart" component={Cart} exact />
            <Route path="/selectgo/checkout" component={Checkout} exact />
            <Route path="/selectgo/Success" component={Success} exact />
            <Route path="/selectgo/Fail" component={Fail} exact />
            {/* <Route path="/selectgo/wishproduct" component={WishProduct} /> */}
            <Route path="/selectgo/wishproduct" component={Upload} />
            <Route path="/selectgo/Wish" component={Wish} />
            {/* <Route path="/selectgo/Wish/:id" component={Wish} /> */}
            <Route path="/selectgo/Cart" component={Cart} />
            <Route path="/selectgo/Member" component={Member} />
            <Route path="/selectgo/Backend" component={Backend} />
            <Route path="/upload" component={Upload} />
            <Route path="/" component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
