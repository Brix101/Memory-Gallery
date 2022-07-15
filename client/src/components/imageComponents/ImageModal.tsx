import * as React from "react";
import {
  Backdrop,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Modal,
} from "@mui/material";

// web.cjs is required for IE11 support
import { useSpring, animated } from "react-spring";

import CloseIcon from "@mui/icons-material/Close";

import { Image } from "../../interfaces";

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface props {
  image: Image | undefined;
  onClose: any;
}

export default function ImageModal({ image, onClose }: props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  React.useEffect(() => {
    if (image) {
      setOpen(true);
    }
  }, [image]);

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Fade in={open}>
          <Dialog maxWidth={"lg"} open={open} onClose={handleClose}>
            <IconButton
              color="inherit"
              onClick={handleClose}
              sx={{ position: "absolute", right: 15, top: 5 }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <CardMedia
                component="img"
                image={image?.path}
                alt={image?.originalname}
                sx={{ p: 1, width: "100%" }}
              />
            </DialogContent>
            <DialogContentText>{image?.description}</DialogContentText>
          </Dialog>
        </Fade>
      </Modal>
    </div>
  );
}
