import {
  GET_PLANET_LIST_INITIAL,
  GET_PLANET_LIST_FAIL,
  GET_PLANET_LIST_SUCCESS
} from './actionTypes'

const INIT_STATE = {
  planetList:[],
  error: {},
  isLoading: false,
}

const planetList = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PLANET_LIST_INITIAL:
      return {
        ...state,
        isLoading: true
      }
    case GET_PLANET_LIST_SUCCESS:
      return {
        ...state,
        planetList: [...action.payload],
        isLoading: false
      }
    case GET_PLANET_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default planetList
