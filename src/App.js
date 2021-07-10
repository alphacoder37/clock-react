import { useState } from 'react';
import './App.css';
import Break from './Components/Break';
import Session from './Components/Session'
import Timer from './Components/Timer'


function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState(sessionLength+(":00"))

  function increaseBreakLength() {
    setBreakLength(breakLength < 60 ? breakLength + 1 : breakLength)
  }
  function decreaseBreakLength() {
    setBreakLength(breakLength > 0 ? breakLength - 1 : breakLength)
  }
  function increaseSessionLength() {
    setSessionLength(sessionLength < 60 ? sessionLength + 1 : sessionLength)
    setTimeLeft(sessionLength < 60 ? (sessionLength + 1)+(":00") : sessionLength+(":00"))
  }
  function decreaseSessionLength() {
    setSessionLength(sessionLength > 0 ? sessionLength - 1 : sessionLength);
    setTimeLeft(sessionLength > 0 ? (sessionLength - 1)+(":00") : sessionLength+(":00"))
  }

  let secondsRemaining = sessionLength * 60;
// could i have a function, where it receives a parameter

  const startTimer = (val) => {
    let interval = setInterval(setTime, 1000);
    return interval
  }

  function setTime() {
      var minutes = Math.floor(secondsRemaining / 60);
      var seconds = secondsRemaining % 60;
      secondsRemaining > 0 ? document.getElementById("time-p").innerText = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds): document.getElementById("time-p").innerText = 0;
      secondsRemaining--
  }


  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="container" id="break-session">
        <div className="row">
          <div className="col-xs-6">
        <Break breakLength={breakLength} increaseBreakLength={increaseBreakLength} decreaseBreakLength={decreaseBreakLength}/>
        </div>
        <div className="col-xs-6">
        <Session sessionLength={sessionLength} increaseSessionLength={increaseSessionLength} decreaseSessionLength={decreaseSessionLength}/>
        </div>
      </div>
      </div>
      <Timer breakLength={breakLength} sessionLength={sessionLength} timeLeft={timeLeft} startTimer={startTimer}/>
    </div>
  );
}

export default App;
