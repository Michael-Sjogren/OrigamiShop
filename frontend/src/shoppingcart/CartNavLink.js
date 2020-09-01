import React from 'react';
import {useSelector } from 'react-redux';

import './style.scss';
import { Link } from 'react-router-dom';

const CartNavLink = props => {
    const cart = useSelector( state => state.cart);
    const cartItemCount = cart.products.reduce((a,b) => a.quantity + b.quantity , 0);

    
    return (
    <div className="cart-nav">
        <div className="cart-button" >
            <Link to="/checkout">
                Cart
            <span className="cart-icon-container">
                    <i className="fa fa-shopping-cart"></i>
                    
                    <span className={ cartItemCount > 0 ? 'cart-badge-show' : 'cart-badge-hidden' }> {cartItemCount}</span> 
            </span>
            </Link>
        </div>
    </div>
    );
}

export default CartNavLink;