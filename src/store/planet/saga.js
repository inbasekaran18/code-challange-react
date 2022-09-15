/* eslint-disable */
import { call, put, takeEvery } from 'redux-saga/effects'
// Crypto Redux States
import { GET_PLANET_LIST_INITIAL } from './actionTypes'

import { getPlanetListSuccess, getPlanetListFail } from './actions'
import { getPlanetsList } from '../../data/apiService'
//Include Both Helper File with needed methods
//import { getMonitorData } from "../../helpers/fakebackend_helper"

function* fetchPlanetList() {
  try {
    const response = yield call(getPlanetsList)
    yield put(getPlanetListSuccess(response.results))
  } catch (error) {
    yield put(
      getPlanetListFail({
        error: true,
        message: 'Error while fetching planet list',
        other: error
      })
    )
  }
}

function* planetSaga() {
  yield takeEvery(GET_PLANET_LIST_INITIAL, fetchPlanetList)
}

export default planetSaga
