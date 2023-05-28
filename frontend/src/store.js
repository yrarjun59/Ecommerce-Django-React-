import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailReducer,
  productListReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userProfileUpdateReducer,
  userRegisterReducer,
  userUpdateReducer,
  userloginReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  cart: cartReducer,

  userLogin: userloginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userProfileUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderListMy: orderListMyReducer,
  orderPay: orderPayReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userLoginFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
