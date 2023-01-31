import "./App.js";
import "./css/style.css";
import "./css/style2.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import components
import Content from "./components/Content";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Protected from "./components/Protected.jsx";
// set global state and make sure it doesn't change on refresh
import { LoginContext } from "./Global_State/Context.js";

import Index from "./pages/Home/Index.jsx";
import Product from "./pages/Home/Product";
import ProductUp from "./pages/Home/ProductUp";
import ProductList from "./pages/Home/ProductList";
import ProductDetail from "./pages/Home/ProductDetail";
import Wish from "./pages/Wish/Index";
import Cart from "./pages/Cart/Index";
import Member from "./pages/Member/Index";
import Backend from "./pages/Backend/Index";
import Header from "./components/Header";

import WishProduct from "./pages/Wish/WishProduct";

import Checkout from "./pages/Cart/checkout/Checkout";
import Upload from "./pages/Cart/upload";
import Success from "./pages/Cart/checkout/Success";
import Fail from "./pages/Cart/checkout/fail";
// import "./styles/Cart.scss";
// import "./styles/Header.scss";
// import "./styles/Checkout.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // make sure it retains the previous state
  useEffect(() => {
    const data = localStorage.getItem("user_login_status");
    // console.log(data)
    if (data !== null) {
      setIsLoggedIn(JSON.parse(data));
    }
  }, []);
  // sets the isLoggedIn state when it changes
  useEffect(() => {
    localStorage.setItem("user_login_status", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  return (
    <>
      {/* share global state made with createContext */}
      <BrowserRouter>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
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
              {/* Johnny's Routes */}
              <Route path="/member">
                <Protected Cmp={Content} />
              </Route>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* Error Page */}
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
