import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "../App.css";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <div data-test-id="appWrapper" className="wrapper">
      <CssBaseline />
      <Container maxWidth="sm">
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
