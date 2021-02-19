import React, { ReactElement, useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
// import { ClickParam } from 'antd/es/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';
import './styles.scss';

const { Header: AntdHeader } = Layout;
const { Item } = Menu;

const Header = (): ReactElement => {
  const [activeMenu, setActiveMenu] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/');
    setActiveMenu(path[1]);
  }, [location]);

  const onMenuItemClick = (e: MenuInfo) => {
    setActiveMenu(e.key as string);
  };

  return (
    <AntdHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">
        <FontAwesomeIcon icon={faDice} size="4x" transform={{ rotate: -45 }} color="red" />
      </div>

      <Menu theme="dark" mode="horizontal" onClick={onMenuItemClick} selectedKeys={[activeMenu]}>
        <Item key="home">
          <Link to="/">Home</Link>
        </Item>
        <Item key="library">
          <Link to="/library">Library</Link>
        </Item>
        <Item key="gallery">
          <Link to="/gallery">Gallery</Link>
        </Item>
      </Menu>
    </AntdHeader>
  );
};

export default Header;
