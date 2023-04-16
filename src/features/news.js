import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

export const newsSlice = createSlice({
  name: "news",
  initialState: { value: initialValue },
  reducers: {
    getNews: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getNews } = newsSlice.actions;
export default newsSlice.reducer;
