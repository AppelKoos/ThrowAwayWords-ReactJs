import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup'

import classes from './App.module.css';
import TextEnterer from './components/TextEnterer/TextEnterer'
import SaveButton from './components/Buttons/SaveButton/SaveButton'
import TextDisplay from './components/TextDisplay/TextDisplay'

class App extends Component {
  state = {
    enteredText: '',
    throwAwayText: '',
    throwAwayWords: [],
    displayInput: true
  }

  textChangeHandler = (event) => {
    //Update the to be saved word with the current most up to date eneterd word
    this.setState({ enteredText: event.target.value });
  }

  saveThrowAwayTextHandler = () => {
    //Create a copy of the array
    let wordsCopy = [...this.state.throwAwayWords];
    //Push new value to copy
    wordsCopy.push(this.state.enteredText);
    //Save copy over old array
    this.setState({ throwAwayWords: wordsCopy });
  }

  deleteThrowAwayTextHandler = (index) => {
    //Removes the clicked word from the array
    //Create copy of state array
    let wordsCopy = [...this.state.throwAwayWords]
    //Takes the index and replaces it with remove
    wordsCopy.splice(index, 1)
    this.setState({ throwAwayWords: wordsCopy })
  }

  render() {

    const listOfWords = this.state.throwAwayWords.map((word, index) => (
      <TextDisplay
        key={word + index}
        clicked={() => this.deleteThrowAwayTextHandler(index)}
        textToDisplay={word} />
    ))

    return (
      <div className={classes.App}>
        <h1 className={classes.h1}>Throw Away Words</h1>
        <TextEnterer textHandler={this.textChangeHandler} />
        <SaveButton clickHandler={this.saveThrowAwayTextHandler} />
          {listOfWords}
      </div>
    );
  }

}

export default App;
