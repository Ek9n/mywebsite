import { Link } from "react-scroll";
import "./intro.scss";
import SouthIcon from "@mui/icons-material/South";
import { useContext } from "react";
import { UserContext } from "../../userContext";

const Intro = () => {
  const user = useContext(UserContext);

  return (
    <div id="section-one" className="intro intro-container">
      <div className="typewriter">
        <h1>Hannes Stein</h1>
        <h2 className="typewriter-text">
          Junior Ingenieur und Software Developer aus Berlin.
          {/* <span style={{ color: "gray" }}>{user.name}</span>, Junior Ingenieur und Software Developer aus Berlin. */}
          {/* Mein Name ist <span style={{color: 'gray'}}>{user.name}</span> und ich bin ein Softwareentwickler. */}
        </h2>
        {user.bio}
      </div>

      <div className="next-section-butt">
        <Link
          activeClass="active"
          to="section-two"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <SouthIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
