import React, { Key } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { Image } from "../../interfaces";

import InfoIcon from "@mui/icons-material/Info";

interface props {
  image: Image;
  key: Key;
}

function ImageItemCard({ image, key }: props) {
  return (
    <ImageListItem
      key={key}
      className="group rounded-md cursor-pointer bg-gray-50"
    >
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
          title={image._id}
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
  );
}

export default ImageItemCard;
