import { Button, Image, useColorMode } from "@chakra-ui/react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
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
    </>
  );
}

export default Header;
