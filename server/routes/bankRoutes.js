const express = require('express')
const router = express.Router()
const controller = require('../controllers/bankControllers')
const {check} = require('express-validator')

router.get('/', controller.GetBanks)
router.post('/add', [
    check('interestRate', 'Field cannot be empty').notEmpty().isNumeric(),
    check('loanTerm', 'Field cannot be empty').notEmpty().isNumeric(),
    check('maximumLoan', 'Field cannot be empty').notEmpty().isNumeric(),
    check('minimumDownPayment', 'Field cannot be empty').notEmpty().isNumeric(),
    check('name', 'Field cannot be empty').notEmpty()
], controller.AddBank)
router.patch('/update', [
    check('interestRate', 'Field cannot be empty').notEmpty().isNumeric(),
    check('loanTerm', 'Field cannot be empty').notEmpty().isNumeric(),
    check('maximumLoan', 'Field cannot be empty').notEmpty().isNumeric(),
    check('minimumDownPayment', 'Field cannot be empty').notEmpty().isNumeric(),
    check('name', 'Field cannot be empty').notEmpty()
], controller.UpdateBank)
router.delete('/delete/:bankId', controller.DeleteBank)
module.exports = router