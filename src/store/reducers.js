import { combineReducers } from "redux"
// Front
import PlanetListDetails from "./planet/reducer"
import PlanetInfoDetails from './planetInfo/reducer'
import FlimInfoDetails from './flim/reducer'
import ResidentInfoDetails from './resident/reducer'

const rootReducer = combineReducers({
  PlanetListDetails,
  PlanetInfoDetails,
  FlimInfoDetails,
  ResidentInfoDetails
})


export default rootReducer


