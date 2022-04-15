import {AiFillDelete, AiFillEdit} from "react-icons/ai"

const BankItem = (props) => {
    return <div className='item-box'>
        <div className='item-info'>
            <div>{props.name}</div>
            <div>{props.interestRate}</div>
            <div>{props.maximumLoan}</div>
            <div>{props.minimumDownPayment}</div>
            <div>{props.loanTerm}</div>
        </div>
        <div className='item-buttons'>
            <AiFillEdit onClick={() => props.toggleEdit(true)}/>
            <AiFillDelete onClick={() => props.deleteBank(props.id)}/>
        </div>
    </div>
}
export default BankItem