import React from 'react'

const Session = ({sessionLength, increaseSessionLength, decreaseSessionLength}) => {
    return (
      <div id="session">
        <p>Session Length</p>
        <div className="container" id="session-buttons">
          <button className="session-decrement" onClick={decreaseSessionLength}>
          <i className="fas fa-arrow-down"></i>
          </button>
          <p className="session-length">{sessionLength}</p>
          <button className="session-increment" onClick={increaseSessionLength}>
          <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    );
}

export default Session
