import React from "react";
import { useSelector } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div>
      <Button colorScheme="blue" onClick={() => navigate("/createDiary")}>
        Create
      </Button>
      <Button colorScheme="blue">Button</Button>
    </div>
  );
}

export default Home;
