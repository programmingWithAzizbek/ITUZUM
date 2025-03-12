import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      const product = action.payload;
      state.products[product.id] = product;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
