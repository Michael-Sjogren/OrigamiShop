import React from 'react';
import './style.scss';
import squirrelOrigamis from '../assets/images/origamishop-squriells.png';
import Product from '../components/product/Product';

const Homepage = props => {
    return (
        <section className="home mt-3 mb-5">
            <section className="intro">

            <h1 className="headline">ORIGAMI SHOP</h1>
            <div className="row d-flex">
                <div className="col-md-6 col-sm-12 d-flex align-items-center">
                    <p className="">
                        Buy our beatuiful handcrafted orgami made from our expert Japanese origami craftsmen.
                    </p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={squirrelOrigamis} alt={"Two origami squirrells facing eachother."} />
                </div>
            </div>
            </section>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product></Product>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product></Product>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <Product></Product>
                </div>
            </div>


        </section>
    )
}

export default Homepage;
