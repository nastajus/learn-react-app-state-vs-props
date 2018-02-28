import React, {Component} from 'react';
import './App.css';

/*
 * Data handling technique #2 : Props
 */

class App extends Component {

  render() {
    return (
      <div className="App">
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
