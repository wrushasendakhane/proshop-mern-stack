import React from 'react'
import { Container } from 'react-bootstrap'
import { Route } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import OrderListScreen from './screens/OrderListScreen'
import OrderScreen from './screens/OrderScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import UserEditScreen from './screens/UserEditScreen'
import UserListScreen from './screens/UserListScreen'


const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container >
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/productlist" exact component={ProductListScreen} />
          <Route path="/admin/productlist/:pageNumber" exact component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" exact component={HomeScreen} />
          <Route path="/page/:pageNumber" exact component={HomeScreen} />
          <Route path="/search/:keyword/page/:pageNumber" exact component={HomeScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
