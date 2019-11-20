import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    coords: [],
    timestamp: -1
  },
  reducers: {
    setLocation: (_state, { payload }) => payload
  }
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
