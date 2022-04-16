const pool = require("../db");

class CalculatorService {
    async calculate(loan, payment, bank) {
        let bankData = await pool.query(`SELECT * FROM banks WHERE id = $1`, [bank.value]).then(res => res.rows[0])
        if (bankData && loan <= bankData.maximum_loan && payment >= bankData.minimum_down_payment) {
            return Math.round((loan * (payment / 12) * Math.pow((1 + payment / 12), bankData.loan_term))
                / (Math.pow((1 + payment / 12), bankData.loan_term) - 1))
        }
    }
}

module.exports = new CalculatorService()