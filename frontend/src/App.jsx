<<<<<<< HEAD
import { Container, Row, Col } from "react-bootstrap"
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
>>>>>>> 0534c04b68a933037f11b03bc22415e50000dc25

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
<<<<<<< HEAD

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

=======
import CartScreen from "./screen/CartScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import ProfileScreen from "./screen/ProfileScreen";
import ShippingScreen from "./screen/ShippingScreen";
import PaymentScreen from "./screen/PaymentScreen";
import PlaceOrderScreen from "./screen/PlaceOrderScreen";
import OrderScreen from "./screen/OrderScreen";
import UserListScreen from "./screen/UserListScreen";
import UserEditScreen from "./screen/UserEditScreen";
import ProductListScreen from "./screen/ProductListScreen";
import ProductEditScreen from "./screen/ProductEditScreen";
>>>>>>> 0534c04b68a933037f11b03bc22415e50000dc25

function App() {
  return (
    <Router>
<<<<<<< HEAD
    <Header/>
    <main className="py-5">
      <Container>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/product/:id" element={<ProductScreen/>}/>
        </Routes>
      </Container>
    </main>
    <Footer/>
=======
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/register" element={<RegisterScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="admin/userlist" element={<UserListScreen/>} />
            <Route exact path="admin/user/:id/edit" element={<UserEditScreen/>} />
            <Route exact path="admin/productlist" element={<ProductListScreen/>} />
            <Route exact path="admin/product/:id/edit" element={<ProductEditScreen/>} />

            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/cart/:id?" element={<CartScreen />} />
            <Route exact path="/shipping" element={<ShippingScreen />} />
            <Route exact path="/payment" element={<PaymentScreen />} />
            <Route exact path="/placeorder" element={<PlaceOrderScreen />} />
            <Route exact path="/order/:id" element={<OrderScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
>>>>>>> 0534c04b68a933037f11b03bc22415e50000dc25
    </Router>
  );
}

export default App;
