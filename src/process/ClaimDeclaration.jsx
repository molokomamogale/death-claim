import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { Declarations } from '../source/static.datasource'
import Paper from '@material-ui/core/Paper'

class ClaimDeclaration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            claimDeclaration: false
        }
    }

    handleChange = event => {
        this.setState({ claimDeclaration: event.target.checked });
    };

    render() {
        const { section } = this.props;
        return (
            <Paper className='wrapper content-area'>
                <div className='section-heading'>
                    Section {section} - Death claim declaration (legal guardian to sign for minor.)
                </div>
                <div>
                    <p>
                        We the claimant/s, claim the benefits of the policy/ies and declare that the answers and statements are true to the best of my/our knowledge and belief, and that I/we have withheld no material fact.
                </p>
                <Checkbox
                        checked={this.state.checkedA}
                        onChange={this.handleChange.bind(this)}
                        value="checkedA"
                    />&nbsp;I/We agree that
                <ul>
                        {
                            Declarations.map((declaration, key) => {
                                return <li key={key}>{declaration}</li>
                            })
                        }
                    </ul>
                    
                </div>
            </Paper>
        );
    }
}

export default ClaimDeclaration;
