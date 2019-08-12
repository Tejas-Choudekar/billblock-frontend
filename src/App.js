import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import UploadFile from './Components/UploadFile';
import Header from './Reusable/Header';

export class App extends React.Component {
  render() {
    return (

        <Router>
          <Header />
          <Route path="/" exact component={Appl} />
          <Route path="/uploadFile" component={UploadFile} />
        </Router>
  
    );
  }


}

function Appl() {
  return (
    <Container>
      <Row>
        <Col md='3'>
          <Card>
          <Link to='/uploadFile'>
            <Card.Header>Upload File</Card.Header>
            <Card.Body>Upload File</Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(App);
