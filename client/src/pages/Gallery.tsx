import React, { useState } from "react";
import { CircularProgress, Container, ImageList } from "@mui/material";
import { Image } from "../interfaces";
import { useGetImagesQuery } from "../services/image.service";
import ImageItemCard from "../components/imageComponents/ImageItemCard";
import ImageModal from "../components/imageComponents/ImageModal";

function Gallery() {
  const { data: images, isLoading, error } = useGetImagesQuery("");
  const [image, setImage] = useState<Image | undefined>();

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
  const onImageClick = (data: Image) => {
    setImage(data);
  };
  const onCloseModal = (data: Image) => {
    setImage(undefined);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 5, display: "flex", justifyContent: "center" }}
    >
      <ImageModal image={image} onClose={onCloseModal} />
      {images && (
        <ImageList
          sx={{
            p: 5,
            width: "100%",
            height: "auto",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(300px, 1fr))!important",
          }}
          gap={20}
        >
          {images?.map((image: Image, i) => (
            <ImageItemCard image={image} key={i} onClick={onImageClick} />
          ))}
        </ImageList>
      )}
    </Container>
  );
}

export default Gallery;
