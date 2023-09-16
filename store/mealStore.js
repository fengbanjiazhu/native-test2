import { configureStore } from "@reduxjs/toolkit";

import mealReducer from "./mealReducer";

const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
});

export default store;
