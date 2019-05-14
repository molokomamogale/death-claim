import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'

class BankingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountRelation: null,
            accountType: null
        }
    }

    render() {
        return (
            <div className='inline-block'>
                <div className='form-group'>
                    <div className='form-label'>
                        Account holder name
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Account holder name'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Bank name
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Bank name'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Account number
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Account number'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Branch name
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Branch name'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Branch code
                            </div>
                    <div className='form-field'>
                        <TextField
                            required
                            className='input-field'
                            placeholder='Branch code'
                            margin="dense"
                            type="text" />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Account type
                            </div>
                    <div className='form-field'>
                        <Radio
                            name={'account-type'}
                            checked={this.state.accountType === 'Cheque'}
                            onChange={(e) => {
                                this.setState({ accountType: e.target.value });
                            }}
                            value="Cheque"
                        />Cheque&nbsp;
                        <Radio
                            name={'account-type'}
                            checked={this.state.accountType === 'Savings'}
                            onChange={(e) => {
                                this.setState({ accountType: e.target.value });
                            }}
                            value="Savings"
                        />Savings&nbsp;
                        <Radio
                            name={'account-type'}
                            checked={this.state.accountType === 'Transmission'}
                            onChange={(e) => {
                                this.setState({ accountType: e.target.value });
                            }}
                            value="Transmission"
                        />Transmission
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-label'>
                        Account  holder relationship
                            </div>
                    <div className='form-field'>
                        <Radio
                            name={'account-relationship'}
                            checked={this.state.accountRelation === 'Own'}
                            onChange={(e) => {
                                this.setState({ accountRelation: e.target.value });
                            }}
                            value="Own"
                        />Own&nbsp;
                                                <Radio
                            name={'account-relationship'}
                            checked={this.state.accountRelation === 'Joint'}
                            onChange={(e) => {
                                this.setState({ accountRelation: e.target.value });
                            }}
                            value="Joint"
                        />Joint
                    </div>
                </div>
            </div>
        );
    }
}

export default BankingDetails;
