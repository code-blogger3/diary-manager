import axios from "axios";

async function postDiary(userID, title, text, category, img) {
  const newDiary = await axios.post(`/api/diary/${userID}`, {
    title,
    text,
    category,
    img,
  });
  return newDiary;
}
export { postDiary };
