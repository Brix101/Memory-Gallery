import React, { useState } from "react";
import { Box, Card, Grid, IconButton, Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";
import { FixedSizeList, ListChildComponentProps } from "react-window";

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem
      style={style}
      key={index}
      disablePadding
      secondaryAction={
        <IconButton aria-label="remove">
          <CancelIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

function UploadImage() {
  const [open, setOpen] = useState<boolean>(false);
  const [files, setFiles] = useState();

  return (
    <Box sx={{ mt: 3 }}>
      <Card sx={{ p: 2, minHeight: "400px" }}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={6} sm={12} xs={12} order={1}>
            <Paper
              sx={{
                backgroundColor: "blue",
                height: "400px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            ></Paper>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} order={2}>
            <Paper
              sx={{ backgroundColor: "red", height: "100%", width: "100%" }}
            ></Paper>
            <FixedSizeList
              height={400}
              width={360}
              itemSize={46}
              itemCount={200}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default UploadImage;
