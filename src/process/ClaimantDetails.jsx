import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Person from '../components/Person'
import BankingDetails from '../components/BankingDetails'
import Radio from '@material-ui/core/Radio'
import { Row, Col } from 'react-bootstrap'

class ClaimantDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            needFinancialAdviser: '',
            officiallyEmegrated: '',
            claimaints: [1]
        }
    }

    handleAddClaimant = () => {
        const claimaints = this.state.claimaints;
        if (claimaints.length !== 2) {
            const newClaimant = parseInt(claimaints.length) + 1;
            this.state.claimaints.push(newClaimant);
            const newClaimants = this.state.claimaints;
            this.setState({ claimaints: newClaimants });
        }
    }

    handleRemoveClaimant = () => {
        this.setState({ claimaints: [1] });
    }

    render() {
        const { section, policynumber } = this.props;
        const indexes = ['First', 'Second', 'Third'];
        const { claimaints } = this.state;
        return (
            <Paper className='wrapper content-area'>
                <div className='section-heading'>
                    Section {section} - Claimant's Details
                    {
                        claimaints.length === 1 && (
                            <span>
                                <Button className='right-float-btn' onClick={this.handleAddClaimant.bind(this)} variant='contained' color={'primary'}>Add Claimant</Button>
                                <div className='clr' />
                            </span>)
                    }
                </div>

                {
                    claimaints.map((claimaint, index) => {
                        return <div key={index}>
                            <div className='heading-4'>
                                {`${indexes[index]} claimant`}
                                {
                                    index === 1 && (
                                        <span>
                                            <Button className='right-float-btn' onClick={this.handleRemoveClaimant.bind(this)} variant='contained' color={'secondary'}>Remove Claimant</Button>
                                            <div className='clr' />
                                        </span>
                                    )
                                }
                            </div>
                            <div className='wrapper'>
                                <Person section={section} styler={'content-area'} policynumber={policynumber} />
                                <Row>
                                    <Col md={12}>
                                        <div className='form-group'>
                                            <div className='form-label'>
                                                What was your relationship to the deceased?
                            </div>
                                            <div className='form-field'>
                                                <TextField
                                                    required
                                                    className='input-field'
                                                    placeholder='Relation to the deceased?'
                                                    margin="dense"
                                                    type="text" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className='form-group'>
                                            <div className='form-label'>
                                                Would you like a financial adviser to contact you to provide financial advice?
                            </div>
                                            <div className='form-field'>
                                                <Radio
                                                    name={'need-fa'}
                                                    checked={this.state.needFinancialAdviser === 'Yes'}
                                                    onChange={(e) => {
                                                        this.setState({ needFinancialAdviser: e.target.value });
                                                    }}
                                                    value="Yes"
                                                />Yes&nbsp;
                                                <Radio
                                                    name={'need-fa'}
                                                    checked={this.state.needFinancialAdviser === 'No'}
                                                    onChange={(e) => {
                                                        this.setState({ needFinancialAdviser: e.target.value });
                                                    }}
                                                    value="No"
                                                />No
                        </div>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className='form-group'>
                                            <div className='form-label'>
                                                Have you officially emigrated?  If “Yes, please complete the Exchange Control form
                            </div>
                                            <div className='form-field'>
                                                <Radio
                                                    name={'emigrated'}
                                                    checked={this.state.officiallyEmegrated === 'Yes'}
                                                    onChange={(e) => {
                                                        this.setState({ officiallyEmegrated: e.target.value });
                                                    }}
                                                    value="Yes"
                                                />Yes&nbsp;
                                                <Radio
                                                    name={'emigrated'}
                                                    checked={this.state.officiallyEmegrated === 'No'}
                                                    onChange={(e) => {
                                                        this.setState({ officiallyEmegrated: e.target.value });
                                                    }}
                                                    value="No"
                                                />No
                        </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Row>
                                <Col md={12}>
                                    <BankingDetails />
                                </Col>
                            </Row>

                            {
                                claimaints.length === 1 && (
                                    <Row>
                                        <Col md={12}>
                                            <span>
                                                <Button className='right-float-btn'
                                                    onClick={this.handleAddClaimant.bind(this)} 
                                                    variant='contained' color={'primary'}>Add Claimant</Button>
                                                <div className='clr' />
                                            </span>
                                        </Col>
                                    </Row>)
                            }
                        </div>
                    })}
            </Paper>

        );
    }
}

export default ClaimantDetails;
