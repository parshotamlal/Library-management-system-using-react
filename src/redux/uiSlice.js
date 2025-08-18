import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  toast: null, // Toast message store karne ke liye
};

// Slice creation
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Show toast action
    showToast: (state, action) => {
      state.toast = action.payload;
    },
    // Hide toast action
    hideToast: (state) => {
      state.toast = null;
    },
  },
});

// Export actions
export const { showToast, hideToast } = uiSlice.actions;

// Export reducer
export default uiSlice.reducer;
