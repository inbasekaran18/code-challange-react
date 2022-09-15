/* eslint-disable */
import { call, put, takeEvery } from 'redux-saga/effects'
// Crypto Redux States
import { GET_RESIDENT_INFO_INITIAL } from './actionTypes'

import { getResidentInfoSuccess, getResidentInfoFail } from './actions'
import { getAllData, getPlanetsInfo } from '../../data/apiService'

function* fetchResidentInfo({ selectedData }) {
  try {
    const { residents } = yield call(getPlanetsInfo, selectedData)
    
    const response = yield call(getAllData, residents)
    yield put(getResidentInfoSuccess(response))
  } catch (error) {
    yield put(
      getResidentInfoFail({
        error: true,
        message: 'Error while fetching resident info',
        other: error
      })
    )
  }
}

function* residentInfoSaga() {
  yield takeEvery(GET_RESIDENT_INFO_INITIAL, fetchResidentInfo)
}

export default residentInfoSaga
