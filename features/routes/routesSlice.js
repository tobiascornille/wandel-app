import { createSlice } from "@reduxjs/toolkit";
import { getRoutesInfo } from "../../api/backendAPI";
import { getDirections } from "../../api/directionsAPI";

const routesSlice = createSlice({
  name: "routes",
  initialState: {
    list: [],
    currentIndex: -1
  },
  reducers: {
    setRoutes: (state, { payload }) => {
      state.list = payload;
      state.currentIndex = 0;
    },
    setCurrentIndex: (state, { payload }) => {
      state.currentIndex = payload;
    }
  }
});

export const { setRoutes, setCurrentIndex } = routesSlice.actions;
export default routesSlice.reducer;

export const fetchRoutes = () => async (dispatch, getState) => {
  const { location, destination, interests } = getState();
  try {
    const routesInfo = await getRoutesInfo(location, destination, interests);
    const routes = await Promise.all(
      routesInfo.map(async ({ routeName, url, spots }) => {
        const directions = await getDirections(url);
        return {
          routeName,
          spots,
          ...directions
        };
      })
    );

    dispatch(setRoutes(routes));
  } catch (err) {
    console.error(err.toString());
  }
};
