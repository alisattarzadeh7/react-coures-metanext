import React, {useState} from "react"
import {Link, Outlet} from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {useRecoilState} from "recoil";
import {languageAtom} from "../atom/layoutAtoms.js";
const { Header, Content, Sider } = Layout;



const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});


const sidebarItems = [
    {
        key: `home`,
        label:<Link to="/">home</Link>  ,
    },
    {
        key: `about`,
        label:<Link to="/about">about</Link>  ,
    },
]


const AppLayout = ()=>{

    const [language,setLanguage] = useRecoilState(languageAtom)


    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (<>
        <Layout className="h-full " id="main-layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <span style={{color:'white'}}>{language}</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>setLanguage(language === 'fa' ? 'en' : 'fa')}>change language</button>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
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