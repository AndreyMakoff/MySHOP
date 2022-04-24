import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import ProductcList from './pages/ProductcList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          <ProductcList />
        </Route>
        <Route path='/product/:id'>
          <Product />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};
export default App;