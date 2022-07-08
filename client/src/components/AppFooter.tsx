import * as React from "react";
import { Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <>
      <Typography variant="body2" className="text-white">
        {"Copyright © "}
        <Link
          className="text-slate-200 underline font-black pb-4 underline-offset-1 hover:text-white hover:underline-offset-0"
          to={"/"}
        >
          Memory Gallery
        </Link>{" "}
        {new Date().getFullYear()}
        {". "}
      </Typography>
      <Typography variant="body2" className="text-white">
        Designed & Develop By{" "}
        <a
          className="text-slate-200 font-black pb-4 hover:text-white "
          href="https://github.com/Brix101"
        >
          BRIX101
        </a>
      </Typography>
    </>
  );
}

export default function AppFooter() {
  return (
    <Box
      className="bg-blue-800"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ my: 2 }} maxWidth="sm">
        <Typography
          className="text-slate-100 text-center"
          variant="h3"
          component="h2"
          gutterBottom
        >
          Memory Gallery
        </Typography>
        {/* <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography> */}
      </Container>
      <Box
        className="bg-slate-800 text-center"
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
