import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { FcGoogle } from "react-icons/fc";

import galleryImage from "../../assets/gallery.png";
import { Link } from "react-router-dom";

function SignIn({ signUpMode }: any) {
  return (
    <section className="sign-in-section">
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

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
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
          <form className="mt-8 space-y-6" action="#" method="POST">
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
                type="button"
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
