import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface props {
  checked: boolean;
  toggleCheck: any;
}

function ImageListToolbar({ checked, toggleCheck }: props) {
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
          Images
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={toggleCheck}>
            {checked ? "View Images" : "Add Image"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ImageListToolbar;
