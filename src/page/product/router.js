import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ProductList from 'page/product/index/index.js';
import ProductSave from 'page/product/index/save.js';
import ProductDetail from 'page/product/index/detail.js';

class ProductRouter extends React.Component {
  
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ProductList}/>
        <Route path="/product/save/:pid?" component={ProductSave}/>
        <Route path="/product/detail/:pid" component={ProductDetail}/>
        <Redirect exact from="/product" to="/product/index"/>
      </Switch>
    );
  }
}

export default ProductRouter;