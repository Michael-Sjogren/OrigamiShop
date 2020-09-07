import React from 'react';
import {connect , useSelector} from 'react-redux';
import { CartProduct }  from '../components/product/Product';
const Checkout = () => {
    const products = useSelector(state => state.cart.products);
    return (
        <section className="checkout my-5">
            <h1>Checkout</h1>
            {products.length === 0 ? <p>Cart is empty!</p> : <></>}
            {products.map((product , index) => <CartProduct key={product.name + "_" + index} product={product}/>)}

        </section>
    );
}

export default connect(null,{})(Checkout);