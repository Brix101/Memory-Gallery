import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { FcGoogle } from "react-icons/fc";

import galleryImage from "../../assets/gallery.png";
import { Link } from "react-router-dom";
import AlertMessage from "../AlertMessage";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../services/firebase";

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
            <Link to="/" state="/">
              <img
                className="mx-auto h-12 w-auto hover:bg-gray-200 px-1 rounded-md"
                src={galleryImage}
                alt="Gallery"
              />
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
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
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
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
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
                  <LockClosedIcon
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
