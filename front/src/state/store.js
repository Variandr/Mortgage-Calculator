import {applyMiddleware, combineReducers, createStore} from "redux"
import ManagementReducer from "./management-reducer"
import thunkMiddleware from 'redux-thunk'
import CalculatorReducer from "./calculator-reducer"

let reducers = combineReducers({
    managementPage: ManagementReducer,
    calculatorPage: CalculatorReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store