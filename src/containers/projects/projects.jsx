import { Link } from "react-scroll";
import "./projects.scss";
import Stack from "@mui/material/Stack";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../../userContext";
import ProjectCard from "../../components/ProjectCard";

import ProjectModal from "../../components/ProjectModal";

const Projects = () => {
  const user = useContext(UserContext);

  const [open, setOpen] = React.useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);
  const handleOpen = (index) => {
    setModalIndex(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="main" id="section-two">
      {open && (
        <ProjectModal
          open={open}
          handleClose={handleClose}
          modalIndex={modalIndex}
        />
      )}
      <Stack
        sdirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}
        marginLeft={2}
      >
        {user &&
          user.projects.map((project, index) => {
            if (index % 2 == 0) {
              return (
                <ProjectCard
                  onClick={() => {
                    handleOpen(index);
                  }}
                  index={index}
                />
              );
            }
          })}
      </Stack>

      <div id="arrows-main" className="section-main">
        <div id="arrow-up" className="next-section-butt">
          <Link
            activeClass="active"
            to="section-one"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <NorthIcon fontSize="large" />
          </Link>
        </div>

        <div className="projects-title">
          <h1>projects</h1>
          {/* <h1>Projekte</h1> */}
        </div>

        <div id="arrow-down" className="next-section-butt">
          <Link
            activeClass="active"
            to="section-three"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <SouthIcon fontSize="large" />
          </Link>
        </div>
      </div>

      <Stack
        sdirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}
        marginRight={2}
      >
        {user &&
          user.projects.map((project, index) => {
            if (index % 2 != 0) {
              return (
                <ProjectCard
                  onClick={() => {
                    handleOpen(index);
                  }}
                  index={index}
                />
              );
            }
          })}
      </Stack>
    </div>
  );
};

export default Projects;
