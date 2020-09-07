import React from 'react';
import './style.scss';

import Button from '../../components/forms/button/index';
import { useDispatch } from 'react-redux';
import { addProduct , addQuantityProduct , subQuantityProduct, removeProduct } from '../../redux/actions/cartActions';
export const Product = props => {
        //const cart = useSelector(sate => sate.cart);
        const p = {
            quantity: 1,
            product: props.product
        }
        const dispatch = useDispatch();
        return(
            <div className="product card p-3">
                <h4 className="text-center">{props.product.name}</h4>
                    <img className="text-center" src={props.product.img} alt={props.product.imgAlt}/>
                    <div className="d-flex card-body justify-content-between align-items-center">
                    <span className="price">${props.product.price}</span>
                    <Button onClick={()=> dispatch(addProduct(p))}  className="button small flat">Add</Button>
                </div>
            </div>
        );
}

// displayed in checkout
export const CartProduct = props => {
    //const cart = useSelector(sate => sate.cart);
    const dispatch = useDispatch();
    const product = props.product.product;
    const quantity = props.product.quantity;
    return(
        <div className="product card p-3">
            <h4 className="text-center">{product.name}</h4>
                <img className="text-center" src={product.img} alt={product.imgAlt}/>
                <div className="d-flex card-body justify-content-between align-items-center">
                <span className="price">${product.price*quantity}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <Button onClick={()=> dispatch(subQuantityProduct(product.id))}  className="button small flat">-</Button>
                    <span className="mx-2 border p-2">{quantity}</span>
                    <Button onClick={()=> dispatch(addQuantityProduct(product.id))}  className="button small flat">+</Button>
                    <Button onClick={()=> dispatch(removeProduct(product.id))} className="ml-3 button small flat"> <i className="fa fa-trash"/></Button>
                </div>

            </div>
        </div>
    );
}

export default Product;