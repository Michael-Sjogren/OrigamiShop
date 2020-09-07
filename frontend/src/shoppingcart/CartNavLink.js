import React from 'react';
import {useSelector, connect } from 'react-redux';
import { addProduct , addQuantityProduct , subQuantityProduct} from '../redux/actions/cartActions';
import './style.scss';
import { Link } from 'react-router-dom';

const CartNavLink = props => {
    const cart = useSelector( state => state.cart);

    
    return (
    <div className="cart-nav">
        <div className="cart-button" >
            <Link to="/checkout">
                Cart
            <span className="cart-icon-container">
                    <i className="fa fa-shopping-cart"></i>
                    
                    <span className={ cart.productCount > 0 ? 'cart-badge-show' : 'cart-badge-hidden' }> { cart.productCount }</span> 
            </span>
            </Link>
        </div>
    </div>
    );
}

export default connect(null,{addProduct , addQuantityProduct , subQuantityProduct}) (CartNavLink);