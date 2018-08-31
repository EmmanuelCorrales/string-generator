import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import bcrypt from 'bcryptjs';

import './bcrypt.css';

class Bcrypt extends Component {
  state = {
    textToHash: '',
    hashedText: '',
    hashToMatch: '',
    stringToMatch: '',
    matchResult: ''
  };

  onChangeTextToHash = (e) => {
    this.setState({ textToHash: e.target.value });
  };

  onChangeHashToMatch = (e) => {
    this.setState({ hashToMatch: e.target.value });
  };

  onChangeStringToMatch = (e) => {
    this.setState({ stringToMatch: e.target.value });
  };

  hashText = () => {
    bcrypt.hash(this.state.textToHash, 10, (err, hashedText) => {
      this.setState({ hashedText });
    });
  };

  compareHash = () => {
    const { hashToMatch, stringToMatch } = this.state;
    const result = bcrypt.compareSync(stringToMatch, hashToMatch);
    const message = result==1? "String and Hash match!":"String and Hash do not match!";
    this.setState({ matchResult: message });
  };

  render() {
    const {
      textToHash,
      hashedText,
      hashToMatch,
      stringToMatch,
      matchResult
    } = this.state;

    return (
      <div className='bcrypt'>
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
              Hash!
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
            onChange={ this.onChangeHashToMatch }
            value={ hashToMatch } />
          <br/>
          <br/>
          <div>
            <TextField
              value={ stringToMatch }
              placeholder='String to check'
              onChange={ this.onChangeStringToMatch }
              rowsMax={ 12 } />
            &nbsp;
            <Button variant='contained'
              onClick={ this.compareHash } >
              Encrypt
            </Button>
          </div>
          <br/>
          <Typography variant='nowrap'>
          { matchResult }
          </Typography>
        </div>
      </div>
    );
  }
}

export default Bcrypt;
