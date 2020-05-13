import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Books from "./pages/Books"
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item active p-2">
              <Link to={"/search"}>Search</Link>
            </li>
            <li className="nav-item active p-2">
              <Link to={"/saved"}>Saved</Link>
            </li>
          </ul>
        </nav>

        <div className="pt-5">
          <Route exact path="/" component={Books} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </div>
      </div>
    </Router>
  );
}

export default App;
