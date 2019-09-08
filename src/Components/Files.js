import React, { Component } from "react";
import { Nav, Tab, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import FileCard from '../Reusable/FileCard';

const API_URL = 'http://localhost:8080/user';
  export default class Files extends Component {
  constructor(props) {
    super(props);
    this.getFiles();

    this.state = {
      files: [],
      fileIds: [],
      fileNames: [],
      fileDates: [],
      fileSizes: [],
      fileOwners: [],
      fileTypes: [],
      fileLinks: [],
      senderIds : [],
		  receiverIds : []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.registerUser();
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
      </form>
    );
  }

  getFiles(){
      const url = API_URL + '/getFiles';
      const userData = { id:1};
      axios.post(url,userData )
        .then(res => {
          this.setState({
            files: res.data
          });
        })
  }

  getFriends(){
    return("No one");
  }

  render() {
    return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Your Files</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Your Friends</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            {this.state.files.map((fileInfo, fileNameIndex) => {
                return (<FileCard
                key = {fileInfo.id}
                fileId={fileInfo.id}  
                fileName = {fileInfo.fileName}
                fileDate = {fileInfo.fileDate}
                fileSize = {fileInfo.fileSize}
                fileOwner = {fileInfo.ownerId}
                fileType = {fileInfo.fileType}
                fileLink = {fileInfo.fileURI}
                onSelect={this.onSelect} />
              )
            })}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            {this.getFriends()}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
  }
}