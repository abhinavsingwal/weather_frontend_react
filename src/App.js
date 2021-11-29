import logo from './logo.svg';
import './App.css';
import Navb from './Nav';
import axios from 'axios';
import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import { FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Spin from './Spin';
class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    temp_value:'',
    city_name:'',
    flag:false,
  }
  this.handleClick=this.handleClick.bind(this);
   this.handleChange=this.handleChange.bind(this);
   this.handleFree=this.handleFree.bind(this);
}
handleChange(event){
  this.setState({city_name: event.target.value});
}
handleClick(event){
this.setState({flag:true})
  axios.post('http://127.0.0.1:8000/api/insert',{"city_name":this.state.city_name})
  .then(response => this.setState({temp_value: response.data.value,flag:false}))
 
}
handleFree(event){
  this.setState({flag:false})
}
render(){
  return(
    <div>
     <Navb/>
     <InputGroup size="sm" className="mb-3">
    <FormControl
      placeholder="Enter City Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2" value={this.state.value} onChange={this.handleChange}
    />
     <Button variant="outline-secondary"  onClick={this.handleClick} id="button-addon2">
      Button
    </Button>
     </InputGroup>
   <div align="center"> 
  {this.state.flag ? <Spin/>:<h2>{this.state.temp_value}</h2>}
  </div>   
    </div>
  )
}
}

export default App;
