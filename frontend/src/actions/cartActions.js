import axios from "axios"
import {
    ADD_TO_CART,
    REMOVE_FROM_CART

} from "../constants/cartConstants"

export const addToCart = (id, qty) => async (dispatch, getState) => {

    // if((id)){
        const { data } = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`)

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
    // }
}