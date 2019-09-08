import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Register from './Components/Register';
import Files from './Components/Files';
import Header from './Reusable/Header';
import UploadFile from './Components/UploadFile';
import Login from './Components/Login';
import Inbox from './Components/Inbox';

export class App extends React.Component {

  render() {
    return (
        <Router>
          <Header />
          <Route path="/" exact component={Appl} />
          <Route path="/login" exact component={Login} />
          <Route path="/uploadFile" component={UploadFile} />
          <Route path="/files" component={Files} />
          <Route path="/register" component={Register} />
          <Route path="/inbox" component={Inbox} />
        </Router>
    );
  }
}

function Appl() {
  return (
    <Container>
      <br></br>
      <h3>Welcome to Block Doc, {sessionStorage.getItem('loggedUser')}</h3>
      <br></br>
      <Row>
        <Col md='3'>
          <Card>
          <Link to='/uploadFile'>
            <Card.Header>Upload File</Card.Header>
            <Card.Body>Send file to your contact</Card.Body>
            </Link>
          </Card>
        </Col>
        <Col md='3'>
          <Card>
          <Link to='/inbox'>
            <Card.Header>Inbox</Card.Header>
            <Card.Body>Check what you recieved</Card.Body>
            </Link>
          </Card>
        </Col>
        <Col md='3'>
          <Card>
          <Link to='/files'>
            <Card.Header>Files</Card.Header>
            <Card.Body>View your Files</Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(App);
