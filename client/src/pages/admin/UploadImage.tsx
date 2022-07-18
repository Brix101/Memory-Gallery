import React, { useState } from "react";
import { Box } from "@mui/material";
import DropzoneCard from "../../components/DropzoneCard";

function UploadImage() {
  return (
    <Box sx={{ mt: 3 }}>
      <DropzoneCard />
    </Box>
  );
}

export default UploadImage;
