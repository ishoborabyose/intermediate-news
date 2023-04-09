import { createSlice } from "@reduxjs/toolkit";
const initialValue = [];

export const ArticlesSlice = createSlice({
  name: "article",
  initialState: { value: initialValue },
  reducers: {
    getTopArticles: (state, action) => {
      state.value = action.payload;
    },

    searchArticle: (state, action) => {
      const { articles, searchQuery } = action.payload;
      state.value = articles.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
});

export const { getTopArticles, searchArticle } = ArticlesSlice.actions;
export default ArticlesSlice.reducer;
