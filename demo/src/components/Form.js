import React, { useState } from "react";
import "../index.css";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [suggestion, setSuggestion] = useState("");
  return (
    <>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <form
        action="https://formkeep.com/f/0d88812aa389"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
        method="POST"
      >
        <input type="hidden" name="utf8" value="✓" />
        {/* <input type="name" id="name" class="search-input" name="name" placeholder="Name" /> */}

        <div className="suggestion-form">
          <div className="suggestion-form-content">
            <input
              type="email"
              className="suggestion-input"
              id="email-address"
              name="email"
              placeholder="Enter email to sign up"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
            />

            {suggestion != "" ? (
              <button type="submit" className="create-suggestion-button">
                {" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="sm"
                  color="#5bab5c"
                />{" "}
              </button>
            ) : (
              <div className="create-suggestion-button">
                {" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="sm"
                  color="#8c8c8c"
                />{" "}
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
