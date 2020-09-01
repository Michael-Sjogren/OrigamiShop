export const CART_ACTIONS = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    ADD_QUANTITY: 'ADD_QUANTITY',
    SUB_QUANTITY: 'SUB_QUANTITY',
    CART_ITEM_COUNT: 'CART_ITEM_COUNT',
};

export const addProduct = (product) => {
    return {
        type: CART_ACTIONS.ADD_PRODUCT,
        payload: product
    }
}

export const addQuantityProduct = (id) => {
    return {
        type: CART_ACTIONS.ADD_QUANTITY,
        payload: id
    }
}

export const getItemCountInCart = () => {
    return {
        type: CART_ACTIONS.CART_ITEM_COUNT
    }
}

export const subQuantityProduct = (id) => {
    return {
        type: CART_ACTIONS.SUB_QUANTITY,
        payload: id
    }
}