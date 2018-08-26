import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import bcrypt from 'bcryptjs';

import './bcrypt.css';

class Bcrypt extends Component {
  state = {
    textToHash: '',
    hashedText: ''
  };

  onChangeTextToHash = (e) => {
    this.setState({ textToHash: e.target.value });
  };

  hashText = () => {
    bcrypt.hash(this.state.textToHash, 10, (err, hashedText) => {
      this.setState({ hashedText });
    });
  };

  render() {
    const { textToHash, hashedText } = this.state;

    return (
      <div>
        <br/>
        <div>
          <TextField placeholder='String to encrypt.'
            onChange={ this.onChangeTextToHash }
            value={ textToHash } />
          &nbsp;
          <Button variant='contained'
            onClick={ this.hashText } >
            Encrypt
          </Button>
        </div>
        <br/>
        <div>
          <TextField multiline
            placeholder='Encrypted string.'
            rowsMax={ 12 }
            value={ hashedText } />
        </div>
      </div>
    );
  }
}

export default Bcrypt;
