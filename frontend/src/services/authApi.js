import axios from "axios";

async function registerUser(userDetails) {
  await axios.post("/api/auth/signUp", { ...userDetails });
}
async function loginUser(userDetails) {
  const result = await axios.post("/api/auth/signIn", { ...userDetails });
  return result;
}
export { registerUser, loginUser };
