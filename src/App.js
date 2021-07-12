import { useState, useRef } from 'react';
import './App.css';
import Break from './Components/Break';
import Session from './Components/Session'
import Timer from './Components/Timer'
import Audio from './Components/Audio'


function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState(sessionLength+(":00"))
  const [isTimerToggled, setIsTimerToggled] = useState(false) 
  const [secondsRemaining, setSecondsRemaining] = useState(sessionLength * 60 + breakLength * 60)

  function increaseBreakLength() {
    if (!isTimerToggled) {
    setBreakLength(breakLength < 60 ? breakLength + 1 : breakLength)
    setSecondsRemaining((breakLength < 60 ? breakLength + 1 : breakLength) * 60 + sessionLength * 60)

    }
  }
  function decreaseBreakLength() {
    if (!isTimerToggled) {
    setBreakLength(breakLength > 1 ? breakLength - 1 : breakLength)
    setSecondsRemaining((breakLength > 1 ? breakLength - 1 : breakLength) * 60 + sessionLength * 60)

    }
  }
  function increaseSessionLength() {
    if (!isTimerToggled) {
    setSessionLength(sessionLength < 60 ? sessionLength + 1 : sessionLength)
    setTimeLeft(sessionLength < 60 ? (sessionLength + 1)+(":00") : sessionLength+(":00"))
    setSecondsRemaining((sessionLength < 60 ? sessionLength + 1 : sessionLength) * 60 + breakLength * 60)
    }
    else {
      setSessionLength(sessionLength)
    }
  }
  function decreaseSessionLength() {
    if (!isTimerToggled) {
    setSessionLength(sessionLength > 1 ? sessionLength - 1 : sessionLength);
    setTimeLeft(sessionLength > 1 ? (sessionLength - 1)+(":00") : sessionLength+(":00"));
    setSecondsRemaining((sessionLength > 1 ? sessionLength - 1 : sessionLength) * 60 + breakLength * 60)
    }
    else {
      setSessionLength(sessionLength)
    }
  }
  function resetTimer() {
    clearInterval(interval.current);
    setIsTimerToggled(false)
    setSessionLength(25);
    setTimeLeft("25:00");
    setBreakLength(5)
    setSecondsRemaining(sessionLength * 60 + breakLength * 60)
  }
  function startStopTimer() {
    setIsTimerToggled(!isTimerToggled);
    startOrStopTimer(!isTimerToggled)
    }

  let varSecondsRemaining = secondsRemaining
  let interval = useRef();
  // main function
  const startTimer = () => {
    interval.current = setInterval(() => {
      const minutes = Math.floor(varSecondsRemaining / 60);
      const seconds = varSecondsRemaining % 60;
      
      if (varSecondsRemaining > breakLength * 60) {
        setTimeLeft(
          (minutes-breakLength) + ":" + (seconds < 10 ? "0" + seconds : seconds)
        )
        setSecondsRemaining(minutes * 60 + seconds)
      }
      else if (varSecondsRemaining < breakLength * 60 && varSecondsRemaining > 0){
        setTimeLeft(
          minutes + ":" + (seconds < 10 ? "0" + seconds : seconds)
        )   
        setSecondsRemaining(minutes * 60 + seconds)
      }
      else if (varSecondsRemaining === breakLength * 60) {
        setTimeLeft("0:00")
        setSecondsRemaining(minutes * 60 + seconds)
      }
      else {
        setTimeLeft("0:00")
        setSecondsRemaining(0)
        varSecondsRemaining = sessionLength * 60 + breakLength * 60;
      }
        varSecondsRemaining--
    }, 1000);
  }
  // timer has been passed in as !isTimerToggled in startStopTimer, due to issues with timing/updating
  const startOrStopTimer = (timer) => {
    if (timer) {
      startTimer();
      console.log('timer has started')
    }
      else {
        clearInterval(interval.current)
        console.log('timer has stopped')
      }
  }

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="container" id="break-session">
        <div className="row">
          <div className="col-xs-6">
            <Break
              breakLength={breakLength}
              increaseBreakLength={increaseBreakLength}
              decreaseBreakLength={decreaseBreakLength}
            />
          </div>
          <div className="col-xs-6">
            <Session
              sessionLength={sessionLength}
              increaseSessionLength={increaseSessionLength}
              decreaseSessionLength={decreaseSessionLength}
            />
          </div>
        </div>
      </div>
      <Timer
        breakLength={breakLength}
        sessionLength={sessionLength}
        timeLeft={timeLeft}
        isTimerToggled={isTimerToggled}
        onToggle={startStopTimer}
        resetTimer={resetTimer}
        currentString={secondsRemaining >= breakLength * 60 ? 'Session' : 'Break'}
      />
      <p>{secondsRemaining}</p>
      <Audio secondsRemaining={secondsRemaining} 
      breakLength={breakLength}/>
      <p>by Leon Cummins</p>
    </div>
  );
}

export default App;
