import { createStore, combineReducers, applyMiddleware} from '../libs/redux.js'
import thunkMiddleware from '../libs/redux-thunk'
import numberReducer from './reducer/number'
import userReducer from './reducer/user'

const allReducer = {
  number: numberReducer,
  user: userReducer
}

const rootReducer = combineReducers(allReducer)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store