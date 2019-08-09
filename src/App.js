import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Card from './Card'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      states: [],
      state: {}
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/states')
    .then(response =>response.json())
    .then(response => this.setState({
      states: response
    }))
   
  }
  /* mandatory */
  mapHandler = (event) => {
    // console.log(this.state.states)
    // alert(event.target.dataset.name);
   const getState = this.getState(event.target.dataset.name)
   this.setState({
     state: getState
   })
  };

  getState = (input) => {
    const result = this.state.states.filter( state => state.state === input)
    return result[0]
  }
  render() {
    const {state} = this.state
    return (
     <div>
       <h1 id= 'title'>Develop America</h1>
       <i className="fas fa-flag-usa"></i>
        <div className="App">
        
        <USAMap onClick={this.mapHandler} />
        <Card state={state}/>
      </div>
      </div>
    );
  }
}

export default App;