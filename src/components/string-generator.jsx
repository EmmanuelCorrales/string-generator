import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
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
          placeholder='Enter string length (max: 9999).'
          value={ this.state.length }
          onChange={ this.onChangeStringLength } />
        <Button variant='contained'
          onClick={ this.onClickGenerateString } >
          Generate
        </Button>
        <br />
        <TextField multiline
          placeholder='Generated string will show up here.'
          value={ this.state.result }
          rowsMax={ 12 }
          margin="normal" />
        <CopyToClipboard text={ this.state.result }
          onCopy={ () => this.setState({ showSnackbar: true }) } >
          <Button variant='contained'>
            Copy to clipboard.
          </Button>
        </CopyToClipboard>
        <Snackbar message='Copied to clipboard.'
          open={ this.state.showSnackbar }
          autoHideDuration={ 3000 } />
      </div>
    )
  }

  onChangeStringLength = event => {
    // Return the previos state if newValue is not numeric
    // and if it is not between 0 and 10,000.
    const newValue = event.target.value;
    const length = newValue.match('^$|^[1-9]\\d{0,3}$') ? newValue : this.state.length;
    this.setState({ length, showSnackbar: false });
  };

  onClickGenerateString = () => {
    const result = this.randomString(this.state.length);
    this.setState({ result, showSnackbar: false });
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
