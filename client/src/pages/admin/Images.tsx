import React from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Grid,
  Container,
} from "@mui/material";
import { useGetImagesQuery } from "../../services/image.service";
import ImageAdminCard from "../../components/imageComponents/ImageAdminCard";
import ImageListToolbar from "../../components/adminComponents/ImageListToolbar";

// TODO image modal,  add image funtion
function Images() {
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
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth={false}>
        <ImageListToolbar />

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
      </Container>
    </Box>
  );
}

export default Images;
