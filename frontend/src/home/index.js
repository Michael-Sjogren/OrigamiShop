import React from 'react';
import './style.scss';
import squirrelOrigamis from '../assets/images/origamishop-squriells.png';
import Product from '../components/product/Product';

const Homepage = props => {

    const products = [ 
    {
        id: 2,
        name:"Dog",
        price: 32,
        img: "",
        imgAlt: "some alt"
    },
    {
        id: 3,
        name:"Black Swan",
        price: 23,
        img: "",
        imgAlt: "some alt"
    },
    {
        id: 5,
        name:"Squirell",
        price: 40,
        img: "",
        imgAlt: "some alt"
    },
    ];
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
                {products.map( ( product , index) => <div key={index} className="col-sm-12 col-md-4 col-lg-4"><Product product={product}></Product></div>)}
            </div>


        </section>
    )
}

export default Homepage;
