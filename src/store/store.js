// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // чтобы избежать предупреждений о сериализации
    }),
});
