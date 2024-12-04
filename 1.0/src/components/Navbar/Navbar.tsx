//* Styles
import { NavbarStyle } from "./NavbarStyle";

//* React-icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <NavbarStyle>
      <div id="container">
        <nav className="navigation">
          <div className="logo">
            <img src="/assets/logo.jpeg" alt="Profile picture" />
          </div>
        </nav>
        <div className="icons">
          <Link to={"https://github.com/MurilloLopes14"} target="_blank">
            <AiFillGithub className="icon" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/murillo-lopes-b87912228/"}
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
          </Link>
          <Link
            to={
              "https://drive.google.com/file/d/1Ox_pJp-fTlkZqY8vOVga2vRUK9uXehDu/view?usp=share_link"
            }
            className="btn"
            target="_blank"
          >
            Contrate-me
          </Link>
        </div>
      </div>
    </NavbarStyle>
  );
};
