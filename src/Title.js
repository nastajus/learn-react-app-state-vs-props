import React, {Component} from 'react';

export default class Title extends Component {
  render(){
    return (
      <div>
        {/*Title component will actually make use of the title prop*/}
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}