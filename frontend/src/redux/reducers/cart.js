import { CART_ACTIONS } from '../actions/cartActions';


const initialState = {
    products: [],
    productCount: 0
};
const cartReducer = (state = initialState, action) =>
{
    switch(action.type){
        case CART_ACTIONS.ADD_PRODUCT:
            
            // check if product id already exists in cart , if so add to quantity else add product to cart
            const product = action.payload.product;
            const identicalProducts = state.products.filter(p => p.product.id === product.id);
            if(identicalProducts.length > 0){ 
                return addQuantity(state , product.id);
            }

            return {
                ...state,
                products: [...state.products,action.payload],
                productCount: countProductsInCart([...state.products,action.payload])
            };
        case CART_ACTIONS.REMOVE_PRODUCT:
            return removeProduct(state, action.payload);
        case CART_ACTIONS.SUB_QUANTITY:
            return subQuantity(state, action.payload);
        case CART_ACTIONS.ADD_QUANTITY:
            return addQuantity(state, action.payload);

        default:
            return state;
    }
}

const subQuantity = (state, id) => {
    const i = state.products.findIndex(p => p.product.id === id);
    console.log(state.products[i]);
    state.products[i].quantity -= 1;
    if(state.products[i].quantity <= 0) {
        state.products.splice(i , 1);
        return {
            ...state,
            products: [...state.products],
            productCount: countProductsInCart(state.products)
        };
    }
    return {
        ...state,
        products: [...state.products],
        productCount: countProductsInCart(state.products)
    }
}

const countProductsInCart = (products) => {
    if(products.length === 0) return 0;
    const count = products.reduce( (c,{quantity}) => c + quantity , 0);
    console.log('Count' ,count)
    return count;
};

const removeProduct = (state, id) => {
    const index = state.products.findIndex( e => e.product.id === id);
    if(index === -1) return state;
    state.products.splice(index , 1);
    return {
        ...state,
        products: [...state.products],
        productCount: countProductsInCart(state.products)
    }
}
const addQuantity = (state , id) => {
    const i = state.products.findIndex(p => p.product.id === id);
    state.products[i] = {
        ...state.products[i],
        quantity: state.products[i].quantity +1
    };
    return {
        ...state,
        products: [...state.products],
        productCount: state.productCount +1
    }
};

export default cartReducer;