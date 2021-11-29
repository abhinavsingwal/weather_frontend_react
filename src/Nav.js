import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Navb extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
            
              <Navbar.Brand href="#home">Weather App</Navbar.Brand>
              
              
            </Navbar>
            <br />
            
             
            <br />
            
             
          </> 
        )
    }
}
export default Navb;