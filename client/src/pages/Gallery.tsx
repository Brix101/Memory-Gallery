import React from "react";
import {
  CircularProgress,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Image } from "../interfaces";
import { useGetImagesQuery } from "../services/image.service";
import InfoIcon from "@mui/icons-material/Info";
import ImageItemCard from "../components/imageComponents/ImageItemCard";

function Gallery() {
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
    <Container
      maxWidth="lg"
      sx={{ py: 5, display: "flex", justifyContent: "center" }}
    >
      {images && (
        <ImageList
          sx={{
            width: "100%",
            height: "auto",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(300px, 1fr))!important",
          }}
          gap={20}
        >
          {images?.map((image: Image, i) => (
            <ImageItemCard image={image} key={i} />
          ))}
        </ImageList>
      )}
    </Container>
  );
}

export default Gallery;
