import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
      <div className='bcrypt'>
        <br/>
        <div className='item'>
          <div>
            <Typography variant='headline'>Encrypt</Typography>
            <br/>
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
          <TextField multiline
            placeholder='Encrypted string.'
            rowsMax={ 12 }
            value={ hashedText } />
        </div>
        <div className='item'>
          <Typography variant='headline'>Decrypt</Typography>
          <br/>
          <TextField placeholder='Hash to check'
            value={ textToHash } />
          <br/>
          <br/>
          <div>
            <TextField
              placeholder='String to check'
              rowsMax={ 12 } />
            &nbsp;
            <Button variant='contained' >
              Encrypt
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bcrypt;
