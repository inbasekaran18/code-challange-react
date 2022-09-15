import {
  GET_FLIM_INFO_INITIAL,
  GET_FLIM_INFO_FAIL,
  GET_FLIM_INFO_SUCCESS
} from './actionTypes'

const INIT_STATE = {
  flimInfo: [],
  error: {},
  isLoading: false
}

const planetInfo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FLIM_INFO_INITIAL:
      return {
        ...state,
        isLoading: true
      }
    case GET_FLIM_INFO_SUCCESS:
      return {
        ...state,
        flimInfo: [...action.payload],
        isLoading: false
      }
    case GET_FLIM_INFO_FAIL:
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
