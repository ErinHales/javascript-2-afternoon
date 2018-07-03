import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: ["eat cheetos","lick fingers"]
    }
  }

  updateInput(val) {
    //setState takes an object as an argument
    this.setState({input: val});
  }

  addToList() {
    let newList = this.state.list.slice(0);
    newList.push(this.state.input);
    this.setState({
      list: newList,
      input: ""
    })
  }

  render() {

    let formattedList = this.state.list.map((element, i) => {
      return (
        <h3 key={ i }>{ element }</h3>
      )
    })
    return (
      <div className="App">
        <input 
          type="text" 
          onChange={(e) => this.updateInput(e.target.value)} 
          autoFocus
          value={ this.state.input }/>
        <button onClick={() => this.addToList()}>Add Item</button>
        { formattedList }
      </div>
    );
  }
}

export default App;
