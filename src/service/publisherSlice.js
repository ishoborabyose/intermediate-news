import { createSlice } from "@reduxjs/toolkit";
const initialValue = [];

export const publishersSlice = createSlice({
  name: "publisher",
  initialState: { value: initialValue },
  reducers: {
    getPublishers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getPublishers } = publishersSlice.actions;
export default publishersSlice.reducer;
