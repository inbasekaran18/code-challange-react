/* eslint-disable */
import { call, put, takeEvery } from 'redux-saga/effects'
// Crypto Redux States
import { GET_PLANET_INFO_INITIAL } from './actionTypes'

import { getPlanetInfoSuccess, getPlanetInfoFail } from './actions'
import { getPlanetsInfo } from '../../data/apiService'

function* fetchPlanetInfo({ selectedData }) {
  try {
    const response = yield call(getPlanetsInfo, selectedData)
    yield put(getPlanetInfoSuccess(response))
  } catch (error) {
    yield put(
      getPlanetInfoFail({
        error: true,
        message: 'Error while fetching planet Info',
        other: error
      })
    )
  }
}

function* planetInfoSaga() {
  yield takeEvery(GET_PLANET_INFO_INITIAL, fetchPlanetInfo)
}

export default planetInfoSaga
