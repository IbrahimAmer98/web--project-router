import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SingUp";
function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
