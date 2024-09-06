import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  ProductOutlined,
} from '@ant-design/icons';
import {Uz, Eng, Ru} from "../../components/icons/flags/index"

import { Button, Layout, Menu, theme, Dropdown, Flex } from 'antd';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLanguage, getChangedLanguage, changeLanguage } from '../../utilis/lang';
const { Header, Sider, Content } = Layout;
export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const {token: { colorBgContainer, borderRadiusLG },} = theme.useToken();

  const {t, i18n} = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    changeLanguage(lang)
  }

  useEffect(()=>{
      i18n.changeLanguage(getLanguage())
  }, [])
  
  const items=[
    {
      label:<Button type='link' onClick={()=> changeLang('uz')}>uz</Button>,
      key:"1",
      icon:<Uz/>,
    },
    {
      label:<Button type='link' onClick={()=> changeLang('ru')}>ru</Button>,
      key:"2",
      icon:<Ru/>,
    },
    {
      label:<Button type='link' onClick={()=> changeLang('eng')}>eng</Button>,
      key:"3",
      icon:<Eng/>,
    }
  ]

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical">
            <div className="p-4 text-white text-2xl border-b mb-2">Dashboard</div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <HomeOutlined />,
                label: <NavLink to="/">{t('home')}</NavLink>,
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: <NavLink to="/users">{t('users')}</NavLink>,
              },
              {
                key: '3',
                icon: <ProductOutlined />,
                label: <NavLink to="/products">{t('products')}</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Flex justify='space-between' align='center' >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />

            <Dropdown  menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
              <Button style={{marginRight:"12px"}}>{getChangedLanguage()}</Button>
            </Dropdown>
            
            </Flex>

          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <footer className='bg-blue-500'><div className="container mx-auto text-center p-4 text-white">@2024 Powered by ANT design contributors</div></footer>
    </>
  );
};
