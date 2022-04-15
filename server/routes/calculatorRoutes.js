const express = require('express')
const router = express.Router()
const controller = require('../controllers/calculatorControllers')
const {check} = require('express-validator')

router.post('/', [
    check('loan', 'Field can not be empty').notEmpty(),
    check('payment', 'Field can not be empty').notEmpty(),
    check('bank', 'Field can not be empty').notEmpty()
], controller.Calculate)
module.exports = router;