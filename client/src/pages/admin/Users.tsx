import React from "react";
import { Box, Container } from "@mui/material";
import UserListToolbar from "../../components/adminComponents/UserListToolbar";
import CustomerListResults from "../../components/adminComponents/CustomerListResults";

function Users() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults />
        </Box>
      </Container>
    </Box>
  );
}

export default Users;
