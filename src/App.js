import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import UploadPdf from './Components/UploadPdf';
import Header from './Reusable/Header';

export class App extends React.Component {
  render() {
    return (

        <Router>
          <Header />
          <Route path="/" exact component={Appl} />
          <Route path="/uploadPdf" component={UploadPdf} />
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
          <Link to='/uploadPdf'>
            <Card.Header>Upload a PDF</Card.Header>
            <Card.Body>Upload PDF</Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(App);
