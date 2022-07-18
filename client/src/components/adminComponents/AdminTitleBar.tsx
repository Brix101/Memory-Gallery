import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  children?: JSX.Element[] | JSX.Element;
}

function AdminTitleBar({ title, children }: Props) {
  return (
    <Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}

export default AdminTitleBar;
