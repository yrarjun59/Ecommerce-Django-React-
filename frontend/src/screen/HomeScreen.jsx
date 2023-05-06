import React, { useEffect, useState } from 'react'
import { Row, Col } from 
'react-bootstrap'  
import Product from "../components/Products"
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomeScreen() {
const dispatch = useDispatch()
const {products,error, loading} = useSelector(state=>state.productList)

  useEffect(()=>{
      dispatch(listProducts())

    },[dispatch])
  

  return (
    <div>
        <h1>Latest Products</h1>
        {loading ? <Loader/> 
          :error ? <Message variant='danger'>{error}</Message>
          : 
          <Row>
              {products.map(product=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
                </Col>
              )) }
          </Row>
      }
    </div>
  )
}

export default HomeScreen;