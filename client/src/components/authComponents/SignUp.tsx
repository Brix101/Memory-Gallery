import React, { useState } from "react";

import galleryImage from "../../assets/images/gallery.png";
import { Link } from "react-router-dom";
import AlertMessage from "../AlertMessage";
import { registerWithEmailAndPassword } from "../../services/firebase";
import LockIcon from "@mui/icons-material/Lock";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Typography } from "@mui/material";

function SignUp({ signInMode }: any) {
  const [state, setState] = useState({ email: "", password: "" });
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any): void => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (state.password !== confirmPass) {
      return setErrorMessage("Please Confirm Password");
    }

    registerWithEmailAndPassword(state);
  };
  return (
    <section className="sign-up-section">
      <div className="min-h-full flex items-center justify-center ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link
              className="group flex items-center justify-center bg-slate-200 hover:bg-slate-500  px-1 rounded-md"
              to="/"
              state="/"
            >
              <ArrowCircleLeftIcon className="text-gray-700 group-hover:text-white" />
              <img
                className="pl-2 block h-10"
                src={galleryImage}
                alt="Gallery"
              />
              <Typography
                className="text-gray-700 group-hover:text-white pl-2"
                variant="h5"
                component="h2"
              >
                Gallery
              </Typography>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create a new Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or a Member?{" "}
              <button
                className="font-medium text-lg text-blue-600 hover:text-blue-500 hover:underline"
                onClick={signInMode}
              >
                Sign In
              </button>{" "}
              Here
            </p>
          </div>
          {errorMessage && <AlertMessage message={errorMessage} />}
          <form
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-1">
              <div>
                <label htmlFor="signup-email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="signup-email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Email address"
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="sr-only">
                  Password
                </label>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="confirm_password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-lg rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(e: any) => setConfirmPass(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex items-center justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white text-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className=" flex items-center pl-3">
                  <LockIcon
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
