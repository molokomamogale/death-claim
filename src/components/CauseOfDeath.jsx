import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import { CauseOfDeathList } from '../source/static.datasource'
import DatePicker from 'material-ui/DatePicker'
import { Row, Col } from 'react-bootstrap'
import Select from '@material-ui/core/Select'

class CauseOfDeath extends Component {
    constructor(props) {
        super(props);

        this.state = {
            causeOfDeath: '',
            deathReported: '',
            deceasedEmployed: '',
            deceasedFirstConsult: null
        }
    }

    handleChange = (e) => {
        this.setState({ causeOfDeath: e.target.value });
    }

    handleDeathReportedChange = (e) => {
        this.setState({ deathReported: e.target.value });
    }

    handleDeceasedEmployedChange = (e) => {
        this.setState({ deceasedEmployed: e.target.value });
    }

    handleFirstConsultChange = (event, date) => {
        this.setState({
            deceasedFirstConsult: date,
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={12} xs={12}>
                        <div className='cause-of-death'>

                            <Select
                                native
                                fullWidth
                                className='form-field'
                                inputProps={{
                                    name: 'causeDeath',
                                    id: 'causeDeath',
                                }}
                            >
                                <option>Choose Cause Of Death</option>
                                {
                                    CauseOfDeathList.map((causeOfDeath, key) => {
                                        return <option key={key} value={causeOfDeath}>{causeOfDeath}</option>
                                    })
                                }
                            </Select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {
                            this.state.causeOfDeath === 'Other' && (
                                <div className='form-group'>
                                    <div className='form-field'>
                                        <TextField
                                            required
                                            className='input-field'
                                            placeholder='Other'
                                            margin="dense"
                                            type="text" />
                                    </div>
                                </div>)
                        }
                        <div className='form-group'>
                            <div className='form-label'>
                                Was death reported to police?
                        </div>
                            <div className='form-field'>
                                <Radio
                                    name={'death-reported'}
                                    checked={this.state.deathReported === 'Yes'}
                                    onChange={this.handleDeathReportedChange.bind(this)}
                                    value="Yes"
                                />Yes&nbsp;
                                                <Radio
                                    name={'death-reported'}
                                    checked={this.state.deathReported === 'No'}
                                    onChange={this.handleDeathReportedChange.bind(this)}
                                    value="No"
                                />No
                        </div>
                        </div>

                        {
                            this.state.deathReported === 'Yes' && (
                                <div className='form-group'>
                                    <div className='form-label'>
                                        If “Yes”, please provide case number
                                </div>
                                    <div className='form-field'>
                                        <TextField
                                            required
                                            className='input-field'
                                            placeholder='Case number'
                                            margin="dense"
                                            type="text" />
                                    </div>
                                </div>)
                        }
                        <div className='form-group'>
                            <div className='form-label'>
                                Was the deceased employed at the date of death?
                        </div>
                            <div className='form-field'>
                                <Radio
                                    checked={this.state.deceasedEmployed === 'Yes'}
                                    onChange={this.handleDeceasedEmployedChange.bind(this)}
                                    value="Yes"
                                />Yes&nbsp;
                                <Radio
                                    checked={this.state.deceasedEmployed === 'No'}
                                    onChange={this.handleDeceasedEmployedChange.bind(this)}
                                    value="No"
                                />No
                        </div>
                        </div>
                        {
                            this.state.deceasedEmployed === 'Yes' && (
                                <div>
                                    <div className='form-group'>
                                        <div className='form-label'>
                                            If “Yes”, state occupation at date of death
                                </div>
                                        <div className='form-field'>
                                            <TextField
                                                required
                                                className='input-field'
                                                placeholder='Occupation'
                                                margin="dense"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='form-label'>
                                            Name of deceased’s employer at date of death
                                    </div>
                                        <div className='form-field'>
                                            <TextField
                                                required
                                                className='input-field'
                                                placeholder='Employer'
                                                margin="dense"
                                                type="text" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className='form-group'>
                            <div className='form-label'>
                                When did the deceased first consult a doctor for his/her last illness?
                        </div>
                            <div className='form-field'>
                                <DatePicker
                                    autoOk={true}
                                    hintText="yyyy-mm-dd"
                                    mode="landscape"
                                    value={this.state.deceasedFirstConsult}
                                    onChange={this.handleFirstConsultChange} />
                            </div>
                        </div>
                    </Col>

                    <Col md={12}>
                        Please complete the table below regarding information of every doctor who attended to the deceased during his/her last illness and during the five years preceding his/her (need only be completed for policy with life cover.
                </Col>
                </Row>
            </div>
        );
    }
}

export default CauseOfDeath;