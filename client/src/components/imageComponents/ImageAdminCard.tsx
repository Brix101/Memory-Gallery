import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Image } from "../../interfaces";
import moment from "moment";

interface props {
  image: Image;
}

function ImageAdminCard({ image }: props) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          subheader={image._id}
        />
        <CardMedia
          component="img"
          image={image.path}
          alt={image.originalname}
          sx={{ width: "auto", height: "10rem", objectFit: "fill" }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 1 }}>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid
              item
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <ScheduleIcon color="action" />
              <Typography
                color="primary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {moment(image.createdAt).fromNow()}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}

export default ImageAdminCard;
