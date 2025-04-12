import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  isLoggedIn: !!localStorage.getItem("loggedInUser"), // true if user exists
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn=true;
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
