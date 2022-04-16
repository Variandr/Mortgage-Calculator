import {AiFillCheckCircle, AiFillDelete} from "react-icons/ai"
import {useState} from "react"

const BankItemEdit = (props) => {
    let [bankData, setBankData] = useState({
        id: props.id,
        name: props.name,
        interestRate: props.interest_rate,
        maximumLoan: props.maximum_loan,
        minimumDownPayment: props.minimum_down_payment,
        loanTerm: props.loan_term
    })
    return <div className='item-box'>
        <div className='item-info'>
            <div><input type='text' value={bankData.name}
                        onChange={e => setBankData({...bankData, name: e.target.value})}/></div>
            <div><input type='text' value={bankData.interestRate}
                        onChange={e => setBankData({...bankData, interestRate: e.target.value})}/></div>
            <div><input type='text' value={bankData.maximumLoan}
                        onChange={e => setBankData({...bankData, maximumLoan: e.target.value})}/></div>
            <div><input type='text' value={bankData.minimumDownPayment}
                        onChange={e => setBankData({...bankData, minimumDownPayment: e.target.value})}/></div>
            <div><input type='text' value={bankData.loanTerm}
                        onChange={e => setBankData({...bankData, loanTerm: e.target.value})}/>
            </div>
        </div>
        <div className='item-buttons'>
            <AiFillCheckCircle onClick={() => {
                props.toggleEdit(false)
                props.updateBank(bankData)
            }}/>
            <AiFillDelete onClick={() => props.deleteBank(props.id)}/>
        </div>
    </div>
}
export default BankItemEdit