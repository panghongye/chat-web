import React, { useState } from 'react';
import { Toast } from 'antd-mobile';
import css from './index.less';
import { Button } from 'antd';
import { axios } from '../../utils';
import { user } from '../../models';

export default function Login() {
  const [type, typeSet] = useState(true);
  const [name, nameSet] = useState('');
  const [password, passwordSet] = useState('');
  async function onClick() {
    if (!name || !password) return Toast.info('请输入账号和密码');
    try {
      const data: any = await axios(
        `/${type ? 'login' : 'register'}`,
        'post',
        { name, password },
        { loadingText: '请求中...' },
      );
      // 0成功 1失败
      if (data.code !== 0) return;
      if (type) {
        user.login(data.data);
      } else typeSet(true);
    } catch (error) {
      Toast.hide();
    }
  }
  return (
    <div className={css.login}>
      <div className={css.formContent}>
        <div className={css.c1}>
          <span
            onClick={() => typeSet(true)}
            style={{ color: type ? '#66b3ef' : 'rgba(180, 184, 185, 0.827451)' }}
          >
            登录
          </span>
          <span
            onClick={() => typeSet(false)}
            style={{
              color: !type ? '#66b3ef' : 'rgba(180, 184, 185, 0.827451)',
            }}
          >
            注册
          </span>
        </div>
        <div className={css.c2}>
          <input
            className={css.input}
            placeholder="用户名"
            onInput={e => nameSet(e.currentTarget.value)}
          />
          <input
            className={css.input}
            placeholder="密码"
            onInput={e => passwordSet(e.currentTarget.value)}
            type="password"
          />
        </div>
        <Button type="primary" size="large" style={{ margin: 30 }} onClick={onClick}>
          {type ? '登录' : '注册'}
        </Button>
      </div>
    </div>
  );
}
