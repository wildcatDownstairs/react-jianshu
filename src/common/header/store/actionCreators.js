import * as actionTypes from './actionTypes'
import {fromJS} from "immutable";
import axios from 'axios'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

const changList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(result => {
      const data = result.data;
      dispatch(changList(data.data))
    }).catch(e => {
      console.log(e);
    })
  }
};