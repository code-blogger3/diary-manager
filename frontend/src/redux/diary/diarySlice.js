import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: [],
  category: [],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
});

export default diarySlice.reducer;
