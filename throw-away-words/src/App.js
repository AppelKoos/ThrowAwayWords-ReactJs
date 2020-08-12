import React, { Component } from 'react';
import './App.css';
import TextEnterer from './components/TextEnterer/TextEnterer'
import SaveButton from './components/Buttons/SaveButton/SaveButton'
import TextDisplay from './components/TextDisplay/TextDisplay'

class App extends Component {
  state = {
    enteredText: '',
    throwAwayText: '',
    displayInput: true
  }

  textChangeHandler = (event) => {
    this.setState({ enteredText: event.target.value })
  }

  saveThrowAwayTextHandler = () => {
    this.setState({ throwAwayText: this.state.enteredText, displayInput: false })
  }

  deleteThrowAwayTextHandler = () => {
    this.setState({ throwAwayText: '', displayInput: true })
  }

  render() {
    let currComp = null;
    if (this.state.displayInput) {
      currComp =
        <div>
          <TextEnterer textHandler={this.textChangeHandler} />
          <SaveButton clickHandler={this.saveThrowAwayTextHandler} />
        </div>
    } else {
      currComp =
        <div>
          <TextDisplay
            textToDisplay={this.state.throwAwayText}
            clicked={this.deleteThrowAwayTextHandler} />
        </div>
    }
    return (
      <div className="App">
        <h1>Throw Away Words</h1>
        {/* <div>
          <TextEnterer textHandler={this.textChangeHandler} />
          <SaveButton clickHandler={this.saveThrowAwayTextHandler} />
        </div>
        <div>
          <TextDisplay textToDisplay={this.state.throwAwayText} />
        </div> */}
        {currComp}
      </div>
    );
  }

}

export default App;
