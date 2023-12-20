import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { loginUser } from "../services/authApi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    usernameOremail: "",
    password: "",
  });
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await loginUser(inputs);
      // setCookies("access_token", result.data.data.token);
      // window.localStorage.setItem("userID", result.data.data.userID);
      // navigate("/");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Login
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.dark")}
            boxShadow={"lg"}
            p={8}
            w={{
              base: "full",
              sm: "400px",
            }}
          >
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Username or Email</FormLabel>
                <Input
                  type="text"
                  value={inputs.usernameOremail}
                  onChange={(e) =>
                    setInputs((inputs) => ({
                      ...inputs,
                      usernameOremail: e.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs((inputs) => ({
                        ...inputs,
                        password: e.target.value,
                      }))
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Logging in"
                  size="lg"
                  bg={useColorModeValue("gray.600", "gray.700")}
                  color={"white"}
                  _hover={{
                    bg: useColorModeValue("gray.700", "gray.800"),
                  }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don&apos;t have an account?{" "}
                  <Link color={"blue.400"} onClick={() => navigate("/")}>
                    Sign up
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Login;
