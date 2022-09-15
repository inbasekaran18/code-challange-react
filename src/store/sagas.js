import { all, fork } from "redux-saga/effects"

//public
import PlanetListSaga from "./planet/saga"
import PlanetInfoSaga from './planetInfo/saga'
import FlimInfoSaga from './flim/saga'
import ResidentInfoSaga from './resident/saga'
export default function* rootSaga() {
  yield all([
    fork(PlanetListSaga),
    fork(PlanetInfoSaga),
    fork(FlimInfoSaga),
    fork(ResidentInfoSaga)
    
  ])
}
