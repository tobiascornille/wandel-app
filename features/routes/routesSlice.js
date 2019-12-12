import { createSlice } from "@reduxjs/toolkit";
import { getRoutesInfo } from "../../api/backendAPI";
import { getDirections } from "../../api/directionsAPI";

const initialState = {
  list: [],
  currentIndex: -1,
  waiting: false
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setRoutes: (state, { payload }) => {
      state.list = payload;
      state.currentIndex = 0;
    },
    setCurrentIndex: (state, { payload }) => {
      state.currentIndex = payload;
    },
    clearRoutes: () => initialState,
    toggleWaiting: state => {
      state.waiting = !state.waiting;
    }
  }
});

export const {
  setRoutes,
  setCurrentIndex,
  clearRoutes,
  toggleWaiting
} = routesSlice.actions;
export default routesSlice.reducer;

export const fetchRoutes = () => async (dispatch, getState) => {
  const { location, destination, interests } = getState();
  try {
    dispatch(toggleWaiting());
    const routesInfo = await getRoutesInfo(location, destination, interests);
    const routes = await Promise.all(
      routesInfo.map(async ({ routeName, route, spots }) => {
        const directions = await getDirections(route);
        return {
          routeName,
          spots,
          ...directions
        };
      })
    );

    dispatch(toggleWaiting());
    dispatch(setRoutes(routes));
  } catch (err) {
    console.error(err.toString());
  }
};
