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
  CircularProgress,
  Pagination,
  Grid,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useGetImagesQuery } from "../../services/image.service";
import ImageCard from "../../components/imageComponents/ImageCard";

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
    <>
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
          <Button
            startIcon={<AddCircleIcon fontSize="small" />}
            color="primary"
            variant="contained"
          >
            Add Image
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
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

      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {images?.map((image, i) => (
              <Grid item key={i} lg={4} md={6} xs={12}>
                <ImageCard image={image} />
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
    </>
  );
}

export default Images;
