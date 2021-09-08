import ReactCodeInput from '@gaudiy/react-verification-code-input';
import React, { Component } from 'react';
import './index.css';

const STYLE = {
  width: '375px',
  margin: '50px auto'
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  handleChange = vals => {
    if (vals.length >= 6) {
      console.log('complete, ', vals);
    } else if (vals.length === 0) {
      console.log('empty, ', vals);
    }
  };

  render() {
    return (
      <div style={STYLE}>
        <ReactCodeInput
          ref={this.input}
          className={"code-input-container"}
          fieldClassName={"code-input-field"}
          onChange={this.handleChange}
          onComplete={val => console.log('complete', val)}
        />
      </div>
    );
  }
}
