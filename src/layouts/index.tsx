import { user } from '../models';
import TabBar from '../components/tabBar';
import { Outlet, useNavigate } from 'umi';
import 'antd-mobile/dist/antd-mobile.css';
export default function Layout() {
  const navigate = useNavigate();
  const pathname = location.pathname;
  if (!user?.info?.name && pathname != '/login') return navigate("/login", { replace: true });
  return (
    <>
      <Outlet />
      {(pathname === '/' || pathname === '/setting') && <TabBar />}
    </>
  );
}
