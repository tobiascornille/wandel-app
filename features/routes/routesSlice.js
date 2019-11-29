import { createSlice } from "@reduxjs/toolkit";
import { getRoutes } from "../../api/backendAPI";

const routesSlice = createSlice({
  name: "routes",
  initialState: {
    list: [],
    currentIndex: -1
  },
  reducers: {
    setRoutes: (state, { payload }) => {
      state.list = payload;
      current = 0;
    },
    setCurrentIndex: (state, { payload }) => {
      console.log("Current index: " + payload);
      state.currentIndex = payload;
    }
  }
});

export const { setRoutes, setCurrentIndex } = routesSlice.actions;
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
