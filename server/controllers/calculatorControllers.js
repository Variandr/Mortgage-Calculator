const calculatorService = require('../services/calculatorServices')
module.exports.Calculate = async (req, res) => {
    try {
        let {loan, payment, bank} = req.body
        let data = await calculatorService.calculate(loan, payment, bank)
        if (data) {
            return res.status(200).json(data)
        } else return res.status(200).json({message: 'Wrong input values'})
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
}