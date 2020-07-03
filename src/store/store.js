import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import { routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from 'history'

import rootReducers from "./reducers"
import rootSagas from "./sagas"

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducers(history),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routeMiddleware))
)

sagaMiddleware.run(rootSagas)

export default store
