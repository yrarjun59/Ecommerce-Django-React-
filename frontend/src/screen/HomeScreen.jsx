<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Row, Col } from 
'react-bootstrap'  
import Product from "../components/Products"


import axios from "axios"

function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchProducts(){
      const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
      }
    fetchProducts()
  },[])
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product=>(
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               <Product product={product}/>
              </Col>
            )) }
        </Row>
    </div>
  )
}

export default HomeScreen;
=======
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
>>>>>>> 0534c04b68a933037f11b03bc22415e50000dc25
