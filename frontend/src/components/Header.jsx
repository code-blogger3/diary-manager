import { Button, useColorMode } from "@chakra-ui/react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode}>hi</Button>
    </>
  );
}

export default Header;
