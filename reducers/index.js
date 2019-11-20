import { combineReducers } from "redux";
import locationReducer from "../features/location/locationSlice";
import destinationReducer from "../features/destination/destinationSlice";
import interestsReducer from "../features/interests/interestsSlice";
import routesReducer from "../features/routes/routesSlice";

export default combineReducers({
  location: locationReducer,
  destination: destinationReducer,
  interests: interestsReducer,
  routes: routesReducer
});
