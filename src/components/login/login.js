import React, { Component } from 'react';

import LoginModal from './login-modal/login-modal'

class Login extends Component {
    state = {
        isLoggedIn: false
    }
    constructor(){
        super()
        this.setState({
            isLoggedIn: false
        })
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    login(){
        this.setState({
            isLoggedIn:true
        })
    }

    logout(){
        this.setState({
            isLoggedIn:false
        })
    }

    render() {

        return(
            <span>login</span>
        )
    }
}

export default Login;