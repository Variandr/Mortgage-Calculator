import './bankItem.css'
import {useState} from "react"
import BankItem from "./bankItem";
import BankItemEdit from "./bankItemEdit";

const BankItemBox = (props) => {
    let [isEdit, toggleEdit] = useState(false)
    return isEdit ? <BankItemEdit {...props} toggleEdit={toggleEdit}/> : <BankItem {...props} toggleEdit={toggleEdit}/>
}
export default BankItemBox