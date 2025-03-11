import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import selectedReducer from "./selectedSlice";

const store = configureStore({
  reducer: {
    cart: cardReducer,
    selected: selectedReducer,
  },
});

export default store;
