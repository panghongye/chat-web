import React from 'react';
import { MessageOutlined ,SettingOutlined} from '@ant-design/icons';
import css from './tabBar.less';
import { TabBar } from 'antd-mobile';
import { router_observer } from '@/utils';
const c1 = { fontSize: 44 };

const i1 = <MessageOutlined  style={c1} />;
const i2 = <SettingOutlined  style={c1} />;

export default router_observer(function _TabBar(props) {
  return (
    <div className={css.TabBar}>
      <TabBar barTintColor="white" unselectedTintColor="#949494" tintColor="#33A3F4">
        <TabBar.Item
          onPress={() => {
            location.replace('/');
          }}
          icon={i1}
          selectedIcon={i1}
          selected={props.location.pathname == '/'}
        />
        <TabBar.Item
          onPress={() => {
            location.replace('/setting');
          }}
          icon={i2}
          selectedIcon={i2}
          selected={props.location.pathname == '/setting'}
        />
      </TabBar>
    </div>
  );
});
