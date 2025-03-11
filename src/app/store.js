import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";

const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

export default store;
