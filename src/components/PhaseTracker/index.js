import React from 'react';
import './style.scss';

const PhaseTracker = function({phase, description, onNextPhase}) {
  return (
    <div className="PhaseTracker">
      <div className="CurrentPhaseTitle">
        <span className="CurrentPhaseLabel">Phase: </span>
        <span className="CurrentPhase">{phase.title}</span>
      </div>

      <span className="CurrentPhaseDescription">{phase.description}</span>
      <button className="NextPhaseBtn" onClick={onNextPhase}>Next</button>
    </div>
  );
}

export default PhaseTracker;
