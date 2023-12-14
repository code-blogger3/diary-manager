import { Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

function Header() {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex justify={"space-between"} margin={"9px 9px 0 9px"}>
        <AiFillHome size={24} onClick={() => navigate("/")} />
        <Flex gap={5}>
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
      </Flex>
    </>
  );
}

export default Header;
