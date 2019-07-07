import React from 'react';
import { Container, Row, Col, Switch, Div, Button, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import App from '../App';


export class UploadPdf extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            
            <Container>
                <br></br>
                <Row>
                    <Col>
                        <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </Col>
                    <Col>
                        <Button>Upload</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UploadPdf