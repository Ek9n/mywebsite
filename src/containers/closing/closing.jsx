import { Link } from "react-scroll";
import "./closing.scss";
import NorthIcon from "@mui/icons-material/North";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useContext } from "react";
import { UserContext } from "../../userContext";

const Closing = () => {
  const user = useContext(UserContext);
  return (
    <div id="section-three" className="links-closing">
      <div>{}</div>

      <div className="link">
        <Link
          activeClass="active"
          to="section-two"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <NorthIcon fontSize="large" />
        </Link>
      </div>

      <div className="link-row">
        <div className="links">
          <a href={user.linkedIn} target="_blank">
            <LinkedInIcon sx={{ fontSize: 50 }} className="l" />
          </a>
        </div>

        {/* <div className="links">
            <EmailIcon sx={{ fontSize: 50 }} />
        </div> */}

        <div className="links">
          <a href={user.gitHub} target="_blank">
            <img
              alt="Github Link"
              src="https://th.bing.com/th/id/R.9230943f4e960d4311f3c8b9c28d92ab?rik=SCK0sB8EXFwNkA&pid=ImgRaw&r=0"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Closing;
