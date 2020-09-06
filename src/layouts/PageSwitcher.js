import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import ProductsPage from '../pages/ProductsPage';
import SingleProductPage from '../pages/SingleProductPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const PageSwitcher = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:name" component={SingleProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default PageSwitcher;