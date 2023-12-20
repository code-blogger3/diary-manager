import axios from "axios";

async function registerUser(userDetails) {
  await axios.post("/api/auth/signUp", { ...userDetails });
}

export { registerUser };
