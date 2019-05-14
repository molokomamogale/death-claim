import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SaveClaim } from './statemanagement/actions/index'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import ClaimForm from './components/ClaimForm'

class WizardContent extends Component {
  constructor(props) {
    super(props);
    this.handleLoadStepContent = this.handleLoadStepContent.bind(this);
    this.state = {
      activeStep: 0,
    };
  }

  handleLoadStepContent = (components, activeStep) => {
    return activeStep === components.length ?
      <div className='content-area'>
        Thank you. Claim received in good order. We'll keep you updated on the status of your claim every step.
        <br />
        <ClaimForm claim={this.state.claim} />
      </div> :
      components[activeStep].Component;
  }

  handleNext = () => {
    const { activeStep } = this.state;
    const valid = this.handleValidations(activeStep);
    if (valid) {
      const policy = this.props.policy;
      const claim = this.props.claimStore;
      switch (activeStep) {
        case 1: {
          break
        }
        default:
          claim.policyNumber = policy.number;
          claim.policyType = policy.type;          
          break;
      }

      this.props.saveClaim(claim);

      this.setState({
        activeStep: activeStep + 1,
      });
    }
  }

  handleBack = () => {
    const { activeStep } = this.state;
    if (activeStep > 0) {
      this.setState({
        activeStep: activeStep - 1,
      });
    }
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  }

  handleValidations = (step) => {
    let valid = true;
    switch (step) {
      case 0:
        valid = true;
        break;
      case 1: {
        break;
      }
      default: break;
    }

    return valid;
  }

  render() {
    const { activeStep } = this.state;
    const { components, policy } = this.props;
    const disabled = activeStep === 0 ? 'disabled' : null;

    return (
      <Col md={12} className='wizard-page'>
        <Stepper activeStep={activeStep}>
          {
            components.map((component) => {
              const props = {};
              const labelProps = {};

              return (
                <Step key={component.Title} {...props}>
                  <StepLabel className='progress-step' {...labelProps}>{component.Title}</StepLabel>
                </Step>
              );
            })
          }
        </Stepper>

        <div className={`wizard-content container ${policy.number}`}>
          <div className='wizard-step-content'>
            {
              this.handleLoadStepContent(components, activeStep)
            }
          </div>

          <div className='wizard-nav'>
            {
              activeStep !== 0 && (
                <div className='wizard-nav-back'>
                  <Button id='btn-back' className={disabled}
                    onClick={this.handleBack.bind(this)} color="secondary">Back</Button>
                </div>)
            }
            <div className='wizard-nav-next'>
              {
                activeStep !== components.length ?
                  <Button id='btn-next'
                    variant="contained" color="primary"
                    onClick={this.handleNext.bind(this)}>
                    {activeStep === components.length - 1 ?
                      'Submit Claim' : activeStep === 0 ? 'Continue' : `Next`}
                  </Button>
                  :
                  <Button onClick={this.handleReset.bind(this)} variant="contained" color="secondary">
                    Close
                  </Button>
              }
            </div>
            <div className='clr' />
          </div>
        </div>
      </Col>
    );
  }
}

WizardContent.propTypes = {
  components: PropTypes.array,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WizardContent)