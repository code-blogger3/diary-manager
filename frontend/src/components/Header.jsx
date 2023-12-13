import { Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex justify={"flex-end"} gap={5} margin={"9px 9px 0 0"}>
        <Image
          cursor={"pointer"}
          alt="logo"
          w={10}
          src={
            colorMode == "dark"
              ? "/icons8-light-mode-78.png"
              : "/icons8-dark-mode-50.png"
          }
          onClick={toggleColorMode}
        />
        <Button onClick={() => navigate("/register")}>Sign Up</Button>
        <Button onClick={() => navigate("/login")}>Sign in</Button>
      </Flex>
    </>
  );
}

export default Header;
