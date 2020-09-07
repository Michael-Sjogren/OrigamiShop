export const CART_ACTIONS = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
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

export const removeProduct = (id) => {
    return {
        type: CART_ACTIONS.REMOVE_PRODUCT,
        payload: id
    };
}

export const addQuantityProduct = (id) => {
    return {
        type: CART_ACTIONS.ADD_QUANTITY,
        payload: id
    }
}


export const subQuantityProduct = (id) => {
    return {
        type: CART_ACTIONS.SUB_QUANTITY,
        payload: id
    }
}