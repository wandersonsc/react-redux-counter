import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "../App.css";
import Home from "./Home";

function App() {
  return (
    <div data-test-id="appWrapper">
      <CssBaseline />
      <Container maxWidth="sm">
        <Home />
      </Container>
    </div>
  );
}

export default App;
