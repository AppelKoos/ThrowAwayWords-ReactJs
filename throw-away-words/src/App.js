import React, { Component } from 'react';
import './App.css';
import TextEnterer from './components/TextEnterer/TextEnterer'
import DeleteButton from './components/Buttons/DeleteButton/DeleteButton'
import SaveButton from './components/Buttons/SaveButton/SaveButton'

class App extends Component {
  state = {
    enteredText: '',
    throwAwayText: ''
  }

  textChangeHandler = (event) => {
    this.setState({ enteredText: event.target.value })
  }

  saveThrowAwayTextHandler = () => {
    this.setState({ throwAwayText: this.state.enteredText })
  }

  deleteThrowAwayTextHandler = () => {
    this.setState({ throwAwayText: '' })
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <TextEnterer textHandler={this.textChangeHandler} outputText={this.state.enteredText} />
        <div>
          <SaveButton clickHandler={this.saveThrowAwayTextHandler} />
          <DeleteButton clickHandler={this.deleteThrowAwayTextHandler} />
        </div>
        <h3> {this.state.throwAwayText} </h3>
      </div>
    );
  }

}

export default App;
