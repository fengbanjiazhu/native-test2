import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMealsId: [],
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const existingMealId = state.favoriteMealsId.includes(action.payload);

      if (existingMealId) {
        state.favoriteMealsId = state.favoriteMealsId.filter((mealId) => mealId !== action.payload);
      } else {
        state.favoriteMealsId.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = mealSlice.actions;

export default mealSlice.reducer;

export const getFavoriteMeals = (state) =>
  state.meals.meals.filter((meal) => state.meals.favoriteMealsId.includes(meal.id));
