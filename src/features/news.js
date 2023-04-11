import { createSlice } from "@reduxjs/toolkit";
const initialValue = [];

export const newsSlice = createSlice({
  name: "news",
  initialState: { value: initialValue },
  reducers: {
    getNews: (state, action) => {
      state.value = action.payload;
    },
    searchNews: (state, action) => {
      const { articles, searchQuery } = action.payload;
      state.value = articles.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
});

export const { getNews, searchNews } = newsSlice.actions;
export default newsSlice.reducer;
