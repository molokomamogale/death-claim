import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import { claimTypes } from './source/static.datasource'
import { Col } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policy: {
        type: 10,
        number: '',
        required: false
      }
    }
  }

  render() {
    const { initClaim } = this.props;
    return (
      <Paper className="row search-area">
        <Col md={12} className='heading-3'>
          Let us help you through this difficult time
        </Col>
        <Col md={12}>
          <div className='search-wrapper'>
            <div className='form-group'>
              <InputLabel htmlFor="claim-type">Claim Type</InputLabel>
              <Select
                native
                fullWidth
                className='form-field'
                value={this.state.policy.type}
                onChange={(e) => {
                  const policy = this.state.policy;
                  policy.type = e.target.value
                  this.setState({ ...policy });
                }}
                inputProps={{
                  name: 'claimType',
                  id: 'claim-type',
                }}
              >
                {
                  claimTypes.map((type, key) => {
                    return <option key={key} value={type.id}>{type.name}</option>
                  })
                }
              </Select>
            </div>

            <div className='form-group'>
              <TextField
                required
                fullWidth
                className='form-field'
                error={this.state.policy.required}
                id="id-number"
                label="ID Number"
                placeholder="Enter ID number"
                helperText={this.state.policy.required ? 'ID number is required!' : null}
                onChange={(e) => {
                  const policy = this.state.policy;
                  policy.number = e.target.value
                  this.setState({ ...policy });
                }}
                onBlur={(e) => {
                  const policy = this.state.policy;
                  policy.required = e.target.value === ''
                  this.setState({ ...policy });
                }}
              />
            </div>
            <Button id='btn-save-create-ice' variant="contained"
              onClick={initClaim} color="primary">Search</Button>
          </div>
        </Col>
      </Paper>
    );
  }
}

export default App;
