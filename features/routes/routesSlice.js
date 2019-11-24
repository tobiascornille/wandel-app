import { createSlice } from "@reduxjs/toolkit";
import { getRoutes } from "../../api/backendAPI";

const routesSlice = createSlice({
  name: "routes",
  initialState: [],
  reducers: {
    setRoutes: (_state, { payload }) => payload
  }
});

export const { setRoutes } = routesSlice.actions;
export default routesSlice.reducer;

export const fetchRoutes = () => async (dispatch, getState) => {
  const { location, destination, interests } = getState();
  try {
    const routes = await getRoutes(location, destination, interests);
    dispatch(setRoutes(routes));
  } catch (err) {
    console.warn(err.toString());
  }
};
