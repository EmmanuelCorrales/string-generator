import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../styles/strings-generator.css'

class StringGenerator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: '',
      result: '',
      showSnackbar: false
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
          onClick={ this.onClickGenerateString } />
        <br />
        <TextField
          hintText='Generated string will show up here.'
          value={ this.state.result }
          multiLine={ true }
          rowsMax={ 12 } />
        <CopyToClipboard text={ this.state.result }
          onClick={ () => this.setState({ showSnackbar: true }) } >
          <RaisedButton className='button' label='Copy to clipboard.' />
        </CopyToClipboard>
        <Snackbar message='Copied to clipboard.'
          open={ this.state.showSnackbar }
          autoHideDuration={ 3000 } />
      </div>
    )
  }

  onClickGenerateString = () => {
    const result = this.randomString(this.state.length);
    this.setState({ result, showSnackbar: false });
  };

  validateNonNegative = (e, newValue) => {
    const length = newValue > 0 ? newValue : '';
    this.setState({ length });
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
