import { createSlice } from "@reduxjs/toolkit";

const interestsSlice = createSlice({
  name: "interests",
  initialState: {
    Architecture: false,
    "Street Art": false,
    Museums: false,
    Viewpoints: false,
    Landmarks: false,
    Parks: false,
    "Local Cuisine": false
  },
  reducers: {
    toggleInterest(state, { payload }) {
      state[payload] = !state[payload];
    }
  }
});

export const { toggleInterest } = interestsSlice.actions;
export default interestsSlice.reducer;
