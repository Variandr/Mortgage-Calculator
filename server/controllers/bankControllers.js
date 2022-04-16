const bankServices = require('../services/bankServices')

module.exports.AddBank = async (req, res) => {
    try {
        let bank = await bankServices.addBank(req.body)
        if (bank) {
            let banks = await bankServices.getBanks()
            return res.json(banks).status(200)
        } else return res.status(400)
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
}
module.exports.UpdateBank = async (req, res) => {
    try {
        let bank = await bankServices.updateBank(req.body)
        if (bank) {
            let banks = await bankServices.getBanks()
            return res.json(banks).status(200)
        } else return res.status(400)
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
}
module.exports.DeleteBank = async (req, res) => {
    try {
        let bank = await bankServices.deleteBank(req.params.bankId)
        if (bank) {
            let banks = await bankServices.getBanks()
            return res.json(banks).status(200)
        } else return res.status(400)
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
}

module.exports.GetBanks = async (req, res) => {
    try {
        let banks = await bankServices.getBanks()
        return res.json(banks).status(200)
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
}