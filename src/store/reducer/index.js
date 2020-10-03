import { combineReducers } from "redux";

// Importing all the reducers
import imageReducer from "./image";

// cobmination of all the reducers
const appReducer = combineReducers({
  image: imageReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
