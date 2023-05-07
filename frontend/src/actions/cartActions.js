import axios from "axios"
import {
    ADD_TO_CART,
    REMOVE_FROM_CART

} from "../constants/cartConstants"

export const addToCart = (id, qty) => async (dispatch, getState) => {

        const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`)

        dispatch({
            type: ADD_TO_CART,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload:id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}