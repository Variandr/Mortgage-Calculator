import {Button, Form, Input, InputNumber} from "antd";

const AddBankForm = ({toggleForm, setBank}) => {
    return <Form name="addBank" labelCol={{span: 8}} wrapperCol={{span: 4}}
                 onFinish={(data) => {
                     setBank(data)
                     toggleForm(true)
                 }} autoComplete="off">
        <Form.Item label="Bank Name" name="name"
                   rules={[{required: true, message: 'Please input name of the bank!'}]}>
            <Input/>
        </Form.Item>
        <Form.Item label="Interest Rate" name="interestRate"
                   rules={[{required: true, message: 'Please input interest rate!'}]}>
            <InputNumber min={1}/>
        </Form.Item>
        <Form.Item label="Maximum Loan" name="maximumLoan"
                   rules={[{required: true, message: 'Please input maximum loan!'}]}>
            <InputNumber min={100}/>
        </Form.Item>
        <Form.Item label="Minimum Down Payment" name="minimumDownPayment"
                   rules={[{required: true, message: 'Please input minimum down payment!'}]}>
            <InputNumber min={1}/>
        </Form.Item>
        <Form.Item label="Loan Term" name="loanTerm"
                   rules={[{required: true, message: 'Please input loan term!'}]}>
            <InputNumber min={1}/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button onClick={() => toggleForm(true)}>Cancel</Button>
        </Form.Item>
    </Form>
}
export default AddBankForm