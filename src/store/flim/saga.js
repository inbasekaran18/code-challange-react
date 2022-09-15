/* eslint-disable */
import { call, put, takeEvery } from 'redux-saga/effects'
// Crypto Redux States
import { GET_FLIM_INFO_INITIAL } from './actionTypes'

import { getFlimInfoSuccess, getFlimInfoFail } from './actions'
import { getAllData, getPlanetsInfo } from '../../data/apiService'

function* fetchFlimInfo({ selectedData }) {
  try {

    const { films } = yield call(getPlanetsInfo, selectedData)
    const  response = yield call(getAllData, films)
    yield put(getFlimInfoSuccess(response))
  } catch (error) {
    yield put(
      getFlimInfoFail({
        error: true,
        message: 'Error while fetching flim Info',
        other: error
      })
    )
  }
}

function* flimInfoSaga() {
  yield takeEvery(GET_FLIM_INFO_INITIAL, fetchFlimInfo)
}

export default flimInfoSaga
