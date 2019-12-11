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
    setInterests: (_state, { payload }) => payload,
    toggleInterest(state, { payload }) {
      state[payload] = !state[payload];
    }
  }
});

export const { setInterests, toggleInterest } = interestsSlice.actions;
export default interestsSlice.reducer;
