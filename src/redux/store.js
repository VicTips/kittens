import { configureStore } from "@reduxjs/toolkit";
import kittensReducer from "./slices/kittensSlice"

export const store = configureStore({
  reducer: {
    kittens: kittensReducer
  },
})
