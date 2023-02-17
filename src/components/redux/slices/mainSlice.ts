import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../interface";

interface initialStateInterface {
  items: IItem[],
  filteredItems: IItem[] | null,
  itemId: number,
  isLoading: boolean
}

const initialState: initialStateInterface = {
  items: [],
  filteredItems: [],
  itemId: 0,
  isLoading: true
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload
    },
    setItemId: (state, action) => {
      state.itemId = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setItems,
  setFilteredItems,
  setItemId,
  setIsLoading
} = mainSlice.actions;

export default mainSlice.reducer;