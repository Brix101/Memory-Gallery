import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "../../components/adminComponents/AccountProfile";
import AccountProfileDetails from "../../components/adminComponents/AccountProfileDetails";

function Account() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth={false}>
        <Typography sx={{ mb: 3 }} variant="h4">
          Account
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Account;
