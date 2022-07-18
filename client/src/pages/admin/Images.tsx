import React from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Grid,
  Container,
  Slide,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Button,
} from "@mui/material";
import { useGetImagesQuery } from "../../services/image.service";
import ImageAdminCard from "../../components/imageComponents/ImageAdminCard";
import AddImage from "./UploadImage";

import SearchIcon from "@mui/icons-material/Search";
import AdminTitleBar from "../../components/adminComponents/AdminTitleBar";

// TODO image modal,  add image funtion
function Images() {
  const [checked, setChecked] = React.useState(false);

  const { data: images, isLoading, error } = useGetImagesQuery("");
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return (
      <div
        className="absolute z-50 w-full h-full bg-inherit flex justify-center items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <CircularProgress sx={{ color: "white" }} />
      </div>
    );
  }

  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <AdminTitleBar title="Images">
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={toggleCheck}>
            {checked ? "View Images" : "Add Image"}
          </Button>
        </Box>
      </AdminTitleBar>
      <>
        <Slide direction="right" in={!checked} mountOnEnter unmountOnExit>
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
            <Box sx={{ pt: 3 }}>
              <Grid container spacing={3}>
                {images?.map((image, i) => (
                  <Grid item key={i} lg={4} md={6} xs={12}>
                    <ImageAdminCard image={image} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pt: 3,
              }}
            >
              <Pagination color="primary" count={3} size="small" />
            </Box>
          </div>
        </Slide>
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          <Container>
            <AddImage />
          </Container>
        </Slide>
      </>
    </Box>
  );
}

export default Images;
