import {connect} from "react-redux"
import BankItemBox from "./bankItem/bankItemBox"
import {Button} from "antd";
import {useState} from "react"
import AddBankForm from "./addBankForm"
import {deleteBank, setBank, updateBank} from "../../state/management-reducer"
import {getBanks, getColumnNames} from "../../state/selectors"

const ManagementPage = (props) => {
    let banksList = props.banks?.map(b => {
        return <BankItemBox key={b.id} {...b} deleteBank={props.deleteBank} updateBank={props.updateBank}/>
    })
    let [isFormHide, toggleForm] = useState(true)
    let bankColumns = props.bankColumns.map((c, index) => {
        return <div key={c + index} style={{marginRight: '6.7vw'}}>{c}</div>
    })
    return <div>
        {props.banks.length && <div>
            <div style={{display: 'flex', fontWeight: '500', fontSize: '16px', marginLeft: '2vw'}}>{bankColumns}</div>
            <div>{banksList}</div>
        </div>
        }
        {!isFormHide ? <AddBankForm toggleForm={toggleForm} setBank={props.setBank}/>
            : <Button style={{marginLeft: '42vw', marginTop: '2vw'}} onClick={() => toggleForm(!isFormHide)}>Add
                Bank</Button>
        }
    </div>
}
let mapStateToProps = (state) => ({
    banks: getBanks(state),
    bankColumns: getColumnNames(state)
})
export default connect(mapStateToProps, {setBank, deleteBank, updateBank})(ManagementPage)