import React, { Component } from 'react';
import './style.scss';
import turtleImg from '../../assets/images/turtle-origami.jpg';
import Button from '../../components/forms/button/index';

class Product extends Component{

    addToCart(){
        
    }
    render(){
        return(
            <div className="product card p-3">
                <h4 className="text-center">Origami Trutle</h4>
    
                    <img className="text-center" src={turtleImg} alt="trurtle"/>
                <div className="d-flex card-body justify-content-between align-items-center">
                    <span className="price">$32</span>
                    <Button onClick={this.addToCart} className="button small flat">Add</Button>
                </div>
            </div>
        );
    }
}

export default Product;