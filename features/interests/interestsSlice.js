import { createSlice } from "@reduxjs/toolkit";

const interestsSlice = createSlice({
  name: "interests",
  initialState: {
    AR: false,
    SA: false,
    MU: false,
    VP: false,
    LM: false,
    PA: false,
    LC: false
  },
  reducers: {
    toggleInterest(state, { interest }) {
      state[interest] = !state[interest];
    }
  }
});

export const { toggleInterest } = interestsSlice.actions;
export default interestsSlice.reducer;
