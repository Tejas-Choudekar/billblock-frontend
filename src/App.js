import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Register from './Components/Register';
import Files from './Components/Files';
import Header from './Reusable/Header';
import UploadFile from './Components/UploadFile';

export class App extends React.Component {
  render() {
    return (
        <Router>
          <Header />
          <Route path="/" exact component={Appl} />
          <Route path="/uploadFile" component={UploadFile} />
          <Route path="/Register" component={Register} />
          <Route path="/Files" component={Files} />
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
            <Card.Header>1</Card.Header>
            <Card.Body>Upload File</Card.Body>
            </Link>
          </Card>
        </Col>
        <Col md='3'>
          <Card>
          <Link to='/Login'>
            <Card.Header>2</Card.Header>
            <Card.Body>Login</Card.Body>
            </Link>
          </Card>
        </Col>
        <Col md='3'>
          <Card>
          <Link to='/Register'>
            <Card.Header>3</Card.Header>
            <Card.Body>Register</Card.Body>
            </Link>
          </Card>
        </Col>
        <Col md='3'>
          <Card>
          <Link to='/Files'>
            <Card.Header>3</Card.Header>
            <Card.Body>Files</Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(App);
