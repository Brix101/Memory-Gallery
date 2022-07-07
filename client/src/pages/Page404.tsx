import React from "react";
import { useNavigate } from "react-router-dom";
import { TbForbid } from "react-icons/tb";

function Page404() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <TbForbid className="w-12 h-12 mt-8 text-indigo-200" aria-hidden="true" />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{" "}
        <button
          className="text-indigo-600 hover:underline dark:text-indigo-300"
          // to="/"
          onClick={() => navigate(-1)}
        >
          go back
        </button>
        .
      </p>
    </div>
  );
}

export default Page404;
