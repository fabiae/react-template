import { all, fork } from "redux-saga/effects"

import authSaga from "../services/auth/authSaga"
import utilitiesSaga from '../services/utilities/utilitiesSaga'

function* rootSagas() {
  yield all([
    fork(authSaga),
    fork(utilitiesSaga)
  ])
}

export default rootSagas
