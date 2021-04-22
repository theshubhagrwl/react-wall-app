import * as actionTypes from "../actions/image/actionTypes";
import { updateObject } from "../utils";

// Defining the initial state of image
const initialState = {
  data: {
      data: [],
      after: null
  },
  error: null,
  loading: false,
};

// Start fetching images
const imageStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

// Storing the data on success
const imageSuccess = (state, action) => {
    // Combining the prev images with new images
  return updateObject(state, {
    data: {data: [...state.data.data, ...action.data.data], after: action.data.after},
    error: null,
    loading: false,
  });
};

// Getting the error
const imageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IMAGE_START:
      return imageStart(state, action);
    case actionTypes.IMAGE_SUCCESS:
      return imageSuccess(state, action);
    case actionTypes.IMAGE_FAIL:
      return imageFail(state, action);
    default:
      return state;
  }
};

export default reducer;
