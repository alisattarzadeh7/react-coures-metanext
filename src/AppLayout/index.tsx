import {Link, Outlet, useLocation} from "react-router-dom";
import {  Layout, Menu, theme } from 'antd';
import AppHeader from "./AppHeader";
const {  Content, Sider } = Layout;


const sidebarItems = [
    {
        key: `/`,
        label:<Link to="/">home</Link>  ,
    },
    {
        key: `/about`,
        label:<Link to="/about">about</Link>  ,
    },
]


const AppLayout = ()=>{

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const location = useLocation()


    console.log({path:location.pathname})

    return (<>
        <Layout className="h-full" id="main-layout">
            <AppHeader/>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[location.pathname]}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={sidebarItems}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </>)
}

export default AppLayout