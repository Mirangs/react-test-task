import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  images: []
};

const fetchImagesStart = (state, action) => ({
  ...state,
  loading: true,
  error: null,
});

const fetchImagesSuccess = (state, action) => ({
  ...state,
  loading: false,
  error: null,
  images: action.images
});

const fetchImagesFail = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGES_START: return fetchImagesStart(state, action);
    case actionTypes.FETCH_IMAGES_SUCCESS: return fetchImagesSuccess(state, action);
    case actionTypes.FETCH_IMAGES_FAIL: return fetchImagesFail(state, action);
    default: return state;
  }
}

export default reducer;