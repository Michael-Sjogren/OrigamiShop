import { CART_ACTIONS } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

const initialState = {
    products: []

};
const cartReducer = (state = initialState, action) =>
{
    switch(action.type){
        case CART_ACTIONS.ADD_PRODUCT:
            
            // check if product id already exists in cart , if so add to quantity else add product to cart
            const identicalProducts = state.products.filter(p => p.id === action.payload.id);
            
            if(identicalProducts.length > 0){
                const index = state.products.findIndex(p => p.id === action.payload.id)
                state.products[index] = {
                    quantity: state.products[index].quantity +1,
                    product: action.payload
                };
                return state;
            }
            
            return {
                ...state,
                products: [...state.products,action.payload]
            };
        case CART_ACTIONS.SUB_QUANTITY:
            // delete from cart
            return state;
        case CART_ACTIONS.ADD_QUANTITY:
            // delete from cart
            return state;
        case CART_ACTIONS.CART_ITEM_COUNT:
            return state.products.reduce((a , b) => a.quantity + b.quantity , 0);
        default:
            return state;
    }
}

export default cartReducer;