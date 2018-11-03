import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Layout from 'components/layout/index.js';

import Home           from 'page/home/index.js';
import ProductRouter  from 'page/product/router.js';
import Login          from 'page/login/index.js';
import ErrorPage      from 'page/error/index.js';
import OrderList      from 'page/order/index.js';
import OrderDetail    from 'page/order/detail.js';
import UserList       from 'page/user/index.js';

class App extends React.Component {
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/product" component={ProductRouter}/>
          <Route path="/product-category" component={ProductRouter}/>
          <Route path="/order/index" component={OrderList}/>
          <Route path="/order/detail/:orderNumber" component={OrderDetail}/>
          <Route path="/user/index" component={UserList}/>
          <Redirect exact from="/order" to="/order/index"/>
          <Redirect exact from="/user" to="/user/index"/>
          <Route component={ErrorPage}/>
        </Switch>
      </Layout>
    );
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={(props) => LayoutRouter}/>
            
          </Switch>
        </Router>
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