import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// web.cjs is required for IE11 support
import { useSpring, animated } from "react-spring";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
} from "@mui/material";
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
      >
        <Fade in={open}>
          <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={open}
            onClose={handleClose}
          >
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
            <DialogContent>
              {image && (
                <img
                  className="rounded-md"
                  src={image.path}
                  alt={image.originalname}
                  loading="lazy"
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "fill",
                  }}
                />
              )}
              <DialogContentText>{image?.description}</DialogContentText>
            </DialogContent>
          </Dialog>
        </Fade>
      </Modal>
    </div>
  );
}
