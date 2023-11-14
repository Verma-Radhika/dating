import React from "react";
import Modal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Button, Container } from "@mui/material";
export const WatchVideo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Button onClick={handleOpen}>Video</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ display: "absolute", top: "30%" }}
      >
        {/* <Container maxWidth="md">
        <div className='playerDiv'>
          <ReactPlayer width={'100%'} height='100%' url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"/>
        </div>
      </Container> */}
        <Box className="feedbackContainer">
          <video width={"100%"} height="100%">
            {" "}
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="mp4"
            />{" "}
          </video>
        </Box>
      </Modal>
    </>
  );
};
