import React from "react";
import Nav from "./Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ShopItem from "./pages/ShopItem";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <section className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ShopItem} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
