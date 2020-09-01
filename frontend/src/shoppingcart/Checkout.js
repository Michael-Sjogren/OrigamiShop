import React from 'react';
import {connect , useSelector} from 'react-redux';
import { CartProduct }  from '../components/product/Product';
const Checkout = () => {
    const products = useSelector(state => state.cart.products);
    return (
        <section className="checkout">
            <h1>Checkout</h1>
            {products.map((product) => <CartProduct product={product}/>)}
        </section>
    );
}

export default connect(null,{})(Checkout);