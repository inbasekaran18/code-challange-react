import {
  GET_PLANET_LIST_INITIAL,
  GET_PLANET_LIST_FAIL,
  GET_PLANET_LIST_SUCCESS
} from './actionTypes'

export const getPlanetList = (selectedData) => ({
  type: GET_PLANET_LIST_INITIAL,
  selectedData
})

export const getPlanetListSuccess = (planetDetails) => ({
  type: GET_PLANET_LIST_SUCCESS,
  payload: planetDetails
})
export const getPlanetListFail = (error) => ({
  type: GET_PLANET_LIST_FAIL,
  payload: error
})
