import React from 'react';
import { Link, useDispatch } from 'umi';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon, List, WhiteSpace, WingBlank, Button, Flex } from '@ant-design/react-native';
import { Avatar } from 'react-native-paper';
const Item = List.Item;

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const handlePress = (e) => {
    dispatch({
      type: 'user/signOut',
    });
  }
  const images = {
    src: require('../assets/images/icon_walletaddress.png'),
  };
  return (
    <ScrollView style={{ backgroundColor: '#e5f4ff' }}>
      <Flex style={{ marginBottom: 10, height: 100, backgroundColor: '#fff' }} justify="between">
        <Flex style={{ marginLeft: 20, marginTop: 35 }} justify="start">
          <Avatar.Icon size={41} icon="account" style={{ backgroundColor: '#84DAAB' }} />
          <Text style={{ marginLeft: 5, fontWeight: '700', fontSize: 18 }}>RocKim</Text>
          <Icon name="edit" style={{ marginLeft: 5, fontSize: 18 }} color="#4086F5" />
        </Flex>
        <Flex style={{ width: 83, height: 27, backgroundColor: '#D4EBE2', marginTop: 35, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} justify="around">
          <Avatar.Icon size={14} icon="account" style={{ backgroundColor: '#489C71' }} />
          <Text style={{ fontWeight: '400', fontSize: 14, color: '#489C71' }}>未实名</Text>
        </Flex>
      </Flex>
      <List style={{ marginBottom: 70 }}>
        <Link to="/feedback" component={List.Item} arrow="horizontal" thumb={<Icon name="info-circle" />}>
          实名认证
        </Link>
        <Item extra="dfiljsklfjasdklj;askljf" arrow="empty" thumb={<Icon name="setting" />}>
          钱包地址
        </Item>
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
      {/* <Image source={images.src} /> */}
      <WingBlank>
        <Flex direction="column">
          <Button type="primary" onPress={handlePress} style={{ width: '90%' }}>
            退出登录
          </Button>
          <Text style={{ fontWeight:"500", fontSize: 12, color:"#9497A0", marginTop: 10 }}>版本号： 2.5.6</Text>
        </Flex>
      </WingBlank>
    </ScrollView>
  );
}
