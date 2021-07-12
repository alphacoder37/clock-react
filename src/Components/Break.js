
const Break = ( {breakLength, increaseBreakLength, decreaseBreakLength}) => {
    return (
      <div id="break">
        <p id="break-label">Break Length</p>
        <div className="container" id="break-buttons">
          <button id="break-decrement" onClick={decreaseBreakLength}>
          <i className="fas fa-arrow-down"></i>
          </button>
          <p id="break-length">{breakLength}</p>
          <button id="break-increment" onClick={increaseBreakLength}>
          <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    );
}

export default Break;