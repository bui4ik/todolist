import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import tasksList from './tasksList/reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = {
  tasksList: persistReducer(persistConfig, tasksList),
}

export default rootReducer
