import React from 'react';
import App from "../App";
import { Button, Container, Row, Col, Navbar, Nav} from 'react-bootstrap';

export class Header extends React.Component {

    logout(){
        sessionStorage.setItem('loggedUser', 'login')
        window.location.reload()
    }

    render() {
        return (
                <Navbar bg="dark" variant="dark">
                    
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Block Doc'}
                    </Navbar.Brand>
                    
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Button onClick={this.logout}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Header