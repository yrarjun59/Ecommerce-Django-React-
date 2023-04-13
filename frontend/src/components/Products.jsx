import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from "react-router-dom"


function Products({product}) {
  return (
    <div>
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}/>
            </Link>
        </Card>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} from {product.numReviews} reviews
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#F79028'}/>
                </div>
            </Card.Text>

            <Card.Text as="div">
                <strong>Rs {product.price}</strong>
            </Card.Text>

        </Card.Body>
    </div>
  )
}

export default Products