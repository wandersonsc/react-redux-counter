import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/wandersonsc">
        Wanderson
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <div className="footer">
      <CssBaseline />
      <footer>
        <Container maxWidth="sm">
          <FontAwesomeIcon icon={faReact} size="5x" color="#61DBFB" />
          <img className="logo" src={logo} alt="Logo" />
          <br />
          <Typography variant="caption">
            Made with love <FontAwesomeIcon icon={faHeart} color="red" />
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
