import React, { ReactElement } from 'react';
import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;

const Footer = (): ReactElement => {
  return <AntdFooter style={{ textAlign: 'center' }}>Board Geeks ©2021</AntdFooter>;
};

export default Footer;
