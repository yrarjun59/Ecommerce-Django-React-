import { Container, Row, Col } from "react-bootstrap"

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
