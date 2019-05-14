import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ClaimModel } from '../resources/Images'
import Paper from '@material-ui/core/Paper'
import '../Form.scss';
import CircularProgress from '@material-ui/core/CircularProgress'

class ClaimForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModel: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModel: true })
        }, 2000)
    }

    render() {
        if (this.state.showModel === false) {
            return (
                <div className="col-md-12">
                    <div style={{ textAlign: 'center', padding: '2em 0' }}>
                        <CircularProgress size={60} thickness={5} />
                        <br />
                        please wait...
                    </div>
                </div>
            )
        }
        else {
            return (
                <Paper className="wrapper content-area">
                    <img className='img claim-model' src={ClaimModel} alt='claim-model' />
                </Paper>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        claimStore: state.claim
    }
}

export default connect(mapStateToProps, null)(ClaimForm)