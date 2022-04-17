import axios from "axios";

const instance = axios.create({
    baseURL: `https://damp-ocean-10748.herokuapp.com/api/`,
    withCredentials: true,
    headers: {}
})

export const BankAPI = {
    getBanks() {
        return instance.get('banks').then(res => res.data)
    },
    addBank(bank) {
        return instance.post('banks/add', {...bank}).then(res => res.data)
    },
    updateBank(bank) {
        return instance.patch('banks/update', {...bank}).then(res => res.data)
    },
    deleteBank(bankId) {
        return instance.delete(`banks/delete/${bankId}`).then(res => res.data)
    }
}

export const CalculatorAPI = {
    getMortgagePayment(calcData) {
        return instance.post('calculate', {...calcData}).then(res => res.data)
    }
}