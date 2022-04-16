import CalculatorForm from "./calculatorForm"
import './calculatorPage.css'
import {useSelector} from "react-redux"
import {getErrorMessage, getMonthlyPayment} from "../../state/selectors"

const CalculatorPage = () => {
    let monthlyPayment = useSelector(getMonthlyPayment)
    let message = useSelector(getErrorMessage)
    return <div>
        <b className='head'>Calculator</b>
        <CalculatorForm/>
        <div style={{textAlign: 'center'}}>
            {message || !monthlyPayment
                ? <div><b>{message}</b></div>
                : <div><b>Monthly Mortgage Payment: {monthlyPayment} $</b></div>}
        </div>
    </div>
}
export default CalculatorPage