import {BankAPI} from "../api/api"

let initialState = {
    banks: [],
    bankColumns: ['Bank Name', 'Interest Rate', 'Maximum Loan', 'Minimum Down Payment', 'Loan Term']

}

let ManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BANKS':
            return {...state, banks: action.banks}
    }
    return state
}
export default ManagementReducer

let actions = {
    _setBanks: (banks) => ({type: 'SET_BANKS', banks})
}
export const setBank = bankData => async dispatch => {
    let res = await BankAPI.addBank(bankData)
    if (res) dispatch(actions._setBanks(res))
}

export const getBanks = () => async dispatch => {
    let res = await BankAPI.getBanks()
    if (res) dispatch(actions._setBanks(res))
}

export const deleteBank = bankId => async dispatch => {
    let res = await BankAPI.deleteBank(bankId)
    if (res) dispatch(actions._setBanks(res))
}

export const updateBank = bank => async dispatch => {
    let res = await BankAPI.updateBank(bank)
    if (res) dispatch(actions._setBanks(res))
}