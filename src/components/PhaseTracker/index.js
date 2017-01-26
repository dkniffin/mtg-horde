import React, { Component } from 'react';
import './style.css';

class PhaseTracker extends Component {
  render() {
    return (
      <div className="PhaseTracker">
        <div className="CurrentPhaseTitle">
          <span className="CurrentPhaseLabel">Phase: </span>
          <span className="CurrentPhase">{this.props.phase.title}</span>
        </div>

        <span className="CurrentPhaseDescription">{this.props.phase.description}</span>
        <button className="NextPhaseBtn" onClick={this.props.onNextPhase}>Next</button>
      </div>
    );
  }
}

export default PhaseTracker;
