import React, {Component } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import HomePage from './HomePage.js'

class Card extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
      <HomePage/>
      </>
    );
  }
}

export default Card;
