import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SaveClaim } from '../statemanagement/actions/index'

import TextField from '@material-ui/core/TextField'
import Person from '../components/Person'
import Paper from '@material-ui/core/Paper'
import ExecutorDetails from '../components/ExecutorDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import CauseOfDeath from '../components/CauseOfDeath'
import DatePicker from 'material-ui/DatePicker'
import { Col } from 'react-bootstrap'

class DeceasedDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'personal-details',
            dateOfDeath: null
        };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { section, policynumber } = this.props;
        const { expanded } = this.state;

        return (
            <Paper className='wrapper content-area'>
                <div className='section-heading'>
                    Section {section} - Deceased Details
                </div>

                <ExpansionPanel expanded={expanded === 'personal-details'} onChange={this.handleChange('personal-details')}>
                    <ExpansionPanelSummary className='accordion' expandIcon={<ExpandMoreIcon />}>Policy No: {policynumber}</ExpansionPanelSummary>
                    <ExpansionPanelDetails className='row'>
                        <Col {...(section !== 1) ? { md: 12 } : { md: 4 }}>
                            <Person section={section} policynumber={policynumber} />
                        </Col>
                        {
                            section === 1 && (
                                <Col md={4}>
                                    <div className='sub-heading'>&nbsp;</div>
                                    <div className='form-group'>
                                        <div className='form-label'>
                                            Date of death
                                    </div>
                                        <div className='form-field'>
                                            <DatePicker
                                                autoOk={true}
                                                className='input-field'
                                                hintText="yyyy-mm-dd"
                                                mode="landscape"
                                                value={this.state.dateOfDeath}
                                                onChange={(e, date) => {
                                                    this.setState({
                                                        dateOfDeath: date,
                                                    });
                                                }} />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='form-label'>
                                            Place of death
                                    </div>
                                        <div className='form-field'>
                                            <TextField
                                                required
                                                className='input-field'
                                                placeholder='Place of death'
                                                margin="dense"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='form-label'>
                                            Tax reference number
                                    </div>
                                        <div className='form-field'>
                                            <TextField
                                                required
                                                className='input-field'
                                                placeholder='Tax reference number'
                                                margin="dense"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='form-label'>
                                            Medical aid scheme
                                    </div>
                                        <div className='form-field'>
                                            <TextField
                                                required
                                                className='input-field'
                                                placeholder='Medical aid scheme'
                                                margin="dense"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='form-label'>
                                            Medical aid number
                                    </div>
                                        <div className='form-field'>
                                            <TextField
                                                required
                                                className='input-field'
                                                placeholder='Medical aid number'
                                                margin="dense"
                                                type="text" />
                                        </div>
                                    </div>
                                </Col>)
                        }
                        {
                            section === 1 && (
                                <Col md={4}>
                                    <ExecutorDetails />
                                </Col>
                            )
                        }
                    </ExpansionPanelDetails>
                    <Divider />
                </ExpansionPanel>

                <ExpansionPanel className='margin-bottom-2' expanded={expanded === 'cause-of-death'} onChange={this.handleChange('cause-of-death')}>
                    <ExpansionPanelSummary className='accordion' expandIcon={<ExpandMoreIcon />}>
                        Cause of death
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <CauseOfDeath />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        claimStore: state.claim
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveClaim: (data) => dispatch(SaveClaim(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeceasedDetails)