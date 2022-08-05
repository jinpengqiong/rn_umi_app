import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Grid, WhiteSpace, WingBlank, Icon, Flex } from '@ant-design/react-native';
import { useSelector, history } from 'umi';
import { Button, Avatar } from 'react-native-paper';


const data = [
  { name: '可售数量', value: '0.0' },
  { name: '卖单数量', value: '0.0' },
  { name: '交易中', value: '0.0' },
].map((_val, i) => ({
  text: _val.value + '_' + _val.name,
}));
const data2 = [
  { name: '我的挂单', icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', path: '/sales' },
  { name: '我的订单', icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', path: '/feedback' },
  { name: '钱包记录', icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', path: '/images' },
  { name: '收付款信息', icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', path: '/feedback' },
  { name: '帮助', icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', path: '/feedback' },
  { name: '客服', icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', path: '/feedback' },
].map((_val, i) => ({
  icon: _val.icon,
  text: _val.name,
  path: _val.path,
}));

export default function HomeScreen() {
  const handlePress = (el, index) => {
    history.push(el.path);
  }
  return (
    <>
      <ScrollView style={{ backgroundColor: '#F2F6F9' }}>
        <View>
          <WingBlank size="lg">
            <Flex style={{ height: 40, marginTop: 40, marginBottom: 10 }}>
              <Avatar.Icon size={30} icon="book" />
              <Flex direction="column">
                <Text style={{ marginLeft: 5, fontSize: 15 }}>Yu199603</Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>Yu199603</Text>
              </Flex>
            </Flex>
            <Card style={{ backgroundColor: '#33CCFF', borderRadius: 20, position: 'relative' }}>
              <Card.Header title="余额（GOP）" />
              <Card.Body style={{ height: 120 }}>
                <View style={{ height: 60 }}>
                  <Text style={{ marginLeft: 16, fontSize: 50 }}>0.0</Text>
                </View>
                <View style={{ height: 60, marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                  <Flex align="center" justify="between" style={{ height: 30 }}>
                    <Flex>
                      <Icon name="account-book" size="sm" color="#F5FCFF" />
                      <Text>钱包地址：</Text>
                      <Text style={{ color: '#F5FCFF' }}>bdja39dsadda242342342</Text>
                    </Flex>
                    <Text>
                      <Icon name="copy" size="sm" color="#F5FCFF" />
                    </Text>
                  </Flex>
                </View>
              </Card.Body>
            </Card>
            <View style={{ position: 'absolute', top: 120, backgroundColor: '#BBBBBB', height: 130, width: '100%', zIndex: -1, borderRadius: 20 }}>
              <Grid data={data} columnNum={3} itemStyle={{ height: 130, fontSize: 60 }} />
            </View>
            <View style={{ height: 130, clear: 'both' }}></View>
          </WingBlank>
        </View>
        <WingBlank size="lg">
          <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>
            <Flex justify="between" align="center">
              <Flex.Item style={{ paddingLeft: 10, paddingRight: 10 }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    history.push('/sales');
                  }}
                >
                  <Text style={{ backgroundColor: '#66FF66', height: 50, lineHeight: 50, textAlign: 'center' }}>购买</Text>
                </TouchableOpacity>
              </Flex.Item>
              <Flex.Item style={{ paddingLeft: 10, paddingRight: 10 }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    history.push('/sales');
                  }}
                >
                  <Text style={{ backgroundColor: '#66CCFF', height: 50, lineHeight: 50, textAlign: 'center' }}>出售</Text>
                </TouchableOpacity>
              </Flex.Item>
            </Flex>
          </View>
        </WingBlank>
        <WhiteSpace size="lg" />
        <View style={{ backgroundColor: '#fff' }}>
          <Grid data={data2} columnNum={3} hasLine={false} onPress={handlePress} />
        </View>
      </ScrollView>
    </>
  );
}