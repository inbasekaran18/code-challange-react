import {
  GET_RESIDENT_INFO_INITIAL,
  GET_RESIDENT_INFO_FAIL,
  GET_RESIDENT_INFO_SUCCESS
} from './actionTypes'

export const getResidentInfo = (selectedData) => ({
  type: GET_RESIDENT_INFO_INITIAL,
  selectedData
})

export const getResidentInfoSuccess = (residentInfo) => ({
  type: GET_RESIDENT_INFO_SUCCESS,
  payload: residentInfo
})

export const getResidentInfoFail = (error) => ({
  type: GET_RESIDENT_INFO_FAIL,
  payload: error
})
