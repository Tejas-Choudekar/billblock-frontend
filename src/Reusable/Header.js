import React from 'react';
import App from "../App";
import { Button, Container, Row, Col, Navbar} from 'react-bootstrap';

export class Header extends React.Component {
    render() {
        return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Bill-Block'}
                    </Navbar.Brand>
                </Navbar>
        )
    }
}

export default Header