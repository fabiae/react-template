import { put, takeLatest, all } from 'redux-saga/effects'

import Api from '../../@common/Api/Api'
import utilitiesActions from './utilitiesActions'
import { States } from '../../@common/constants/constants'

function* getLanguages(){
    const response = yield Api.get("/language/all", { state: States.ACTIVE })
    if(response.ok){
        yield put(utilitiesActions.getLanguagesResponse(response.res))
    }else{
        const error = new TypeError(response.res.message)
        yield put(utilitiesActions.getLanguagesResponse(error))
    }
}

function* actionWatcher(){
    yield takeLatest(utilitiesActions.getLanguages, getLanguages)
}

export default function* utilitiesSaga(){
    yield all([actionWatcher()])
}