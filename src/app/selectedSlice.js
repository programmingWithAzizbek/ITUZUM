import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: "selected",
  initialState: {
    selectedProducts: [],
  },
  reducers: {
    toggleLike: (state, action) => {
      const product = action.payload;
      const existingIndex = state.selectedProducts.findIndex(
        (p) => p.id === product.id
      );

      if (existingIndex >= 0) {
        state.selectedProducts.splice(existingIndex, 1);
      } else {
        state.selectedProducts.push(product);
      }
    },
  },
});

export const { toggleLike } = selectedSlice.actions;
export default selectedSlice.reducer;
