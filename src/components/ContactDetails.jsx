import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'

class ContactDetails extends Component {
    render() {
        return (
            <div className='contact-details'>
                <div className='sub-heading'>Contact details:</div>
                <div className='form-group'>
                    <div className='form-label'>
                        Email
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Email'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Cell
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Cell'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Fax
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Fax'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails;
