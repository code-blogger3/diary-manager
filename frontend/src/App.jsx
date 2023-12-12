// import { useState } from "react";
import "./App.css";
import { Button, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode}>hi</Button>
    </>
  );
}

export default App;
