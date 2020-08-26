import { CART_ACTIONS } from '../actions/cartActions';

const initialState = {
    products: []

};
const cartReducer = (state = initialState, action) =>
{
    switch(action.type){
        case CART_ACTIONS.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products,action.payload]
            };
        case CART_ACTIONS.REMOVE_PRODUCT:
            // delete from cart
            return state;
        default:
            return state;
    }
}

export default cartReducer;