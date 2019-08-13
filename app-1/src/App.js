import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){

    super();
    this.state = {
      inputText: '',
    }
    this.updateContent = this.updateContent.bind(this);
  }
   // make functions here

  updateContent(event){
    this.setState({
      inputText: event.target.value
    });
  }
  
  render() { // html
    return (
      <div className="App">
        <input value={this.state.inputText} onChange={this.updateContent}/>
        {/* <input onChange={(event) => this.updateContent(event)} */}
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
