import { createSlice } from "@reduxjs/toolkit";
const initialValue = [];

export const ArticlesSlice = createSlice({
  name: "article",
  initialState: { value: initialValue },
  reducers: {
    getTopArticles: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTopArticles } = ArticlesSlice.actions;
export default ArticlesSlice.reducer;
