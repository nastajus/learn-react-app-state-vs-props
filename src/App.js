import React, {Component} from 'react';
import './App.css';

/*
 * Data handling technique #1 : State
 */

class App extends Component {

  constructor() {
    super();
    this.state = {name: 'Will'};
    console.log('constructor');
  }

  render() {
    /* this.state === null;  /// this way by default. */
    setTimeout(() => {
      /*
       * setState({...}) is the ONE method you NEED to know with STATE.
       */
      this.setState({name: "Bob"})
    }, 1000);
    return (
      <div className="App">
        {this.state.name}
      </div>
    );
  }
}

export default App;

/*
 *  Basically 2 ways that data gets handled through React
 *    1. State
 *        - state only gets used, if a component has an internal value, that only affects that component, and doesn't affect the rest of the app
 *        - If it doesn't affect layout, or anything else, "state" may be appropriate.
 *    2. Props
 *    3. Context ... eh
 *
 */
