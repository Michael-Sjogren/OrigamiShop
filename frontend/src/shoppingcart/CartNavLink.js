import React from 'react';
import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addProduct , removeProduct} from '../redux/actions/cartActions';
import './style.scss';

const CartNavLink = props => {
    const cart = useSelector( state => state.cart);
    const cartItemCount = cart.products.length;
    return (
    <div>

    <Link to="/cart"> 
        <span>
        Cart
        </span>
    </Link>
    <span className="cart-icon-container">
            <i className="fa fa-shopping-cart"></i>
            
            <span className={ cartItemCount > 0 ? 'cart-badge-show' : 'cart-badge-hidden' }> {cartItemCount}</span> 
    </span>
    </div>
    );
}

export default connect( null , {addProduct , removeProduct})(CartNavLink);