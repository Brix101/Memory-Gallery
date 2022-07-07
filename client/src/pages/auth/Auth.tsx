import React, { useState } from "react";
import "./Auth.css";

import online_test from "../../assets/online_test.svg";
import photo_session from "../../assets/photo_session.svg";
import SignIn from "../../components/authComponents/SignIn";
import SignUp from "../../components/authComponents/SignUp";

function Auth() {
  const [mode, setMode] = useState("");

  const signUpMode = () => {
    setMode("sign-up-mode");
  };
  const signInMode = () => {
    setMode("");
  };

  return (
    <div className={`auth-container ${mode}`}>
      <div className="sections-container">
        <div className="signin-signup">
          <SignIn signUpMode={signUpMode} />
          <SignUp signInMode={signInMode} />
        </div>
      </div>

      <div className="panels-container ">
        <div className="panel left-panel">
          <img src={photo_session} className="image" alt="Session" />
        </div>
        <div className="panel right-panel">
          <img src={online_test} className="image" alt="Online Test" />
        </div>
      </div>
    </div>
  );
}

export default Auth;
