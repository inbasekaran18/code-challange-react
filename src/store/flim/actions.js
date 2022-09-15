import {
  GET_FLIM_INFO_INITIAL,
  GET_FLIM_INFO_FAIL,
  GET_FLIM_INFO_SUCCESS
} from './actionTypes'

export const getFlimInfo = (selectedData) => ({
  type:   GET_FLIM_INFO_INITIAL,
  selectedData
})

export const getFlimInfoSuccess = (flimInfo) => ({
  type: GET_FLIM_INFO_SUCCESS,
  payload: flimInfo
})
export const getFlimInfoFail = (error) => ({
  type: GET_FLIM_INFO_FAIL,
  payload: error
})
