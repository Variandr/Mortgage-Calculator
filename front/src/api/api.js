import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:5000/api/`,
    withCredentials: true,
    headers: {
    }
})


export const CalculatorAPI = {
    getMortgagePayment(calcData) {
        console.log(calcData)
        return instance.post('calculate/', {calcData}).then(res => res.data)
    }
}