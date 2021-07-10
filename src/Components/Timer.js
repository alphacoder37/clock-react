import React from 'react'

const Timer = ({ sessionLength, timeLeft, setTime, startTimer}) => {
    

    return (
        <div>
            <h1 id="timer-label">
                Session
            </h1>
            <h3 id="time-left">{timeLeft}</h3>
            <div>
                <p id="time-p">{timeLeft}</p>
                <button id="start_stop" onClick={startTimer("on")}>
                <i className="fas fa-play"></i>
                <i className="fas fa-pause"></i>
                </button>
                <button id="reset" onClick={startTimer('off')}>
                <i className="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default Timer
