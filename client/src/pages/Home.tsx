import { Button } from "@mui/material";
import React from "react";
import ImageModal from "../components/imageComponents/ImageModal";

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      {/* <ImageModal image={null} /> */}
    </div>
  );
}

export default Home;
