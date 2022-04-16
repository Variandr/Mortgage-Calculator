import {CalculatorAPI} from "../api/api";

let initialState = {
    monthlyPayment: null,
    message: null
}

let CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MORTGAGE_PAYMENT':
            return {...state, monthlyPayment: action.payment}
        case 'SET_ERROR_MESSAGE':
            return {...state, message: action.message}
    }
    return state
}
export default CalculatorReducer

let actions = {
    _setMortgagePayment: (payment) => ({type: 'SET_MORTGAGE_PAYMENT', payment}),
    _setErrorMessage: (message) => ({type: 'SET_ERROR_MESSAGE', message})
}

export const getMortgagePayment = calcData => async dispatch => {
    let res = await CalculatorAPI.getMortgagePayment(calcData)
    if (res) {
        if (res.message) {
            dispatch(actions._setErrorMessage(res.message))
        } else dispatch(actions._setMortgagePayment(res))
    }
}