import cartReducer from './cart';
import isLoggedInReducer from './isLoggedIn';
import {combineReducers } from 'redux';

const reducers = combineReducers({
    cart:cartReducer,
    isLogged: isLoggedInReducer
});

export default reducers;