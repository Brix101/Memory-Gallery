import React, { Key } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import { Image } from "../../interfaces";
interface props {
  image: Image;
  key: Key;
  onClick: any;
}

function ImageItemCard({ image, key, onClick }: props) {
  return (
    <ImageListItem
      key={key}
      className="group rounded-md cursor-pointer bg-gray-50"
      onClick={() => onClick(image)}
    >
      <img
        className="rounded-md"
        src={image.path}
        alt={image.originalname}
        loading="lazy"
        style={{
          width: "auto",
          height: "22rem",
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
