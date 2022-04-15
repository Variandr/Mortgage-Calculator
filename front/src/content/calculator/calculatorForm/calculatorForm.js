import {useDispatch, useSelector} from "react-redux"
import {getBanks} from "../../../state/selectors"
import Select from "react-select";
import {Button, Form, InputNumber} from "antd"
import {getMortgagePayment} from "../../../state/calculator-reducer"

const CalculatorForm = () => {
    let dispatch = useDispatch()
    let banks = useSelector(getBanks)
    let selectionBanks = banks.map(b => {
        return {value: b.id, label: b.name}
    })
    return <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20vw', marginTop: '5vw', width: '20vw'}}>
        <Form name="calculateForm" labelCol={{span: 10}} wrapperCol={{offset: 2, span: 16}}
              onFinish={data => dispatch(getMortgagePayment(data))}>
            <Form.Item label="Initial loan" name="loan"
                       rules={[{required: true, message: 'Please input initial loan!'}]}>
                <InputNumber style={{minWidth: '10vw'}}/>
            </Form.Item>
            <Form.Item label="Down Payment" name="payment"
                       rules={[{required: true, message: 'Please input down payment!'}]}>
                <InputNumber style={{minWidth: '10vw'}}/>
            </Form.Item>
            <Form.Item label="Bank" name="bank"
                       rules={[{required: true, message: 'Please select a bank!'}]}>
                <Select isSearchable={true} options={selectionBanks}/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 12, span: 16}}>
                <Button type="primary" htmlType="submit">Calculate</Button>
            </Form.Item>
        </Form>
    </div>
}
export default CalculatorForm