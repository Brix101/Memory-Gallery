import React, { useEffect, useState } from "react";
import "./Auth.css";

import { useAuthState } from "react-firebase-hooks/auth";

import online_test from "../../assets/online_test.svg";
import photo_session from "../../assets/photo_session.svg";
import SignIn from "../../components/authComponents/SignIn";
import SignUp from "../../components/authComponents/SignUp";
import { auth } from "../../services/firebase";
import LinearLoading from "../../components/LinearLoading";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      return navigate("/admin");
    }
  });

  const signUpMode = () => {
    setMode("sign-up-mode");
  };
  const signInMode = () => {
    setMode("");
  };

  return (
    <>
      {!loading && (
        <>
          <LinearLoading />
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
        </>
      )}
    </>
  );
}

export default Auth;
