import React, { Component } from 'react';
import './App.scss';
import Header from './Header'
import Search from './Search'
import Claim from './Claim'

class App extends Component {
  constructor(props) {
    super(props);
    this.Search = React.createRef();

    this.state = {
      policy: {
        type: 0,
        number: '',
      }
    }
  }

  handleInitClaimProcess = () => {
    const policy = this.Search.current.state.policy;
    if (policy) {
      this.setState({ policy: policy });
    }
  }

  render() {
    const { policy } = this.state;
    return (
      <div className="container web-app">
        <Header />
        {
          policy.number === '' ? <Search ref={this.Search} initClaim={this.handleInitClaimProcess.bind(this)} /> : <Claim policy={policy} />
        }
      </div>
    );
  }
}

export default App;
