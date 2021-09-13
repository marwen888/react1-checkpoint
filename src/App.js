//import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap';
import ReactBootstrap, {Container, Jumbotron, Button, Row, Col, Grid, Panel,Form, FormGroup, FormLabel, FormText,FormControl} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
 
  <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
    </div>
  );
}

export default App;
