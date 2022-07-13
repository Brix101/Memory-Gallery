import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { FcGoogle } from "react-icons/fc";

import galleryImage from "../../assets/images/gallery.png";
import { Link } from "react-router-dom";

import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../services/firebase";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { Typography } from "@mui/material";

function SignIn({ signUpMode }: any) {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e: any): void => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    logInWithEmailAndPassword(state);
  };
  return (
    <section className="sign-in-section">
      <div className="min-h-full flex items-center justify-center ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link
              className="group flex items-center justify-center bg-slate-200 hover:bg-slate-500  px-1 rounded-md"
              to="/"
              state="/"
            >
              <ArrowCircleLeftIcon className="h-8 w-auto px-1 text-gray-700 group-hover:text-white" />
              <img className="block h-10" src={galleryImage} alt="Gallery" />
              <Typography
                className="text-gray-700 group-hover:text-white pl-2"
                variant="h5"
                component="h2"
              >
                Gallery
              </Typography>
            </Link>

            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or New Member?{" "}
              <button
                className="font-medium text-lg text-blue-600 hover:text-blue-500 hover:underline"
                onClick={signUpMode}
              >
                Sign Up
              </button>{" "}
              Here
            </p>
          </div>
          {/* {error && <AlertMessage message={error.} />} */}
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
            </div>

            <div className="flex items-center justify-between">
              <div></div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-md text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
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
                Sign in
              </button>
              <p className="m-2 text-center text-sm text-gray-600">
                or Sign in with
              </p>
              <button
                type="button"
                className="group relative w-full flex items-center justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white text-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={signInWithGoogle}
              >
                <span className=" flex items-center pl-3">
                  <FcGoogle />
                </span>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
