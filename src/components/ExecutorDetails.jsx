import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'

class ExecutorDetails extends Component {
    render() {
        return (
            <div className='executors-details'>
                <div className='sub-heading'>Executor’s details:</div>
                <div className='form-group'>
                    <div className='form-label'>
                        Name
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Name'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Contact number
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Contact number'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Email Address
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Email Address'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ExecutorDetails;
