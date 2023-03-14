import React, { useRef, useState } from "react";
import logo from './logo.svg';
import Movie from "./assets/videos/promo.mp4";
import './App.css';
import Form from './components/Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {

  const videoRef = useRef();
  const [showForm, setShowForm] = useState(false);


  const [isPlaying, setIsPlaying] = useState(false);

  console.log(videoRef);

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };
  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);

  };

  return (
    <div className="App">
     

      <div class="left">
      <div class="logo"> Divot </div>
        <div class="slogan"> Sustainability, Simplified</div>
        { showForm? (<div><Form /></div>): (<div>  
        <button class="sign-up"     onClick={() => {
          setShowForm(true);
        }}>    Beta Form
         <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              color="#272626"
            />
        </button>
        </div>)}
      
      </div>

      <div class="right">  
      {" "}

        {isPlaying ? (
          <button className="pause" onClick={handlePause}>
            <FontAwesomeIcon icon={faPause} size="10x" className="pause-btn" />
          </button>
        ) : (
          <button className="btn-cover" onClick={handlePlay}>
            <FontAwesomeIcon icon={faPlay} size="10x" className="pause-btn" />
          </button>
        )}
     
        <video id="background-video" loop ref={videoRef}>
      <source src={Movie} type="video/mp4"></source>
      </video> </div>




      
    </div>
  );
}

export default App;
