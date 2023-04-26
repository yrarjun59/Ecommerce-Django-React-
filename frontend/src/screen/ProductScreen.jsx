import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';



function ProductScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {product,loading, error } = useSelector(state=>state.productDetail)
  
  
  useEffect(()=>{
    dispatch(detailProduct(id))
  },[])

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      {loading ?
      <Loader/>
      : error
      ? <Message variant='danger'>{error}</Message>  
      :(
        <Row>

        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#F79028'} />
            </ListGroup.Item>

            <ListGroup.Item>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>Rs {product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Stock:</Col>
                <Col>
                  {product.countInStock >0?'In Stock':'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button disabled={product.countInStock===0} className="btn-block" type="button">Add to Cart</Button>          
            </ListGroup.Item>
          </ListGroup>
        </Col>
        </Row>
      )
    }
    </div>
  )
}

export default ProductScreen;