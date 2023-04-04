import React, { useRef, useState } from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faArrowRight,
  faDisplay,
  faMobileScreen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../logo.svg";
import poster from "../assets/images/poster1.png";
import yinyang from "../assets/images/yinyang.png";
import profile from "../assets/images/profile3.jpg";
import Movie from "../assets/videos/promo.mp4";

function Home() {
  const videoRef = useRef();
  const about = useRef();
  const contact = useRef();
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

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="Home">
      <div className="top">
        <div class="left">
          <div class="nav">
            <div class="menu">
              <button onClick={() => scrollToSection(about)} class="contact">
                About
              </button>
              <button onClick={() => scrollToSection(contact)} class="contact">
                Contact
              </button>
            </div>
            <div className="icons">
              {" "}
              <a href="https://www.instagram.com/joindivot/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  className="icon"
                  color="#b7b1a7"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/joindivot/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="xl"
                  className="icon"
                  color="#b7b1a7"
                />{" "}
              </a>
              <a href="https://www.tiktok.com/@joindivot" target="_blank">
                <FontAwesomeIcon
                  icon={faTiktok}
                  size="xl"
                  className="icon"
                  color="#b7b1a7"
                />
              </a>
              <a href="https://twitter.com/joindivot" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="xl"
                  className="icon"
                  color="#b7b1a7"
                />
              </a>
            </div>
          </div>
          <div class="sign-up-container">
            <div class="logo"> Divot </div>

            <div class="slogan"> Sustainability, Simplified</div>
            <Form />
            {/*  {showForm ? (
              <div>
                <Form />
              </div>
            ) : (
              <div>
                <button
                  class="sign-up"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  {" "}
                  Sign up
                </button>
              </div>
            )} */}
          </div>
          <div class="left-footer"></div>
        </div>

        <div class="right">
          {" "}
          {isPlaying ? (
            <div className="display-icons">
              <FontAwesomeIcon icon={faPause} className="display-btn" />
            </div>
          ) : (
            <div className="display-icons">
              {" "}
              <FontAwesomeIcon icon={faPlay} className="display-btn" />
            </div>
          )}
          {isPlaying ? (
            <button className="pause" onClick={handlePause}>
              <FontAwesomeIcon
                icon={faPause}
                size="10x"
                className="pause-btn"
              />
            </button>
          ) : (
            <button className="btn-cover" onClick={handlePlay}>
              <FontAwesomeIcon icon={faPlay} size="10x" className="pause-btn" />
            </button>
          )}
          <video
            id="background-video"
            playsinline
            ref={videoRef}
            poster={poster}
          >
            <source src={Movie} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div ref={about} className="bottom">
        <div className="title"> About Divot </div>
        <div className="content">
          <div className="about-text">
            Divot is on a mission to revolutionize the way brands and consumers
            communicate. Our goal is to foster relationships between brands and
            consumers that benefits not only both parties but the planet as a
            whole. To achieve this, the platform highlights the sustainable
            practices that brands are adopting and encourages consumers to share
            their thoughts and feedback with them. Join us in the movement
            towards a more harmonious and sustainable future.
          </div>
          {/* <img className="yingyang" src={yinyang}></img> */}
        </div>
      </div>

      <div ref={contact} className="bottom2">
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="" />
        Contact Divot
        <form
          action="https://formsubmit.co/hello@joindivot.com"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_subject" value="Contacted via website" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="contact-input"
          />
          {/* <input
            type="text"
            name="name"
            required
        
            className="contact-input"
          />{" "} */}
          <textarea
            rows="6"
            maxlength="3000"
            name="reply"
            placeholder="Your Message"
            className="contact-input"
          ></textarea>
          <button type="submit" className="submit-form-button">
            Send
          </button>
        </form>
        <div className="rights-reserved">
          {" "}
          © Holland Blumer. All Rights Reserved.{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
