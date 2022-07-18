import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  InputAdornment,
  Slide,
  SvgIcon,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import UserListResults from "../../components/adminComponents/UserListResults";
import AdminTitleBar from "../../components/adminComponents/AdminTitleBar";

function Users() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <AdminTitleBar title="Users" />
      <>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Box sx={{ maxWidth: 500 }}>
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon color="action" fontSize="small">
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Search"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ mt: 3 }}>
              <UserListResults />
            </Box>
          </div>
        </Slide>
      </>
    </Box>
  );
}

export default Users;
