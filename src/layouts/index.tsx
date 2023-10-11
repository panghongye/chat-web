import * as React from 'react'
import TabBar from '@/components/tabBar';
import { Link, Outlet } from 'umi';
import 'antd-mobile/dist/antd-mobile.css';
export default function Layout(props) {
  const pathname = location.pathname;
  return (
    <Outlet>
      {props.children}
      {(pathname === '/' || pathname === '/setting') && <TabBar />}
    </Outlet>
  );
}
