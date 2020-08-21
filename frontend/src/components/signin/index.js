import React, {Component} from 'react';
import Button from '../forms/button';

class SignIn extends Component {

    submit = async e => {
        e.preventDefault();
    }
    render() {
    return (
        <section className="signin">
            <h2>Sign In</h2>
            <form onSubmit={this.submit}>
                <Button >
                    Sign in with google
                </Button>
            </form>
        </section>
    );
    }
}

export default SignIn;
