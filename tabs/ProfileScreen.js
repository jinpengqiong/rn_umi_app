import React from 'react';
import { Link, useDispatch } from 'umi';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Icon, List, WhiteSpace,WingBlank, Button } from '@ant-design/react-native';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const handlePress = (e) => {
    dispatch({
      type: 'user/signOut',
    });
  }
  return (
    <ScrollView style={{ backgroundColor: '#e5f4ff' }}>
      <List>
        <Link to="/feedback" component={List.Item} arrow="horizontal" thumb={<Icon name="info-circle" />}>
          实名认证
        </Link>
        <Link to="/settings" component={List.Item} arrow="horizontal" thumb={<Icon name="setting" />}>
          钱包地址
        </Link>
        <Link to="/settings" component={List.Item} arrow="horizontal" thumb={<Icon name="setting" />}>
          设置密码
        </Link>
        <Link to="/settings" component={List.Item} arrow="horizontal" thumb={<Icon name="setting" />}>
          设置支付密码
        </Link>
        <Link to="/settings" component={List.Item} arrow="horizontal" thumb={<Icon name="setting" />}>
          用户须知
        </Link>
      </List>
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WingBlank>
        <Button type="primary" onPress={handlePress}>
          退出登录
        </Button>
      </WingBlank>
    </ScrollView>
  );
}
