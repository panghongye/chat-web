
import { Button } from 'antd-mobile';
import { user } from '@/models';

export default (function Setting(props: any) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70vh' }}>
      <Button
        style={{ width: 270 }}
        onClick={() => {
          user.logout();
        }}
      >
        登出
      </Button>
    </div>
  );
});
