import React from 'react';
import './style.scss';

import Button from '../../components/forms/button/index';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/cartActions';
const Product = props => {
        //const cart = useSelector(sate => sate.cart);
        const dispatch = useDispatch();
        return(
            <div className="product card p-3">
                <h4 className="text-center">{props.product.name}</h4>
                    <img className="text-center" src={props.product.img} alt={props.product.imgAlt}/>
                    <div className="d-flex card-body justify-content-between align-items-center">
                    <span className="price">${props.product.price}</span>
                    <Button onClick={()=> dispatch(addProduct(props.product))}  className="button small flat">Add</Button>
                </div>
            </div>
        );
}

export default Product;