import {
  GET_PLANET_INFO_INITIAL,
  GET_PLANET_INFO_FAIL,
  GET_PLANET_INFO_SUCCESS
} from './actionTypes'

export const getPlanetInfo = (selectedData) => ({
  type: GET_PLANET_INFO_INITIAL,
  selectedData
})

export const getPlanetInfoSuccess = (planetInfo) => ({
  type: GET_PLANET_INFO_SUCCESS,
  payload: planetInfo
})
export const getPlanetInfoFail = (error) => ({
  type: GET_PLANET_INFO_FAIL,
  payload: error
})
