import {connect} from "react-redux"
import BankItemBox from "./bankItem/bankItemBox"
import {Button} from "antd";
import {useEffect, useState} from "react"
import AddBankForm from "./addBankForm"
import {deleteBank, getBanks, setBank, updateBank} from "../../state/management-reducer"

const ManagementPage = (props) => {
    useEffect(() => {
        props.getBanks()
    }, [])
    let banksList = props.banks?.map(b => {
        return <BankItemBox key={b.id} {...b} deleteBank={props.deleteBank} updateBank={props.updateBank}/>
    })
    let [isFormHide, toggleForm] = useState(true)
    return <div>
        <b>{props.banks.length ? 'Banks:' : ''}</b>
        <div>{banksList}</div>
        <Button onClick={() => toggleForm(!isFormHide)}>Add Bank</Button>
        {!isFormHide && <AddBankForm toggleForm={toggleForm} setBank={props.setBank}/>}
    </div>
}
let mapStateToProps = (state) => ({
    banks: state.managementPage.banks
})
export default connect(mapStateToProps, {setBank, getBanks, deleteBank, updateBank})(ManagementPage)