import { Container, Row, Col } from "react-bootstrap"

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import LoginScreen from "./screen/LoginScreen";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RegisterScreen from "./screen/RegisterScreen";
import ProfileScreen from "./screen/ProfileScreen";


function App() {
  return (
    <Router>
    <Header/>
    <main className="py-5">
      <Container>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/register" element={<RegisterScreen/>}/>
          <Route exact path="/profile" element={<ProfileScreen/>}/>

          <Route exact path="/product/:id" element={<ProductScreen/>}/>
          <Route exact path="/cart/:id?" element={<CartScreen/>}/>
        </Routes>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
