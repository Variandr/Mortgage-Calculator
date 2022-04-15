import CalculatorForm from "./calculatorForm/calculatorForm"
import './calculatorPage.css'
import {useSelector} from "react-redux"
import {getMonthlyPayment} from "../../state/selectors"

const CalculatorPage = () => {
    let monthlyPayment = useSelector(getMonthlyPayment)
    return <div>
        <b className='head'>Calculator</b>
        <CalculatorForm/>
        {monthlyPayment && <div><b>Monthly Mortgage Payment: </b>{monthlyPayment}</div>}
    </div>
}
export default CalculatorPage