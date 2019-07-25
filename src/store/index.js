import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRouter, routerMiddleware as useRouterMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const history = createBrowserHistory()
const routerMiddleware = useRouterMiddleware(history)
const reducer = combineReducers({
  ...rootReducer,
  router: connectRouter(history),
})

const initialState = {}
const enhancers = []
const middleware = [routerMiddleware, thunk]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // eslint-disable-line  prefer-destructuring
  const { createLogger } = require('redux-logger') // eslint-disable-line global-require
  const logger = createLogger()

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  middleware.push(logger)
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(reducer, initialState, composedEnhancers)

const persistor = persistStore(store)

export { history, persistor }

export default store
