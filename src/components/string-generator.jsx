import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../styles/strings-generator.css'

class StringGenerator extends Component {

  constructor(props) {
    super(props);
    this.state = { length: '' };
  }

  render() {
    return (
      <div className='container'>
        <TextField
          type='number'
          hintText='Enter string length'
          value={ this.state.length }
          onChange={ this.validateNonNegative } />
        <RaisedButton className='button' label='Generate' />
        <br />
        <TextField
          hintText="MultiLine with rows: 2 and rowsMax: 4"
          multiLine={true}
          rows={2}
          rowsMax={4} />
        <RaisedButton className='button' label="Copy to clipboard" />
      </div>
    )
  }

  validateNonNegative = (e, newValue) => {
    const length = newValue > 0 ? newValue : '';
    this.setState({ length });
  }
}

export default StringGenerator;
