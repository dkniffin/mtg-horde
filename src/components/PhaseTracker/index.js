import React, { Component } from 'react';
import './style.css';

class PhaseTracker extends Component {
  render() {
    return (
      <div className="PhaseTracker">
        <div className="CurrentPhase">
          <span className="CurrentPhaseLabel">Phase: </span>
          <span className="CurrentPhase">{this.props.currentPhaseText}</span>
        </div>
        <button className="NextPhaseBtn" onClick={this.props.onNextPhase}>Next</button>
      </div>
    );
  }
}

export default PhaseTracker;
