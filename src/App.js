import './App.css'
import {Layout, Menu} from 'antd'
import {Navigate, NavLink, Route, Routes} from "react-router-dom"
import {BsBank2, BsFillCalculatorFill} from "react-icons/bs"
import ManagementPage from "./content/management/managementPage"
import CalculatorPage from "./content/calculator/calculatorPage"

const {Header, Content, Footer} = Layout

let App = () => {
    return <Layout className="layout">
        <Header>
            <Menu theme="dark" mode="horizontal"
                  defaultSelectedKeys={window.location.pathname === '/calculator' ? '2' : '1'}>
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
                <Route path="/" element={<Navigate to={"/management"}/>}/>
                <Route path='management' element={<ManagementPage/>}/>
                <Route path='calculator' element={<CalculatorPage/>}/>
                <Route path='*' element={<div className='center'><h1>404 Page not found</h1></div>}/>
            </Routes>
        </Content>
        <Footer style={{textAlign: 'center'}}>Created by Variandr</Footer>
    </Layout>
}

export default App;
