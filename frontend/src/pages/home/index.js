import React from 'react';
import './style.scss';
import LinkButton from '../../components/LinkButton';
import turtleOrigami from '../../assets/images/turtle-origami.jpg';
import squirrelOrigamis from '../../assets/images/origamishop-squriells.png';
const Homepage = props => {

    return (
        <section className="intro container">

            <h1 class="headline">ORIGAMI SHOP</h1>
            <div className="flex">
                <p>
                    Buy our beatuiful handcrafted orgami made from our expert Japanese origami craftsmen.
                            </p>
                <img class="hero-image" src={squirrelOrigamis} />
            </div>
            <ul className="actions">
                <li>
                    <LinkButton to="/products">Products</LinkButton>
                </li>
            </ul>

        </section>
    )
}

export default Homepage;
