import React from 'react'

const Session = ({sessionLength, increaseSessionLength, decreaseSessionLength}) => {
    return (
      <div id="session">
        <p id="session-label">Session Length</p>
        <div className="container" id="session-buttons">
          <button className="session-decrement" id="session-decrement"onClick={decreaseSessionLength}>
          <i className="fas fa-arrow-down"></i>
          </button>
          <p id="session-length">{sessionLength}</p>
          <button id="session-increment" onClick={increaseSessionLength}>
          <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    );
}

export default Session
