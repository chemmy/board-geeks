import React, { ReactElement, useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Link, useLocation } from 'react-router-dom';

import Logo from 'components/common/logo/logo';
import { ROUTES } from 'constants/routes';
import './styles.scss';

const { Header: AntdHeader } = Layout;
const { Item } = Menu;
const DEFAULT_ROUTE = 'home';

const Header = (): ReactElement => {
  const [activeMenu, setActiveMenu] = useState(DEFAULT_ROUTE);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/');
    const menu = path[1] || DEFAULT_ROUTE;
    setActiveMenu(menu);
  }, [location]);

  const onMenuItemClick = (e: MenuInfo) => {
    setActiveMenu(e.key as string);
  };

  return (
    <AntdHeader>
      <Logo />

      <Menu theme="dark" mode="horizontal" onClick={onMenuItemClick} selectedKeys={[activeMenu]}>
        <Item key={DEFAULT_ROUTE}>
          <Link to={ROUTES.HOME}>Home</Link>
        </Item>
        <Item key="library">
          <Link to={ROUTES.LIBRARY}>Library</Link>
        </Item>
        <Item key="gallery">
          <Link to={ROUTES.GALLERY}>Gallery</Link>
        </Item>
      </Menu>
    </AntdHeader>
  );
};

export default Header;
