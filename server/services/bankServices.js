const pool = require("../db")
const {v4: uuidv4} = require('uuid')

class BankService {
    async getBanks() {
        return await pool.query('SELECT * FROM banks').then(res => res.rows)
    }

    async addBank(bank) {
        let id = uuidv4()
        let isBankExist = await pool.query(`SELECT * FROM banks WHERE name = $1`, [bank.name])
        if (!isBankExist.rows[0]) {
            return await pool.query(`INSERT INTO banks (id, interest_rate, loan_term, maximum_loan, 
                    minimum_down_payment, name) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [
                id,
                bank.interestRate,
                bank.loanTerm,
                bank.maximumLoan,
                bank.minimumDownPayment,
                bank.name]).then(res => res.rows[0])
        } else return {message: 'This bank already exist!'}
    }

    async updateBank(bank) {
        return await pool.query(`UPDATE banks SET name = $1, interest_rate = $2, loan_term = $3, maximum_loan = $4, 
        minimum_down_payment = $5 WHERE id = $6 RETURNING *`, [
            bank.name,
            bank.interestRate,
            bank.loanTerm,
            bank.maximumLoan,
            bank.minimumDownPayment,
            bank.id]).then(res => res.rows[0])
    }

    async deleteBank(bankId) {
        return await pool.query(`DELETE FROM banks WHERE id = $1 RETURNING *`, [bankId]).then(res => res.rows[0])
    }
}

module.exports = new BankService()