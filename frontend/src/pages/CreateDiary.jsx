import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Select } from "../components/Select";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../redux/diary/diarySlice";
import { postDiary } from "../services/diaryApis";

function CreateDiary() {
  const { category } = useSelector((state) => state.diary);
  const { currentUser } = useSelector((state) => state.user);
  const [multipleCategoryValue, setMultipleCategoryValue] = useState([]);
  const [singleCategory, setSingleCategory] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();
  // console.log(category);
  // dispatch(addCategory({ label: singleCategory })
  async function handleSubmit() {
    try {
      const userID = currentUser.data.data.userID;
      const created_diary = await postDiary(
        userID,
        title,
        text,
        multipleCategoryValue,
        img
      );
      console.log(created_diary);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Container pt={10}>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Textarea
              placeholder="Write how your day went"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              name="category"
              value={singleCategory}
              onChange={(e) => setSingleCategory(e.target.value)}
            />
            <Button
              onClick={() =>
                setMultipleCategoryValue((prev) => [
                  ...prev,
                  { label: singleCategory },
                ])
              }
            >
              Add
            </Button>
          </FormControl>
          <Select
            onChange={(o) => setMultipleCategoryValue(o)}
            options={category}
            value={multipleCategoryValue}
          />
          <Button type="submit">Create</Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateDiary;
