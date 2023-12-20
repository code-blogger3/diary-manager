import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const userSignUp = () => {
  return axios.post("/api/auth/signUp");
};

const useUserSignUp = () => {
  return useQuery("userSignUp", userSignUp);
};
