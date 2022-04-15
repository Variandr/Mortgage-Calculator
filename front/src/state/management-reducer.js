import uuid from "react-uuid"

let initialState = {
    banks: []
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
export const setBank = bankData => dispatch => {
    let banks = JSON.parse(localStorage.getItem('banks'))
    let newBank = {...bankData, id: uuid()}
    if (banks) {
        let isFound = banks.find(a => a.name === newBank.name)
        if (!isFound) localStorage.setItem('banks', JSON.stringify([...banks, newBank]))
        dispatch(actions._setBanks([...banks, newBank]))
    } else {
        localStorage.setItem('banks', JSON.stringify([newBank]))
        dispatch(actions._setBanks([newBank]))
    }
}
export const getBanks = () => dispatch => {
    let banks = JSON.parse(localStorage.getItem('banks'))
    if (banks) {
        dispatch(actions._setBanks(banks))
    }
}

export const deleteBank = bankId => dispatch => {
    let banks = JSON.parse(localStorage.getItem('banks'))
    if (banks) {
        let updatedBanks = banks.filter(b => b.id !== bankId)
        localStorage.setItem('banks', JSON.stringify(updatedBanks))
        dispatch(actions._setBanks(updatedBanks))
    }
}
export const updateBank = bank => dispatch => {
    let banks = JSON.parse(localStorage.getItem('banks'))
    if (banks) {
        let updatedBanks = banks.map(b => {
            if (b.id === bank.id) {
                b.name = bank.name
                b.interestRate = bank.interestRate
                b.loanTerm = bank.loanTerm
                b.maximumLoan = bank.maximumLoan
                b.minimumDownPayment = bank.minimumDownPayment
            }
            return b
        })
        localStorage.setItem('banks', JSON.stringify(updatedBanks))
        dispatch(actions._setBanks(updatedBanks))
    }
}