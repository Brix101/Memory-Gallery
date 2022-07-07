import React from "react";
import { LinearProgress } from "@mui/material";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

function LinearLoading() {
  const [loading] = useAuthState(auth);
  return (
    <>
      {loading && (
        <div
          className="absolute z-50 w-full h-full bg-inherit"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <LinearProgress color="primary" />
        </div>
      )}
    </>
  );
}

export default LinearLoading;
