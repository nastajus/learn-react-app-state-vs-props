import React, {Component} from 'react';
import Title from './Title';

export default class Header extends Component {
  render(){
    console.log(this.props);
    return <Title />
  }
}
