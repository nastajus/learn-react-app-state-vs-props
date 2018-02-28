import React, {Component} from 'react';
import Title from './Title';

export default class Header extends Component {
  render(){
    console.log("Header Component Props Title: " +  this.props.title);
    /* so we're just going to keep on passing that straight on through to Title */
    return <Title title={this.props.title}/>
  }
}
