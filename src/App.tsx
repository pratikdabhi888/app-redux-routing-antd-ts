import * as React from 'react';
import './App2.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import UserList from "./component/User/ListUser/UserList"
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./component/Authentication/Login/Login";
import Register from "./component/Authentication/Registration/Registraion";
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        <Layout>
          <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%', borderRight: 0}}
              >
                <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                  <Menu.Item key="1">User</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
              <Breadcrumb style={{margin: '16px 0'}}>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >

                  <Route exact path="/" component={UserList}/>

              </Content>
            </Layout>
          </Layout>
        </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
