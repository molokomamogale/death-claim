import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Wizard from './Wizard'
import Intro from './process/Intro'
import ClaimantDetails from './process/ClaimantDetails'
import ClaimDeclaration from './process/ClaimDeclaration'
import DeceasedDetails from './process/DeceasedDetails'
import FinancialAdviserDetails from './process/FinancialAdviserDetails'

class Claim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {
        type: props.policy.type,
        number: props.policy.number,
      }
    }
  }

  render() {
    const { policy } = this.state;
    const components = [
      { Title: `Intro`, Component: <Intro policy={policy} /> },
      { Title: `Section 1 - Deceased's details`, Component: <DeceasedDetails section={1} /> },
      { Title: `Section 2 - Claimant's details`, Component: <ClaimantDetails section={2} /> },
      { Title: `Section 3 - Death claim declaration`, Component: <ClaimDeclaration section={3} /> },
      { Title: `Section 4 - FA's details`, Component: <FinancialAdviserDetails section={4} /> }
    ]

    return (
      <MuiThemeProvider>
        <Paper className="row">
          <Wizard components={components} policy={policy} />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Claim;
