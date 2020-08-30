import React, { Component } from 'react';
import styles from './App.module.css';
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
    let saveBtn = null

    if (this.state.enteredText !== '') {
      saveBtn = <SaveButton clickHandler={this.saveThrowAwayTextHandler} />
    }
    
    if (this.state.displayInput) {
      currComp =
        <div>
          <TextEnterer textHandler={this.textChangeHandler} />
          {saveBtn}
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
      <div className={styles.App}>
        <h1 className={styles.h1}>Throw Away Words</h1>
        {currComp}
      </div>
    );
  }

}

export default App;
