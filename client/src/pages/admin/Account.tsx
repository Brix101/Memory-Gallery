import React from "react";
import { Box, Container, Grid, Slide } from "@mui/material";
import AccountProfile from "../../components/adminComponents/AccountProfile";
import AccountProfileDetails from "../../components/adminComponents/AccountProfileDetails";
import AdminTitleBar from "../../components/adminComponents/AdminTitleBar";

function Account() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <AdminTitleBar title="Account" />
      <>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                <AccountProfile />
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <AccountProfileDetails />
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </>
    </Box>
  );
}

export default Account;
