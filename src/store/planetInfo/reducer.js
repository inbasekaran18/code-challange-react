import {
  GET_PLANET_INFO_INITIAL,
  GET_PLANET_INFO_FAIL,
  GET_PLANET_INFO_SUCCESS
} from './actionTypes'

const INIT_STATE = {
  planetInfo:{},
  error: {},
  isLoading: false,
}

const planetInfo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PLANET_INFO_INITIAL:
      return {
        ...state,
        isLoading: true
      }
    case GET_PLANET_INFO_SUCCESS:
      return {
        ...state,
        planetInfo:action.payload,
        isLoading: false
      }
    case GET_PLANET_INFO_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default planetInfo
