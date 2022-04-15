import './App.css'
import {Layout, Menu} from 'antd'
import {NavLink, Route, Routes} from "react-router-dom"
import {BsBank2, BsFillCalculatorFill} from "react-icons/bs"
import ManagementPage from "./content/management/managementPage"
import CalculatorPage from "./content/calculator/calculatorPage"

const {Header, Content, Footer} = Layout

let App = () => {
    return <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key='1' icon={<BsBank2/>}>
                        <NavLink to={'/management'}>Bank Management</NavLink>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<BsFillCalculatorFill/>}>
                        <NavLink to={'/calculator'}>Mortgage Calculator</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '50px 50px', minHeight: '80vh'}}>
                <Routes>
                    <Route path='management' element={<ManagementPage/>}/>
                    <Route path='calculator' element={<CalculatorPage/>}/>
                </Routes>
            </Content>
        <Footer style={{textAlign: 'center'}}>Created by Variandr</Footer>
    </Layout>
}

export default App;
