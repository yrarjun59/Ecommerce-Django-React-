import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer'
import { Button, Form } from 'react-bootstrap';
import { saveShippingAddress } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import LoginScreen from './LoginScreen';


function ShippingScreen() {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)

    const  submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode }))
        navigate('/payment')
    }

  return (
    <FormContainer>
        <CheckoutSteps/>
        <h1>Shipping </h1>
        <Form.Group controlId='address'>
            <Form.Label>
                Address
            </Form.Label>
            <Form.Control required
                type='text'
                placeholder='Enter Address'
                value={address?address:''}
                onChange={(e) => setAddress(e.target.value)}
                        >
            </Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label>
                City
            </Form.Label>
            <Form.Control required
                type='text'
                placeholder='Enter City'
                value={city?city:''}
                onChange={(e) => setCity(e.target.value)}
                        >
            </Form.Control>
        </Form.Group>


        <Form.Group controlId='postalcode'>
            <Form.Label>
                Postal Code
            </Form.Label>
            <Form.Control required
                type='text'
                placeholder='Postal Code'
                value={postalCode?postalCode:''}
                onChange={(e) => setPostalCode(e.target.value)}
                        >
            </Form.Control>
        </Form.Group>

        <Button onClick={submitHandler} type="submit" className='btn-primary'>
            Confirm
        </Button>

    </FormContainer>
  )
}

export default ShippingScreen