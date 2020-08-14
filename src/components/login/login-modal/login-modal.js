import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBInput } from 'mdbreact';

class LoginModal extends Component {
    state = {  
        modal:false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    render(){
        return(
        <MDBContainer>
            {/* BUTTON */}
            <MDBBtn color="info" onClick={this.toggle}>Log in</MDBBtn>
            {/* MODAL */}
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
              <MDBModalHeader toggle={this.toggle}>Login</MDBModalHeader>
              <MDBModalBody>
              <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                success="right" />
                <MDBInput label="Type your password" icon="lock" group type="password" validate />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Cancel</MDBBtn>
                <MDBBtn color="primary">Login</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        );
    }
}
export default LoginModal;