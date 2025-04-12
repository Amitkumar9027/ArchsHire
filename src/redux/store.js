import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authentication/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
