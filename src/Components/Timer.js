import React from 'react'

const Timer = ({  timeLeft, resetTimer, isTimerToggled, onToggle, currentString}) => {
    


    return (
        <div>
            <h1 id="timer-label">
                {currentString}
            </h1>
            <h3 id="time-left">{timeLeft}</h3>
            <div>
                <p id="time-p">{timeLeft}</p>
                <button id="start_stop" onClick={onToggle}>
                <i className="fas fa-play"></i>
                <i className="fas fa-pause"></i>
                </button>
                <button id="reset" onClick={resetTimer}>
                <i className="fas fa-sync-alt"></i>
                </button>
                <p>{isTimerToggled ? 'on' : 'off'}</p>
            </div>
        </div>
    )
}

export default Timer
