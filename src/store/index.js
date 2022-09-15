import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose
} from 'redux'
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleWares = [sagaMiddleware, logger] //const middleWares=[sagaMiddleware,logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
)
sagaMiddleware.run(rootSaga)

// NetworkService.setupInterceptors(
//   store,
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

export default store



