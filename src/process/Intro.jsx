import React, { Component } from 'react'

class Intro extends Component {
    render() {
        const { policy } = this.props;
        if (policy.type === 10) {
            return (
                <div className='content-area'>
                    <div className='heading-3'>
                        Death Claims on Non-Retirement Products
                    </div>
                    <div>
                        On death of the life assured, a sum assured benefit is paid out to the nominated beneficiary/ies, subject to the validity of the claim.
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        We are required to share, collect and process your Personal Information (PI).Your PI is collected and processed by our staff, representatives or sub-contractors and we make every effort to protect and secure your PI.You are entitled at any time to request access to the information Liberty has collected, processed and shared.
                        <br /><br />
                        NOTES:
                        <ul>
                            <li>If the beneficiary lives abroad and is applying for foreign exchange control approval the above requirements must be certified and contain the full name/s, surname, designation and physical address of the Commissioner of Oaths or Notary Public.These must appear on a stamp or be clearly handwritten and recorded that the documents are “certified a true copy of the original”.</li>
                            <li>Foreign exchange controlapproval takes a minimum of 8 weeks from date of submission of all the documents required by Standard Bank, in order to process this application.</li>
                        </ul>
                    </div>
                </div>
            )
        }

        return (
            <div className='content-area'>
                <div className='heading-3'>
                    Death Claims (Retirement Annuity)
                </div>
                <div>
                    On death of the member of a Lifestyle Retirement Annuity Fund, Lifestyle Preserver Pension Fund or Lifestyle Preserver Provident Fund, the death benefit is payable to the dependant/s or nominated beneficiary/ies in accordance with the rules of the Pension Funds Act.
                </div>
            </div>
        );
    }
}

export default Intro;
