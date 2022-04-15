import {connect} from "react-redux"
import BankItemBox from "./bankItem/bankItemBox"
import {Button} from "antd";
import {useState} from "react"
import AddBankForm from "./addBankForm"
import {deleteBank, setBank, updateBank} from "../../state/management-reducer"

const ManagementPage = (props) => {
    let banksList = props.banks?.map(b => {
        return <BankItemBox key={b.id} {...b} deleteBank={props.deleteBank} updateBank={props.updateBank}/>
    })
    let [isFormHide, toggleForm] = useState(true)
    return <div>
        <b>{props.banks.length ? 'Banks:' : ''}</b>
        <div>{banksList}</div>
        {!isFormHide ? <AddBankForm toggleForm={toggleForm} setBank={props.setBank}/>
            : <Button style={{marginLeft: '42vw', marginTop: '2vw'}} onClick={() => toggleForm(!isFormHide)}>Add Bank</Button>
        }
    </div>
}
let mapStateToProps = (state) => ({
    banks: state.managementPage.banks
})
export default connect(mapStateToProps, {setBank, deleteBank, updateBank})(ManagementPage)