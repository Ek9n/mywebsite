import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";

const ProjectCard = ({ onClick, index }) => {
  const user = useContext(UserContext);

  console.log('user', user.projects[index].thumbnail)

  return (
    <Card sx={{ width: "25vw"}}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="160"
          image={user.projects[index].thumbnail}
          alt="test image"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom component="div" maxWidth="80%">
            {user.projects[index].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.projects[index].github}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
