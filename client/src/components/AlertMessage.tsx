import React from "react";
import { AlertTitle, Alert } from "@mui/material";

interface props {
  message: string;
}
function AlertMessage({ message }: props) {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error — <strong>{message}!</strong>
    </Alert>
  );
}

export default AlertMessage;
