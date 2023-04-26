import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialValue = [];

export const newsSlice = createSlice({
  name: "news",
  initialState: { value: initialValue },
  reducers: {
    getNews: (state, action) => {
      // Add unique ID to each article
      const articlesWithIds = action.payload.map((article) => ({
        ...article,
        id: nanoid(),
      }));
      state.value = articlesWithIds;
    },
  },
});

export const { getNews } = newsSlice.actions;
export default newsSlice.reducer;
