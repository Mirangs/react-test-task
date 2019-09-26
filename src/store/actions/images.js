import * as actionTypes from './actionTypes';
import axios from '../../axios-images';

export const fetchImagesStart = () => ({
  type: actionTypes.FETCH_IMAGES_START
});

export const fetchImagesSuccess = images => ({
  type: actionTypes.FETCH_IMAGES_SUCCESS,
  images
});

export const fetchImagesFail = error => ({
  type: actionTypes.FETCH_IMAGES_FAIL,
  error
});

export const initImages = () => {
  return dispatch => {
    dispatch(fetchImagesStart());
    axios.get('')
      .then(res => {
        dispatch(fetchImagesSuccess(res.data.hits));
      })
      .catch(err => {
        dispatch(fetchImagesFail(err));
      });
  }
}