import React, { Component } from "react";
import Greeting from './components/Greeting'
import LogInOut from './components/LogInOut'
import axios from 'axios'
import "./App.css";
import config from './setup'

class App extends Component {
  constructor() {
    super();
    this.state = {
      body: {} // this is the body from /user route
    };
  }

  componentDidMount(){
    console.log('componentDidMount',config.serverPort)
    axios.get(`http://localhost:${config.serverPort}/user`, {
      withCredentials: true
    })
    // .then(res => console.log(res.data))

    .then(res => this.setState({
      body: res.data
    })
    )
  }

  render() {
    console.log('app',this.state)
    return <div className="App">
      <header>
        <h1>OAUTH2.0 Lesson: React</h1>
        <Greeting body={this.state.body}/>
        <br />
        <LogInOut body={this.state.body} uri={`http://localhost:${config.serverPort}`}/>
      </header>
    </div>;
  }
}

export default App;
