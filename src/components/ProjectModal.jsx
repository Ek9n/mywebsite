import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../userContext";
import Avatar from "@mui/material/Avatar";
import * as React from "react";

import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "white",
  color: "red",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function ChildModal({ imgIndex }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        <Avatar alt="project image" src={imgIndex} sx={{ width: 56, height: 56 }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style2}>
          <Button onClick={handleClose}>
            <Avatar alt="project image" src={imgIndex} sx={{ width: 350, height: 'auto' }} variant="square"/>
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const ProjectModal = ({ open, handleClose, modalIndex }) => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {user.projects[modalIndex].title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {user.projects[modalIndex].description}
          <br /> <br />
          Skills used:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.projects[modalIndex].skillsUsed.map((el) => (
            <p>{el}</p>
          ))}
        </Typography>
        {user &&
          user.projects[modalIndex].images.map((imgIndex) => {
            return <ChildModal imgIndex={imgIndex} />;
          })}
      </Box>
    </Modal>
  );
};

export default ProjectModal;
