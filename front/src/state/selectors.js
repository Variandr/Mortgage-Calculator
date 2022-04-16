export const getBanks = state => {
    return state.managementPage.banks
}
export const getColumnNames = state => {
    return state.managementPage.bankColumns
}
export const getMonthlyPayment = state => {
    return state.calculatorPage.monthlyPayment
}
export const getErrorMessage = state => {
    return state.calculatorPage.message
}