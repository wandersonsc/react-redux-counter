import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "../App.css";
import Home from "./Home";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Home />
      </Container>
    </React.Fragment>
  );
}

export default App;
