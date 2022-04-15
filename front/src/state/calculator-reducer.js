import {CalculatorAPI} from "../api/api";

let initialState = {
    monthlyPayment: null
}

let CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MORTGAGE_PAYMENT':
            return {...state, monthlyPayment: action.payment}
    }
    return state
}
export default CalculatorReducer

let actions = {
    _setMortgagePayment: (payment) => ({type: 'SET_MORTGAGE_PAYMENT', payment})
}

export const getMortgagePayment = calcData => async dispatch => {
    let response = await CalculatorAPI.getMortgagePayment(calcData)
    if(response){
        dispatch(actions._setMortgagePayment(response))
    }
}