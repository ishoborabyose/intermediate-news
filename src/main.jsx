import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./features/articles";
import publishersReducer from "./features/publishers";
import NewsReducer from "./features/news";

const store = configureStore({
  reducer: {
    article: articleReducer,
    publisher: publishersReducer,
    news: NewsReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
