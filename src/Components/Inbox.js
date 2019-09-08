import React, { Component } from "react";
import axios from 'axios'
import {
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";
import App from '../App'
import Register from './Register'

const API_URL = 'http://localhost:8080/api';
  export default class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
    
  }

  render() {
        return (
            <div>
                Inbox Page
            </div>
           );
    }
  }