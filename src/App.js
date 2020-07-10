import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box, { a } from "./Box";

function App() {
  console.log(a);
  return (
    <div>
      <Box username="ssar" password="1234"></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;
