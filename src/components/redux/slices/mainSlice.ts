import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../interface";

interface initialStateInterface {
  items: IItem[],
  filteredItems: IItem[] | null,
}

const initialState: initialStateInterface = {
  items: [],
  filteredItems: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action?.payload[0];
    },
    setFilteredItems: (state, action) => {
      console.log(action.payload)
      state.filteredItems = state.items.filter(el => Number(el.id) === Number(action.payload)
      );
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {
  setItems,
  setFilteredItems,
} = mainSlice.actions;

export default mainSlice.reducer;