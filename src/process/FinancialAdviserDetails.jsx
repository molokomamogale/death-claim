import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import ContactDetails from '../components/ContactDetails'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import { Checklist } from '../source/static.datasource'

class FinancialAdviserDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Signature: false,
            document: null
        }

        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = event => {
        this.setState({ Signature: event.target.checked });
    };

    handleUpload(e) {
        this.refs.fileUploader.click();
    }

    render() {
        const { section } = this.props;
        return (
            <Paper className='wrapper content-area'>
                <div className='section-heading'>
                    Section {section} - Financial adviser’s details
                </div>
                <Row className='wrapper'>
                    <Col md={3}>
                        <div className='no-margin'>
                            <div className='form-group'>
                                <div className='form-label'>
                                    Adviser’s name
                    </div>
                                <div className='form-field'>
                                    <TextField
                                        required
                                        className='input-field'
                                        placeholder='Adviser’s name'
                                        margin="dense"
                                        type="text" />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-label'>
                                    Commision code
                    </div>
                                <div className='form-field'>
                                    <TextField
                                        required
                                        className='input-field'
                                        placeholder='Commision code'
                                        margin="dense"
                                        type="text" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={9}>
                        <ContactDetails />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='signature'>
                            <Checkbox
                                checked={this.state.checkedA}
                                onChange={this.handleChange.bind(this)}
                                value="checkedA"
                            />&nbsp;Signature as financial adviser
                        </div>
                    </Col>
                    <br /><br />
                </Row>
                <div className='section-heading'>
                    Requirements Checklist
                </div>
                <Row>
                    <Col md={12}>
                        {
                            Checklist.map((item, key) => {
                                return <div className='checklist-items' key={key}>
                                    <Checkbox
                                        className='chck-box'
                                        key={key}
                                        //checked={this.state.document === item}
                                        onChange={(e) => {
                                            this.handleUpload(e)
                                            this.setState({ document: e.target.value })
                                        }}
                                        value={item}
                                    />&nbsp;
                                {item}
                                </div>
                            })
                        }
                        <input type="file" id="file" ref="fileUploader" style={{display: "none"}}/>
                    </Col>
                </Row>

            </Paper>
        );
    }
}

export default FinancialAdviserDetails;
