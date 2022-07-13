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

function Home() {
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
            <ImageListItem key={i} className="group rounded-md cursor-pointer">
              <img
                className="rounded-md"
                src={image.path}
                alt={image.originalname}
                loading="lazy"
                style={{
                  width: "auto",
                  height: "20rem",
                  objectFit: "fill",
                }}
              />
              <div className="hidden group-hover:block duration-700">
                <ImageListItemBar
                  title={image.title}
                  // subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${image.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Container>
  );
}

export default Home;
