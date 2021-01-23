import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

const One = "One", Two = "Two", Three = "Three";

const components = [One, Two, Three];

export default class Recursion extends Component {
	render() {
  	return (
    	<div className='App-wrapper'>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
