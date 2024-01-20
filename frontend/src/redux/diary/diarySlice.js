import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: [],
  category: [{ lable: "" }],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      // Assuming action.payload is the data you want to add to the category array
      state.category = [...state.category, action.payload];
    },
  },
  addDiary: (state, action) => {
    state.diaries = [...state.diaries, action.payload];
  },
});

export const { addCategory, addDiary } = diarySlice.actions;
export default diarySlice.reducer;
