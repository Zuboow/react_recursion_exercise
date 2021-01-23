import React, { Component } from 'react';

export default class RecursiveComponent extends Component {

  renderRecursively = (number) => {
    if (number < this.props.components.length){
      return <div className='box'>{this.props.components[number]}{this.renderRecursively(number + 1)}</div>;
    }
    return "";
  }

  render() {
    return (
      <div>
        {this.renderRecursively(0)}
      </div>
    );
  }
};
