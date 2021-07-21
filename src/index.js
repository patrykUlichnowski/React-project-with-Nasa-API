/*
  Made by Patryk Ulichnowski :)
  Its an Nasa picture of the day with React, also i will learn some SASS here.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


//To get your image and data you have to press the button
document.getElementById('showMeContent').addEventListener('click',()=>{
  console.log('The button has been pressed.');
  sendingAPIrequest();
})

let data = {};

async function sendingAPIrequest (){
  const nasaAPIkey = 'rgsnkFZWsql0lvKxehddXN8o3fQOwi1YyhrHML3a';
  console.log('Connecting to the database.');
  // Here our code connects to Nasa API
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPIkey}`)
  console.log('Connected.');
  data = await response.json()
  console.log(data)
  // We pass a object parameter to react in order to render img.
  ReactDOM.render(<ReactAPIImage url={data.url}/>, document.getElementById('image'));
  ReactDOM.render(<ReactAPIParam param={data.explanation}/>, document.getElementById('explanation'))
  ReactDOM.render(<ReactAPITitle param={data.title}/>, document.getElementById('title'))
  ReactDOM.render(<ReactAPIParam param={data.date}/>, document.getElementById('data'))
}
class ReactAPIImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      failImage: "Img from Nasa API",
    }
  }
  render() {
    return (
      <img src={this.props.url} alt={this.state.failImage}></img>
    )
  }
}

class ReactAPIParam extends React.Component{
  render(){
    return(
      <p>{this.props.param}</p>
    )
  }
}
class ReactAPITitle extends React.Component{
  render(){
    return(
      <p>"{this.props.param}"</p>
    )
  }
}
