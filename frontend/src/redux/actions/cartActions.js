export const CART_ACTIONS = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
};

export const addProduct = (product) => {
    return {
        type: CART_ACTIONS.ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = (id) => {
    return {
        type: CART_ACTIONS.REMOVE_PRODUCT,
        payload: id
    }
}