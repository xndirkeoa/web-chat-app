import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: true, // Initial state should be a boolean, not a string
  reducers: {
    toggleTheme: (state) => {
      // Use Immer's produce function to mutate the state
      return !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
