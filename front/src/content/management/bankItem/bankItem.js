import {AiFillDelete, AiFillEdit} from "react-icons/ai"

const BankItem = (props) => {
    return <div className='item-box'>
        <div className='item-info'>
            <div>{props.name}</div>
            <div>{props.interest_rate} %</div>
            <div>{props.maximum_loan} $</div>
            <div>{props.minimum_down_payment} $</div>
            <div>{props.loan_term}</div>
        </div>
        <div className='item-buttons'>
            <AiFillEdit onClick={() => props.toggleEdit(true)}/>
            <AiFillDelete onClick={() => props.deleteBank(props.id)}/>
        </div>
    </div>
}
export default BankItem