import React, {Component} from 'react'
import { BrowserRouter, Route } from "react-router-dom";
// pages
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Home from '../pages/home/home'
import Products from '../pages/products/products'
class App extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header></Header>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/products" component={Products}/>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}

export default App