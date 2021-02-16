import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';

const { Header: AntdHeader } = Layout;
const { Item } = Menu;

function Header(): ReactElement {
  return (
    <AntdHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Item key="1">nav 1</Item>
        <Item key="2">nav 2</Item>
        <Item key="3">nav 3</Item>
      </Menu>
    </AntdHeader>
  );
}

export default Header;
