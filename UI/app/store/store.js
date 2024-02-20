import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeReducer";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export const server = "http://192.168.1.6:8080/api/v1";
