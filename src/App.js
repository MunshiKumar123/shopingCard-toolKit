import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/productdetail/:n" component={ProductDetail} />
        <Route exact path="/navbar" component={Navbar} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
