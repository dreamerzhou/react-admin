import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Home from 'page/home/index.js';
import Layout from 'components/layout/index.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/product" component={Home}></Route>
              <Route exact path="/product-category" component={Home}></Route>
            </Switch>
          </Router>
        </Layout>
      </div>

    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>
  ,
  document.getElementById('app')
)