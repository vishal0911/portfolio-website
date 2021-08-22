import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Netflix from './Netflix';
import Linkedin from './Linkedin';
import Ecommerce from './Ecommerce';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/ecommerce">
            <Ecommerce />
          </Route>

          <Route path="/netflix">
            <Netflix />
          </Route>

          <Route path="/linkedin">
            <Linkedin />
          </Route>

          <Route path="/">
            <HomeScreen />
          </Route>

        </Switch>
      </Router>

    </div>

  );
}

export default App;
