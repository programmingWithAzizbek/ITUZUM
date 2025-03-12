import { createSlice } from "@reduxjs/toolkit";

const savedSelected = JSON.parse(localStorage.getItem("selected")) || [];

const selectedSlice = createSlice({
  name: "selected",
  initialState: {
    selectedList: savedSelected,
  },
  reducers: {
    addItem: (state, action) => {
      const isInList = state.selectedList.some(
        (item) => item.id === action.payload.id
      );

      if (!isInList) {
        state.selectedList.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.selectedList = state.selectedList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearAll: (state) => {
      state.selectedList = [];
    },
  },
});

export const syncSelectedWithLocalStorage = (store) => {
  store.subscribe(() => {
    const { selected } = store.getState();
    localStorage.setItem("selected", JSON.stringify(selected.selectedList));
  });
};

export default selectedSlice.reducer;
export const { addItem, removeItem, clearAll } = selectedSlice.actions;
