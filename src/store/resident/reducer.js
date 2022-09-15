import {
  GET_RESIDENT_INFO_INITIAL,
  GET_RESIDENT_INFO_FAIL,
  GET_RESIDENT_INFO_SUCCESS
} from './actionTypes'

const INIT_STATE = {
  residentInfo: [],
  error: {},
  isLoading: false
}

const planetInfo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_RESIDENT_INFO_INITIAL:
      return {
        ...state,
        isLoading: true
      }
    case GET_RESIDENT_INFO_SUCCESS:
      return {
        ...state,

        residentInfo: action.payload,
        isLoading: false
      }
    case GET_RESIDENT_INFO_FAIL:
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
