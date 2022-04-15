import {applyMiddleware, combineReducers, createStore} from "redux"
import ManagementReducer from "./management-reducer"
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    managementPage: ManagementReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store