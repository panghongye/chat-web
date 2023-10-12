import { user } from '../models';
import TabBar from '../components/tabBar';
import { Outlet, useLocation,history } from 'umi';
import 'antd-mobile/dist/antd-mobile.css';
import { socket } from '../utils';
export default function Layout() {
  socket.init()
  const location = useLocation();
  const pathname = location.pathname;
  if (!user?.info?.name && pathname != '/login') return history.replace('/login');
  return (
    <>
      <Outlet />
      {(pathname === '/' || pathname === '/setting') && <TabBar />}
    </>
  );
}
