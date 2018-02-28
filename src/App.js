import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

import './App.css';

/*
 * Data handling technique #1 : State
 * +
 * Data handling technique #2 : Props
 */

class App extends Component {

  constructor(){
    super();
    this.state = {
      title: "Welcome"
    };
  }

  render() {
    setTimeout(() => {
      this.setState({title: "Welcome Will!"})
    }, 2000);

    return (
      <div className="App">
        {/* created a prop, just like you would on a DOM element: You Give It A Prop. */}
        {/* let's go ahead an pass it in. */}
        <Header title={this.state.title} />
        <Header title={"Other title"} />
        <Footer />
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
