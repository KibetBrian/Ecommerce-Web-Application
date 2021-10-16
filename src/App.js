import React from 'react';
import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import SuccessPayment from './Components/PayPal/Success/SuccessPayment';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ProductList from './Pages/ProductList/ProductList';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector((state)=> state.user.currentUser)

  console.log('This is user app',)
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/product-details/:id">
             <ProductDetails />
          </Route>
          <Route path = "/products">
             <ProductList />
          </Route>
          <Route path = "/login">
            {user? <Redirect to = "/"/>: <LoginPage />}
          </Route>
          <Route path = "/register">
            {user? <Redirect to = "/"/>: <RegisterPage /> }
          </Route>
          <Route path = "/cart">
             <Cart />
          </Route>
          <Route path = "/success">
             <SuccessPayment />
          </Route>
        </Switch>          
      </Router>
    </div>
  )
}

export default App



