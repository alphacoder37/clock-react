import Beep from './beep.wav'

const Audio = ({ breakLength, secondsRemaining}) => {

    

    return (
        <div>
            { (secondsRemaining === 0 || secondsRemaining === breakLength * 60)  &&
      <audio autoPlay>
        <source src={Beep} type="audio/wav"></source>
      </audio>
    }
        </div>
    )
}

export default Audio
