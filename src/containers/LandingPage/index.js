import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.scss';
import GameForm from '../../components/GameForm'

import * as actions from '../../actions'

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1>Horde Magic</h1>

        <GameForm onSubmit={this.props.landingPageSubmit} />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
    }
  },
  actions
)(LandingPage)
