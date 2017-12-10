import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../styles/strings-generator.css'

class StringGenerator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: '',
      result: ''
    };
  }

  render() {
    return (
      <div className='container'>
        <TextField
          type='number'
          hintText='Enter string length'
          value={ this.state.length }
          onChange={ this.validateNonNegative } />
        <RaisedButton
          className='button'
          label='Generate'
          onClick={ this.generateRandomString } />
        <br />
        <TextField
          hintText="Generated string will show up here."
          value={ this.state.result }
          multiLine={ true }
          rows={ 8 }
          rowsMax={ 12 } />
        <RaisedButton 
          className='button'
          label="Copy to clipboard" />
      </div>
    )
  }

  validateNonNegative = (e, newValue) => {
    const length = newValue > 0 ? newValue : '';
    this.setState({ length });
  };

  generateRandomString = () => {
    const result = this.randomString(this.state.length);
    this.setState({ result });
  };

  randomString = (length) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
}

export default StringGenerator;
