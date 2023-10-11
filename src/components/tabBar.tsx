import { MessageOutlined, SettingOutlined } from '@ant-design/icons';
import css from './tabBar.less';
import { TabBar } from 'antd-mobile';
import { router_observer } from '@/utils';
const c1 = { fontSize: 44 };
import { useNavigate } from 'umi';
const i1 = <MessageOutlined style={c1} />;
const i2 = <SettingOutlined style={c1} />;

export default router_observer(function _TabBar(props) {
  const navigate = useNavigate();
  return (
    <div className={css.TabBar}>
      <TabBar barTintColor="white" unselectedTintColor="#949494" tintColor="#33A3F4">
        <TabBar.Item
          onPress={() => {
            navigate("/", { replace: true });
          }}
          icon={i1}
          selectedIcon={i1}
          selected={location.pathname == '/'}
        />
        <TabBar.Item
          onPress={() => {
            navigate("/setting", { replace: true });
          }}
          icon={i2}
          selectedIcon={i2}
          selected={location.pathname == '/setting'}
        />
      </TabBar>
    </div>
  );
});
