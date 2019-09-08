import React from 'react'
import { post } from 'axios';
import { Container, Row, Col, Switch, Div, Button, Card } from 'react-bootstrap';


class UploadFile extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:8080/file/uploadFile';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const fileData = {
        "ownerId": "1"
    };

    const filedetails = JSON.stringify(fileData);
    formData.append('filedetails',filedetails)
    return  post(url, formData,config)
  }

  render() {
    return (
            
      <Container>
          <br></br>
          <form onSubmit={this.onFormSubmit}>
          <Row>
              <Col>
                  <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                      onChange={this.onChange}
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
              </Col>
              <Col>
                  <Button type="submit">Upload</Button>
              </Col>
          </Row>
          </form>
      </Container>
    )
  }
}



export default UploadFile