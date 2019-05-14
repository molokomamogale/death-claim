import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import { LibertyLogo } from './resources/Images'
import { Col } from 'react-bootstrap'

class Page extends Component {
  render() {
    return (
      <Paper className="row header">
        <Col md={12} className='liberty-logo'>
          <img className='img' src={LibertyLogo} alt='liberty-logo' />
        </Col>
      </Paper>
    );
  }
}

export default Page;
