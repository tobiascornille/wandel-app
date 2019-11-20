import { createSlice } from "@reduxjs/toolkit";

const routesSlice = createSlice({
  name: "routes",
  initialState: [],
  reducers: {
    setRoutes: (_state, { payload }) => payload
  }
});

export const { setRoutes } = routesSlice.actions;
export default routesSlice.reducer;
