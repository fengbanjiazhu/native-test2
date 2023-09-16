import { configureStore } from "@reduxjs/toolkit";

import mealReducer from "./mealReducer";

const store = configureStore({
  reducer: {
    meal: mealReducer,
  },
});

export default store;
