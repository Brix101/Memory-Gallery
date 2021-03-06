import React, { useState } from "react";
import "../assets/css/Auth.css";
import { useAuthState } from "react-firebase-hooks/auth";

import online_test from "../assets/images/online_test.svg";
import photo_session from "../assets/images/photo_session.svg";
import SignIn from "../components/authComponents/SignIn";
import SignUp from "../components/authComponents/SignUp";
import { auth } from "../services/firebase";
import LinearLoading from "../components/LinearLoading";
import { Link, Navigate } from "react-router-dom";

function Auth() {
  const [mode, setMode] = useState("");
  const [user, loading] = useAuthState(auth);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

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
                <div className="content">
                  <Link to="/">
                    <h1 className="text-4xl text-slate-200 underline font-black pb-4 underline-offset-2 hover:text-white hover:underline-offset-0">
                      Memory Gallery
                    </h1>
                  </Link>
                </div>
                <img src={photo_session} className="image" alt="Session" />
              </div>
              <div className="panel right-panel">
                <div className="content">
                  <Link to="/">
                    <h1 className="text-4xl text-slate-200 underline font-black pb-4 underline-offset-2 hover:text-white hover:underline-offset-0">
                      Memory Gallery
                    </h1>
                  </Link>
                </div>
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
