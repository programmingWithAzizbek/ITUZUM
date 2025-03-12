import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import selectedReducer from "./selectedSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    selected: selectedReducer,
  },
});

export default store;
