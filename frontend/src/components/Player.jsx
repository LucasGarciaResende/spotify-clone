import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Player = ({ duration, randomIdArtist, randomIdArtist2, audio }) => {
  const audioPlayer = useRef();
  const barProgress = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
    
  }
  
  const formatTime = (timeSeconds) => {
    const minutes = Math.floor(timeSeconds / 60).toString()
    const seconds = (Math.floor(timeSeconds % 60)).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
  const timeToSeconds = (timeString) => {
    const splitTime = timeString.split(":");
    const minutes = Number(splitTime[0]);
    const seconds = Number(splitTime[1]);
    return (minutes * 60) + seconds;
  }

  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationSeconds = timeToSeconds(duration);
  console.log(durationSeconds);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      isPlaying ? setCurrentTime(formatTime(audioPlayer.current.currentTime)): null;
      barProgress.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationSeconds) * 100 + "%"
      );
    }, 1000)
    return () => clearInterval(intervalId)
  }, [isPlaying])
  
  return (
    <div className="player">
        <div className="player__controllers">
            <Link to={`/song/${randomIdArtist}`}>
              <FontAwesomeIcon 
                className="player__icon" 
                icon={faBackwardStep}
              />
            </Link>
            <FontAwesomeIcon 
              className='player__icon player__icon-play'
              icon={isPlaying ? faCirclePause : faCirclePlay}
              onClick={playPause} 
            />
            <Link to={`/song/${randomIdArtist2}`}>
              <FontAwesomeIcon
                className='player__icon' 
                icon={faForwardStep} 
              />
            </Link>
        </div>
        <div className="player__progress">
          <p>{currentTime}</p>
          <div className="player__bar">
            <div ref={barProgress} className="player__bar-progress"></div>
          </div>
          <p>{duration}</p>
        </div>
        <audio 
          ref={audioPlayer}
          src={audio}
        />
    </div>
  )
}

export default Player