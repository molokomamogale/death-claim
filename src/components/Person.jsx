import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SaveClaim } from '../statemanagement/actions/index'

import TextField from '@material-ui/core/TextField'
import ContactDetails from './ContactDetails'
import { Row, Col } from 'react-bootstrap'

class Person extends Component {
    render() {
        const { section, claimStore } = this.props;
        return (
            <Row>
                <Col {...(section !== 2) ? { md: 12 } : { md: 4 }}>
                    <div className='sub-heading'>Personal details</div>
                    <div className='form-group'>
                        <div className='form-label'>
                            Initials
                    </div>
                        <div className='form-field'>
                            <TextField
                                required
                                className='input-field'
                                placeholder='Initial'
                                margin="dense"
                                type="text"
                                value={claimStore.form.DeceasedDetails.Person.Initials}
                                onChange={(e)=>{
                                    const claim = this.props.claimStore;
                                    claim.form.DeceasedDetails.Person.Initials =  e.target.value;
                                    this.props.saveClaim(claim);
                                }}/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-label'>
                            Surname
                    </div>
                        <div className='form-field'>
                            <TextField
                                required
                                className='input-field'
                                placeholder='Surname'
                                margin="dense"
                                type="text"
                                value={claimStore.form.DeceasedDetails.Person.Surname} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-label'>
                            First name/s
                    </div>
                        <div className='form-field'>
                            <TextField
                                required
                                className='input-field'
                                placeholder='First name/s'
                                margin="dense"
                                type="text"
                                value={claimStore.form.DeceasedDetails.Person.Firstname} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-label'>
                            ID number
                    </div>
                        <div className='form-field'>
                            <TextField
                                required
                                className='input-field'
                                placeholder='ID number'
                                margin="dense"
                                type="text"
                                value={claimStore.form.DeceasedDetails.Person.IDnumber} />
                        </div>
                    </div>
                </Col>

                {
                    section === 2 && (
                        <Col md={4}>
                            <div className='sub-heading'>&nbsp;</div>
                            <div className='form-group'>
                                <div className='form-label'>
                                    Residential Address
                    </div>
                                <div className='form-field'>
                                    <TextField
                                        required
                                        className='input-field'
                                        placeholder='Residential Address'
                                        margin="dense"
                                        type="text" />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-label'>
                                    Postal Code
                    </div>
                                <div className='form-field'>
                                    <TextField
                                        required
                                        className='input-field'
                                        placeholder='Postal Code'
                                        margin="dense"
                                        type="text" />
                                    <div className='clr' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-label'>
                                    Postal Address
                    </div>
                                <div className='form-field'>
                                    <TextField
                                        required
                                        className='input-field'
                                        placeholder='Postal Address'
                                        margin="dense"
                                        type="text" />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-label'>
                                    Postal Code
                    </div>
                                <div className='form-field'>
                                    <TextField
                                        required
                                        className='input-field'
                                        placeholder='Postal Code'
                                        margin="dense"
                                        type="text" />
                                </div>
                            </div>
                        </Col>)
                }
                {
                    section === 2 && (
                        <Col md={4}>
                            <ContactDetails />
                        </Col>
                    )
                }
            </Row>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Person)