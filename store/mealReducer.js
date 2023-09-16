import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
});

// export const { updateName } = mealSlice.actions;

export default mealSlice.reducer;
