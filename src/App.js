import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
    };
  }
  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote:  data[0],
        });
    });
}

componentDidMount(){
  this.getQuote();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <GenerateQuote selectQuote={() => this.getQuote()}/>
        {this.state.quote && <DisplayQuote quote={this.state.quote}/>}
      </div>
    );
  }
}

export default App;
