import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";
import publishersReducer from "./publisherSlice";
import NewsReducer from "./newSlice";

export const store = configureStore({
  reducer: {
    article: articleReducer,
    publisher: publishersReducer,
    news: NewsReducer,
  },
});
