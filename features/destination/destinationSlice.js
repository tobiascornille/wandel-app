import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: "",
  reducers: {
    setDestination: (_state, { payload }) => payload
  }
});

export const { setDestination } = destinationSlice.actions;
export default destinationSlice.reducer;
